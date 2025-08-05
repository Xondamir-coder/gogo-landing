// generate-localized-htmls.js
import fs from 'fs';
import path from 'path';

const supportedLanguages = ['en', 'ru', 'zh'];
const template = fs.readFileSync('index.template.html', 'utf-8');
const localesDir = path.resolve('src/locales');

supportedLanguages.forEach(lang => {
	const localePath = path.join(localesDir, `${lang}.json`);
	const content = fs.readFileSync(localePath, 'utf-8');
	const data = JSON.parse(content);

	let html = template;

	Object.entries(data).forEach(([key, value]) => {
		html = html.replaceAll(`{${key}}`, value);
	});

	html = html.replaceAll('{lang}', lang);

	// ✨ Output structure
	const outputPath = lang === 'en' ? 'index.html' : path.join(lang, 'index.html'); // e.g., ru/index.html

	// Ensure folder exists
	const outputDir = path.dirname(outputPath);
	fs.mkdirSync(outputDir, { recursive: true });

	fs.writeFileSync(outputPath, html, 'utf-8');
	console.log(`✅ ${outputPath} created`);
});
