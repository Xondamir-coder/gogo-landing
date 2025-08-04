// scripts/process-images.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/images/originals';
const outputDir = 'src/images/resized';

const resizeMap = {
	512: 512 / 1920,
	1024: 1024 / 1920,
	1920: 1
};

const additionalFormats = ['avif', 'webp'];

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const run = async () => {
	const files = fs.readdirSync(inputDir).filter(file => /\.(jpe?g|png)$/i.test(file));

	for (const file of files) {
		const inputPath = path.join(inputDir, file);
		const ext = path.extname(file).slice(1).toLowerCase(); // 'jpg' or 'png'
		const baseName = path.basename(file, path.extname(file));

		const metadata = await sharp(inputPath).metadata();
		const originalWidth = metadata.width;

		for (const [label, scale] of Object.entries(resizeMap)) {
			const targetWidth = Math.round(originalWidth * scale);
			const image = sharp(inputPath).resize({ width: targetWidth });

			// Only generate fallback (.png/.jpg) for 1920
			if (label === '1920') {
				const fallbackPath = path.join(outputDir, `${baseName}-1920.${ext}`);
				await image.toFile(fallbackPath);
				console.log(`✅ Created fallback: ${fallbackPath}`);
			}

			// Always generate AVIF and WebP for all sizes
			for (const format of additionalFormats) {
				const outputPath = path.join(outputDir, `${baseName}-${label}.${format}`);
				await image.toFormat(format).toFile(outputPath);
				console.log(`✅ Created: ${outputPath}`);
			}
		}
	}
};

run();
