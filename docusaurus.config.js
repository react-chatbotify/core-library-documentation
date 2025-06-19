// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Extend the Webpack configuration
  plugins: [
    function myWebpackPlugin() {
      return {
        name: 'custom-webpack-plugin',
        configureWebpack(config, isServer) {
          return {
            module: {
              rules: [
                {
                  test: /\.tsx?$/, // Match TypeScript files
                  use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                      presets: [require.resolve('@babel/preset-typescript')],
                    },
                  },
                },
              ],
            },
          };
        },
      };
    },
  ],

  title: 'React ChatBotify',
  tagline: 'A modern React library for creating flexible and extensible chatbots.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.PUBLIC_SITE_ROOT || 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/v2',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'react-chatbotify', // Usually your GitHub org/user name.
  projectName: 'react-chatbotify-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // This line needs to be added
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'react, chatbot, chat, chatbotify, conversational-chatbot'}
      ],
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'React ChatBotify',
        logo: {
          alt: 'React ChatBotify Logo',
          src: 'img/react-chatbotify.png',
          href: process.env.PUBLIC_SITE_ROOT || '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Plugins',
            to: (process.env.PUBLIC_SITE_ROOT || '') + '/plugins',
            position: 'left',
          },
          {
            label: 'Themes',
            to: (process.env.PUBLIC_SITE_ROOT || '') + '/themes',
            position: 'left',
          },
          {
            label: 'Playground',
            to: '/playground',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'About Us',
            position: 'left',
            items: [
              {
                label: 'Our Team',
                to: (process.env.PUBLIC_SITE_ROOT || '') + '/our-team',
              },
              {
                label: 'Terms of Service',
                to: (process.env.PUBLIC_SITE_ROOT || '') + '/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                to: (process.env.PUBLIC_SITE_ROOT || '') + '/privacy-policy',
              },
            ],
          },
          {
            href: 'https://github.com/react-chatbotify/react-chatbotify',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6R4DK4G5Zh',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/react.chatbotify',
              },
              {
                label: 'Twitter (X)',
                href: 'https://x.com/reactchatbotify',
              },
            ],
          },
        ],
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'JOCIO5HXBI',
  
        // Public API key: it is safe to commit it
        apiKey: 'eb2e5725e235ffcdbaa35ea6cccb00be',
  
        indexName: 'react-chatbotify-tjtanjin-v2',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    })
};

module.exports = config;
