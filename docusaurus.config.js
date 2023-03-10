// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Veteran Database',
  tagline: 'The official docs for our VeteranDB platform, including all products in our ecosystem.',
  favicon: 'img/logo/icon-dark-bg.png',

  // Set the production url of your site here
  url: 'https://docs.veterandb.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'carbondigitalus', // Usually your GitHub org/user name.
  projectName: 'veterandb-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true, // This will enable the plugin in production
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/carbondigitalus/veterandb-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/style.scss'),
        },
      }),
    ],
  ],
  plugins: [
    // object is required, even if it's empty
    ['docusaurus-plugin-sass', {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/carbondigitalus/veterandb-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mobile',
        path: 'mobile',
        routeBasePath: 'mobile',
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/carbondigitalus/veterandb-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portal',
        path: 'portal',
        routeBasePath: 'portal',
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/carbondigitalus/veterandb-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'website',
        path: 'website',
        routeBasePath: 'website',
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/carbondigitalus/veterandb-docs/edit/main/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VeteranDB',
        logo: {
          alt: 'Veteran DB Logo',
          src: 'img/logo/icon-light-bg.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/api/intro', label: 'API', position: 'left' },
          { to: '/portal/intro', label: 'Portal', position: 'left' },
          { to: '/mobile/intro', label: 'Mobile', position: 'left' },
          { to: '/website/intro', label: 'Website', position: 'left' },
          {
            href: 'https://github.com/carbondigitalus/veterandb-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Website',
                href: 'https://veterandb.com',
              },
              {
                label: 'Portal',
                href: 'https://portal.veterandb.com',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Website',
                to: '/docs/intro',
              },
              {
                label: 'Portal',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/veterandb',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/veterandatabase/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VeteranDatabase',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://veterandb.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/carbondigitalus/veterandb-docs',
              },
            ],
          },
        ],
        copyright: `Copyright &copy; 2020-${new Date().getFullYear()} &middot; VeteranDB Docs &middot; All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
