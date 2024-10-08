import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VBC Docs",
  description: "An Understanding of Virtron Boxing Club",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false, // Set to true if you want it collapsed by default
        items: [
          { text: 'What is VBC?', link: '/what-is-vbc' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Test Page', link: '/test-page' }
        ]
      },
      {
        text: 'Writing', // Example section like in your screenshot
        collapsed: true, // Collapsed by default
        items: [
          { text: 'Markdown Extensions', link: '/markdown-extensions' },
          { text: 'Asset Handling', link: '/asset-handling' },
          { text: 'Frontmatter', link: '/frontmatter' },
          { text: 'Using Vue in Markdown', link: '/using-vue-in-markdown' },
          { text: 'Internationalization', link: '/internationalization' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
