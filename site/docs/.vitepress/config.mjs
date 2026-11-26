import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Movie Reviews',
  description: 'Reviews of the most watched 2026 movies, managed in Strapi',
  base: '/mtm6407-headless-cms/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reviews', link: '/reviews/' },
      { text: 'About', link: '/about' }
    ]
  }
})
