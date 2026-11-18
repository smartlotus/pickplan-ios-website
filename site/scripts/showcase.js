(() => {
  'use strict';

  const I18N = {
    zh: {
      skip: '跳到正文',
      nav_film: '宣传片',
      nav_features: '原生重构',
      nav_vault: '本地数据',
      nav_install: '免费装机',
      theme_label_dark: '曜黑',
      theme_label_light: '暖纸',
      nav_launch: '获取 iOS 应用 ↗',
      hero_eyebrow: 'ANDROID 1:1 PORT · NATIVE SWIFTUI LIQUID GLASS',
      hero_title: '做计划，<br>说<span class="plain-word">大白话<svg viewBox="0 0 340 22" aria-hidden="true"><path d="M4 15 Q140 -4 336 9 M40 21 Q150 8 288 15"/></svg></span>。<br>忠实重塑 iOS 应用。',
      hero_desc: '100% 原生 SwiftUI 忠实移植 Android 原版黑白极简待办，专为 iPhone 与 iPad 打造 iOS 26 Liquid Glass 触感体验；保留 6 大智能分组、7 大 AI 预设与草稿确认流，新增全量本地导入导出、每日定时备份与数据管理，无需 $99 开发者费用。',
      hero_cta_sideload: 'iPhone / iPad 零费用装机 ↓',
      hero_cta_repo: 'GitHub 源码与云端 .ipa ↗',
      hero_cta_arch: 'Android → iOS 架构对照',
      metric1_k: '$0',
      metric1_v: '开发者费用',
      metric2_k: 'SwiftUI',
      metric2_v: '100% 原生 iOS/iPadOS App',
      metric3_k: 'v1 + v2',
      metric3_v: 'Android 数据无损互通',
      dev_iphone: 'iPhone 原生界面',
      dev_ipad: 'iPad 三栏分屏',
      demo_today: '今天 · 周二',
      demo_ai_head: '✦ AI 整理计划',
      demo_ai_intro: '我先整理成草稿，请确认后再加入计划。',
      demo_ai_apply: '全部加入计划 +',
      demo_ai_applied: '已全部加入计划 ✓',
      demo_vault_head: '⛁ 本地数据与备份',
      demo_auto_status: '每日定时自动备份',
      demo_snap_count: '本地快照数',
      demo_snap_now: '立即生成快照',
      demo_undo: '撤销',
      mode_manual: '自己做',
      mode_ai: 'AI 帮做',
      mode_vault: '本地数据',
      ipad_install_cta: '安装 iPad 原生应用 ↓',
      stage_caption: '原生 iOS / iPadOS 界面交互预览 · 在上方测试 🔔 本地通知、点删撤销、AI 草稿单条确认或切换 iPad 视图',
      film_title: '36 秒看见，<br>光影与计划的流动。',
      film_sub: '从 Android 原版暖白呼吸开屏到 iOS 26 曜黑液态玻璃、大白话草稿逐条编辑加入、iPad 三栏分屏与本地定时自动备份。',
      ch1: '01 初心',
      ch2: '02 原生重构',
      ch3: '03 草稿确认',
      ch4: '04 iPhone/iPad',
      ch5: '05 本地备份',
      vid_dl: '下载 MP4 ↓',
      bento_title: '忠实还原 Android 核心，<br>重塑原生液态玻璃质感。',
      bento_sub: '不是套壳网页，而是按原版 Android 代码逐模块重写的纯血 SwiftUI 应用，专为 iOS / iPadOS 优化手感与动效。',
      f1_t: 'Android 1:1 手动模式 & 液态玻璃胶囊',
      f1_p: '完整还原暖白 900ms 呼吸开屏、🔔 一键测试本地通知（未授权弹窗引导）、↻ 刷新 Toast、6 大时间分组（已逾期/今天/明天/之后/无时间/已完成）、单点删除与玻璃 Undo 撤销条。',
      f2_t: '7 大 AI 预设 · 逐条编辑加入',
      f2_p: '保留 DeepSeek / Kimi / 通义千问 / 智谱 GLM / SiliconFlow / OpenAI / Custom 与 GET /models 连接测试；拆出草稿可单独「编辑」「加入」或「全部加入计划」，另附无网本地解析器。',
      f3_t: 'iPad 三栏分屏与键盘快捷键',
      f3_p: '原生 NavigationSplitView 左侧智能分组与状态概览、中间任务流、右侧详情与 25 分钟专注番茄钟；支持 ⌘N / ⌘F / ⌘B 与 Stage Manager。',
      f4_t: '快捷时间芯片 + 双通知引擎',
      f4_p: '还原今晚、明早、明天下午(15:00)、下周一、1 小时后快捷芯片与提醒/截止双时间通知调度（UNUserNotificationCenter），额外扩展可折叠子任务与专注计时。',
      f5_t: '全量本地导入导出、定时备份与数据管理',
      f5_p: '支持每日定时备份时间设置、每小时/6h/每日/每周周期与切后台自动快照、快照内任务预览与一键回滚、置顶保护、存储占用统计、清理已完成与去重。',
      vault_title: '你的待办与备份，<br>只留在你的设备里。',
      vault_p: '不设服务器、不搞会员云同步，也不受 7 天免费侧载证书过期威胁。开启「定时自动本地备份」后，原生 App 会按设定时刻把带校验的 .pickplan.json 信封写入系统「文件 App → Pickplan → Backups」。',
      v_li1: '✓ 无损导入原版 Android Pickplan v1 JSON 数组',
      v_li2: '✓ 覆盖导入前自动生成 .safetyPreRestore 安全回滚快照，且可预览快照内任务列表',
      v_li3: '✓ 导出可读 Markdown 与可选脱敏（隐藏 API Key）的 .pickplan.json',
      vault_schema_btn: '预览 .pickplan.json v2 格式',
      vault_open_btn: '查看 LocalVaultStore 源码 ↗',
      install_title: '不用花 $99，<br>三种原生装机方式上手 iPhone / iPad。',
      install_sub: '无 App Store 年费、无付费权限依赖，本机免 Xcode 也能由 GitHub Actions 云端免费编译出原生 .ipa 安装包。',
      inst_1: '① SideStore / AltStore 无线侧载 .ipa（推荐）',
      inst_2: '② Sideloadly / 爱思助手 安装 .ipa',
      inst_3: '③ Xcode 免费个人 Apple ID 源码直装',
      side_h: 'SideStore / LiveContainer 无线侧载与手机端续签',
      side_p: '在装有 Xcode 的 Mac 运行打包脚本（或在 GitHub Actions 开启 docs/ci/build-unsigned-ipa.yml 云端构建）取得 PickPlan-Unsigned.ipa。导入 SideStore 后搭配 StosVPN 即可每 7 天在手机本地无线续签；放入 LiveContainer 更可突破免费账号 3 应用上限。',
      side_go: '阅读完整免 $99 装机攻略 ↗',
      sly_h: '本机无 Xcode？用 GitHub Actions 云端免费构建 + Sideloadly 安装',
      sly_p: '如果本地 Mac 未安装完整 Xcode，只需把仓库内 docs/ci/build-unsigned-ipa.yml 放到 .github/workflows/，GitHub 免费 macOS Runner 会自动编译测试并输出 PickPlan-Unsigned.ipa；随后在 Windows 或 Mac 上拖入 Sideloadly / 爱思助手 签名装入设备。',
      xcode_h: 'Xcode 免费 Personal Team 直装真机 & 运行全部单元测试',
      xcode_p: '在 Xcode 中打开 PickPlan.xcodeproj，将 Signing Team 设为免费 Personal Team 并修改 Bundle Identifier，连接 iPhone / iPad 点击 ⌘R 即刻真机运行；亦可运行 Swift 6 Package 与全部 16 项核心测试。',
      footer_slogan: '做计划，说大白话 · 原生 iOS & iPadOS 液态玻璃版',
      arch_t: 'Pickplan Android → iOS/iPadOS 原生移植对照',
      arch_intro: '在深入分析原仓库 main 与 wip/monorepo-migration 分支后，原生 SwiftUI 版完整还原核心操作流并进化如下：',
      arch_1: '<strong>1:1 视觉与手势还原：</strong>保留暖白 900ms 呼吸开屏（pickplanlogo.jpg）、纯黑高对比卡片、🔔 测试推送、↻ 刷新 Toast 与单点删除 Undo，并升级为 SwiftUI 26 GlassEffectContainer。',
      arch_2: '<strong>iPhone 与 iPad 双端原生：</strong>iPhone 采用三态悬浮液态玻璃胶囊 + + 新任务悬浮 Pill；iPad 采用三栏 NavigationSplitView + 键盘快捷键 + 专注计时检查器。',
      arch_3: '<strong>AI 引擎与逐条确认：</strong>完整保留 7 大 AI 预设与 GET /models 检测，支持每张草稿单独「编辑」「加入」及无网离线大白话解析。',
      arch_4: '<strong>本地数据主权：</strong>从 SharedPreferences 升级为 CryptoKit SHA256 本地金库，支持每日定时备份时刻、快照任务预览、Files 文件夹互通与 Android v1 导入。',
      dialog_ok: '明白了',
      schema_t: '.pickplan.json v2 原生备份规范',
      schema_p: 'iOS 与 iPadOS 原生 App 通过 LocalVaultStore 与 CryptoKit SHA256 将数据保存至本地及系统「文件」App（UIFileSharingEnabled），并 100% 向后兼容导入原 Android Pickplan v1 数组。',
      dialog_close: '关闭',
      copied: '已复制',
      copy_fail: '复制失败'
    },
    en: {
      skip: 'Skip to content',
      nav_film: 'Film',
      nav_features: 'Native Port',
      nav_vault: 'Local Data',
      nav_install: 'Zero-Fee Install',
      theme_label_dark: 'Obsidian',
      theme_label_light: 'Paper',
      nav_launch: 'Get iOS App ↗',
      hero_eyebrow: 'ANDROID 1:1 PORT · NATIVE SWIFTUI LIQUID GLASS',
      hero_title: 'Your plans.<br>In <span class="plain-word">plain words<svg viewBox="0 0 340 22" aria-hidden="true"><path d="M4 15 Q140 -4 336 9 M40 21 Q150 8 288 15"/></svg></span>.<br>Refracted in native iOS.',
      hero_desc: 'A 100% native SwiftUI port faithfully recreating the Android monochrome planner in iOS 26 Liquid Glass for iPhone & iPad—keeping all 6 sections, 7 AI presets, per-draft confirmation, and adding local import/export, scheduled auto-backups, and zero $99 fees.',
      hero_cta_sideload: 'Install Native App ($0) ↓',
      hero_cta_repo: 'GitHub Source & Cloud .ipa ↗',
      hero_cta_arch: 'Android → iOS Architecture',
      metric1_k: '$0',
      metric1_v: 'Developer Fee',
      metric2_k: 'SwiftUI',
      metric2_v: '100% Native iOS/iPadOS App',
      metric3_k: 'v1 + v2',
      metric3_v: 'Android Lossless Import',
      dev_iphone: 'iPhone Native',
      dev_ipad: 'iPad 3-Column',
      demo_today: 'Today · Tue',
      demo_ai_head: '✦ AI Planner',
      demo_ai_intro: 'Prepared as drafts first — confirm before adding.',
      demo_ai_apply: 'Add All to Plan +',
      demo_ai_applied: 'All Added ✓',
      demo_vault_head: '⛁ Local Data & Backups',
      demo_auto_status: 'Daily Scheduled Backup',
      demo_snap_count: 'Snapshots',
      demo_snap_now: 'Create Snapshot Now',
      demo_undo: 'Undo',
      mode_manual: 'Manual',
      mode_ai: 'AI Plan',
      mode_vault: 'Local Data',
      ipad_install_cta: 'Install Native iPad App ↓',
      stage_caption: 'Native iOS / iPadOS UI Preview · Test 🔔 notification, delete + Undo, per-draft edit/add, or switch iPad split view',
      film_title: '36 seconds of<br>glass, light & clarity.',
      film_sub: 'From the 900ms warm-white Android splash to iOS 26 obsidian Liquid Glass, per-draft AI confirmation, iPad 3-column workflows, and scheduled local backups.',
      ch1: '01 Origin',
      ch2: '02 Native UI',
      ch3: '03 AI Drafts',
      ch4: '04 iPhone/iPad',
      ch5: '05 Local Vault',
      vid_dl: 'Download MP4 ↓',
      bento_title: 'Faithful Android core.<br>Native Liquid Glass craft.',
      bento_sub: 'Never a web wrapper—rebuilt module-for-module in SwiftUI 26 for iPhone and iPad with tactile springs and haptics.',
      f1_t: 'Android 1:1 Manual Mode & Liquid Glass Dock',
      f1_p: 'Restores the 900ms splash, 🔔 instant Test Notification, ↻ refresh toast, 6 smart time sections (Overdue/Today/Tomorrow/Later/No time/Completed), 1-tap delete, and glass Undo bar.',
      f2_t: '7 AI Presets · Per-Draft Edit & Add',
      f2_p: 'Retains DeepSeek, Kimi, Tongyi Qwen, GLM, SiliconFlow, OpenAI, Custom, and GET /models checks; drafts support individual Edit & Add or Add All, plus an offline parser.',
      f3_t: 'iPad 3-Column Split View & Shortcuts',
      f3_p: 'Native NavigationSplitView with smart-section sidebar, task stream, and 25-minute Focus Timer inspector with full ⌘N / ⌘F / ⌘B shortcuts and Stage Manager.',
      f4_t: 'Quick Time Chips & Dual Notifications',
      f4_p: 'Preserves Tonight, Tomorrow AM, Tomorrow PM (15:00), Next Mon, In 1 Hour chips and dual Reminder/Deadline UNUserNotificationCenter alerts with collapsible subtasks.',
      f5_t: 'Local Import/Export, Scheduled Backup & Hygiene',
      f5_p: 'Daily backup schedule picker, interval/background-on-change snapshots, in-app snapshot task preview & rollback, pinned protection, storage telemetry, and cleanup.',
      vault_title: 'Your plans & backups<br>stay strictly on-device.',
      vault_p: 'No servers, no accounts, and zero fear of 7-day sideload expiry. Scheduled backups write verified .pickplan.json envelopes right into your iPhone/iPad Files app.',
      v_li1: '✓ Lossless import of original Android Pickplan v1 JSON arrays',
      v_li2: '✓ Auto-creates a .safetyPreRestore snapshot with full task preview before replace',
      v_li3: '✓ Export readable Markdown or redacted .pickplan.json (hide API key)',
      vault_schema_btn: 'Inspect .pickplan.json v2',
      vault_open_btn: 'View LocalVaultStore Source ↗',
      install_title: 'Zero $99 fee.<br>Three native ways onto iPhone & iPad.',
      install_sub: 'Zero paid Apple entitlements—and free GitHub Actions cloud builds compile a ready-to-sideload .ipa even without local Xcode.',
      inst_1: '① SideStore / AltStore Wireless .ipa (Best)',
      inst_2: '② Sideloadly / 3rd-Party USB .ipa',
      inst_3: '③ Xcode Free Personal Team',
      side_h: 'SideStore / LiveContainer Wireless Sideload',
      side_p: 'Build PickPlan-Unsigned.ipa locally or via GitHub Actions and install with SideStore + StosVPN for PC-free 7-day Wi-Fi auto-refresh (or LiveContainer to bypass the 3-app cap).',
      side_go: 'Read Full Zero-$99 Sideload Guide ↗',
      sly_h: 'No Local Xcode? Free GitHub Actions Cloud .ipa + Sideloadly',
      sly_p: 'Copy docs/ci/build-unsigned-ipa.yml to .github/workflows/ to let GitHub free macOS runners test & output PickPlan-Unsigned.ipa, then drag into Sideloadly on Windows or Mac.',
      xcode_h: 'Free Personal Apple ID Deploy & Swift 6 Unit Tests',
      xcode_p: 'Open PickPlan.xcodeproj, pick your free Personal Team with a unique Bundle Identifier, and click ⌘R to run natively on iPhone/iPad—or run all 16 core tests locally.',
      footer_slogan: 'Plan in plain words · Native iOS & iPadOS Liquid Glass',
      arch_t: 'Pickplan Android → iOS/iPadOS Native Port Architecture',
      arch_intro: 'Built from deep inspection of both main and wip/monorepo-migration branches in smartlotus/pickplan:',
      arch_1: '<strong>1:1 Visual & Gesture Restoration:</strong> Keeps 900ms warm-white splash, pure obsidian contrast, 🔔 test alert, ↻ refresh toast, and Undo bar inside SwiftUI 26 GlassEffectContainer.',
      arch_2: '<strong>iPhone & iPad Native:</strong> Compact 3-tab floating capsule + + New Task pill on iPhone; 3-column NavigationSplitView + keyboard shortcuts on iPad.',
      arch_3: '<strong>AI Draft Workflow:</strong> Keeps all 7 BYOK presets + GET /models probe, per-draft Edit/Add buttons, and adds an offline bilingual parser.',
      arch_4: '<strong>Local Data Vault:</strong> CryptoKit SHA256 v2 envelope, daily preferred backup time, snapshot task preview, Files app sync, and Android v1 compatibility.',
      dialog_ok: 'Got it',
      schema_t: '.pickplan.json v2 Native Backup Specification',
      schema_p: 'Written natively by LocalVaultStore to local storage & iOS Files app (UIFileSharingEnabled) with SHA256 verification and Android v1 array import.',
      dialog_close: 'Close',
      copied: 'Copied',
      copy_fail: 'Copy failed'
    }
  };

  let currentLang = localStorage.getItem('pickplan_site_lang') === 'en' ? 'en' : 'zh';
  let snapshotCount = 2;
  let lastDeleted = null;
  let toastTimer = 0;

  const initialTasks = () => [
    { id: '1', zh: '早上买新鲜蔬果', en: 'Buy fresh groceries', metaZh: '提醒 09:00', metaEn: 'Reminder 09:00', done: true, deadline: false },
    { id: '2', zh: '评审 iOS 液态玻璃动效', en: 'Review iOS Liquid Glass motion', metaZh: '提醒 15:00 · 明天下午', metaEn: 'Reminder 15:00 · Tomorrow PM', done: false, deadline: false },
    { id: '3', zh: '周五前提交季度设计总结', en: 'Submit quarterly summary', metaZh: '截止 周五 18:00', metaEn: 'Deadline Fri 18:00', done: false, deadline: true }
  ];

  const initialDrafts = () => [
    { id: 'd1', zh: '评审设计稿', en: 'Review UI draft', mZh: '明天 10:00 提醒', mEn: 'Tomorrow 10:00', altZh: '明天 15:00 提醒', altEn: 'Tomorrow 15:00', edited: false, added: false },
    { id: 'd2', zh: '回电重点客户', en: 'Call key client', mZh: '明天 15:00 提醒', mEn: 'Tomorrow 15:00', altZh: '今晚 20:00 提醒', altEn: 'Tonight 20:00', edited: false, added: false }
  ];

  let demoTasks = initialTasks();
  let demoDrafts = initialDrafts();

  // Runtime check so Chromium can add optical SVG filter without breaking Safari backdrop-filter
  const isChromium = Boolean(window.chrome) && !/Edg|OPR/.test(navigator.userAgent) || /Chrome|Chromium/.test(navigator.userAgent);
  if (isChromium && CSS.supports('backdrop-filter', 'blur(20px)')) {
    document.documentElement.dataset.opticalGlass = 'chromium';
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function showDemoToast(msg) {
    const el = document.getElementById('demo-toast-msg');
    if (!el) return;
    clearTimeout(toastTimer);
    el.textContent = msg;
    toastTimer = setTimeout(() => { el.textContent = ''; }, 2600);
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
    document.getElementById('demo-quick-input').placeholder = lang === 'en' ? 'New task title...' : '输入新任务标题…';
    const addBtn = document.getElementById('demo-quick-add');
    if (addBtn) addBtn.textContent = lang === 'en' ? '+ Task' : '+ 新任务';
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

    demoTasks.forEach((item, idx) => {
      const makeRow = (prefix, withDelete) => {
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

        if (withDelete) {
          const del = document.createElement('button');
          del.type = 'button';
          del.className = 'demo-del-btn';
          del.textContent = '✕';
          del.setAttribute('aria-label', currentLang === 'en' ? `Delete ${item.en}` : `删除 ${item.zh}`);
          del.addEventListener('click', () => {
            lastDeleted = { item, idx };
            demoTasks.splice(idx, 1);
            const undoBar = document.getElementById('demo-undo-bar');
            const undoText = document.getElementById('demo-undo-text');
            if (undoBar && undoText) {
              const title = currentLang === 'en' ? item.en : item.zh;
              undoText.textContent = currentLang === 'en' ? `Deleted "${title}"` : `已删除「${title}」`;
              undoBar.hidden = false;
            }
            renderDemoTasks();
          });
          row.appendChild(del);
        }
        return row;
      };
      list.appendChild(makeRow('ip', true));
      const ipadRow = makeRow('pd', false);
      ipadRow.addEventListener('click', () => {
        document.getElementById('ipad-selected-title').textContent = currentLang === 'en' ? item.en : item.zh;
      });
      ipadList.appendChild(ipadRow);
    });

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

  function addDraftToTasks(d) {
    if (d.added) return;
    d.added = true;
    const metaZh = d.edited ? d.altZh : d.mZh;
    const metaEn = d.edited ? d.altEn : d.mEn;
    demoTasks.push({
      id: `ai-${d.id}-${Date.now()}`,
      zh: d.zh,
      en: d.en,
      metaZh,
      metaEn,
      done: false,
      deadline: false
    });
  }

  function renderDrafts() {
    const box = document.getElementById('demo-ai-drafts');
    const btn = document.getElementById('demo-ai-apply');
    if (!box || !btn) return;
    box.replaceChildren();

    for (const d of demoDrafts) {
      const card = document.createElement('div');
      card.className = 'demo-draft-card';

      const title = document.createElement('div');
      title.className = 'demo-draft-title';
      title.textContent = currentLang === 'en' ? d.en : d.zh;

      const foot = document.createElement('div');
      foot.className = 'demo-draft-foot';

      const meta = document.createElement('span');
      meta.className = 'demo-draft-meta';
      meta.textContent = currentLang === 'en'
        ? (d.edited ? d.altEn : d.mEn)
        : (d.edited ? d.altZh : d.mZh);

      const btns = document.createElement('div');
      btns.className = 'demo-draft-btns';

      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'demo-mini-edit';
      editBtn.textContent = currentLang === 'en' ? 'Edit' : '编辑';
      editBtn.disabled = d.added;
      editBtn.addEventListener('click', () => {
        d.edited = !d.edited;
        showDemoToast(currentLang === 'en' ? 'Draft schedule tweaked' : '已调整草稿时间');
        renderDrafts();
      });

      const addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.className = 'demo-mini-add' + (d.added ? ' is-added' : '');
      addBtn.textContent = d.added
        ? (currentLang === 'en' ? '✓ Added' : '✓ 已加入计划')
        : (currentLang === 'en' ? 'Add' : '加入');
      addBtn.disabled = d.added;
      addBtn.addEventListener('click', () => {
        addDraftToTasks(d);
        renderDemoTasks();
        renderDrafts();
        showDemoToast(currentLang === 'en' ? 'Added draft to plan' : '已加入 1 条任务到计划');
      });

      btns.append(editBtn, addBtn);
      foot.append(meta, btns);
      card.append(title, foot);
      box.appendChild(card);
    }

    const allAdded = demoDrafts.every((d) => d.added);
    btn.disabled = allAdded;
    btn.textContent = allAdded ? t('demo_ai_applied') : t('demo_ai_apply');
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
  function switchDemoMode(mode) {
    document.querySelectorAll('[data-demo-mode]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.demoMode === mode));
    });
    ['manual', 'ai', 'vault'].forEach((m) => {
      const el = document.getElementById(`demo-view-${m}`);
      if (el) el.hidden = m !== mode;
    });
  }

  document.querySelectorAll('[data-demo-mode]').forEach((btn) => {
    btn.addEventListener('click', () => switchDemoMode(btn.dataset.demoMode));
  });

  // Hero interactive actions
  document.getElementById('demo-test-notif')?.addEventListener('click', () => {
    showDemoToast(currentLang === 'en'
      ? '🔔 Test notification delivered (native UNUserNotificationCenter)'
      : '🔔 测试通知已送达（原生 UNUserNotificationCenter）');
  });
  document.getElementById('demo-refresh')?.addEventListener('click', () => {
    renderDemoTasks();
    showDemoToast(currentLang === 'en' ? '↻ Plan list refreshed' : '↻ 计划列表已刷新');
  });
  document.getElementById('demo-undo-btn')?.addEventListener('click', () => {
    if (!lastDeleted) return;
    demoTasks.splice(lastDeleted.idx, 0, lastDeleted.item);
    lastDeleted = null;
    const undoBar = document.getElementById('demo-undo-bar');
    if (undoBar) undoBar.hidden = true;
    renderDemoTasks();
  });
  document.getElementById('demo-focus-add')?.addEventListener('click', () => {
    switchDemoMode('manual');
    document.getElementById('demo-quick-input')?.focus();
  });

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
    demoDrafts.forEach(addDraftToTasks);
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
    lastDeleted = null;
    const undoBar = document.getElementById('demo-undo-bar');
    if (undoBar) undoBar.hidden = true;
    demoTasks = initialTasks();
    demoDrafts = initialDrafts();
    document.getElementById('demo-snap-msg').textContent = '';
    showDemoToast('');
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

  initTabGroup('[data-device-target]', 'panel', 'data-device-target');
  initTabGroup('[data-install-target]', 'inst-panel', 'data-install-target');
  applyLanguage(currentLang);
})();
