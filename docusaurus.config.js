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
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'og:title', content: 'Veteran Database' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://docs.veterandb.com/' },
        { name: 'og:image', content: 'https://uploads.veterandb.com/military/logo-green.png' },
        { name: 'og:site_name', content: 'Veteran Database' },
        {
          name: 'og:description',
          content: 'The official docs for our VeteranDB platform, including all products in our ecosystem.',
        },
        { name: 'og:email', content: 'hello@veterandb.com' },
        { name: 'og:locality', content: 'Charlotte' },
        { name: 'og:region', content: 'NC' },
        { name: 'og:country-name', content: 'USA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@VeteranDatabase' },
        { name: 'twitter:creator', content: '@VeteranDatabase' },
      ],
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
            title: 'Stores',
            items: [
              {
                label: 'Exchange',
                href: 'https://exchange.veterandb.com',
              },
              {
                label: 'Gear Store',
                href: 'https://gear.veterandb.com',
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
                href: 'https://app.veterandb.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/veterandb',
              },
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/veterandbcommunity',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/veterandatabase/',
              },
              {
                label: 'Truth',
                href: 'https://truthsocial.com/@VeteranDatabase',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VeteranDatabase',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@VeteranDB',
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
