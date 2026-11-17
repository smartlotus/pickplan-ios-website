import math
import struct
import wave
from pathlib import Path

SAMPLE_RATE = 48000
DURATION = 36.0
NUM_SAMPLES = int(SAMPLE_RATE * DURATION)
OUT_PATH = Path(__file__).parent / "tmp" / "soundtrack.wav"
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)


def clamp(v: float, lo: float = -1.0, hi: float = 1.0) -> float:
    return lo if v < lo else (hi if v > hi else v)


def envelope(t: float, start: float, attack: float, hold: float, release: float) -> float:
    if t < start:
        return 0.0
    dt = t - start
    if dt < attack:
        return dt / max(attack, 1e-6)
    dt -= attack
    if dt < hold:
        return 1.0
    dt -= hold
    if dt < release:
        return 1.0 - (dt / max(release, 1e-6))
    return 0.0


def soft_bell(t: float, onset: float, freq: float, dur: float, amp: float) -> float:
    if t < onset or t > onset + dur:
        return 0.0
    dt = t - onset
    atk = min(1.0, dt / 0.014)
    dec = math.exp(-dt * (3.6 / max(dur, 0.25)))
    # Glass harmonic partials (fundamental + soft octave + airy 3rd partial)
    sig = (
        0.72 * math.sin(2 * math.pi * freq * dt)
        + 0.20 * math.sin(2 * math.pi * freq * 2.0 * dt) * math.exp(-dt * 2.4)
        + 0.08 * math.sin(2 * math.pi * freq * 3.005 * dt) * math.exp(-dt * 5.0)
    )
    return sig * atk * dec * amp


def soft_click(t: float, onset: float, pitch: float = 920.0, amp: float = 0.085) -> float:
    if t < onset or t > onset + 0.055:
        return 0.0
    dt = t - onset
    return math.sin(2 * math.pi * pitch * dt * (1.0 - dt * 4.0)) * math.exp(-dt * 95.0) * amp


# Warm minimalist progression (Cmin9 -> Abmaj7 -> Eb6/9 -> Bbadd9)
CHORDS = [
    (0.0, 6.2, [130.81, 196.00, 233.08, 293.66, 392.00]),   # Editorial intro: open fifths + 9th
    (6.0, 7.2, [130.81, 196.00, 246.94, 311.13, 392.00]),   # Act 2: Liquid glass refraction
    (13.0, 7.2, [103.83, 155.56, 207.65, 246.94, 311.13]),  # Act 3: Plain words -> structured tasks
    (20.0, 6.2, [155.56, 233.08, 293.66, 349.23, 466.16]),  # Act 4: iPhone + iPad harmony
    (26.0, 6.2, [116.54, 174.61, 233.08, 293.66, 349.23]),  # Act 5: Data Vault & Auto-backup
    (31.8, 4.4, [130.81, 196.00, 261.63, 392.00, 523.25]),  # Act 6: Clean resolution
]

# Delicate glass chimes synced with visual story beats
CHIMES = [
    # Act 1
    (0.45, 523.25, 1.8, 0.065),
    (1.85, 659.25, 1.8, 0.055),
    (3.25, 783.99, 2.0, 0.060),
    (5.55, 392.00, 1.5, 0.055),
    # Act 2
    (6.20, 523.25, 1.7, 0.065),
    (7.90, 587.33, 1.4, 0.050),
    (9.40, 783.99, 1.5, 0.060),
    (11.10, 659.25, 1.4, 0.050),
    # Act 3
    (13.20, 415.30, 1.6, 0.060),
    (15.20, 622.25, 1.4, 0.055),
    (16.60, 783.99, 1.4, 0.055),
    (17.90, 932.33, 1.6, 0.060),
    (19.00, 1046.50, 1.8, 0.065),
    # Act 4
    (20.20, 622.25, 1.8, 0.060),
    (22.10, 783.99, 1.6, 0.055),
    (24.00, 932.33, 1.8, 0.055),
    # Act 5
    (26.20, 466.16, 1.8, 0.060),
    (28.00, 587.33, 1.6, 0.055),
    (29.80, 698.46, 1.7, 0.060),
    # Act 6
    (32.10, 523.25, 2.8, 0.070),
    (33.10, 783.99, 2.6, 0.060),
    (34.10, 1046.50, 2.4, 0.055),
]

# Soft tactile clicks matching UI checkmarks, pill morphs, snapshot triggers
CLICKS = [
    (6.15, 760.0, 0.07),
    (8.15, 1080.0, 0.09),
    (9.75, 1240.0, 0.08),
    (11.35, 920.0, 0.07),
    (16.45, 980.0, 0.07),
    (17.65, 1100.0, 0.07),
    (18.85, 1320.0, 0.09),
    (22.60, 880.0, 0.07),
    (28.30, 1040.0, 0.08),
    (30.20, 1280.0, 0.08),
]

print(f"Synthesizing {DURATION}s stereo 48kHz soundtrack to {OUT_PATH} ...")
frames = bytearray()

for i in range(NUM_SAMPLES):
    t = i / SAMPLE_RATE
    # Global fade in/out
    master_env = 1.0
    if t < 0.8:
        master_env *= t / 0.8
    if t > DURATION - 1.8:
        master_env *= max(0.0, (DURATION - t) / 1.8)

    left = 0.0
    right = 0.0

    # Warm pad chords with slight stereo detune
    for start, dur, freqs in CHORDS:
        if start - 0.1 <= t <= start + dur + 0.1:
            e = envelope(t, start, 1.2, max(0.1, dur - 2.6), 1.4)
            if e > 0.0:
                for idx, f in enumerate(freqs):
                    pan = -0.35 + (idx / max(1, len(freqs) - 1)) * 0.70
                    phase_l = 2 * math.pi * f * t + idx * 0.4
                    phase_r = 2 * math.pi * (f * 1.0018) * t + idx * 0.9
                    # Subtle harmonic warmth
                    w_l = 0.85 * math.sin(phase_l) + 0.15 * math.sin(phase_l * 2.0)
                    w_r = 0.85 * math.sin(phase_r) + 0.15 * math.sin(phase_r * 2.0)
                    gain = (0.042 if idx == 0 else 0.026) * e
                    left += w_l * gain * (1.0 - max(0.0, pan) * 0.4)
                    right += w_r * gain * (1.0 + min(0.0, pan) * 0.4)

    # Glass chimes with ping-pong stereo balance
    for idx, (onset, freq, dur, amp) in enumerate(CHIMES):
        val = soft_bell(t, onset, freq, dur, amp)
        if val != 0.0:
            pan = -0.30 if idx % 2 == 0 else 0.30
            left += val * (0.75 - pan * 0.35)
            right += val * (0.75 + pan * 0.35)

    # Tactile UI clicks
    for onset, pitch, amp in CLICKS:
        c = soft_click(t, onset, pitch, amp)
        if c != 0.0:
            left += c
            right += c

    # Soft sub-bass pulse on act transitions
    for beat_t in [6.0, 13.0, 20.0, 26.0, 32.0]:
        if beat_t <= t <= beat_t + 0.9:
            dt = t - beat_t
            pulse = math.sin(2 * math.pi * 65.41 * dt) * math.exp(-dt * 4.5) * 0.12
            left += pulse
            right += pulse

    l_sample = int(clamp(left * master_env * 0.88) * 32767)
    r_sample = int(clamp(right * master_env * 0.88) * 32767)
    frames.extend(struct.pack("<hh", l_sample, r_sample))

with wave.open(str(OUT_PATH), "wb") as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(SAMPLE_RATE)
    wf.writeframes(frames)

print("Audio soundtrack generated successfully:", OUT_PATH.stat().st_size, "bytes")
