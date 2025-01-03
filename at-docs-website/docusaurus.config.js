// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AskTable',
  tagline: 'AskTable 人工智能驱动的数据问答解决方案',
  favicon: 'img/asktable/at-logo-mini.jpg',

  // Set the production url of your site here
  url: 'https://docs.asktable.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DataMini', // Usually your GitHub org/user name.
  projectName: 'asktable-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DataMini/asktable-docs/tree/main/at-docs-website',
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/asktable/at_logo.png',
      navbar: {
        title: '产品文档',
        logo: {
          alt: 'AskTable',
          src: 'img/asktable/at_logo.png',
        },
        items: [
//          {
//            type: 'docSidebar',
//            sidebarId: 'asktableSidebar',
//            position: 'left',
//            label: '文档',
//          },
        ],
      },
//      footer: {
//        style: 'dark',
//        links: [
//          {
//            title: 'Docs',
//            items: [
//              {
//                label: 'Tutorial',
//                to: '/docs/intro',
//              },
//            ],
//          },
//          {
//            title: 'Community',
//            items: [
//              {
//                label: 'Stack Overflow',
//                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//              },
//              {
//                label: 'Discord',
//                href: 'https://discordapp.com/invite/docusaurus',
//              },
//              {
//                label: 'Twitter',
//                href: 'https://twitter.com/docusaurus',
//              },
//            ],
//          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/facebook/docusaurus',
//              },
//            ],
//          },
//        ],
//        copyright: `Copyright © ${new Date().getFullYear()} DataMini, Inc. Built with Docusaurus.`,
//      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'baidu-site-verification', content: 'codeva-kkrhvRf3at' },
      ],
    }),
};

export default config;
