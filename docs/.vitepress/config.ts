import {defineConfig} from 'vitepress';
import * as packageJson from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Petriflow',
  description: 'Next-generation end-to-end low code language based on Petri nets.',
  srcDir: 'src',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  lang: 'en-US',
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {text: 'Guides', link: '/guides'},
      {text: 'Actions API', link: '/actions'},
      {
        text: packageJson.version,
        items: [
          {text: 'Changelog', link: 'https://github.com/netgrif/petriflow/blob/main/CHANGELOG.md'},
          {text: 'License', link: 'https://github.com/netgrif/petriflow/blob/main/LICENSE'},
          {text: 'Contributing', link: 'https://github.com/netgrif/petriflow/blob/main/CONTRIBUTING.md'},
          {text: 'Code of conduct', link: 'https://github.com/netgrif/petriflow/blob/main/CODE_OF_CONDUCT.md'},
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'},
        ],
      },
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/netgrif/petriflow'},
    ],

    footer: {
      message: 'Released under the Apache 2.0 license.',
      copyright: 'Copyright © 2025 Netgrif GmbH. All rights reserved.'
    },

    search: {
      provider: 'local',
    }
  },

  sitemap: {
    hostname: 'https://petriflow.com',
  },
});
