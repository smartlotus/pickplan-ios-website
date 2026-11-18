# Pickplan iOS & iPadOS · 官网、产品影片工作室 & 装机指南

> 线上访问：https://pickplan-ios.pages.dev  
> 原生 SwiftUI App 仓库：[`smartlotus/pickplan-ios`](https://github.com/smartlotus/pickplan-ios)

本仓库为 **100% 原生 iOS & iPadOS 版 Pickplan（SwiftUI 26 Liquid Glass）** 的展示官网、交互模拟器与 1080p60 产品介绍影片生成工程，部署于 **Cloudflare Pages**，并严格按照 Google Chrome DevRel [`modern-web-guidance`](https://github.com/GoogleChrome/modern-web-guidance) 现代 Web 最佳实践编写。

---

## 仓库结构

```text
pickplan-ios-website/
├── site/                          # Cloudflare Pages 静态发布目录（Pure Native Showcase）
│   ├── index.html                 # 极简曜黑/暖纸液态玻璃主展示页（双语 + 原生 UI 交互演示 + .ipa 装机指南）
│   ├── styles/main.css            # 基于 modern-web-guidance 的样式层（scroll-timeline, View Transitions, dialog[open]）
│   ├── scripts/showcase.js        # 交互引擎（🔔通知、点删Undo、AI草稿编辑/加入、Tabs 键盘导航、Invoker Copy）
│   └── assets/
│       ├── pickplanlogo.jpg       # 原仓库官方品牌图标
│       ├── apple-touch-icon.png   # 1024×1024 主图标
│       ├── video-poster.jpg       # 影片高光封面帧
│       └── pickplan-ios-intro.mp4 # 36s 1920×1080@60fps 含原创声景的产品介绍片
└── video-studio/                  # 确定性 1080p60 视频渲染流水线
    ├── generate_audio.py          # 48kHz Stereo 氛围极简合成音轨生成器
    ├── stage.html                 # 6 幕 CSS/JS 精确帧控舞台（还原 Android→iOS 原生交互）
    └── render.mjs                 # Playwright Headless Chrome + ffmpeg-static 渲染脚本
```

---

## 本地运行与重新渲染宣传片

```bash
# 1. 本地预览官网
npx serve site

# 2. 重新合成音频并渲染 1080p60 宣传片（输出 site/assets/pickplan-ios-intro.mp4）
cd video-studio
npm install
python3 generate_audio.py
node render.mjs

# 3. 发布到 Cloudflare Pages
wrangler pages deploy site --project-name pickplan-ios
```

---

## 遵循的 Google `modern-web-guidance` 规范清单

- `dark-mode`：`color-scheme: dark light` 与 `<meta name="color-scheme">` + View Transitions 平滑切换曜黑/暖纸主题，禁用 `scrollbar-color` 动画。
- `dialog` & `prevent-page-scroll-under-modal-dialog` & `animate-to-from-top-layer`：架构对比弹窗与 `.pickplan.json` 规范弹窗均使用原生 `<dialog closedby="any">`、`dialog[open]`、`:modal { overscroll-behavior: contain; }` 与 `@starting-style`。
- `tabs`：iPhone / iPad 切换与三种零费用 `.ipa` 原生装机页签采用 `role="tablist"`、方向键导航、伪元素边框选中态及 `hidden="until-found"`。
- `copy-button` & `custom-button-actions`：复制终端打包/工作流命令使用 `command="--copy"` 与 `opacity` 状态提示冒泡，保证无障碍播报与 forced-colors 兼容。
- `scroll-progress-indicator` & `scroll-entry-exit-effects`：顶部 2px 滚动进度条与卡片入场视差通过 `@supports ((animation-timeline: scroll()) and (animation-range: ...))` + `prefers-reduced-motion: no-preference` 纯 CSS 驱动。
