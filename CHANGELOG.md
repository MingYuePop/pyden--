# 变更记录（2025-10-27）

本文档记录本次针对 Pyden（明月文档博客）站点从 SEO 到“科技分享”独立文档区（/cheat）的全部改动、验证步骤与后续建议。

## 概要
- 新增全局 SEO 配置（metadata、JSON‑LD、sitemap、robots.txt）。
- 首页 SEO 标题与描述优化。
- 新增“科技分享”独立文档区（拥有独立侧边栏与路由 /cheat），并接入顶部导航。
- 清理旧入口（移除 sidebars.js 中 tech-share）。

---

## 详细变更

### 1) SEO 相关
- 文件：`my-website/docusaurus.config.js`
  - `themeConfig.metadata` 新增：
    - `keywords: AI教程, 前端笔记, Docker, 明月文档博客`
    - `twitter:card: summary_large_image`
  - `presets[classic].sitemap` 新增：
    - `filename: sitemap.xml`
    - `changefreq: weekly`
    - `priority: 0.5`
    - `ignorePatterns: ['/tags/**']`
  - 根级新增 `headTags` 注入 Organization JSON‑LD：
    - `name: Pyden`, `url: https://pyden.dev`, `logo: /img/logo.svg`
- 文件：`my-website/static/robots.txt`
  - 新增，内容：
    ```
    User-agent: *
    Disallow:
    ```
- 文件：`my-website/src/pages/index.js`
  - `<Layout>` 的 `title` 与 `description` 更新为中文、贴合站点定位。

### 2) 新文档区“科技分享”（独立，不与 docs 共用）
- 多实例 docs 插件（官方推荐方式）
  - 文件：`my-website/docusaurus.config.js`
    - 新增插件实例 `@docusaurus/plugin-content-docs`：
      - `id: 'cheat'`
      - `path: 'tech'`（磁盘目录，目前命名为 tech，可后续改为 cheat）
      - `routeBasePath: 'cheat'`（访问前缀为 `/cheat`）
      - `sidebarPath: './sidebarsTech.js'`
  - 顶部导航改为“侧边栏入口”而非单页：
    - `type: 'docSidebar'`
    - `sidebarId: 'cheatSidebar'`
    - `docsPluginId: 'cheat'`
    - `label: '科技分享'`
- 独立侧边栏（手动）
  - 文件：`my-website/sidebarsTech.js`
    - 导出 `cheatSidebar`，当前仅包含：`['intro']`
- 新文档区入口页
  - 文件：`my-website/tech/intro.md`
    - `id: intro`，可通过 `/cheat/intro` 访问

### 3) 旧入口清理
- 文件：`my-website/sidebars.js`
  - 已移除 `'tech-share'` 条目，避免与新文档区重复。
- 文件：`my-website/docs/tech-share.md`
  - 仍存在于磁盘（为保守起见未直接删除）。若确认无需保留，建议删除。

---

## 本地验证步骤
1. 在 `my-website/` 目录运行：
   - `npm start`
2. 验证 SEO：
   - 打开页面，用浏览器 DevTools 检查 `<head>` 中的 `meta`、`script[type="application/ld+json"]` 是否生效。
   - 生产构建后（`npm run build`）检查 `build/sitemap.xml` 与 `build/robots.txt`。
3. 验证“科技分享”文档区：
   - 顶部导航点击“科技分享”，应跳转到 `/cheat/intro`。
   - 左侧应显示独立的 `cheatSidebar` 侧边栏（非共享）。

---

## 常见问题与提示
- 开发时若遇到“Cannot read properties of undefined (reading 'id')”：
  - 确认导航栏的 `docsPluginId` 与插件实例的 `id` 一致（均为 `cheat`）。
  - 确认 `sidebarsTech.js` 导出了 `cheatSidebar`，且导航栏的 `sidebarId` 指向 `cheatSidebar`。
- 编译时关于 Markdown 链接的警告：
  - `docs/前端笔记/congratulations.md` 中部分示例链接指向不存在的本地文档；如无需要可移除或改为外链。

---

## 回滚指南
- 导航栏：移除“科技分享”的 `docSidebar` 项即可回滚导航入口。
- 新文档区：删除 `plugins` 中 id 为 `cheat` 的 docs 实例，并删除 `tech/` 与 `sidebarsTech.js`。
- SEO 配置：移除 `metadata`、`headTags`、`sitemap` 与 `static/robots.txt`。
- 首页 SEO：还原 `src/pages/index.js` 的 `title/description`。

---

## 后续建议
- 将磁盘目录 `tech/` 重命名为 `cheat/`（可读性更强），并同步更新 `docusaurus.config.js` 的 `path: 'cheat'`。
- 在 `tech/`（或未来的 `cheat/`）下规划分类结构：
  - 示例：AI 工具与工作流 / 前端工程化 / 云原生与容器化 / DevOps 实践
  - 使用手动侧边栏继续扩展 `cheatSidebar`。
- 为“科技分享”重要页面补充 `image`（社交卡片图 1200×630）与 `keywords`，进一步优化 SEO。
