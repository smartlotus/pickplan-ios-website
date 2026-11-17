(() => {
  'use strict';

  const STORAGE_KEY = 'pickplan_pwa_state_v2';
  const SNAPSHOTS_KEY = 'pickplan_pwa_snapshots_v2';
  const LANG_KEY = 'pickplan_app_lang';
  const THEME_KEY = 'pickplan_app_theme';

  const PROVIDER_PRESETS = {
    'DeepSeek': { url: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
    'Kimi (Moonshot)': { url: 'https://api.moonshot.cn/v1', model: 'moonshot-v1-8k' },
    'Tongyi Qwen': { url: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-turbo' },
    'GLM': { url: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4' },
    'SiliconFlow': { url: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-7B-Instruct' },
    'OpenAI': { url: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
    'Custom': { url: '', model: '' }
  };

  const I18N = {
    zh: {
      side_views: '工作台', nav_manual: '自己做 · 任务', nav_ai: 'AI 帮做 · 大白话', nav_vault: '本地数据金库',
      side_filters: '时间与状态分组', sec_all: '全部任务', sec_overdue: '已逾期', sec_today: '今天', sec_tomorrow: '明天', sec_later: '之后', sec_unscheduled: '无时间', sec_completed: '已完成',
      tag_all: '全部', tag_work: '工作', tag_life: '生活', tag_study: '学习', tag_idea: '灵感',
      btn_new_task: '+ 新建任务 (⌘N)', ai_title: '说大白话，我来整理成计划草稿',
      ai_subtitle: '已启用：离线中文/英文时间语义拆解引擎（也可在设置中接入 DeepSeek / Kimi / OpenAI）',
      samp_work: '工作示例', samp_life: '生活示例', samp_study: '学习示例', ai_parse_btn: '拆解草稿 ✦',
      v_telemetry: '本地存储与数据管理', v_live_todos: '实时任务数', v_completed: '已完成可清理', v_snaps: '本地快照数', v_ai_hist: 'AI 对话记录',
      act_clear_done: '清理已完成任务', act_dedupe: '去重与完整性校验', act_clear_chat: '清空 AI 对话', act_reset: '重置全部本地数据',
      v_io: '全量本地导入导出', v_io_desc: '与原生 Pickplan iOS 应用 100% 互通，同时无损兼容原 Android v1 JSON 导出文件。',
      v_include_key: '导出时包含 AI API Key（仅建议可信设备勾选）',
      btn_export_json: '导出完整备份 (.pickplan.json)', btn_export_md: '导出 Markdown 清单 (.md)', btn_import_json: '导入备份 (v2 或 Android v1) ↑',
      v_auto: '定时自动本地备份', pol_enable: '开启定时自动本地快照', pol_bg: '切后台/关闭前若有改动自动建快照',
      pol_interval: '自动备份周期', pol_max: '最多保留快照数', btn_backup_now: '立即创建本地快照 (⌘B)',
      v_timeline: '本地快照时间线（置顶快照不会被自动轮转清理）',
      ins_focus: '沉浸专注计时器', focus_idle: '选择一个任务开始专注', focus_start: '开始专注', focus_pause: '暂停', focus_reset: '重置',
      ins_detail: '选中任务概览', ins_empty: '点击任意任务可编辑、添加子任务或开启专注计时。', btn_edit: '编辑', btn_focus_this: '专注此项',
      mob_manual: '自己做', mob_ai: 'AI 帮做', mob_vault: '金库', undo: '撤销',
      ed_new: '新建任务', ed_edit: '编辑任务', ed_task_title: '任务标题（必填）', q_tonight: '今晚 20:00', q_tmr_am: '明早 09:00', q_tmr_pm: '明天 15:00', q_mon: '下周一 09:00',
      ed_reminder: '提醒时间', ed_deadline: '截止时间', ed_tag: '标签', ed_priority: '优先级', ed_notes: '备注 / 子任务（每行可作为一条子任务）',
      cancel: '取消', save: '保存', set_title: 'AI 引擎与接口设置',
      set_desc: '保留原版 Android 全部 OpenAI 兼容平台预设；Key 仅存本机。未填 Key 时也可直接使用离线大白话解析。',
      set_provider: '平台预设', set_model: '模型名称', set_test: '测试连接',
      imp_title: '确认导入备份文件', imp_strategy: '选择导入合并方式',
      imp_s1: '智能合并（同 ID 取较新版本，新任务直接加入）', imp_s2: '追加为新副本（保留现有全部任务不修改）', imp_s3: '安全覆盖（覆盖前自动为当前数据建立回滚快照）',
      imp_confirm: '确认导入', empty_tasks: '还没有任务。点击 ＋ 写下接下来要做的事，或让 AI 帮你拆解。'
    },
    en: {
      side_views: 'Workspace', nav_manual: 'Manual · Tasks', nav_ai: 'AI · Plain Words', nav_vault: 'Local Data Vault',
      side_filters: 'Smart Sections', sec_all: 'All Tasks', sec_overdue: 'Overdue', sec_today: 'Today', sec_tomorrow: 'Tomorrow', sec_later: 'Later', sec_unscheduled: 'No Time', sec_completed: 'Completed',
      tag_all: 'All', tag_work: 'Work', tag_life: 'Life', tag_study: 'Study', tag_idea: 'Idea',
      btn_new_task: '+ New Task (⌘N)', ai_title: 'Describe your plans in plain words',
      ai_subtitle: 'Built-in offline bilingual parser active (or add DeepSeek / Kimi / OpenAI key in Settings)',
      samp_work: 'Work sample', samp_life: 'Life sample', samp_study: 'Study sample', ai_parse_btn: 'Parse Drafts ✦',
      v_telemetry: 'Local Storage & Data Hygiene', v_live_todos: 'Live Tasks', v_completed: 'Completed', v_snaps: 'Local Snapshots', v_ai_hist: 'AI Chat Messages',
      act_clear_done: 'Clear Completed', act_dedupe: 'Deduplicate & Verify', act_clear_chat: 'Clear AI History', act_reset: 'Factory Reset',
      v_io: 'Local Import & Export', v_io_desc: '100% compatible with native Pickplan iOS and legacy Android v1 JSON arrays.',
      v_include_key: 'Include AI API Key in export (trusted devices only)',
      btn_export_json: 'Export Archive (.pickplan.json)', btn_export_md: 'Export Markdown (.md)', btn_import_json: 'Import Backup (v2 or Android v1) ↑',
      v_auto: 'Scheduled Local Auto-Backup', pol_enable: 'Enable scheduled local snapshots', pol_bg: 'Auto-snapshot on background if modified',
      pol_interval: 'Backup Interval', pol_max: 'Max Snapshots', btn_backup_now: 'Create Snapshot Now (⌘B)',
      v_timeline: 'Local Snapshot Timeline (pinned snapshots are exempt from auto-pruning)',
      ins_focus: 'Focus Timer', focus_idle: 'Select a task to focus', focus_start: 'Start', focus_pause: 'Pause', focus_reset: 'Reset',
      ins_detail: 'Task Inspector', ins_empty: 'Select any task to edit details or launch Focus Timer.', btn_edit: 'Edit', btn_focus_this: 'Focus',
      mob_manual: 'Manual', mob_ai: 'AI', mob_vault: 'Vault', undo: 'Undo',
      ed_new: 'New Task', ed_edit: 'Edit Task', ed_task_title: 'Task Title (required)', q_tonight: 'Tonight 20:00', q_tmr_am: 'Tomorrow 09:00', q_tmr_pm: 'Tomorrow 15:00', q_mon: 'Next Mon 09:00',
      ed_reminder: 'Reminder', ed_deadline: 'Deadline', ed_tag: 'Tag', ed_priority: 'Priority', ed_notes: 'Notes / Subtasks (one per line)',
      cancel: 'Cancel', save: 'Save', set_title: 'AI Engine Settings',
      set_desc: 'All Android OpenAI-compatible presets included. API key stays strictly local.',
      set_provider: 'Provider', set_model: 'Model Name', set_test: 'Test Connection',
      imp_title: 'Review Import Archive', imp_strategy: 'Import Strategy',
      imp_s1: 'Smart Merge (keep newer by updated_at)', imp_s2: 'Append Copy (keep all current tasks)', imp_s3: 'Safe Replace (auto-creates rollback snapshot first)',
      imp_confirm: 'Confirm Import', empty_tasks: 'No tasks yet. Tap + to create one or try AI Plain Words.'
    }
  };

  let lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh';
  const t = (k) => (I18N[lang] && I18N[lang][k]) || k;

  // IndexedDB persistence helper with localStorage fallback
  const DB_NAME = 'pickplan_liquid_db';
  const STORE_NAME = 'kv';
  function openDB() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('No IDB'));
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE_NAME)) {
          req.result.createObjectStore(STORE_NAME);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  async function idbGet(key) {
    try {
      const db = await openDB();
      return await new Promise((res, rej) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const r = tx.objectStore(STORE_NAME).get(key);
        r.onsuccess = () => res(r.result ?? null);
        r.onerror = () => rej(r.error);
      });
    } catch (_) {
      try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch { return null; }
    }
  }
  async function idbSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (_) {}
    try {
      const db = await openDB();
      await new Promise((res, rej) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const r = tx.objectStore(STORE_NAME).put(val, key);
        r.onsuccess = () => res();
        r.onerror = () => rej(r.error);
      });
    } catch (_) {}
  }

  function defaultState() {
    const now = new Date();
    const today3pm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0).toISOString();
    return {
      todos: [
        {
          id: 'seed-1',
          title: lang === 'en' ? 'Experience Pickplan Liquid Glass on iPhone / iPad' : '在 iPhone / iPad 体验 Pickplan 液态玻璃',
          notes: lang === 'en' ? 'Add to Home Screen from Safari\nTest Local Backup & Export' : '在 Safari 添加到主屏幕\n体验定时本地备份与导出',
          subtasks: [
            { id: 's1', title: lang === 'en' ? 'Add to Home Screen' : 'Safari 添加到主屏幕', isCompleted: false },
            { id: 's2', title: lang === 'en' ? 'Create first local snapshot' : '生成第一份本地备份快照', isCompleted: false }
          ],
          tag: 'work',
          priority: 'high',
          reminder_time: today3pm,
          deadline: null,
          created_at: now.toISOString(),
          updated_at: now.toISOString(),
          completed_at: null,
          isCompleted: false,
          focusMinutesLogged: 0
        }
      ],
      aiSettings: {
        providerName: 'DeepSeek',
        baseUrl: 'https://api.deepseek.com/v1',
        modelName: 'deepseek-chat',
        apiKey: ''
      },
      preferences: {
        languageCode: lang,
        backupPolicy: {
          isEnabled: true,
          intervalHours: 24,
          backupOnBackgroundAfterChanges: true,
          preferredHour: 22,
          preferredMinute: 0,
          maxSnapshots: 15,
          includeApiKey: false
        },
        hapticsEnabled: true,
        lastBackupAt: null,
        hasPendingChangesForBackup: true
      },
      chatHistory: []
    };
  }

  let state = defaultState();
  let snapshots = [];
  let activeView = 'manual';
  let sectionFilter = 'all';
  let tagFilter = 'all';
  let searchQuery = '';
  let selectedTodoId = null;
  let lastDeletedTodo = null;
  let toastTimer = null;
  let pendingImportRaw = null;
  let focusSeconds = 25 * 60;
  let focusRunning = false;
  let focusInterval = null;

  async function sha256Hex(str) {
    const buf = new TextEncoder().encode(str);
    if (window.crypto && crypto.subtle) {
      const hash = await crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('');
    }
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return `fallback-${Math.abs(h).toString(16)}`;
  }

  function formatDateShort(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function toLocalInputValue(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function classifyTodo(todo, now = new Date()) {
    if (todo.isCompleted) return 'completed';
    const primary = todo.reminder_time || todo.deadline;
    if (!primary) return 'unscheduled';
    const dt = new Date(primary);
    if (Number.isNaN(dt.getTime())) return 'unscheduled';
    if (dt < now) return 'overdue';
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tmrStart = new Date(todayStart); tmrStart.setDate(todayStart.getDate() + 1);
    const afterTmr = new Date(tmrStart); afterTmr.setDate(tmrStart.getDate() + 1);
    if (dt >= todayStart && dt < tmrStart) return 'today';
    if (dt >= tmrStart && dt < afterTmr) return 'tomorrow';
    return 'later';
  }

  function sortTodos(list) {
    return [...list].sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1;
      const ta = a.reminder_time || a.deadline;
      const tb = b.reminder_time || b.deadline;
      if (ta && tb) return new Date(ta) - new Date(tb);
      if (ta) return -1;
      if (tb) return 1;
      return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });
  }

  async function saveState(markDirty = true) {
    if (markDirty) state.preferences.hasPendingChangesForBackup = true;
    await idbSet(STORAGE_KEY, state);
    renderAll();
  }

  // Build PickPlanBackupEnvelope v2 compatible 1:1 with Swift PickPlanCore
  async function buildEnvelope(includeApiKey = false) {
    const payload = {
      todos: state.todos,
      aiSettings: {
        providerName: state.aiSettings.providerName,
        baseUrl: state.aiSettings.baseUrl,
        modelName: state.aiSettings.modelName,
        apiKey: includeApiKey ? state.aiSettings.apiKey : null
      },
      preferences: state.preferences,
      chatHistory: state.chatHistory
    };
    const checksum = await sha256Hex(JSON.stringify(payload));
    return {
      format: 'pickplan-backup',
      schemaVersion: 2,
      exportedAt: new Date().toISOString(),
      appVersion: '2.0.0-ios-liquid-pwa',
      deviceHint: /iPad/.test(navigator.userAgent) ? 'iPad Safari PWA' : /iPhone/.test(navigator.userAgent) ? 'iPhone Safari PWA' : 'Web Browser',
      checksum,
      payload
    };
  }

  async function createSnapshot(trigger = 'manual', note = '') {
    const envelope = await buildEnvelope(state.preferences.backupPolicy.includeApiKey);
    const jsonText = JSON.stringify(envelope, null, 2);
    const id = `snap-${Date.now()}`;
    const snap = {
      id,
      fileName: `PickPlan-${trigger}-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.pickplan.json`,
      createdAt: new Date().toISOString(),
      trigger,
      note,
      taskCount: state.todos.length,
      completedCount: state.todos.filter((x) => x.isCompleted).length,
      byteSize: new Blob([jsonText]).size,
      isPinned: trigger === 'safetyPreRestore',
      checksum: envelope.checksum,
      data: envelope
    };
    snapshots.unshift(snap);
    pruneSnapshots();
    state.preferences.lastBackupAt = snap.createdAt;
    state.preferences.hasPendingChangesForBackup = false;
    await idbSet(SNAPSHOTS_KEY, snapshots);
    await idbSet(STORAGE_KEY, state);
    renderAll();
    return snap;
  }

  function pruneSnapshots() {
    const max = Number(state.preferences.backupPolicy.maxSnapshots || 15);
    while (snapshots.length > max) {
      let removeIdx = -1;
      for (let i = snapshots.length - 1; i >= 0; i--) {
        if (!snapshots[i].isPinned) { removeIdx = i; break; }
      }
      if (removeIdx === -1) break;
      snapshots.splice(removeIdx, 1);
    }
  }

  async function evaluateScheduledBackup(isBackground = false) {
    const pol = state.preferences.backupPolicy;
    if (!pol.isEnabled) return null;
    if (isBackground && pol.backupOnBackgroundAfterChanges && state.preferences.hasPendingChangesForBackup) {
      return await createSnapshot('scheduled', 'Background sync');
    }
    const last = state.preferences.lastBackupAt ? new Date(state.preferences.lastBackupAt).getTime() : 0;
    const intervalMs = Number(pol.intervalHours || 24) * 3600 * 1000;
    if (Date.now() - last >= intervalMs && state.todos.length > 0) {
      return await createSnapshot('scheduled', 'Scheduled interval');
    }
    return null;
  }

  // Offline bilingual natural-language splitter (matches PickPlanCore PlainWordsParser)
  function normalizeChineseNumerals(str) {
    const map = { '零': '0', '一': '1', '二': '2', '两': '2', '三': '3', '四': '4', '五': '5', '六': '6', '七': '7', '八': '8', '九': '9' };
    return str
      .replace(/十二([点时])/g, '12$1')
      .replace(/十一([点时])/g, '11$1')
      .replace(/十([点时])/g, '10$1')
      .replace(/([零一二两三四五六七八九])([点时])/g, (_, n, u) => `${map[n]}${u}`);
  }

  function plainWordsParse(text, now = new Date()) {
    const clauses = text
      .split(/[\n;；。]+|[，,]\s*(?=(?:明|今|后|下|周|礼拜|上午|下午|晚上|买|写|交|开|打|发|整理|复习|提交|准备|回电|tomorrow|tonight|today|by |before |at |in |call|buy|write|submit|review|meet|\d))/i)
      .map((s) => s.replace(/^[，,、\s]+|[，,、\s]+$/g, '').trim())
      .filter(Boolean);

    const results = [];
    let inheritedDayOffset = null;

    for (const origRaw of clauses) {
      const raw = normalizeChineseNumerals(origRaw);
      let targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0, 0);
      let hasDate = false;
      const lower = raw.toLowerCase();

      if (/今晚|tonight/.test(lower)) { targetDate.setHours(20, 0, 0, 0); hasDate = true; inheritedDayOffset = 0; }
      else if (/明早|明天上午|tomorrow morning/.test(lower)) { targetDate.setDate(targetDate.getDate() + 1); targetDate.setHours(9, 0, 0, 0); hasDate = true; inheritedDayOffset = 1; }
      else if (/明天下午|tomorrow afternoon/.test(lower)) { targetDate.setDate(targetDate.getDate() + 1); targetDate.setHours(15, 0, 0, 0); hasDate = true; inheritedDayOffset = 1; }
      else if (/明天|tomorrow/.test(lower)) { targetDate.setDate(targetDate.getDate() + 1); hasDate = true; inheritedDayOffset = 1; }
      else if (/后天/.test(lower)) { targetDate.setDate(targetDate.getDate() + 2); hasDate = true; inheritedDayOffset = 2; }
      else if (/周五|friday/.test(lower)) {
        const diff = (5 - targetDate.getDay() + 7) % 7 || 7;
        targetDate.setDate(targetDate.getDate() + diff);
        targetDate.setHours(18, 0, 0, 0);
        hasDate = true;
        inheritedDayOffset = diff;
      } else if (/下周一|next monday/.test(lower)) {
        const diff = (1 - targetDate.getDay() + 7) % 7 || 7;
        targetDate.setDate(targetDate.getDate() + diff);
        targetDate.setHours(9, 0, 0, 0);
        hasDate = true;
        inheritedDayOffset = diff;
      } else if (/今天|today/.test(lower)) {
        hasDate = true;
        inheritedDayOffset = 0;
      }

      const timeMatch = raw.match(/(?:上午|下午|晚上|am|pm)?\s*(\d{1,2})[:点时](\d{1,2}|半)?\s*(am|pm)?/i);
      if (timeMatch) {
        let h = Number(timeMatch[1]);
        const m = timeMatch[2] === '半' ? 30 : Number(timeMatch[2] || 0);
        if ((/下午|晚上|pm/i.test(raw)) && h < 12) h += 12;
        if (!hasDate && inheritedDayOffset !== null) {
          targetDate.setDate(targetDate.getDate() + inheritedDayOffset);
        }
        targetDate.setHours(h % 24, m % 60, 0, 0);
        hasDate = true;
      }

      const isDeadline = /前|截止|before|by |due/i.test(raw);
      const cleanTitle = raw
        .replace(/(?:今天|今晚|明早|明天上午|明天下午|明天|后天|下周一|周五前|周五|上午|下午|晚上|提醒我|提醒|在|before|by friday|tomorrow|tonight|at \d+:\d+|\d{1,2}[:点时](?:\d{1,2}|半)?)/gi, ' ')
        .replace(/^[，,、\s]+|[，,、\s]+$/g, '')
        .replace(/\s+/g, ' ')
        .trim() || origRaw;

      results.push({
        id: `pw-${Date.now()}-${results.length}`,
        title: cleanTitle,
        notes: '',
        subtasks: [],
        tag: /会议|报告|客户|评审|回电|design|client|report|meet/i.test(origRaw) ? 'work' : (/买|菜|家|gym|buy|grocer/i.test(origRaw) ? 'life' : 'none'),
        priority: isDeadline ? 'high' : 'normal',
        reminder_time: !isDeadline && hasDate ? targetDate.toISOString() : null,
        deadline: isDeadline && hasDate ? targetDate.toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        completed_at: null,
        isCompleted: false,
        focusMinutesLogged: 0
      });
    }
    return results;
  }

  function showToast(msg, undoTodo = null) {
    const banner = document.getElementById('toast-banner');
    const txt = document.getElementById('toast-text');
    const undoBtn = document.getElementById('toast-undo-btn');
    if (!banner || !txt || !undoBtn) return;
    if (toastTimer) clearTimeout(toastTimer);
    txt.textContent = msg;
    lastDeletedTodo = undoTodo;
    undoBtn.hidden = !undoTodo;
    banner.hidden = false;
    toastTimer = setTimeout(() => { banner.hidden = true; lastDeletedTodo = null; }, 5500);
  }

  function downloadFile(filename, content, mime = 'application/json') {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function switchView(view) {
    activeView = view;
    ['manual', 'ai', 'vault'].forEach((v) => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.hidden = v !== view;
    });
    document.querySelectorAll('[data-view-target]').forEach((btn) => {
      const active = btn.dataset.viewTarget === view;
      btn.classList.toggle('is-active', active);
      if (btn.hasAttribute('aria-selected')) btn.setAttribute('aria-selected', String(active));
    });
    const heading = document.getElementById('view-heading');
    if (heading) {
      heading.textContent = view === 'ai' ? (lang === 'en' ? 'AI Plan Builder' : 'AI 帮做')
        : view === 'vault' ? (lang === 'en' ? 'Data Vault' : '本地数据金库')
        : 'Pickplan';
    }
  }

  function renderSections() {
    const container = document.getElementById('sections-container');
    if (!container) return;
    container.replaceChildren();

    const now = new Date();
    const counts = { all: state.todos.length, overdue: 0, today: 0, tomorrow: 0, later: 0, unscheduled: 0, completed: 0 };
    const buckets = { overdue: [], today: [], tomorrow: [], later: [], unscheduled: [], completed: [] };

    for (const todo of sortTodos(state.todos)) {
      const kind = classifyTodo(todo, now);
      counts[kind] += 1;
      if (sectionFilter !== 'all' && kind !== sectionFilter) continue;
      if (tagFilter !== 'all' && todo.tag !== tagFilter) continue;
      if (searchQuery && !(`${todo.title} ${todo.notes}`.toLowerCase().includes(searchQuery.toLowerCase()))) continue;
      buckets[kind].push(todo);
    }

    for (const k of Object.keys(counts)) {
      const el = document.getElementById(`cnt-${k}`);
      if (el) el.textContent = String(counts[k]);
    }
    document.getElementById('side-active-count').textContent = String(state.todos.filter((x) => !x.isCompleted).length);
    document.getElementById('header-progress-pill').textContent = `${counts.completed} / ${state.todos.length}`;

    const order = ['overdue', 'today', 'tomorrow', 'later', 'unscheduled', 'completed'];
    let totalShown = 0;
    for (const kind of order) {
      const list = buckets[kind];
      if (!list.length) continue;
      totalShown += list.length;

      const sec = document.createElement('div');
      sec.className = 'section-block';
      const h2 = document.createElement('h2');
      h2.textContent = `${t(`sec_${kind}`)} · ${list.length}`;
      const stack = document.createElement('div');
      stack.className = 'task-stack';

      for (const todo of list) {
        const card = document.createElement('div');
        card.className = 'todo-card glass-panel' + (todo.isCompleted ? ' is-done' : '') + (todo.id === selectedTodoId ? ' is-selected' : '');

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'todo-checkbox';
        cb.checked = Boolean(todo.isCompleted);
        cb.setAttribute('aria-label', todo.title);
        cb.addEventListener('change', () => {
          todo.isCompleted = cb.checked;
          todo.completed_at = cb.checked ? new Date().toISOString() : null;
          todo.updated_at = new Date().toISOString();
          saveState();
        });

        const body = document.createElement('div');
        body.className = 'todo-body';
        body.addEventListener('click', () => {
          selectedTodoId = todo.id;
          renderInspector();
          if (window.innerWidth < 1120) openEditorModal(todo);
          else renderSections();
        });

        const titleEl = document.createElement('div');
        titleEl.className = 'todo-title';
        titleEl.textContent = todo.title;
        body.appendChild(titleEl);

        const badges = document.createElement('div');
        badges.className = 'todo-badges';
        if (todo.reminder_time) {
          const b = document.createElement('span');
          b.className = 'todo-badge';
          b.textContent = `◷ ${formatDateShort(todo.reminder_time)}`;
          badges.appendChild(b);
        }
        if (todo.deadline) {
          const b = document.createElement('span');
          b.className = 'todo-badge is-deadline';
          b.textContent = `⚑ ${formatDateShort(todo.deadline)}`;
          badges.appendChild(b);
        }
        if (todo.tag && todo.tag !== 'none') {
          const b = document.createElement('span');
          b.className = 'todo-badge';
          b.textContent = t(`tag_${todo.tag}`);
          badges.appendChild(b);
        }
        if (todo.subtasks?.length) {
          const doneSub = todo.subtasks.filter((s) => s.isCompleted).length;
          const b = document.createElement('span');
          b.className = 'todo-badge';
          b.textContent = `${doneSub}/${todo.subtasks.length}`;
          badges.appendChild(b);
        }
        if (badges.childElementCount) body.appendChild(badges);

        const acts = document.createElement('div');
        acts.className = 'todo-actions';
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'todo-icon-act';
        editBtn.textContent = '✎';
        editBtn.title = t('btn_edit');
        editBtn.addEventListener('click', () => openEditorModal(todo));

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'todo-icon-act';
        delBtn.textContent = '✕';
        delBtn.title = lang === 'en' ? 'Delete' : '删除';
        delBtn.addEventListener('click', async () => {
          const idx = state.todos.findIndex((x) => x.id === todo.id);
          if (idx >= 0) {
            const [removed] = state.todos.splice(idx, 1);
            await saveState();
            showToast(lang === 'en' ? `Deleted "${removed.title}"` : `已删除「${removed.title}」`, removed);
          }
        });
        acts.append(editBtn, delBtn);

        card.append(cb, body, acts);
        stack.appendChild(card);
      }

      sec.append(h2, stack);
      container.appendChild(sec);
    }

    if (totalShown === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-card glass-panel';
      empty.textContent = t('empty_tasks');
      container.appendChild(empty);
    }
  }

  function renderInspector() {
    const todo = state.todos.find((x) => x.id === selectedTodoId);
    const emptyEl = document.getElementById('detail-empty');
    const cardEl = document.getElementById('detail-card');
    if (!todo) {
      emptyEl.hidden = false;
      cardEl.hidden = true;
      return;
    }
    emptyEl.hidden = true;
    cardEl.hidden = false;
    document.getElementById('detail-title').textContent = todo.title;
    document.getElementById('detail-notes').textContent = todo.notes || (lang === 'en' ? 'No notes' : '无备注');
    document.getElementById('detail-meta').textContent = [
      todo.reminder_time ? `◷ ${formatDateShort(todo.reminder_time)}` : '',
      todo.deadline ? `⚑ ${formatDateShort(todo.deadline)}` : ''
    ].filter(Boolean).join(' · ');
  }

  function renderAIStream() {
    const stream = document.getElementById('ai-chat-stream');
    if (!stream) return;
    stream.replaceChildren();
    for (const msg of state.chatHistory) {
      const wrap = document.createElement('div');
      wrap.className = `chat-msg glass-panel ${msg.isUser ? 'is-user' : 'is-bot'}`;
      const p = document.createElement('p');
      p.textContent = msg.text;
      wrap.appendChild(p);

      if (msg.parsedTodos?.length && !msg.isAdded) {
        for (const item of msg.parsedTodos) {
          const dc = document.createElement('div');
          dc.className = 'draft-card';
          const left = document.createElement('div');
          const strong = document.createElement('strong');
          strong.textContent = item.title;
          const small = document.createElement('div');
          small.className = 'snap-item-meta';
          small.textContent = [
            item.reminder_time ? `◷ ${formatDateShort(item.reminder_time)}` : '',
            item.deadline ? `⚑ ${formatDateShort(item.deadline)}` : ''
          ].filter(Boolean).join(' · ') || (lang === 'en' ? 'Unscheduled' : '无固定时间');
          left.append(strong, small);

          const addOneBtn = document.createElement('button');
          addOneBtn.type = 'button';
          addOneBtn.className = 'snap-mini-btn';
          addOneBtn.textContent = lang === 'en' ? '+ Add' : '+ 加入';
          addOneBtn.addEventListener('click', () => {
            state.todos.unshift(item);
            msg.parsedTodos = msg.parsedTodos.filter((x) => x.id !== item.id);
            if (!msg.parsedTodos.length) msg.isAdded = true;
            saveState();
          });
          dc.append(left, addOneBtn);
          wrap.appendChild(dc);
        }

        if (msg.parsedTodos.length > 1) {
          const allBtn = document.createElement('button');
          allBtn.type = 'button';
          allBtn.className = 'btn-solid';
          allBtn.style.marginBlockStart = '0.65rem';
          allBtn.textContent = lang === 'en' ? `Add All (${msg.parsedTodos.length})` : `全部加入计划 (${msg.parsedTodos.length})`;
          allBtn.addEventListener('click', () => {
            state.todos.unshift(...msg.parsedTodos);
            msg.isAdded = true;
            saveState();
          });
          wrap.appendChild(allBtn);
        }
      }
      stream.appendChild(wrap);
    }
  }

  function renderVault() {
    const liveBytes = new Blob([JSON.stringify(state)]).size;
    const snapsBytes = snapshots.reduce((acc, s) => acc + (s.byteSize || 0), 0);
    document.getElementById('vault-total-bytes').textContent = `${((liveBytes + snapsBytes) / 1024).toFixed(1)} KB`;
    document.getElementById('tele-todos').textContent = String(state.todos.length);
    document.getElementById('tele-completed').textContent = String(state.todos.filter((x) => x.isCompleted).length);
    document.getElementById('tele-snaps').textContent = String(snapshots.length);
    document.getElementById('tele-chats').textContent = String(state.chatHistory.length);
    document.getElementById('side-snap-count').textContent = String(snapshots.length);

    const pol = state.preferences.backupPolicy;
    document.getElementById('policy-enabled').checked = pol.isEnabled;
    document.getElementById('policy-bg').checked = pol.backupOnBackgroundAfterChanges;
    document.getElementById('policy-interval').value = String(pol.intervalHours);
    document.getElementById('policy-max').value = String(pol.maxSnapshots);
    document.getElementById('opt-include-apikey').checked = Boolean(pol.includeApiKey);
    document.getElementById('auto-next-pill').textContent = pol.isEnabled ? (lang === 'en' ? 'Active' : '已开启') : (lang === 'en' ? 'Paused' : '已暂停');
    document.getElementById('sidebar-autobackup-state').textContent = pol.isEnabled ? (lang === 'en' ? 'Auto-Backup ON' : '自动备份已开启') : (lang === 'en' ? 'Auto-Backup OFF' : '自动备份已关闭');
    document.getElementById('sidebar-last-backup').textContent = state.preferences.lastBackupAt ? formatDateShort(state.preferences.lastBackupAt) : (lang === 'en' ? 'No snapshot yet' : '等待首次快照');

    const listEl = document.getElementById('snapshots-list');
    listEl.replaceChildren();
    if (!snapshots.length) {
      const p = document.createElement('p');
      p.className = 'card-desc';
      p.textContent = lang === 'en' ? 'No local snapshots yet. Click "Create Snapshot Now" above.' : '暂无本地快照。点击上方「立即创建本地快照」或开启定时备份。';
      listEl.appendChild(p);
      return;
    }

    for (const snap of snapshots) {
      const row = document.createElement('div');
      row.className = 'snap-item';
      const info = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = `${snap.isPinned ? '★ ' : ''}${snap.fileName}`;
      const meta = document.createElement('div');
      meta.className = 'snap-item-meta';
      meta.textContent = `${formatDateShort(snap.createdAt)} · ${snap.taskCount} tasks · ${(snap.byteSize / 1024).toFixed(1)} KB · ${snap.trigger}`;
      info.append(title, meta);

      const btns = document.createElement('div');
      btns.className = 'snap-item-btns';

      const pinBtn = document.createElement('button');
      pinBtn.type = 'button';
      pinBtn.className = 'snap-mini-btn';
      pinBtn.textContent = snap.isPinned ? (lang === 'en' ? 'Unpin' : '取消置顶') : (lang === 'en' ? 'Pin' : '置顶保护');
      pinBtn.addEventListener('click', async () => {
        snap.isPinned = !snap.isPinned;
        await idbSet(SNAPSHOTS_KEY, snapshots);
        renderVault();
      });

      const dlBtn = document.createElement('button');
      dlBtn.type = 'button';
      dlBtn.className = 'snap-mini-btn';
      dlBtn.textContent = lang === 'en' ? 'Export' : '导出';
      dlBtn.addEventListener('click', () => downloadFile(snap.fileName, JSON.stringify(snap.data, null, 2)));

      const resBtn = document.createElement('button');
      resBtn.type = 'button';
      resBtn.className = 'snap-mini-btn';
      resBtn.textContent = lang === 'en' ? 'Restore' : '回滚恢复';
      resBtn.addEventListener('click', async () => {
        await createSnapshot('safetyPreRestore', `Before restoring ${snap.id}`);
        if (snap.data?.payload?.todos) {
          state.todos = snap.data.payload.todos;
          await saveState();
          showToast(lang === 'en' ? 'Restored from snapshot (safety snapshot saved).' : '已恢复快照（已自动留存回滚前安全点）');
        }
      });

      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'snap-mini-btn';
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', async () => {
        snapshots = snapshots.filter((x) => x.id !== snap.id);
        await idbSet(SNAPSHOTS_KEY, snapshots);
        renderVault();
      });

      btns.append(pinBtn, dlBtn, resBtn, delBtn);
      row.append(info, btns);
      listEl.appendChild(row);
    }
  }

  function renderAll() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.dataset.i18n;
      if (I18N[lang][k] !== undefined) el.textContent = I18N[lang][k];
    });
    document.getElementById('btn-lang').textContent = lang === 'en' ? 'EN' : '中';
    renderSections();
    renderInspector();
    renderAIStream();
    renderVault();
  }

  function openEditorModal(todo = null) {
    const dlg = document.getElementById('editor-dialog');
    document.getElementById('editor-title').textContent = todo ? t('ed_edit') : t('ed_new');
    document.getElementById('ed-id').value = todo ? todo.id : '';
    document.getElementById('ed-title').value = todo ? todo.title : '';
    document.getElementById('ed-reminder').value = todo ? toLocalInputValue(todo.reminder_time) : '';
    document.getElementById('ed-deadline').value = todo ? toLocalInputValue(todo.deadline) : '';
    document.getElementById('ed-tag').value = todo ? (todo.tag || 'none') : 'none';
    document.getElementById('ed-priority').value = todo ? (todo.priority || 'normal') : 'normal';
    document.getElementById('ed-notes').value = todo ? (todo.notes || '') : '';
    dlg.showModal();
  }

  // Event Wiring
  document.querySelectorAll('[data-view-target]').forEach((b) => b.addEventListener('click', () => switchView(b.dataset.viewTarget)));
  document.querySelectorAll('[data-section-filter]').forEach((b) => b.addEventListener('click', () => {
    sectionFilter = b.dataset.sectionFilter;
    document.querySelectorAll('[data-section-filter]').forEach((x) => x.classList.toggle('is-active', x === b));
    switchView('manual');
    renderSections();
  }));
  document.querySelectorAll('[data-tag-filter]').forEach((b) => b.addEventListener('click', () => {
    tagFilter = b.dataset.tagFilter;
    document.querySelectorAll('[data-tag-filter]').forEach((x) => x.classList.toggle('is-active', x === b));
    renderSections();
  }));
  document.getElementById('task-search')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderSections();
  });

  document.getElementById('editor-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('ed-title').value.trim();
    if (!title) return;
    const id = document.getElementById('ed-id').value;
    const notes = document.getElementById('ed-notes').value.trim();
    const remVal = document.getElementById('ed-reminder').value;
    const deadVal = document.getElementById('ed-deadline').value;
    const subtasks = notes ? notes.split('\n').map((s, i) => ({ id: `sub-${Date.now()}-${i}`, title: s.trim(), isCompleted: false })).filter((s) => s.title) : [];
    const nowIso = new Date().toISOString();

    if (id) {
      const target = state.todos.find((x) => x.id === id);
      if (target) {
        target.title = title;
        target.notes = notes;
        target.subtasks = subtasks;
        target.tag = document.getElementById('ed-tag').value;
        target.priority = document.getElementById('ed-priority').value;
        target.reminder_time = remVal ? new Date(remVal).toISOString() : null;
        target.deadline = deadVal ? new Date(deadVal).toISOString() : null;
        target.updated_at = nowIso;
      }
    } else {
      state.todos.unshift({
        id: `todo-${Date.now()}`,
        title,
        notes,
        subtasks,
        tag: document.getElementById('ed-tag').value,
        priority: document.getElementById('ed-priority').value,
        reminder_time: remVal ? new Date(remVal).toISOString() : null,
        deadline: deadVal ? new Date(deadVal).toISOString() : null,
        created_at: nowIso,
        updated_at: nowIso,
        completed_at: null,
        isCompleted: false,
        focusMinutesLogged: 0
      });
    }
    document.getElementById('editor-dialog').close();
    await saveState();
  });

  document.querySelectorAll('[data-quick]').forEach((btn) => btn.addEventListener('click', () => {
    const now = new Date();
    const q = btn.dataset.quick;
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (q === 'tonight') d.setHours(20, 0);
    else if (q === 'tomorrow_am') { d.setDate(d.getDate() + 1); d.setHours(9, 0); }
    else if (q === 'tomorrow_pm') { d.setDate(d.getDate() + 1); d.setHours(15, 0); }
    else if (q === 'next_mon') {
      const diff = (1 - d.getDay() + 7) % 7 || 7;
      d.setDate(d.getDate() + diff);
      d.setHours(9, 0);
    }
    document.getElementById('ed-reminder').value = toLocalInputValue(d.toISOString());
  }));

  // AI Composer (Online BYOK + Offline PlainWords Fallback)
  const SAMPLES_ZH = [
    '明天上午十点评审交互稿，下午三点给客户回电话，周五前交季度总结',
    '今晚买菜做晚饭，明天早上九点取快递',
    '今晚八点复习 SwiftUI Liquid Glass，周六交算法作业'
  ];
  const SAMPLES_EN = [
    'Review UI tomorrow morning, call client at 3 PM, submit report by Friday',
    'Buy groceries tonight, pick up package tomorrow at 9 AM',
    'Study SwiftUI Liquid Glass tonight 8 PM, finish lab by Friday'
  ];
  document.querySelectorAll('[data-ai-sample]').forEach((btn) => btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.aiSample);
    document.getElementById('ai-input').value = (lang === 'en' ? SAMPLES_EN : SAMPLES_ZH)[idx];
  }));

  document.getElementById('ai-compose-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputEl = document.getElementById('ai-input');
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = '';
    state.chatHistory.push({ id: `u-${Date.now()}`, text, isUser: true, createdAt: new Date().toISOString(), parsedTodos: [], isAdded: false });
    renderAIStream();

    let parsed = [];
    const { apiKey, baseUrl, modelName } = state.aiSettings;
    if (apiKey) {
      try {
        const cleanUrl = baseUrl.replace(/\s+/g, '').replace(/\/$/, '');
        const res = await fetch(`${cleanUrl}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: modelName,
            temperature: 0.1,
            messages: [
              { role: 'system', content: `You are a task parser. Return JSON only: {"tasks":[{"task":"string","reminder_time":"ISO8601 or null","deadline":"ISO8601 or null"}]}. Current time: ${new Date().toISOString()}` },
              { role: 'user', content: text }
            ]
          })
        });
        if (res.ok) {
          const data = await res.json();
          const raw = data?.choices?.[0]?.message?.content || '';
          const match = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
          const obj = JSON.parse((match ? match[1] : raw).trim());
          const arr = Array.isArray(obj.tasks) ? obj.tasks : Array.isArray(obj) ? obj : [];
          parsed = arr.filter((x) => x.task).map((x, i) => ({
            id: `ai-${Date.now()}-${i}`, title: String(x.task).trim(), notes: '', subtasks: [], tag: 'none', priority: x.deadline ? 'high' : 'normal',
            reminder_time: x.reminder_time || null, deadline: x.deadline || null, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
            completed_at: null, isCompleted: false, focusMinutesLogged: 0
          }));
        }
      } catch (_) {}
    }

    if (!parsed.length) parsed = plainWordsParse(text);
    state.chatHistory.push({
      id: `b-${Date.now()}`,
      text: parsed.length
        ? (lang === 'en' ? `Parsed ${parsed.length} draft(s). Confirm before adding:` : `已整理出 ${parsed.length} 个待办草稿，请确认后加入计划：`)
        : (lang === 'en' ? 'No tasks detected.' : '暂未识别出明确任务。'),
      isUser: false,
      createdAt: new Date().toISOString(),
      parsedTodos: parsed,
      isAdded: false
    });
    await saveState();
  });

  // Settings Modal
  document.getElementById('set-provider')?.addEventListener('change', (e) => {
    const p = PROVIDER_PRESETS[e.target.value];
    if (p && e.target.value !== 'Custom') {
      document.getElementById('set-url').value = p.url;
      document.getElementById('set-model').value = p.model;
    }
  });
  document.getElementById('btn-test-ai')?.addEventListener('click', async () => {
    const status = document.getElementById('set-test-status');
    const url = document.getElementById('set-url').value.trim().replace(/\/$/, '');
    const key = document.getElementById('set-key').value.trim();
    if (!url || !key) { status.textContent = lang === 'en' ? 'Fill URL & Key first' : '请填写 URL 与 Key'; return; }
    status.textContent = lang === 'en' ? 'Testing...' : '测试中…';
    try {
      const r = await fetch(`${url}/models`, { headers: { 'Authorization': `Bearer ${key}` } });
      status.textContent = r.ok ? 'OK (200)' : `HTTP ${r.status}`;
    } catch (err) {
      status.textContent = String(err.message || err);
    }
  });
  document.getElementById('settings-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    state.aiSettings = {
      providerName: document.getElementById('set-provider').value,
      baseUrl: document.getElementById('set-url').value.trim(),
      modelName: document.getElementById('set-model').value.trim(),
      apiKey: document.getElementById('set-key').value.trim()
    };
    document.getElementById('settings-dialog').close();
    await saveState();
    showToast(lang === 'en' ? 'AI settings saved locally.' : 'AI 设置已保存到本机');
  });

  // Export & Import Handlers
  document.getElementById('btn-export-json')?.addEventListener('click', async () => {
    const includeKey = document.getElementById('opt-include-apikey').checked;
    const env = await buildEnvelope(includeKey);
    downloadFile(`PickPlan-Backup-${new Date().toISOString().slice(0, 10)}.pickplan.json`, JSON.stringify(env, null, 2));
    showToast(lang === 'en' ? 'Exported .pickplan.json backup' : '已导出 .pickplan.json 完整备份');
  });

  document.getElementById('btn-export-md')?.addEventListener('click', () => {
    const lines = ['# Pickplan Export', `> ${new Date().toLocaleString()}`, ''];
    for (const todo of sortTodos(state.todos)) {
      const box = todo.isCompleted ? '[x]' : '[ ]';
      const meta = [todo.reminder_time ? `◷ ${formatDateShort(todo.reminder_time)}` : '', todo.deadline ? `⚑ ${formatDateShort(todo.deadline)}` : ''].filter(Boolean).join(' · ');
      lines.push(`- ${box} **${todo.title}**${meta ? ` (${meta})` : ''}`);
    }
    downloadFile(`PickPlan-${new Date().toISOString().slice(0, 10)}.md`, lines.join('\n'), 'text/markdown');
  });

  document.getElementById('file-import-input')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      let incoming = [];
      let formatDesc = 'Pickplan v2 Archive';
      if (Array.isArray(parsed)) {
        incoming = parsed;
        formatDesc = 'Android Pickplan v1 Array';
      } else if (parsed?.format === 'pickplan-backup' && Array.isArray(parsed?.payload?.todos)) {
        incoming = parsed.payload.todos;
      } else if (Array.isArray(parsed?.todos)) {
        incoming = parsed.todos;
        formatDesc = 'Pickplan Legacy Wrapper';
      } else {
        throw new Error('Unrecognized JSON format');
      }
      pendingImportRaw = { parsed, incoming };
      document.getElementById('import-summary-box').textContent =
        `${formatDesc} · ${incoming.length} ${lang === 'en' ? 'tasks detected' : '个任务'}`;
      document.getElementById('import-dialog').showModal();
    } catch (err) {
      showToast(lang === 'en' ? `Import error: ${err.message}` : `导入解析失败：${err.message}`);
    } finally {
      e.target.value = '';
    }
  });

  document.getElementById('btn-confirm-import')?.addEventListener('click', async () => {
    if (!pendingImportRaw) return;
    const strategy = document.querySelector('input[name="import-strategy"]:checked')?.value || 'smartMerge';
    const { incoming, parsed } = pendingImportRaw;

    if (strategy === 'replaceAll') {
      await createSnapshot('safetyPreRestore', 'Before replaceAll import');
      state.todos = incoming.map((x) => ({
        notes: '', subtasks: [], tag: 'none', priority: 'normal', focusMinutesLogged: 0,
        created_at: x.created_at || new Date().toISOString(), updated_at: x.updated_at || new Date().toISOString(), ...x
      }));
    } else if (strategy === 'appendCopy') {
      const stamped = incoming.map((x, idx) => ({
        notes: '', subtasks: [], tag: 'none', priority: 'normal', focusMinutesLogged: 0, ...x,
        id: `imp-${Date.now()}-${idx}`
      }));
      state.todos.unshift(...stamped);
    } else {
      const byId = new Map(state.todos.map((x) => [x.id, x]));
      for (const item of incoming) {
        const norm = {
          notes: '', subtasks: [], tag: 'none', priority: 'normal', focusMinutesLogged: 0,
          created_at: item.created_at || new Date().toISOString(), updated_at: item.updated_at || new Date().toISOString(), ...item
        };
        const existing = byId.get(norm.id);
        if (!existing || new Date(norm.updated_at) > new Date(existing.updated_at || 0)) {
          byId.set(norm.id, norm);
        }
      }
      state.todos = Array.from(byId.values());
    }

    if (parsed?.payload?.aiSettings && !state.aiSettings.apiKey) {
      state.aiSettings = { ...state.aiSettings, ...parsed.payload.aiSettings, apiKey: parsed.payload.aiSettings.apiKey || state.aiSettings.apiKey };
    }
    document.getElementById('import-dialog').close();
    pendingImportRaw = null;
    await saveState();
    showToast(lang === 'en' ? `Imported ${incoming.length} tasks.` : `成功导入 ${incoming.length} 个任务`);
  });

  // Policy & Hygiene Actions
  ['policy-enabled', 'policy-bg', 'policy-interval', 'policy-max', 'opt-include-apikey'].forEach((id) => {
    document.getElementById(id)?.addEventListener('change', async () => {
      state.preferences.backupPolicy.isEnabled = document.getElementById('policy-enabled').checked;
      state.preferences.backupPolicy.backupOnBackgroundAfterChanges = document.getElementById('policy-bg').checked;
      state.preferences.backupPolicy.intervalHours = Number(document.getElementById('policy-interval').value);
      state.preferences.backupPolicy.maxSnapshots = Number(document.getElementById('policy-max').value);
      state.preferences.backupPolicy.includeApiKey = document.getElementById('opt-include-apikey').checked;
      await saveState(false);
    });
  });

  const triggerManualBackup = async () => {
    const snap = await createSnapshot('manual', 'Manual snapshot');
    showToast(lang === 'en' ? `Saved ${snap.fileName}` : `已生成本地快照 ${snap.fileName}`);
  };
  document.getElementById('btn-backup-now')?.addEventListener('click', triggerManualBackup);
  document.getElementById('sidebar-backup-now')?.addEventListener('click', triggerManualBackup);

  document.getElementById('btn-clear-completed')?.addEventListener('click', async () => {
    const before = state.todos.length;
    state.todos = state.todos.filter((x) => !x.isCompleted);
    await saveState();
    showToast(lang === 'en' ? `Removed ${before - state.todos.length} completed tasks.` : `已清理 ${before - state.todos.length} 项已完成任务`);
  });

  document.getElementById('btn-dedupe')?.addEventListener('click', async () => {
    const seen = new Set();
    const before = state.todos.length;
    state.todos = state.todos.filter((item) => {
      const key = `${item.title.trim().toLowerCase()}|${item.reminder_time || ''}|${item.deadline || ''}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    await saveState();
    showToast(lang === 'en' ? `Verified integrity; merged ${before - state.todos.length} duplicates.` : `完整性校验通过，已去重 ${before - state.todos.length} 条`);
  });

  document.getElementById('btn-clear-chat')?.addEventListener('click', async () => {
    state.chatHistory = [];
    await saveState();
  });

  document.getElementById('btn-factory-reset')?.addEventListener('click', async () => {
    if (!window.confirm(lang === 'en' ? 'Reset all local tasks & snapshots? (Cannot undo)' : '确认清空全部本地待办与快照？此操作不可恢复。')) return;
    state = defaultState();
    state.todos = [];
    snapshots = [];
    await idbSet(SNAPSHOTS_KEY, snapshots);
    await saveState(false);
  });

  // Undo & Inspector & Focus Timer
  document.getElementById('toast-undo-btn')?.addEventListener('click', async () => {
    if (!lastDeletedTodo) return;
    state.todos.unshift(lastDeletedTodo);
    lastDeletedTodo = null;
    document.getElementById('toast-banner').hidden = true;
    await saveState();
  });

  document.getElementById('detail-edit-btn')?.addEventListener('click', () => {
    const todo = state.todos.find((x) => x.id === selectedTodoId);
    if (todo) openEditorModal(todo);
  });
  document.getElementById('detail-focus-btn')?.addEventListener('click', () => {
    const todo = state.todos.find((x) => x.id === selectedTodoId);
    if (todo) document.getElementById('focus-task-title').textContent = todo.title;
  });

  const updateFocusUI = () => {
    const m = Math.floor(focusSeconds / 60);
    const s = focusSeconds % 60;
    document.getElementById('focus-timer-text').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    const frac = 1 - focusSeconds / (25 * 60);
    document.getElementById('focus-arc').style.strokeDashoffset = String(326.7 * (1 - frac));
  };
  document.getElementById('btn-focus-toggle')?.addEventListener('click', () => {
    focusRunning = !focusRunning;
    document.getElementById('btn-focus-toggle').textContent = focusRunning ? t('focus_pause') : t('focus_start');
    if (focusRunning) {
      focusInterval = setInterval(() => {
        if (focusSeconds > 0) { focusSeconds -= 1; updateFocusUI(); }
        else { clearInterval(focusInterval); focusRunning = false; }
      }, 1000);
    } else {
      clearInterval(focusInterval);
    }
  });
  document.getElementById('btn-focus-reset')?.addEventListener('click', () => {
    clearInterval(focusInterval);
    focusRunning = false;
    focusSeconds = 25 * 60;
    document.getElementById('btn-focus-toggle').textContent = t('focus_start');
    updateFocusUI();
  });

  // Test Notifications
  document.getElementById('btn-test-notif')?.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      showToast(lang === 'en' ? 'Add to Home Screen on iOS 16.4+ for notifications.' : 'iPhone/iPad 请先通过 Safari「添加到主屏幕」以开启 Web 通知');
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      new Notification('Pickplan', { body: lang === 'en' ? 'Notifications are ready.' : '通知权限正常，随时为您提醒计划。' });
      showToast(lang === 'en' ? 'Test notification sent!' : '测试通知已发送');
    } else {
      showToast(lang === 'en' ? 'Notification permission denied.' : '请先在系统设置允许通知');
    }
  });

  // Theme & Language & Keyboard Shortcuts
  document.getElementById('btn-theme')?.addEventListener('click', () => {
    const cur = document.querySelector('meta[name="color-scheme"]')?.getAttribute('content') === 'light' ? 'light' : 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', next);
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
    };
    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  });
  document.getElementById('btn-lang')?.addEventListener('click', async () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem(LANG_KEY, lang);
    state.preferences.languageCode = lang;
    await saveState(false);
  });

  document.addEventListener('keydown', (e) => {
    if (!(e.metaKey || e.ctrlKey)) return;
    if (e.key.toLowerCase() === 'n') { e.preventDefault(); openEditorModal(); }
    else if (e.key.toLowerCase() === 'f') { e.preventDefault(); switchView('manual'); document.getElementById('task-search')?.focus(); }
    else if (e.key.toLowerCase() === 'b') { e.preventDefault(); triggerManualBackup(); }
    else if (e.key.toLowerCase() === 'e') { e.preventDefault(); document.getElementById('btn-export-json')?.click(); }
  });

  // Dialog command polyfill + outside click close
  document.querySelectorAll('dialog').forEach((dlg) => {
    dlg.addEventListener('close', () => { dlg.returnValue = ''; });
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      let out = false;
      dlg.addEventListener('pointerdown', (e) => {
        const r = dlg.getBoundingClientRect();
        out = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      });
      dlg.addEventListener('pointerup', (e) => {
        const r = dlg.getBoundingClientRect();
        const outUp = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
        if (out && outUp) dlg.close();
        out = false;
      });
    }
  });
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button[command][commandfor]');
      if (!btn) return;
      const target = document.getElementById(btn.getAttribute('commandfor'));
      const cmd = btn.getAttribute('command');
      if (cmd === 'show-modal' && target?.showModal) {
        if (target.id === 'editor-dialog' && !btn.dataset.keepEdit) openEditorModal();
        else if (target.id === 'settings-dialog') {
          document.getElementById('set-provider').value = state.aiSettings.providerName || 'DeepSeek';
          document.getElementById('set-url').value = state.aiSettings.baseUrl || '';
          document.getElementById('set-model').value = state.aiSettings.modelName || '';
          document.getElementById('set-key').value = state.aiSettings.apiKey || '';
          target.showModal();
        } else target.showModal();
      } else if (cmd === 'close' && target?.close) target.close();
    });
  } else {
    document.getElementById('btn-new-task-top')?.addEventListener('click', () => {
      document.getElementById('ed-id').value = '';
      document.getElementById('ed-title').value = '';
    });
    document.querySelector('[commandfor="settings-dialog"]')?.addEventListener('click', () => {
      document.getElementById('set-provider').value = state.aiSettings.providerName || 'DeepSeek';
      document.getElementById('set-url').value = state.aiSettings.baseUrl || '';
      document.getElementById('set-model').value = state.aiSettings.modelName || '';
      document.getElementById('set-key').value = state.aiSettings.apiKey || '';
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') evaluateScheduledBackup(true);
  });

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  // Boot
  (async () => {
    const loadedState = await idbGet(STORAGE_KEY);
    if (loadedState && Array.isArray(loadedState.todos)) state = loadedState;
    const loadedSnaps = await idbGet(SNAPSHOTS_KEY);
    if (Array.isArray(loadedSnaps)) snapshots = loadedSnaps;
    if (location.hash === '#vault') switchView('vault');
    renderAll();
    await evaluateScheduledBackup(false);
  })();
})();
