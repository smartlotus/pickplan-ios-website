# Pickplan iOS Showcase, Liquid Glass Web App & Intro Film

Pickplan iOS & iPadOS（液态玻璃版）的官方展示网站、1080p60 产品介绍影片，以及可直接通过 Safari **「添加到主屏幕」** 免费安装到 iPhone 与 iPad 的独立 Web App（Cloudflare Pages 托管）。

## 核心内容

- **`site/index.html`**：Awwwards 风格中英双语产品发布站，包含可切换 iPhone / iPad 的交互舞台、介绍视频影院播放器、Bento 特性展示、本地数据金库说明与零 $99 开发者费用的三路装机指南。
- **`site/app.html`**：独立可用的 iPhone & iPad Liquid Glass PWA（`apple-mobile-web-app-capable` + Service Worker 离线支持）：
  - 手动模式（6 大智能时间分组、子任务、优先级、标签、专注番茄钟、6 秒撤销）。
  - AI 帮做（支持 DeepSeek / Kimi / Qwen / GLM / SiliconFlow / OpenAI / Custom，外加**完全离线的中英文大白话本地拆解器**）。
  - **本地数据金库**：`.pickplan.json` v2（SHA256 校验）导入导出、原 Android v1 JSON 无损导入、Markdown 导出、**定时自动本地备份与快照轮转**、快照预览与一键安全回滚、存储占用可视化与数据清理。
- **`site/assets/pickplan-ios-intro.mp4`**：1920×1080 @ 60fps 立体声产品介绍视频（由 `video-studio/` 确定性渲染合成）。

## 现代 Web 规范遵循

前端代码严格遵循 Google `modern-web-guidance` 最佳实践：原生 `<dialog closedby="any">` 模态框与 `@starting-style` 出入场、CSS `overscroll-behavior: contain` 滚动隔离、`color-scheme` 无闪烁主题切换与 `startViewTransition`、CSS Scroll-Driven Animations（含 `(animation-range: entry)` 校验与 `prefers-reduced-motion` 支持）、`linear()` 弹簧物理缓动、无障碍标签页与复制按钮。

## 本地预览与 Cloudflare 部署

```bash
# 本地静态预览
python3 -m http.server 8788 --directory site

# 部署到 Cloudflare Pages
wrangler pages deploy site --project-name pickplan-ios --branch main
```
