// @ts-check
// `@type` JSDoc 注解允许编辑器自动补全和类型检查
// (与 `@ts-check` 配合使用时)。
// 有多种等效的方式来声明你的 Docusaurus 配置。
// 参见: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 此代码在 Node.js 中运行 - 请勿在此处使用客户端代码（浏览器 API、JSX...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站标题，显示在浏览器标签页和导航栏中
  title: 'Pyden',
  // 网站标语，简短描述你的网站
  tagline: 'Pyden是个人博客网站,分享AI最新事件,项目搭建教程,以及自己遇到的一点事情',
  // 网站图标，显示在浏览器标签页中
  favicon: 'img/favicon.ico',

  // 未来功能标志，参见 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提高与即将推出的 Docusaurus v4 的兼容性
  },

  // 在此设置你网站的生产环境 URL
  url: 'https://pyden.dev',
  // 设置提供你网站服务的 /<baseUrl>/ 路径名
  // 对于 GitHub pages 部署，通常为 '/<projectName>/'
  baseUrl: '/',

  // GitHub pages 部署配置。
  // 如果你不是使用 GitHub pages，则不需要这些。
  organizationName: 'facebook', // 通常是你的 GitHub 组织/用户名。
  projectName: 'docusaurus', // 通常是你的仓库名称。

  // 处理损坏链接的策略：'throw' 会抛出错误，'warn' 会显示警告，'ignore' 会忽略
  onBrokenLinks: 'throw',

  // 即使你不使用国际化，你也可以使用此字段来设置
  // 有用的元数据，如 html lang。例如，如果你的网站是中文，你
  // 可能想将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将此更改为你自己的仓库。
          // 移除此项可删除"编辑此页面"链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将此更改为你自己的仓库。
          // 移除此项可删除"编辑此页面"链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 强制执行博客最佳实践的有用选项
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          filename: 'sitemap.xml',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cheat',
        path: 'cheat',
        routeBasePath: 'cheat',
        sidebarPath: './sidebarsCheat.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你项目的社交卡片
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        { name: 'keywords', content: 'AI教程, 前端笔记, Docker, 明月文档博客' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      // 颜色模式配置
      colorMode: {
        // 是否遵循系统偏好设置（暗色/亮色模式）
        respectPrefersColorScheme: true,
      },
      // 导航栏配置
      navbar: {
        // 导航栏标题
        title: 'Pyden',
        logo: {
          // 网站图标的替代文本
          alt: '我的网站 Logo',
          // 网站图标的路径
          src: 'img/logo.svg',
        },
        // 导航栏项目列表
        items: [
          {
            // 文档侧边栏类型
            type: 'docSidebar',
            // 侧边栏 ID
            sidebarId: 'tutorialSidebar',
            // 位置：左侧
            position: 'left',
            // 显示标签
            label: '文档',
          },
          
          {
            type: 'docSidebar',
            sidebarId: 'cheatSidebar',
            docsPluginId: 'cheat',
            position: 'left',
            label: '科技分享',
          },
          // 博客链接，位置在左侧
          {to: '/blog', label: '博客', position: 'left'},
          {
            // GitHub 链接，位置在右侧
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 页脚配置
      footer: {
        // 页脚样式：'dark' 或 'light'
        style: 'dark',
        // 页脚链接分组
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        // 版权信息
        copyright: `版权所有 © ${new Date().getFullYear()} Pyden公司。使用 Docusaurus 构建。`,
      },
      // 代码高亮配置
      prism: {
        // 默认（亮色）主题
        theme: prismThemes.github,
        // 暗色主题
        darkTheme: prismThemes.dracula,
      },
    }),
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pyden',
        url: 'https://pyden.dev',
        logo: 'https://pyden.dev/img/logo.svg',
      }),
    },
  ],
};

export default config;
