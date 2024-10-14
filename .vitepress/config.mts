import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VBC Docs",
  description: "An Understanding of Virtron Boxing Club",
  themeConfig: {
    // remove appearance and defaultMode from here
    nav: [
      { text: 'Guide', link: '/what-is-vbc.html' },
      { text: 'Reference', link: '/#' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is VBC?', link: '/what-is-vbc' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Obtaining a wallet', link: '/wallet' }
        ]
      },
      // ... your other sidebar configuration
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vince489' }
    ]
  },

  // Enable dark mode by default using the config
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            :root {
              color-scheme: dark;
            }
          `
        }
      }
    }
  }
})
