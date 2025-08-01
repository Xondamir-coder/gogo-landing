import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import htmlMinifier from 'vite-plugin-html-minifier';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig(() => ({
	plugins: [
		htmlMinifier({
			minify: true
		}),
		createSvgSpritePlugin({
			symbolId: 'icon-[name]',
			exportType: 'vanilla',
			include: ['**/icons/*.svg']
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
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) return 'vendor';
				},
				assetFileNames: 'assets/[name].[hash][extname]'
			}
		}
	}
}));
