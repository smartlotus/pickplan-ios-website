(() => {
  'use strict';

  const I18N = {
    zh: {
      skip: '跳到正文',
      nav_film: '影片',
      nav_features: '液态玻璃',
      nav_vault: '数据金库',
      nav_install: '免费装机',
      theme_label_dark: '曜黑',
      theme_label_light: '暖纸',
      nav_launch: '打开 Web App ↗',
      hero_eyebrow: 'ANDROID EVOLUTION · iOS 26 LIQUID GLASS',
      hero_title: '做计划，<br>说<span class="plain-word">大白话<svg viewBox="0 0 340 22" aria-hidden="true"><path d="M4 15 Q140 -4 336 9 M40 21 Q150 8 288 15"/></svg></span>。<br>如今凝成液态玻璃。',
      hero_desc: '从原版 Android 黑白极简待办进化而来，专为 iPhone 与 iPad 重塑原生 Liquid Glass 触感动效；新增全量本地导入导出、定时自动快照与数据金库——无需 $99 开发者费用，立刻上手。',
      hero_cta_app: '在 Safari 直接安装运行 ↗',
      hero_cta_sideload: 'iPhone / iPad 免签侧载 ↓',
      hero_cta_arch: '查看 Android → iOS 架构解析',
      metric1_k: '$0',
      metric1_v: '开发者费用',
      metric2_k: 'SHA256',
      metric2_v: '本地定时快照校验',
      metric3_k: 'v1 + v2',
      metric3_v: 'Android 数据无损互通',
      dev_iphone: 'iPhone 单手胶囊',
      dev_ipad: 'iPad 三栏分屏',
      demo_today: '☀ 今天 · TODAY',
      demo_ai_head: '✦ 说大白话拆成计划',
      demo_ai_apply: '全部加入计划 +',
      demo_ai_applied: '已加入待办 ✓',
      demo_vault_head: '⛁ 本地数据金库',
      demo_auto_status: '定时自动备份',
      demo_snap_count: '本地快照数',
      demo_snap_now: '立即生成快照',
      mode_manual: '自己做',
      mode_ai: 'AI 帮做',
      mode_vault: '金库',
      stage_caption: '可交互液态玻璃舞台 · 在上方点击勾选、新增或切换 iPhone / iPad 视图',
      film_title: '36 秒看见，<br>光影与计划的流动。',
      film_sub: '从暖纸手写初稿到曜黑液态玻璃、大白话多任务拆解、iPad 三栏分屏与本地数据金库。',
      ch1: '01 初心',
      ch2: '02 液态玻璃',
      ch3: '03 大白话',
      ch4: '04 iPhone/iPad',
      ch5: '05 数据金库',
      vid_dl: '下载 MP4 ↓',
      bento_title: '保留极简灵魂，<br>重塑每一处触感细节。',
      bento_sub: '不只是 UI 移植，而是针对 iOS 26 液态玻璃与单手/分屏操作习惯的彻底进化。',
      f1_t: 'iOS 26 GlassEffectContainer 形变胶囊',
      f1_p: '底部控制栏在自己做、AI 帮做与金库间流态融合；删除待办弹出 6 秒悬浮玻璃撤销条，触感引擎与物理弹簧同步响应。',
      f2_t: '离线 + BYOK 大白话双引擎',
      f2_p: '支持 DeepSeek / Kimi / Qwen / GLM / SiliconFlow / OpenAI；无网无 Key 时自动启用内置中文/英文时间词典拆解多任务草稿。',
      f3_t: 'iPad 三栏与键盘快捷键',
      f3_p: 'Split View 左侧智能分组、中间任务流、右侧详情与专注番茄钟；全面支持 ⌘N / ⌘F / ⌘B 与 Stage Manager。',
      f4_t: '子任务、标签、优先级与专注钟',
      f4_p: '兼容 Android 六大时间分组（逾期/今天/明天/之后/无时间/已完成），支持子任务清单与 25 分钟沉浸专注计时。',
      f5_t: '全量本地导入导出与定时自动备份',
      f5_p: '内置周期备份调度器（每小时/6h/每日/每周 + 切后台增量快照），支持快照置顶保护、存储占用分析与三模式安全导入。',
      vault_title: '你的待办与备份，<br>只留在你的设备里。',
      vault_p: '不设服务器、不搞会员云同步，也不受 7 天免费侧载证书过期威胁。开启「定时自动本地备份」后，每次变化都会以标准 JSON 信封落盘到系统「文件 App」或本地金库。',
      v_li1: '✓ 无损导入原版 Android Pickplan v1 JSON 数组',
      v_li2: '✓ 覆盖导入前自动生成 .safetyPreRestore 安全回滚快照',
      v_li3: '✓ 导出可读 Markdown 与可选脱敏（隐藏 API Key）的 .pickplan.json',
      vault_schema_btn: '预览 .pickplan.json v2 格式',
      vault_open_btn: '在 Web App 试用数据金库 ↗',
      install_title: '不用花 $99，<br>三种方式在 iPhone / iPad 用起来。',
      install_sub: '无 App Store 上架费用、无付费权限依赖，数据格式在 Web App 与原生 App 之间 100% 通用。',
      inst_1: '① Safari 添加到主屏幕（免电脑）',
      inst_2: '② SideStore / LiveContainer 无线侧载',
      inst_3: '③ Xcode 个人免费 Apple ID 编译',
      pwa_h: '即刻安装独立 Liquid Glass Web App',
      pwa_p: '在 iPhone 或 iPad 的 Safari 浏览器中打开下方地址，点击「分享 → 添加到主屏幕」。支持离线 Service Worker、全面屏状态栏、本地 IndexedDB 自动快照与定时备份。',
      pwa_go: '立即前往 /app.html ↗',
      side_h: 'SideStore / LiveContainer 无线免签 7 天重签',
      side_p: '运行仓库内打包脚本或使用 macOS GitHub Actions 生成 PickPlan-Unsigned.ipa，导入 SideStore（搭配 StosVPN 在手机本地续签）或 LiveContainer（突破 3 应用上限）。',
      xcode_h: '个人免费 Apple ID 直装真机 & 本地测试',
      xcode_p: '打开 PickPlan.xcodeproj，将 Signing Team 设为免费 Personal Team 并修改 Bundle ID；亦可直接在命令行运行 Swift 6 Package 与完整核心单元测试。',
      footer_slogan: '做计划，说大白话 · 液态玻璃版',
      arch_t: 'Pickplan Android → iOS/iPadOS 移植架构对照',
      arch_intro: '在深入分析原仓库 main 与 wip/monorepo-migration 分支后，iOS 版保留全部核心能力并完成以下全面进化：',
      arch_1: '<strong>视觉与动效：</strong>从 Flutter 黑白描边升级为 SwiftUI 26 GlassEffectContainer 与物理弹簧曲线，支持 iOS Reduce Motion 与触感反馈。',
      arch_2: '<strong>双端适配：</strong>iPhone 采用底部形变胶囊导航，iPad 采用三栏 NavigationSplitView + 键盘快捷键 + Stage Manager 多尺寸适配。',
      arch_3: '<strong>离线大白话：</strong>在保留 DeepSeek / Kimi / Qwen / GLM / SiliconFlow / OpenAI 预设的同时，内置离线中英时间语义拆解器。',
      arch_4: '<strong>数据主权：</strong>SharedPreferences 升级为 PickPlanBackupEnvelope v2（SHA256 校验）、定时自动快照、Files 共享与三策略安全导入。',
      dialog_ok: '明白了',
      schema_t: '.pickplan.json v2 跨端备份规范',
      schema_p: 'iOS 原生端与 Safari Web App 共用完全一致的 JSON 信封与校验机制，且向后兼容导入原 Android Pickplan v1 数组。',
      dialog_close: '关闭',
      copied: '已复制',
      copy_fail: '复制失败'
    },
    en: {
      skip: 'Skip to content',
      nav_film: 'Film',
      nav_features: 'Liquid Glass',
      nav_vault: 'Data Vault',
      nav_install: 'Zero-Cost Install',
      theme_label_dark: 'Obsidian',
      theme_label_light: 'Paper',
      nav_launch: 'Open Web App ↗',
      hero_eyebrow: 'ANDROID EVOLUTION · iOS 26 LIQUID GLASS',
      hero_title: 'Your plans.<br>In <span class="plain-word">plain words<svg viewBox="0 0 340 22" aria-hidden="true"><path d="M4 15 Q140 -4 336 9 M40 21 Q150 8 288 15"/></svg></span>.<br>Refracted in glass.',
      hero_desc: 'Evolved from the minimalist monochrome Android planner into native iOS 26 Liquid Glass for iPhone & iPad—with local import/export, scheduled auto-backups, and zero $99 Apple developer fees.',
      hero_cta_app: 'Install via Safari Web App ↗',
      hero_cta_sideload: 'Free Sideload Guide ↓',
      hero_cta_arch: 'Android → iOS Architecture',
      metric1_k: '$0',
      metric1_v: 'Developer Fee',
      metric2_k: 'SHA256',
      metric2_v: 'Verified Local Snapshots',
      metric3_k: 'v1 + v2',
      metric3_v: 'Android Lossless Import',
      dev_iphone: 'iPhone Compact',
      dev_ipad: 'iPad 3-Column',
      demo_today: '☀ TODAY',
      demo_ai_head: '✦ Plain Words → Drafts',
      demo_ai_apply: 'Add All to Plan +',
      demo_ai_applied: 'Added to Plan ✓',
      demo_vault_head: '⛁ Local Data Vault',
      demo_auto_status: 'Scheduled Backup',
      demo_snap_count: 'Snapshots',
      demo_snap_now: 'Create Snapshot Now',
      mode_manual: 'Manual',
      mode_ai: 'AI Draft',
      mode_vault: 'Vault',
      stage_caption: 'Interactive Liquid Glass stage · Check off tasks, add items, or switch iPhone / iPad',
      film_title: '36 seconds of<br>glass, light & clarity.',
      film_sub: 'From warm editorial paper to obsidian Liquid Glass, plain-words splitting, iPad 3-column workflows, and local backups.',
      ch1: '01 Intro',
      ch2: '02 Liquid Glass',
      ch3: '03 Plain Words',
      ch4: '04 iPhone/iPad',
      ch5: '05 Data Vault',
      vid_dl: 'Download MP4 ↓',
      bento_title: 'Minimalist soul.<br>Tactile glass craft.',
      bento_sub: 'Not a bare port—rebuilt for iOS 26 refraction, physics springs, and iPadOS multitasking.',
      f1_t: 'iOS 26 GlassEffectContainer Morphing Dock',
      f1_p: 'Fluid capsule bar uniting Manual, AI, Vault, and morphing + action; 6-second floating glass Undo toast synced with Apple haptics.',
      f2_t: 'Offline + BYOK Plain Words Engine',
      f2_p: 'Supports DeepSeek, Kimi, Qwen, GLM, SiliconFlow, and OpenAI—plus an offline bilingual natural-language splitter when offline.',
      f3_t: 'iPad 3-Column Split View & Shortcuts',
      f3_p: 'Sidebar smart sections, task stream, and Focus Timer inspector with full ⌘N / ⌘F / ⌘B shortcuts and Stage Manager support.',
      f4_t: 'Subtasks, Tags, Priority & Focus Mode',
      f4_p: 'Preserves all 6 smart time sections while adding subtasks, priority pills, and a calm 25-minute focus timer.',
      f5_t: 'Local Import/Export & Scheduled Auto-Backup',
      f5_p: 'Configurable hourly/daily/weekly + background-on-change snapshots, pinned snapshot protection, storage breakdown, and safe restore.',
      vault_title: 'Your plans & backups<br>stay strictly on-device.',
      vault_p: 'No servers, no accounts, and no fear of 7-day sideload expiry. Scheduled snapshots write standard checksummed JSON envelopes right to your iPhone/iPad Files app or vault.',
      v_li1: '✓ Lossless import of original Android Pickplan v1 JSON arrays',
      v_li2: '✓ Auto-creates a .safetyPreRestore snapshot before replace imports',
      v_li3: '✓ Export readable Markdown or redacted .pickplan.json (hide API key)',
      vault_schema_btn: 'Inspect .pickplan.json v2',
      vault_open_btn: 'Try Data Vault in Web App ↗',
      install_title: 'Zero $99 fee.<br>Three ways onto iPhone & iPad.',
      install_sub: 'Zero paid Apple entitlements—and 100% shared backup format between the native Swift app and the Safari PWA.',
      inst_1: '① Safari Add to Home Screen (No Mac)',
      inst_2: '② SideStore / LiveContainer Sideload',
      inst_3: '③ Xcode Free Personal Team',
      pwa_h: 'Install Standalone Liquid Glass Web App',
      pwa_p: 'Open the URL below in Safari on iPhone or iPad and tap Share → Add to Home Screen. Includes offline Service Worker and IndexedDB scheduled auto-backups.',
      pwa_go: 'Launch /app.html Now ↗',
      side_h: 'SideStore / LiveContainer Wireless Renewal',
      side_p: 'Build PickPlan-Unsigned.ipa locally or via GitHub Actions and install with SideStore (on-device 7-day Wi-Fi refresh) or LiveContainer.',
      xcode_h: 'Free Personal Apple ID Build & Swift 6 Tests',
      xcode_p: 'Open PickPlan.xcodeproj, pick your free Personal Team, and deploy directly to iPhone/iPad—or run `swift test` in terminal.',
      footer_slogan: 'Plan in plain words · Liquid Glass Edition',
      arch_t: 'Pickplan Android → iOS/iPadOS Architecture',
      arch_intro: 'Built from deep inspection of both main and wip/monorepo-migration branches in smartlotus/pickplan:',
      arch_1: '<strong>Visuals & Motion:</strong> Upgraded to SwiftUI 26 GlassEffectContainer, physics springs, haptics, and Reduce Motion parity.',
      arch_2: '<strong>iPhone & iPad:</strong> Compact morphing dock on iPhone; 3-column NavigationSplitView + keyboard shortcuts on iPad.',
      arch_3: '<strong>Plain Words:</strong> Retains 7 BYOK presets plus an offline bilingual natural-language splitter.',
      arch_4: '<strong>Local Vault:</strong> SHA256-verified v2 backups, scheduled rotation, Files app sharing, and safe rollback.',
      dialog_ok: 'Got it',
      schema_t: '.pickplan.json v2 Backup Specification',
      schema_p: 'Shared across native iOS Swift and Safari PWA, with backward compatibility for Android v1 JSON arrays.',
      dialog_close: 'Close',
      copied: 'Copied',
      copy_fail: 'Copy failed'
    }
  };

  let currentLang = localStorage.getItem('pickplan_site_lang') === 'en' ? 'en' : 'zh';
  let snapshotCount = 2;
  let aiApplied = false;
  let demoTasks = [
    { id: '1', zh: '早上买新鲜蔬果', en: 'Buy fresh groceries', metaZh: '提醒 09:00', metaEn: 'Reminder 09:00', done: true, deadline: false },
    { id: '2', zh: '评审 iOS 液态玻璃动效', en: 'Review iOS Liquid Glass motion', metaZh: '提醒 15:00', metaEn: 'Reminder 15:00', done: false, deadline: false },
    { id: '3', zh: '周五前提交季度设计总结', en: 'Submit quarterly summary', metaZh: '截止 周五 18:00', metaEn: 'Deadline Fri 18:00', done: false, deadline: true }
  ];

  // Runtime check so Chromium can add optical SVG filter without breaking Safari backdrop-filter
  const isChromium = Boolean(window.chrome) && !/Edg|OPR/.test(navigator.userAgent) || /Chrome|Chromium/.test(navigator.userAgent);
  if (isChromium && CSS.supports('backdrop-filter', 'blur(20px)')) {
    document.documentElement.dataset.opticalGlass = 'chromium';
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pickplan_site_lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === lang));
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
    });
    updateThemeLabel();
    renderDemoTasks();
    renderDrafts();
    document.getElementById('demo-snap-count').textContent = lang === 'en' ? `${snapshotCount} files` : `${snapshotCount} 份`;
    document.getElementById('demo-quick-input').placeholder = lang === 'en' ? 'Add a task quickly...' : '点此快速写一件事…';
  }

  function currentColorScheme() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const content = meta ? meta.getAttribute('content') : 'dark';
    return content === 'light' ? 'light' : 'dark';
  }

  function updateThemeLabel() {
    const scheme = currentColorScheme();
    const label = document.querySelector('#theme-toggle .theme-label');
    const toggle = document.getElementById('theme-toggle');
    if (label) {
      label.textContent = scheme === 'dark' ? t('theme_label_dark') : t('theme_label_light');
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(scheme === 'dark'));
    }
  }

  function toggleTheme() {
    const next = currentColorScheme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute('content', next);
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('pickplan_site_theme', next); } catch (_) {}
      updateThemeLabel();
    };
    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  function renderDemoTasks() {
    const list = document.getElementById('demo-task-list');
    const ipadList = document.getElementById('ipad-task-list');
    if (!list || !ipadList) return;
    list.replaceChildren();
    ipadList.replaceChildren();

    for (const item of demoTasks) {
      const makeRow = (prefix) => {
        const row = document.createElement('div');
        row.className = 'demo-task' + (item.done ? ' is-done' : '');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = `${prefix}-${item.id}`;
        cb.checked = item.done;
        cb.addEventListener('change', () => {
          item.done = cb.checked;
          renderDemoTasks();
        });
        const label = document.createElement('label');
        label.htmlFor = cb.id;
        label.textContent = currentLang === 'en' ? item.en : item.zh;
        const small = document.createElement('small');
        if (item.deadline) small.className = 'is-deadline';
        small.textContent = currentLang === 'en' ? item.metaEn : item.metaZh;
        label.appendChild(small);
        row.append(cb, label);
        return row;
      };
      list.appendChild(makeRow('ip'));
      const ipadRow = makeRow('pd');
      ipadRow.addEventListener('click', () => {
        document.getElementById('ipad-selected-title').textContent = currentLang === 'en' ? item.en : item.zh;
      });
      ipadList.appendChild(ipadRow);
    }

    const doneCount = demoTasks.filter((t) => t.done).length;
    const pill = document.getElementById('demo-progress-pill');
    const bar = document.getElementById('demo-progress-bar');
    if (pill) pill.textContent = currentLang === 'en' ? `${doneCount} / ${demoTasks.length} done` : `${doneCount} / ${demoTasks.length} 完成`;
    if (bar) bar.style.inlineSize = `${Math.round((doneCount / Math.max(1, demoTasks.length)) * 100)}%`;
    const cAll = document.getElementById('ipad-count-all');
    const cToday = document.getElementById('ipad-count-today');
    if (cAll) cAll.textContent = String(demoTasks.length);
    if (cToday) cToday.textContent = String(demoTasks.filter((x) => !x.done).length);
  }

  function renderDrafts() {
    const box = document.getElementById('demo-ai-drafts');
    const btn = document.getElementById('demo-ai-apply');
    if (!box || !btn) return;
    box.replaceChildren();
    const drafts = [
      { zh: '评审设计稿', en: 'Review UI draft', mZh: '明天 10:00 提醒', mEn: 'Tomorrow 10:00' },
      { zh: '回电重点客户', en: 'Call key client', mZh: '明天 15:00 提醒', mEn: 'Tomorrow 15:00' }
    ];
    for (const d of drafts) {
      const row = document.createElement('div');
      row.className = 'demo-task';
      const label = document.createElement('label');
      label.textContent = currentLang === 'en' ? d.en : d.zh;
      const small = document.createElement('small');
      small.textContent = currentLang === 'en' ? d.mEn : d.mZh;
      label.appendChild(small);
      row.appendChild(label);
      box.appendChild(row);
    }
    btn.disabled = aiApplied;
    btn.textContent = aiApplied ? t('demo_ai_applied') : t('demo_ai_apply');
  }

  // Accessible Tabs Wiring (roving tabindex + hidden="until-found" + beforematch)
  function initTabGroup(tabSelector, panelPrefix, attrName) {
    const tabs = Array.from(document.querySelectorAll(tabSelector));
    const activate = (tab, moveFocus = false) => {
      const target = tab.getAttribute(attrName);
      tabs.forEach((btn) => {
        const selected = btn === tab;
        btn.setAttribute('aria-selected', String(selected));
        btn.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(`${panelPrefix}-${btn.getAttribute(attrName)}`);
        if (panel) {
          if (selected) panel.removeAttribute('hidden');
          else panel.setAttribute('hidden', 'until-found');
        }
      });
      if (moveFocus) tab.focus();
      if (target) tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };

    tabs.forEach((tab, idx) => {
      tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight') next = tabs[(idx + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(idx - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          activate(next, true);
        }
      });
      const panel = document.getElementById(`${panelPrefix}-${tab.getAttribute(attrName)}`);
      if (panel) {
        panel.addEventListener('beforematch', () => activate(tab));
      }
    });
  }

  // Dock mode tabs
  document.querySelectorAll('[data-demo-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.demoMode;
      document.querySelectorAll('[data-demo-mode]').forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
      ['manual', 'ai', 'vault'].forEach((m) => {
        const el = document.getElementById(`demo-view-${m}`);
        if (el) el.hidden = m !== mode;
      });
    });
  });

  // Hero interactive actions
  document.getElementById('demo-quick-add')?.addEventListener('click', () => {
    const input = document.getElementById('demo-quick-input');
    const val = input.value.trim();
    if (!val) return;
    demoTasks.unshift({ id: String(Date.now()), zh: val, en: val, metaZh: '今天', metaEn: 'Today', done: false, deadline: false });
    input.value = '';
    renderDemoTasks();
  });
  document.getElementById('demo-quick-input')?.addEventListener('keydown', (e) => {
    if (!e.isComposing && e.key === 'Enter') {
      document.getElementById('demo-quick-add').click();
    }
  });
  document.getElementById('demo-ai-apply')?.addEventListener('click', () => {
    if (aiApplied) return;
    aiApplied = true;
    demoTasks.push(
      { id: 'ai-1', zh: '评审设计稿', en: 'Review UI draft', metaZh: '明天 10:00 提醒', metaEn: 'Tomorrow 10:00', done: false, deadline: false },
      { id: 'ai-2', zh: '回电重点客户', en: 'Call key client', metaZh: '明天 15:00 提醒', metaEn: 'Tomorrow 15:00', done: false, deadline: false }
    );
    renderDemoTasks();
    renderDrafts();
  });
  document.getElementById('demo-snap-now')?.addEventListener('click', () => {
    snapshotCount += 1;
    document.getElementById('demo-snap-count').textContent = currentLang === 'en' ? `${snapshotCount} files` : `${snapshotCount} 份`;
    document.getElementById('demo-snap-msg').textContent = currentLang === 'en' ? 'Snapshot saved (.pickplan.json)' : '已生成 SHA256 快照 (.pickplan.json)';
  });
  document.getElementById('hero-reset-demo')?.addEventListener('click', () => {
    snapshotCount = 2;
    aiApplied = false;
    demoTasks = [
      { id: '1', zh: '早上买新鲜蔬果', en: 'Buy fresh groceries', metaZh: '提醒 09:00', metaEn: 'Reminder 09:00', done: true, deadline: false },
      { id: '2', zh: '评审 iOS 液态玻璃动效', en: 'Review iOS Liquid Glass motion', metaZh: '提醒 15:00', metaEn: 'Reminder 15:00', done: false, deadline: false },
      { id: '3', zh: '周五前提交季度设计总结', en: 'Submit quarterly summary', metaZh: '截止 周五 18:00', metaEn: 'Deadline Fri 18:00', done: false, deadline: true }
    ];
    document.getElementById('demo-snap-msg').textContent = '';
    applyLanguage(currentLang);
  });

  // Cinema video controls
  const video = document.getElementById('intro-video');
  const playBtn = document.getElementById('vid-play');
  const muteBtn = document.getElementById('vid-mute');
  const seekBar = document.getElementById('vid-seek');
  const chapters = Array.from(document.querySelectorAll('.chapter-pills button'));
  if (video) {
    playBtn?.addEventListener('click', () => {
      if (video.paused) video.play(); else video.pause();
    });
    video.addEventListener('play', () => { if (playBtn) playBtn.textContent = '⏸'; });
    video.addEventListener('pause', () => { if (playBtn) playBtn.textContent = '▶'; });
    muteBtn?.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
    });
    document.getElementById('vid-fs')?.addEventListener('click', () => {
      if (video.requestFullscreen) video.requestFullscreen();
    });
    seekBar?.addEventListener('input', () => {
      video.currentTime = Number(seekBar.value);
    });
    video.addEventListener('timeupdate', () => {
      if (seekBar) seekBar.value = String(video.currentTime);
      let active = chapters[0];
      for (const c of chapters) {
        if (video.currentTime >= Number(c.dataset.seek)) active = c;
      }
      chapters.forEach((c) => c.classList.toggle('is-active', c === active));
    });
    chapters.forEach((c) => {
      c.addEventListener('click', () => {
        video.currentTime = Number(c.dataset.seek);
        video.play().catch(() => {});
      });
    });
  }

  // Native Dialog & Invoker Commands Fallbacks + returnValue reset + pointerdown/up outside close
  document.querySelectorAll('dialog').forEach((dlg) => {
    dlg.addEventListener('close', () => { dlg.returnValue = ''; });
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      let downOutside = false;
      dlg.addEventListener('pointerdown', (e) => {
        const r = dlg.getBoundingClientRect();
        downOutside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      });
      dlg.addEventListener('pointerup', (e) => {
        const r = dlg.getBoundingClientRect();
        const upOutside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
        if (downOutside && upOutside) dlg.close();
        downOutside = false;
      });
    }
  });

  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button[command][commandfor]');
      if (!btn) return;
      const target = document.getElementById(btn.getAttribute('commandfor'));
      const cmd = btn.getAttribute('command');
      if (!target) return;
      if (cmd === 'show-modal' && target.showModal) target.showModal();
      else if (cmd === 'close' && target.close) target.close();
    });
  }

  // Copy Button handler (modern-web-guidance: copy-button + custom-button-actions non-bubbling command)
  const copyLastMsg = new WeakMap();
  const handleCopyCommand = async (btn) => {
    const targetId = btn.getAttribute('commandfor');
    const source = targetId ? document.getElementById(targetId) : null;
    const container = btn.closest('.copy');
    const tip = container?.querySelector('.tip');
    if (!source || !container || !tip) return;

    const resetTimer = Number(container.dataset.timerId || 0);
    if (resetTimer) clearTimeout(resetTimer);

    const setStatus = (attr, msg) => {
      container.removeAttribute('data-copied');
      container.removeAttribute('data-failed');
      container.setAttribute(attr, '');
      const prev = copyLastMsg.get(tip);
      const nextMsg = prev === msg ? `${msg}\u00A0` : msg;
      copyLastMsg.set(tip, nextMsg);
      tip.textContent = nextMsg;
      const tid = setTimeout(() => {
        container.removeAttribute('data-copied');
        container.removeAttribute('data-failed');
        tip.textContent = '';
      }, 2200);
      container.dataset.timerId = String(tid);
    };

    try {
      await navigator.clipboard.writeText(source.textContent.trim());
      setStatus('data-copied', t('copied'));
    } catch (_) {
      setStatus('data-failed', t('copy_fail'));
    }
  };

  if ('CommandEvent' in window) {
    document.addEventListener('command', (e) => {
      if (e.command === '--copy' && e.source) handleCopyCommand(e.source);
    }, { capture: true });
  } else {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button[command="--copy"][commandfor]');
      if (btn) handleCopyCommand(btn);
    });
  }

  // Theme + Language listeners
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn));
  });
  window.addEventListener('storage', (e) => {
    if (e.key === 'pickplan_site_theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute('content', e.newValue);
      document.documentElement.dataset.theme = e.newValue;
      updateThemeLabel();
    }
  });

  // Update dynamic current origin URL inside PWA install box
  const pwaCode = document.getElementById('code-pwa');
  if (pwaCode && window.location.protocol.startsWith('http')) {
    pwaCode.textContent = `${window.location.origin}/app.html`;
  }

  initTabGroup('[data-device-target]', 'panel', 'data-device-target');
  initTabGroup('[data-install-target]', 'inst-panel', 'data-install-target');
  applyLanguage(currentLang);
})();
