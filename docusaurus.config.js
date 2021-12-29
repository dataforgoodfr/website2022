// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data For Good',
  tagline: "Le numérique au service de l'intérêt général",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch:"main",
  favicon: 'img/logo-dfg-new.png',
  organizationName: 'dataforgoodfr', // Usually your GitHub org/user name.
  projectName: 'dataforgoodfr.github.io', // Usually your repo name.
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'projects',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'projects',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './projects',
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Data For Good',
        logo: {
          alt: 'Data For Good Logo',
          src: 'img/logo-dfg-new.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'dataforgood',
            position: 'left',
            label: "🌎 Qui sommes-nous ?",
          },
          {to: '/projects', label: '🔥 Projets', position: 'left'},
          {to: '/blog', label: '📚 Blog', position: 'left'},
          {to: '/join', label: '💪 Rejoindre la communauté', position: 'right'},
          {to: '/propose', label: '💡 Proposer un projet', position: 'right'},
          {
            href: 'https://dataforgood.slite.com/p/channel/F9UR6bhuYCPAtvfLDje8Zc/notes/p8MSVDq6k',
            label: 'FAQ',
            position: 'right',
          },
          {
            href: 'https://github.com/dataforgoodfr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: "L'association Data For Good",
                to: '/docs/dataforgood',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dataforgoodfr',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ',
              },
              {
                label: 'Meetup',
                href: 'https://www.meetup.com/Data-for-Good-FR',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/dataforgood',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dataforgood_fr',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/dataforgood',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data For Good - Avec amour depuis 2014 ❤`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
