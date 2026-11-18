(() => {
  'use strict';

  const I18N = {
    zh: {
      skip: '跳到正文 ↓',
      nav_film: '宣传片',
      nav_arch: '系统架构',
      nav_matrix: '对照矩阵',
      nav_vault: '数据金库',
      nav_install: '免费装机',
      btn_grid: '网格 [G]',
      theme_paper: '暖纸',
      theme_carbon: '曜黑',
      nav_cta: '获取 .IPA / 源码 ↗',
      hero_kicker: 'ANDROID 1:1 PORT · SWIFTUI 26 LIQUID GLASS',
      hero_title: '做计划，<br>说<span class="accent-phrase">大白话</span>。<br>忠实重构 iOS 应用。',
      hero_desc: '严格遵循原版 Android 极简黑白哲学、6 大智能分组与 7 大 AI 草稿确认流，彻底以 SwiftUI 原生编写并融入 iOS 26 液态玻璃交互；新增全量本地导入导出、每日定时本地备份与数据金库，零 $99 开发者费用安装到 iPhone 与 iPad。',
      hero_cta_install: '零费用安装到 iPhone / iPad ↓',
      hero_cta_repo: 'GITHUB 原生仓库 ↗',
      hero_cta_arch: '查看架构对照',
      m1_label: '开发者年费',
      m2_label: '核心单元测试通过',
      m3_label: 'ANDROID 数据无损兼容',
      dev_iphone: 'FIG.A / iPhone 原生',
      dev_ipad: 'FIG.B / iPad 三栏',
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
      ipad_install_cta: '安装 iPad App ↓',
      stage_caption: '交互样品 // 点击 🔔 测试推送、✕ 删除并撤销、逐条确认 AI 草稿或切换 iPad 三栏',
      film_title: '产品影像纪实 · 1080P 60FPS',
      film_sub: '从 Android 原版 900ms 暖白开屏到 iOS 26 液态玻璃手动流程、大白话草稿逐条加入、iPad 三栏协同与每日定时快照。',
      film_meta_head: '制作规格参数',
      vid_dl: '下载 MP4 原片 (4.18 MB) ↓',
      ch1: '01 初心',
      ch2: '02 原生重构',
      ch3: '03 草稿确认',
      ch4: '04 iPhone/iPad',
      ch5: '05 本地备份',
      vid_transcript_btn: '影片分镜文字实录 (00:00 – 00:36)',
      tr1: '00:00 — 暖白开屏与手绘标语：做计划，说大白话；忠实移植 Android 原版。',
      tr2: '00:06 — iPhone SwiftUI 液态玻璃工作台：🔔 通知、↻ 刷新、+ 新任务与 Undo 撤销条。',
      tr3: '00:13 — AI 帮做草稿流：「我先整理成草稿，请确认后再加入计划」，支持逐条编辑或加入。',
      tr4: '00:20 — iPad 三栏 NavigationSplitView、快捷键 (⌘N / ⌘F / ⌘B) 与 25:00 专注计时。',
      tr5: '00:26 — 本地数据金库：每日 22:00 定时自动快照、Files 文件夹互通与 SideStore / Xcode 免签安装。',
      arch_sec_title: '模块化原生架构',
      arch_sec_sub: '零网页套壳，零 Flutter 运行时开销；围绕 Swift 6 Concurrency、SwiftUI 26 与 CryptoKit 重建六个正交模块。',
      mod1_t: '900ms 呼吸开屏 & 单色液态玻璃',
      mod1_p: '精确复现原版 #FFFFFF 暖白开屏与真实 pickplanlogo.jpg，平滑接入纯黑 #000000 玻璃材质；iOS 26 激活 GlassEffectContainer，iOS 17–18 自动降级材质。',
      mod2_t: '自己做：6 大时间分组与单指点删',
      mod2_p: '严格对齐已逾期、今天、明天、之后、无时间、已完成 6 大分组；保留圆角复选框、珊瑚红截止角标、+ 新任务悬浮胶囊与底部 Undo 撤销条。',
      mod3_t: 'AI 帮做：7 大预设 + 逐条草稿确认',
      mod3_p: '保留 DeepSeek / Kimi / 通义千问 / 智谱 GLM / SiliconFlow / OpenAI / Custom 与 GET /models 测试；拆出草稿可单独「编辑」「加入」，另附离线本地拆解器。',
      mod4_t: '双时间通知 & 前台弹窗直显',
      mod4_p: '同一待办分别注册 Reminder 与 Deadline 两条本地通知；通过 UNUserNotificationCenterDelegate 实现前台展示，并提供顶部 🔔 一键测试推送。',
      mod5_t: 'iPadOS 三栏分屏与键鼠协同',
      mod5_p: '左侧智能导航与备份状态、中间任务流、右侧详情与 25 分钟专注番茄钟；支持 ⌘N / ⌘F / ⌘B 快捷键、Split View 与 Stage Manager。',
      mod6_t: '本地导入导出 & 每日定时自动备份',
      mod6_p: 'CryptoKit SHA256 v2 信封、Android v1 数组无损导入、每日备份时间选择器、快照内任务预览、置顶保护与系统「文件 App」同步。',
      matrix_title: 'ANDROID → iOS 忠实度对照表',
      matrix_sub: '基于 smartlotus/pickplan（main + wip/monorepo-migration）逐字段与交互核对清单。',
      spec_caption: '表 3.1 // 跨平台忠实移植与原生能力核对',
      th_1: '核心子系统',
      th_2: 'Android 原版基准',
      th_3: 'iOS & iPadOS 26 原生实现',
      th_4: '工程验证',
      row1_k: '视觉与开屏',
      row1_a: '#FFFFFF 900ms 呼吸开屏 + 纯黑卡片 #1E1E1E / #CF6679',
      row1_i: '忠实还原开屏与色阶，叠加 GlassEffectContainer 与 iOS 17–18 材质降级',
      row1_v: 'swift build 0 警告',
      row2_k: '6 大智能分组',
      row2_a: '已逾期 / 今天 / 明天 / 之后 / 无时间 / 已完成',
      row2_i: '1:1 保持 6 分组及快捷时间芯片（明日下午固定 15:00）',
      row2_v: 'SmartSectionEngineTests',
      row3_k: 'AI 草稿流程',
      row3_a: '7 大预设 + GET /models 检测 + 草稿单条编辑与加入',
      row3_i: '保留全套 BYOK 协议与草稿确认 UI，新增离线双语大白话拆解',
      row3_v: 'Test #16 通过',
      row4_k: '双时间本地推送',
      row4_a: 'Reminder & Deadline 双推送 + 顶部 🔔 立即测试',
      row4_i: 'UNUserNotificationCenter 前台横幅代理 + 未授权弹窗引导设置',
      row4_v: 'NotificationCoordinator',
      row5_k: '本地备份与数据管理',
      row5_a: '仅存 SharedPreferences，无导出与定时保护',
      row5_i: 'SHA256 v2 导入导出 + 每日定时备份时间 + 快照任务预览 + Android v1 导入',
      row5_v: 'BackupCodec 测试集',
      row6_k: '免 $99 装机策略',
      row6_a: 'APK 直装',
      row6_i: '零付费 Entitlements，支持 SideStore / LiveContainer / Sideloadly / Xcode 个人团队',
      row6_v: 'PickPlan.xcodeproj + CI',
      vault_title: '本地数据主权与自动备份',
      vault_sub: '无云端服务器，无账号系统；所有待办、备份与快照通过 Files App 与本机金库完全掌控在你手中。',
      vault_p: '开启「定时自动本地备份」并设定每日首选备份时刻后，App 会在后台或周期触发时写入带 CryptoKit SHA256 校验的 .pickplan.json 信封至系统「文件」App（UIFileSharingEnabled）。即便免费签名 7 天重签，所有数据依然毫发无损。',
      v_li1: '01 / 导入：支持 Android v1 JSON 数组与 v2 校验信封（智能合并 / 追加 / 安全覆盖）',
      v_li2: '02 / 定时：支持按小时 / 天 / 周频率 + 指定每日备份时刻 + 置顶快照永久免轮转清理',
      v_li3: '03 / 管理：App 内直接预览历史快照内的待办详情、字节存储分析、清理已完成与去重',
      vault_schema_btn: '预览 .PICKPLAN.JSON 规范',
      vault_open_btn: '查看 LOCALVAULTSTORE.SWIFT ↗',
      install_title: '零 $99 费用在真机安装使用',
      install_sub: '无需付费 Apple Developer 账号。无 Mac/Xcode 环境也可使用仓库内置 GitHub Actions 模板云端编译 .ipa。',
      inst_1: '01 / SideStore 无线侧载 .ipa',
      inst_2: '02 / 云端构建 .ipa + Sideloadly',
      inst_3: '03 / Xcode 个人免费账号编译',
      side_h: 'SideStore / LiveContainer 无线侧载与手机端续签',
      side_p: '取得 PickPlan-Unsigned.ipa 后直接导入 SideStore 搭配 StosVPN，每 7 天直接在 iPhone / iPad 无线点击续签（首次配对后无需电脑）；导入 LiveContainer 还可突破免费账号最多 3 个应用的限制。',
      side_go: '阅读完整侧载指南 ↗',
      sly_h: '本机无 Xcode？启用 GitHub Actions 免费 macOS 构建 `.ipa`',
      sly_p: '将仓库内 docs/ci/build-unsigned-ipa.yml 移入 .github/workflows/ 并推送，GitHub 免费 macOS-26 Runner 会自动编译测试并输出 PickPlan-Unsigned.ipa Artifact，再用 Windows/Mac 上的 Sideloadly 或爱思助手签发安装。',
      xcode_h: 'Xcode 免费 Personal Team 直装真机 & 运行全部单元测试',
      xcode_p: '在任意 Mac 用 Xcode 打开 PickPlan.xcodeproj，Signing Team 选个人免费 Apple ID 并修改 Bundle Identifier 后，连接 iPhone / iPad 按 ⌘R 即可真机安装。',
      footer_slogan: '做计划，说大白话 · 原生 iOS & iPadOS 液态玻璃版',
      arch_t: 'ANDROID → iOS 架构对照详情',
      arch_intro: '在完整阅读原仓库 main 与 wip/monorepo-migration 后，原生 SwiftUI 版 1:1 复原并升级了以下 4 个核心层次：',
      arch_1: '<strong>01 / 视觉与开屏：</strong>保留 900ms 暖白开屏与纯黑高对比界面，新增 Xcode 26 GlassEffectContainer 与 iOS 17–18 自动材质降级。',
      arch_2: '<strong>02 / 交互与双端：</strong>保留 🔔 测试通知、↻ 刷新 Toast、6 大时间分组、+ 新任务与 Undo 撤销条，并在 iPadOS 展开三栏 NavigationSplitView。',
      arch_3: '<strong>03 / 大白话 AI 流：</strong>完整保留 7 大厂商模型预设、GET /models 探测、每条草稿单独编辑确认与离线自然语言解析器。',
      arch_4: '<strong>04 / 数据金库：</strong>新增 SHA256 v2 导入导出、Android v1 JSON 无损导入、每日备份时间计划及快照内部待办预览。',
      dialog_ok: '关闭 [ESC]',
      schema_t: '.PICKPLAN.JSON V2 备份规范',
      schema_p: '由 PickPlanCore.BackupCodec 在原生端编码并附带 CryptoKit SHA256 摘要，完全向后兼容原 Android Pickplan v1 数组导入。',
      dialog_close: '关闭 [ESC]',
      copied: '已复制',
      copy_fail: '复制失败'
    },
    en: {
      skip: 'SKIP TO CONTENT ↓',
      nav_film: 'FILM',
      nav_arch: 'SYSTEM',
      nav_matrix: 'MATRIX',
      nav_vault: 'VAULT',
      nav_install: 'INSTALL',
      btn_grid: 'GRID [G]',
      theme_paper: 'PAPER',
      theme_carbon: 'CARBON',
      nav_cta: 'GET .IPA / REPO ↗',
      hero_kicker: 'ANDROID 1:1 PORT · SWIFTUI 26 LIQUID GLASS',
      hero_title: 'Plan in<br><span class="accent-phrase">Plain Words</span>.<br>Refracted in SwiftUI.',
      hero_desc: 'Faithfully ported from the minimalist Android planner with all 6 smart time sections, 7 BYOK AI presets, and per-draft confirmation—rebuilt in native SwiftUI 26 Liquid Glass with full local import/export, daily scheduled backups, and zero $99 Apple fees.',
      hero_cta_install: 'ZERO-FEE iOS INSTALL ↓',
      hero_cta_repo: 'GITHUB SWIFTUI REPO ↗',
      hero_cta_arch: 'SPEC DIFF DIALOG',
      m1_label: 'DEVELOPER FEE',
      m2_label: 'CORE TESTS PASSING',
      m3_label: 'ANDROID JSON PARITY',
      dev_iphone: 'FIG.A / iPhone Native',
      dev_ipad: 'FIG.B / iPad Split',
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
      ipad_install_cta: 'Install iPad App ↓',
      stage_caption: 'INTERACTIVE SPECIMEN // Test 🔔 alert, delete + Undo, tweak AI drafts, or switch iPad split view',
      film_title: 'MOTION DOCUMENT · 1080P 60FPS',
      film_sub: 'From the 900ms warm-white Android splash to iOS 26 Liquid Glass workflows, per-draft confirmation, iPad 3-column split view, and scheduled daily backups.',
      film_meta_head: 'PRODUCTION PARAMETERS',
      vid_dl: 'DOWNLOAD MP4 (4.18 MB) ↓',
      ch1: '01 Origin',
      ch2: '02 Native UI',
      ch3: '03 AI Drafts',
      ch4: '04 iPhone/iPad',
      ch5: '05 Local Vault',
      vid_transcript_btn: 'SCENE TRANSCRIPT (00:00 – 00:36)',
      tr1: '00:00 — Warm-white breathing splash & signature tagline faithful to Android.',
      tr2: '00:06 — iPhone Liquid Glass Manual workspace: 🔔 alert, ↻ refresh, + New Task, Undo.',
      tr3: '00:13 — Plain-words AI drafts: edit or add individual cards, or add all at once.',
      tr4: '00:20 — iPad 3-column NavigationSplitView, shortcuts (⌘N/⌘F/⌘B), 25:00 Focus Timer.',
      tr5: '00:26 — Local Data Vault: 22:00 daily snapshots, Files app sync, $0 sideloading.',
      arch_sec_title: 'MODULAR NATIVE ARCHITECTURE',
      arch_sec_sub: 'Zero web wrapper, zero Flutter VM overhead—six orthogonal modules engineered with Swift 6 Concurrency, SwiftUI 26, and CryptoKit.',
      mod1_t: '900ms Splash & Liquid Glass Theme',
      mod1_p: 'Matches the #FFFFFF splash with authentic pickplanlogo.jpg before entering #000000 monochrome refraction; activates GlassEffectContainer on iOS 26 with graceful iOS 17–18 fallback.',
      mod2_t: 'Manual Mode: 6 Smart Sections',
      mod2_p: 'Mirrors Overdue, Today, Tomorrow, Later, No time, Completed with rounded checkboxes, coral deadlines, floating + New Task pill, and glass Undo bar.',
      mod3_t: 'AI Drafts: 7 Presets & Single Add',
      mod3_p: 'Keeps DeepSeek, Kimi, Tongyi Qwen, GLM, SiliconFlow, OpenAI, Custom + GET /models test; drafts edit/add individually plus offline natural-language parsing.',
      mod4_t: 'Dual Notifications & Banner Delegate',
      mod4_p: 'Registers independent Reminder and Deadline notifications per task, displays foreground banners via UNUserNotificationCenterDelegate, and exposes 🔔 instant test.',
      mod5_t: 'iPadOS 3-Column & Keyboard Control',
      mod5_p: 'Sidebar smart sections and backup status, task stream, and Focus Timer inspector with ⌘N / ⌘F / ⌘B shortcuts, Split View, and Stage Manager.',
      mod6_t: 'Local Import/Export & Daily Schedule',
      mod6_p: 'CryptoKit SHA256 v2 envelopes, lossless Android v1 array import, daily preferred time picker, snapshot task preview, pinning, and Files app integration.',
      matrix_title: 'ANDROID → iOS FIDELITY MATRIX',
      matrix_sub: 'Line-by-line behavioral and UI verification against smartlotus/pickplan (main + wip/monorepo-migration).',
      spec_caption: 'TABLE 3.1 // CROSS-PLATFORM PARITY & ENHANCEMENT AUDIT',
      th_1: 'SUBSYSTEM',
      th_2: 'ANDROID ORIGINAL',
      th_3: 'iOS & iPadOS 26 NATIVE',
      th_4: 'VERIFICATION',
      row1_k: 'Visual & Splash',
      row1_a: '#FFFFFF 900ms splash + pure black cards #1E1E1E / #CF6679',
      row1_i: 'Faithful splash & contrast + GlassEffectContainer with iOS 17–18 material fallback',
      row1_v: 'swift build 0 warnings',
      row2_k: 'Smart Sections',
      row2_a: 'Overdue / Today / Tomorrow / Later / No time / Completed',
      row2_i: 'Exact 6 sections & quick chips (Tomorrow Afternoon pinned to 15:00)',
      row2_v: 'SmartSectionEngineTests',
      row3_k: 'AI Draft Flow',
      row3_a: '7 presets + GET /models test + per-draft Edit & Add',
      row3_i: 'Full BYOK parity & draft UX plus offline bilingual splitter',
      row3_v: 'Test #16 Passed',
      row4_k: 'Notifications',
      row4_a: 'Reminder & Deadline alerts + topbar 🔔 test button',
      row4_i: 'UNUserNotificationCenter foreground delegate + denied permission prompt',
      row4_v: 'NotificationCoordinator',
      row5_k: 'Local Backup',
      row5_a: 'SharedPreferences only (no export or scheduler)',
      row5_i: 'SHA256 v2 export/import + daily schedule picker + snapshot preview + Android v1 import',
      row5_v: 'BackupCodec Suite',
      row6_k: 'Zero-Fee Install',
      row6_a: 'Direct APK install',
      row6_i: 'Zero paid entitlements; SideStore / LiveContainer / Sideloadly / Xcode Personal Team',
      row6_v: 'PickPlan.xcodeproj + CI',
      vault_title: 'LOCAL DATA SOVEREIGNTY',
      vault_sub: 'Zero cloud servers, zero accounts. Every task and scheduled snapshot writes directly to your on-device vault and Files app.',
      vault_p: 'Enable Scheduled Local Backups and set your preferred daily time to write CryptoKit SHA256-verified .pickplan.json envelopes into the iOS Files app (UIFileSharingEnabled)—preserving data safely across 7-day free sideload renewals.',
      v_li1: '01 / IMPORT: Android v1 JSON arrays & v2 envelopes (Smart Merge / Append Copy / Safe Replace)',
      v_li2: '02 / SCHEDULE: Hourly / Daily / Weekly cadence + preferred time + pinned snapshot protection',
      v_li3: '03 / MANAGE: In-app snapshot task preview, byte breakdown, completed purge, and deduplication',
      vault_schema_btn: 'INSPECT .PICKPLAN.JSON',
      vault_open_btn: 'LOCALVAULTSTORE.SWIFT ↗',
      install_title: 'ZERO-$99 NATIVE INSTALLATION',
      install_sub: 'No paid Apple Developer membership required. Even without local Xcode, GitHub Actions builds a ready-to-sideload .ipa in the cloud.',
      inst_1: '01 / SideStore Wireless .ipa',
      inst_2: '02 / Cloud .ipa + Sideloadly',
      inst_3: '03 / Xcode Free Personal Team',
      side_h: 'SideStore / LiveContainer Wireless Renewal',
      side_p: 'Import PickPlan-Unsigned.ipa into SideStore with StosVPN for PC-free 7-day Wi-Fi signing refresh on-device, or run inside LiveContainer to bypass the 3-app free Apple ID cap.',
      side_go: 'FULL SIDELOAD GUIDE ↗',
      sly_h: 'No Local Xcode? Build `.ipa` Free on GitHub Actions',
      sly_p: 'Move docs/ci/build-unsigned-ipa.yml to .github/workflows/ to compile PickPlan-Unsigned.ipa on GitHub macOS runners, then install onto iPhone or iPad via Sideloadly.',
      xcode_h: 'Deploy via Xcode Free Personal Team & Run Core Tests',
      xcode_p: 'Open PickPlan.xcodeproj in Xcode, pick your free Personal Team with a custom Bundle ID, connect via USB and press ⌘R to deploy natively.',
      footer_slogan: 'Plan in plain words · Native iOS & iPadOS Liquid Glass',
      arch_t: 'ANDROID → iOS ARCHITECTURE DIFF',
      arch_intro: 'Derived from inspecting both main and wip/monorepo-migration branches in smartlotus/pickplan:',
      arch_1: '<strong>01 / Visuals & Splash:</strong> Preserves 900ms warm-white splash and high-contrast obsidian theme, adding GlassEffectContainer with iOS 17–18 fallback.',
      arch_2: '<strong>02 / Native Controls:</strong> Preserves 🔔 test notification, ↻ refresh, 6 sections, + New Task, and Undo toast—plus iPadOS 3-column NavigationSplitView.',
      arch_3: '<strong>03 / AI Draft Flow:</strong> Retains 7 presets, GET /models connectivity check, per-draft Edit/Add buttons, and adds offline parsing.',
      arch_4: '<strong>04 / Local Data Vault:</strong> Adds SHA256 v2 export/import, lossless Android v1 import, daily backup time scheduling, and snapshot previews.',
      dialog_ok: 'CLOSE [ESC]',
      schema_t: '.PICKPLAN.JSON V2 SPECIFICATION',
      schema_p: 'Encoded natively by PickPlanCore.BackupCodec with CryptoKit SHA256 integrity checks and backward compatibility for Android v1 arrays.',
      dialog_close: 'CLOSE [ESC]',
      copied: 'COPIED',
      copy_fail: 'FAILED'
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

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  // Dark Mode Toggle (dark-mode & dark-mode-toggle guidelines)
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  function systemScheme() {
    return colorSchemeQuery.matches ? 'dark' : 'light';
  }
  function renderedScheme() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const content = meta ? meta.getAttribute('content') : 'light dark';
    if (content === 'dark') return 'dark';
    if (content === 'light') return 'light';
    return systemScheme();
  }
  function updateThemeLabel() {
    const scheme = renderedScheme();
    const label = document.getElementById('theme-label');
    const toggle = document.getElementById('theme-toggle');
    if (label) {
      label.textContent = scheme === 'dark' ? t('theme_carbon') : t('theme_paper');
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(scheme === 'dark'));
    }
  }
  function toggleTheme() {
    const target = renderedScheme() === 'dark' ? 'light' : 'dark';
    const nextMeta = target === systemScheme() ? 'light dark' : target;
    const apply = () => {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute('content', nextMeta);
      try {
        if (nextMeta === 'light dark') localStorage.removeItem('pickplan_color_scheme');
        else localStorage.setItem('pickplan_color_scheme', nextMeta);
      } catch (_) {}
      updateThemeLabel();
    };
    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  // 12-Column Swiss Drafting Grid Overlay
  function toggleGridOverlay() {
    const next = document.documentElement.dataset.grid !== 'on';
    if (next) document.documentElement.dataset.grid = 'on';
    else delete document.documentElement.dataset.grid;
    const btn = document.getElementById('grid-toggle');
    if (btn) btn.setAttribute('aria-pressed', String(next));
  }

  function showDemoToast(msg) {
    const el = document.getElementById('demo-toast-msg');
    if (!el) return;
    clearTimeout(toastTimer);
    el.textContent = msg;
    if (msg) {
      toastTimer = setTimeout(() => { el.textContent = ''; }, 2600);
    }
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
    const specTable = document.getElementById('spec-table');
    if (specTable) {
      specTable.style.setProperty('--label-2', JSON.stringify(I18N[lang].th_2));
      specTable.style.setProperty('--label-3', JSON.stringify(I18N[lang].th_3));
      specTable.style.setProperty('--label-4', JSON.stringify(I18N[lang].th_4));
    }
    updateThemeLabel();
    renderDemoTasks();
    renderDrafts();
    document.getElementById('demo-snap-count').textContent = lang === 'en' ? `${snapshotCount} files` : `${snapshotCount} 份`;
    document.getElementById('demo-quick-input').placeholder = lang === 'en' ? 'New task title...' : '输入新任务标题…';
    const addBtn = document.getElementById('demo-quick-add');
    if (addBtn) addBtn.textContent = lang === 'en' ? '+ Task' : '+ 新任务';
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

    const doneCount = demoTasks.filter((x) => x.done).length;
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
    demoTasks.push({
      id: `ai-${d.id}-${Date.now()}`,
      zh: d.zh,
      en: d.en,
      metaZh: d.edited ? d.altZh : d.mZh,
      metaEn: d.edited ? d.altEn : d.mEn,
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

  // Accessible Tabs Wiring (tabs guide: focusgroupstart sync + hidden="until-found" + beforematch)
  function initTabGroup(tabSelector, panelPrefix, attrName) {
    const tabs = Array.from(document.querySelectorAll(tabSelector));
    const activate = (tab, moveFocus = false) => {
      tabs.forEach((btn) => {
        const selected = btn === tab;
        btn.setAttribute('aria-selected', String(selected));
        btn.toggleAttribute('focusgroupstart', selected);
        btn.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(`${panelPrefix}-${btn.getAttribute(attrName)}`);
        if (panel) {
          if (selected) panel.removeAttribute('hidden');
          else panel.setAttribute('hidden', 'until-found');
        }
      });
      if (moveFocus) tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };

    tabs.forEach((tab, idx) => {
      const initSelected = tab.getAttribute('aria-selected') === 'true';
      tab.tabIndex = initSelected ? 0 : -1;
      tab.toggleAttribute('focusgroupstart', initSelected);
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

  // Hero Simulator Interactive Controls
  document.getElementById('demo-test-notif')?.addEventListener('click', () => {
    showDemoToast(currentLang === 'en'
      ? '🔔 Test notification delivered (UNUserNotificationCenter)'
      : '🔔 测试通知已送达（原生 UNUserNotificationCenter）');
  });
  document.getElementById('demo-refresh')?.addEventListener('click', () => {
    renderDemoTasks();
    showDemoToast(currentLang === 'en' ? '↻ Plan sections refreshed' : '↻ 计划列表已刷新');
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

  // Native Dialog fallbacks (returnValue reset + light dismiss when closedby is absent + Invoker Commands)
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

  // Copy Button handler (copy-button guide: capture command listener, opacity feedback, repeated VoiceOver msg)
  const copyTimers = new WeakMap();
  let lastCopyMessage = '';
  const handleCopyCommand = async (btn) => {
    const targetId = btn.getAttribute('commandfor');
    const source = targetId ? document.getElementById(targetId) : null;
    const container = btn.closest('.copy');
    const tip = container?.querySelector('.tip');
    if (!source || !container || !tip) return;

    clearTimeout(copyTimers.get(btn));
    container.removeAttribute('data-copied');
    container.removeAttribute('data-failed');

    const report = (ok) => {
      let msg = ok ? t('copied') : t('copy_fail');
      if (msg === lastCopyMessage) msg += '\u00A0';
      lastCopyMessage = msg;
      tip.textContent = '';
      void btn.offsetWidth;
      container.setAttribute(ok ? 'data-copied' : 'data-failed', '');
      requestAnimationFrame(() => { tip.textContent = msg; });
      copyTimers.set(btn, setTimeout(() => {
        container.removeAttribute('data-copied');
        container.removeAttribute('data-failed');
        tip.textContent = '';
      }, 2000));
    };

    try {
      await navigator.clipboard.writeText(source.innerText.trim());
      report(true);
    } catch (_) {
      report(false);
    }
  };

  if ('CommandEvent' in window) {
    document.addEventListener('command', (e) => {
      if (e.command === '--copy' && e.source) handleCopyCommand(e.source);
    }, true);
  } else {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button[command="--copy"][commandfor]');
      if (btn) handleCopyCommand(btn);
    });
  }

  // Scroll Progress Fallback (scroll-progress-indicator guide)
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const progressEl = document.getElementById('scroll-progress');
    if (progressEl) {
      window.addEventListener('scroll', () => {
        const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const pct = Math.min(1, Math.max(0, window.scrollY / scrollable));
        progressEl.style.transform = `scaleX(${pct})`;
      }, { passive: true });
    }
  }

  // Global Listeners
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('grid-toggle')?.addEventListener('click', toggleGridOverlay);
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'g' || e.key === 'G') && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = document.activeElement?.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !document.querySelector('dialog[open]')) {
        toggleGridOverlay();
      }
    }
  });
  colorSchemeQuery.addEventListener('change', updateThemeLabel);
  window.addEventListener('storage', (e) => {
    if (e.key === 'pickplan_color_scheme') {
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute('content', e.newValue === 'light' || e.newValue === 'dark' ? e.newValue : 'light dark');
      updateThemeLabel();
    }
  });
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langBtn));
  });

  initTabGroup('[data-device-target]', 'panel', 'data-device-target');
  initTabGroup('[data-install-target]', 'inst-panel', 'data-install-target');
  applyLanguage(currentLang);
})();
