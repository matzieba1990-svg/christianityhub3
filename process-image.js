const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage() {
  const inputPath = path.join(__dirname, 'rosary_input.png'); // I will name the uploaded file this way
  const outputPath = path.join(__dirname, 'public', 'images', 'rozaniec.jpg');

  if (!fs.existsSync(inputPath)) {
    console.error('Error: input file not found');
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const size = Math.min(metadata.width, metadata.height);

    await image
      .extract({
        left: Math.floor((metadata.width - size) / 2),
        top: Math.floor((metadata.height - size) / 2),
        width: size,
        height: size
      })
      .resize(800, 800)
      .toFormat('jpeg', { quality: 90 })
      .toFile(outputPath);

    console.log('Success: Image processed and saved to public/images/rozaniec.jpg');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
