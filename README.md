# GoGo Landing Page

A fast, localized landing page for the **GoGo Travel App** — promoting events, attractions, concerts, restaurants, and tours in a single application. Built with **Vite**, **pure HTML/CSS/JS**, and **Node.js tooling** for SEO and multi-language support.

---

## 🌍 Features

-   ✅ Multi-language support: `en`, `ru`, `zh`
-   ✅ Static pre-generated HTML per language
-   ✅ SEO-optimized metadata per locale
-   ✅ Open Graph & Apple Touch icons
-   ✅ Responsive layout
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

---

## 📜 Custom Scripts

### 1. 🔁 Localized HTML Generation

Generates localized `index.html, ru/index.html, zh/index.html` for each supported language from a template and JSON files.

**Script:** `src/js/localize.js`  
**Run:** `npm run localize`

### 2. 🔁 Resizing images

Generates resized (1920/1024/512), converted (AVIF/WEBP), compressed images in `src/images/resized` for each image in `src/images/originals`

**Script:** `src/js/process-images.js`  
**Run:** `npm run process-images`

### 3. 🔁 Inlining CSS

After building the project with Vite, this script will inline the compiled CSS into your final HTML files. It replaces the external `<link rel="stylesheet">` tag with a `<style>` block, improving load performance and reducing external file dependencies.

**Script:** `src/js/inline-css.js`  
**Run:** `npm run inline-css`
