import fs from 'fs';
import path from 'path';

// === Settings ===
const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, 'assets');
const htmlFiles = [
	path.join(distDir, 'index.html'),
	path.join(distDir, 'ru/index.html'),
	path.join(distDir, 'zh/index.html')
];

// === Step 1: Find the built CSS file ===
const cssFile = fs.readdirSync(assetsDir).find(file => file.endsWith('.css'));
if (!cssFile) {
	console.error('❌ No CSS file found in /dist/assets.');
	process.exit(1);
}
const cssPath = path.join(assetsDir, cssFile);
const cssContent = fs.readFileSync(cssPath, 'utf8');

// === Step 2: Inline into each HTML file ===
htmlFiles.forEach(filePath => {
	if (!fs.existsSync(filePath)) {
		console.warn(`⚠️ Skipping missing file: ${filePath}`);
		return;
	}

	let html = fs.readFileSync(filePath, 'utf8');

	html = html.replace(
		/<link[^>]+rel=["']stylesheet["'][^>]*>/i,
		`<style>\n${cssContent}\n</style>`
	);

	fs.writeFileSync(filePath, html);
	console.log(`✅ Inlined CSS into: ${filePath}`);
});
