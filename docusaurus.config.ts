import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'G.U.Group — Legal & Policies',
  tagline: 'Public legal and policy documents for G.U. Group products',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://legal.gu.net',
  baseUrl: '/',

  organizationName: 'gu-corp',
  projectName: 'public-legal-docs',

  onBrokenLinks: 'warn',

  // English and Japanese are the authoritative languages. If other locales are
  // added they are reference-only — the English version is authoritative.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
      ja: { label: '日本語', direction: 'ltr', htmlLang: 'ja-JP' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/gu-corp/public-legal-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'G.U.Group Logo',
        src: 'img/gug-logo.svg',
        srcDark: 'img/gug-logo.svg',
        href: '/',
        width: 180,
        height: 50,
      },
      items: [
        {
          href: 'https://www.gu-group.com',
          label: 'G.U.Group',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'G.U.Group Logo',
        src: 'img/gug-logo-w.svg',
        href: 'https://www.gu-group.com',
        width: 150,
      },
      links: [
        {
          items: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
            { label: 'Cookie Policy', to: '/cookies' },
            { label: 'G.U.Group', href: 'https://www.gu-group.com' },
          ],
        },
        {
          items: [
            { label: 'Facebook', href: 'https://www.facebook.com/gugroup/' },
            { label: 'Twitter', href: 'https://twitter.com/GU_Group' },
            { label: 'Note', href: 'https://note.com/gu_group/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gu-group/' },
            { label: 'Qiita', href: 'https://qiita.com/organizations/gu-group' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} G.U.Group, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'))
          return postcssOptions
        },
      }
    },
  ],
}

export default config
