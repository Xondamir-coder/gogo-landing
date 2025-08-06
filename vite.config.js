import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import htmlMinifier from 'vite-plugin-html-minifier';
import Sitemap from 'vite-plugin-sitemap';
import viteCompression from 'vite-plugin-compression';

const supportedLanguages = ['en', 'ru', 'zh'];
const input = supportedLanguages.reduce((entries, lang) => {
	const file =
		lang === 'en'
			? path.resolve(__dirname, 'index.html')
			: path.resolve(__dirname, lang, 'index.html');

	entries[lang] = file;
	return entries;
}, {});

export default defineConfig(() => ({
	plugins: [
		htmlMinifier({
			minify: true
		}),
		createSvgSpritePlugin({
			symbolId: 'icon-[name]',
			exportType: 'vanilla',
			include: ['**/icons/*.svg']
		}),
		Sitemap({
			hostname: 'https://go-go.uz'
		}),
		viteCompression({ algorithm: 'brotliCompress' })
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@abstracts': path.resolve(__dirname, 'src/scss/abstracts')
		}
	},
	css: {
		postcss: {
			plugins: [autoprefixer]
		}
	},
	build: {
		target: 'es2020',
		minify: 'terser',
		cssCodeSplit: true,
		chunkSizeWarningLimit: 500,
		terserOptions: {
			compress: { drop_console: true, drop_debugger: true },
			format: { comments: false }
		},
		rollupOptions: {
			input
		}
	}
}));
