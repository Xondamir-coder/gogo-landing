# GoGo Landing Page

A fast, localized landing page for the **GoGo Travel App** — promoting events, attractions, concerts, restaurants, and tours in a single application. Built with **Vite**, **pure HTML/CSS/JS**, and **Node.js tooling** for SEO and multi-language support.

---

## 🌍 Features

-   ✅ Multi-language support: `en`, `ru`, `zh`
-   ✅ Static pre-generated HTML per language
-   ✅ SEO-optimized metadata per locale
-   ✅ Open Graph & Apple Touch icons
-   ✅ Responsive layout
-   ✅ Scrollable sections with min-item widths
-   ✅ Dev-friendly structure, production-optimized output

---

## 🛠️ Tech Stack

-   [Vite](https://vitejs.dev/) for fast development and builds
-   Pure JS (no frameworks)
-   SCSS for styling (bundled by Vite)
-   Node.js scripts for:
    -   HTML generation from templates
    -   Localization using JSON files
    -   Resizing (1920, 1024, 512), converting (AVIF, WEBP) of images using [ImageMagick](https://imagemagick.org/)
