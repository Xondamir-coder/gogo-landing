import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import htmlMinifier from 'vite-plugin-html-minifier';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import Sitemap from 'vite-plugin-sitemap';

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
		})
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
		}
	}
}));
