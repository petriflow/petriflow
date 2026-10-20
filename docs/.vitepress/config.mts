import {defineConfig} from 'vitepress'
import * as packageJson from '../package.json' with {type: 'json'};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Petriflow",
  description: "Next-generation end-to-end low code language based on Petri nets.",
  srcDir: "src",

  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  lang: 'en-US',
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {text: 'Language', link: '/generated/'},
      {text: 'Guides', link: '/guides'},
      {text: 'Actions API', link: '/actions'},
      {
        text: packageJson.version,
        items: [
          {text: 'Changelog', link: 'https://github.com/petriflow/petriflow/blob/main/CHANGELOG.md'},
          {text: 'License', link: 'https://github.com/petriflow/petriflow/blob/main/LICENSE'},
          {text: 'Contributing', link: 'https://github.com/petriflow/petriflow/blob/main/CONTRIBUTING.md'},
          {text: 'Code of conduct', link: 'https://github.com/petriflow/petriflow/blob/main/CODE_OF_CONDUCT.md'},
        ],
      },
    ],

    sidebar: [
      {
        text: 'Petriflow Language',
        items: [
          {text: 'Overview', link: '/generated/'},
          {text: 'Workflow', link: '/generated/workflow'},
          {text: 'Data and forms', link: '/generated/data-and-forms'},
          {text: 'Events and permissions', link: '/generated/events-and-permissions'},
          {text: 'Coordination and queries', link: '/generated/coordination-and-queries'},
          {text: 'Research and extensions', link: '/generated/research-and-extensions'},
        ],
      },
      {text: 'Objects', link: '/objects'},
      {text: 'Examples', link: '/examples'},
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/petriflow/petriflow'},
    ],

    footer: {
      message: 'Released under the Apache 2.0 license.',
    },

    search: {
      provider: 'local',
    }
  },

  markdown: {
    math: true,
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-frappe"
    }
  },

  sitemap: {
    hostname: "https://petriflow.org"
  }

})
