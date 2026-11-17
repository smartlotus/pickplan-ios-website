import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ffmpegPath from 'ffmpeg-static';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FPS = 60;
const DURATION = 36;
const TOTAL_FRAMES = FPS * DURATION;

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const STAGE_URL = pathToFileURL(path.join(__dirname, 'stage.html')).href;
const AUDIO_WAV = path.join(__dirname, 'tmp', 'soundtrack.wav');
const OUT_MP4 = path.join(__dirname, '..', 'site', 'assets', 'pickplan-ios-intro.mp4');
const OUT_POSTER = path.join(__dirname, '..', 'site', 'assets', 'video-poster.jpg');
const ROOT_COPY_MP4 = '/Users/zhuyouqian/Desktop/pickapps/pickplan-ios-intro.mp4';

if (!fs.existsSync(CHROME_PATH)) {
  throw new Error(`Google Chrome not found at ${CHROME_PATH}`);
}
if (!fs.existsSync(AUDIO_WAV)) {
  throw new Error(`Soundtrack WAV missing at ${AUDIO_WAV}; run generate_audio.py first`);
}

fs.mkdirSync(path.dirname(OUT_MP4), { recursive: true });

console.log(`Starting deterministic 1920x1080@${FPS}fps render (${TOTAL_FRAMES} frames)...`);

const browser = await chromium.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars']
});

const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1
});

await page.goto(STAGE_URL, { waitUntil: 'networkidle' });

// Save a crisp poster frame at t = 8.4s (Liquid Glass iPhone macro)
await page.evaluate(() => window.renderAtTime(8.4));
await page.screenshot({ path: OUT_POSTER, type: 'jpeg', quality: 92 });

const ffmpegArgs = [
  '-y',
  '-f', 'image2pipe',
  '-vcodec', 'mjpeg',
  '-framerate', String(FPS),
  '-i', 'pipe:0',
  '-i', AUDIO_WAV,
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '20',
  '-pix_fmt', 'yuv420p',
  '-r', String(FPS),
  '-c:a', 'aac',
  '-b:a', '160k',
  '-shortest',
  '-movflags', '+faststart',
  OUT_MP4
];

const ff = spawn(ffmpegPath, ffmpegArgs, { stdio: ['pipe', 'inherit', 'inherit'] });

const ffExit = new Promise((resolve, reject) => {
  ff.on('exit', (code) => {
    if (code === 0) resolve();
    else reject(new Error(`ffmpeg exited with code ${code}`));
  });
  ff.on('error', reject);
});

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const t = frame / FPS;
  await page.evaluate((timeSec) => window.renderAtTime(timeSec), t);
  const buf = await page.screenshot({ type: 'jpeg', quality: 93 });
  if (!ff.stdin.write(buf)) {
    await new Promise((r) => ff.stdin.once('drain', r));
  }
  if (frame % 180 === 0) {
    console.log(`Rendered frame ${frame}/${TOTAL_FRAMES} (${Math.round((frame / TOTAL_FRAMES) * 100)}%)`);
  }
}

ff.stdin.end();
await ffExit;
await browser.close();

fs.copyFileSync(OUT_MP4, ROOT_COPY_MP4);
const sizeBytes = fs.statSync(OUT_MP4).size;
console.log(`Video complete: ${OUT_MP4} (${(sizeBytes / (1024 * 1024)).toFixed(2)} MB)`);
