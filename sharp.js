/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Declare target directories
const targets = [
  path.resolve(__dirname, 'src/public'),
  path.resolve(__dirname, 'src/public/heros')
];

const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

// List of supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.tiff'];

// Function to process images in a given target directory
const processImages = (target) => {
  fs.readdirSync(target).forEach(image => {
    const ext = path.extname(image).toLowerCase();
    
    if (supportedFormats.includes(ext)) {
      console.log(`Processing image: ${image}`);

      // Resize the image to a width of 800px, with prefix -large.jpg
      sharp(`${target}/${image}`)
        .resize(800)
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`
        ))
        .then(info => console.log(`Created large image: ${info}`))
        .catch(err => console.error(`Error processing ${image}:`, err));

      // Resize the image to a width of 480px, with prefix -small.jpg
      sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`
        ))
        .then(info => console.log(`Created small image: ${info}`))
        .catch(err => console.error(`Error processing ${image}:`, err));
    } else {
      console.log(`Unsupported format for file: ${image}`);
    }
  });
};

// Process images for each target directory
targets.forEach(target => processImages(target));
