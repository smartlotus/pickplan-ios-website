# Pickplan iOS & iPadOS · 瑞士国际主义官网与产品影像仓库

> 线上访问：https://pickplan-ios.pages.dev  
> 原生 SwiftUI App 仓库：[`smartlotus/pickplan-ios`](https://github.com/smartlotus/pickplan-ios)

本仓库承载 **100% 原生 SwiftUI 版 Pickplan（iPhone & iPad Liquid Glass）** 的展示官网、交互式硬件模拟器、1080p60 宣传短片制作管线与 Cloudflare Pages 部署配置。官网前端采用 **瑞士国际主义平面风格（International Typographic Style / Josef Müller-Brockmann Grid）** 设计，并严格遵循 Google [`modern-web-guidance`](https://github.com/GoogleChrome/modern-web-guidance) 现代 Web 最佳实践。

---

## 设计系统特点

- **12 列数学建筑网格与标线系统**：基于 CSS Grid & Subgrid、`1px` 结构分割线、`2px` 主边界线与角落十字套准线，点击顶部 **`GRID [G]`** 或按键盘 `G` 键可实时开关 12 列朱红制图网格辅助线。
- **双色主题（Zürich Paper ↔ Basel Carbon）**：遵循系统 `prefers-color-scheme`，使用 `<meta name="color-scheme" content="light dark">` + CSS `light-dark()` 原生双态切换与 View Transitions。
- **流体排版与光学对齐**：全站采用 `rem` 与有界 `clamp()`、`text-wrap: balance/pretty` 以及 `text-box: trim-start / trim-both cap alphabetic`。
- **完整响应式规格矩阵与无障碍标签页**：支持 `@container` 容器查询卡片折叠的原生 `<table>`、`role="tablist"` + `hidden="until-found"`、`dialog[open]` + `@starting-style` 以及 `command="--copy"` 异步剪贴板按钮。

---

## 仓库目录与常用命令

```text
pickplan-ios-website/
├── site/                          # Cloudflare Pages 静态发布目录
│   ├── index.html                 # 瑞士网格官网（双语 + 原生 iOS/iPad 交互模拟器 + 3 种 .ipa 装机标签页）
│   ├── styles/main.css            # 12 列网格 + Subgrid + light-dark() + Container Query 响应式表
│   ├── scripts/showcase.js        # 交互模拟器、G 键网格、双态主题、Tabs 与 Invoker Copy 引擎
│   └── assets/pickplan-ios-intro.mp4
└── video-studio/                  # 确定性 1080p60 宣传短片工作室
```

```bash
# 本地预览网站
npx serve site

# 部署到 Cloudflare Pages
wrangler pages deploy site --project-name pickplan-ios --branch main
```
