---
title: About
---

# About this site

This site reviews the most watched movies of 2026, based on a Letterboxd list of films ranked by number of views.

## How it works

1. **Strapi** is our headless CMS. We write each review in the Strapi admin panel and publish it.
2. Strapi makes the published reviews available through a **REST API** at `/api/reviews`.
3. **VitePress** requests that API when the site is built. It creates the review list and one page for each review.
4. The finished static site is published on **GitHub Pages**.

Because the pages are built ahead of time, visitors load plain HTML files and the site stays fast.

## Built with

- Strapi 5 (headless CMS, SQLite database)
- VitePress and Vue (static site generator)
- GitHub Pages (hosting)
