const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const workspaceDir = path.resolve(__dirname, '..');
const logoKitPath = path.join(workspaceDir, 'public', 'logo-kit.html');
const publicDir = path.join(workspaceDir, 'public');

console.log('Starting Website Favicon Generation...');
console.log('Reading brand logo kit:', logoKitPath);

// 1. Read logo-kit.html
let html;
try {
  html = fs.readFileSync(logoKitPath, 'utf8');
} catch (err) {
  console.error('Error reading logo-kit.html:', err.message);
  process.exit(1);
}

// 2. Extract transparent PNG Base64 for the Favicon Mark
// Look for href="data:image/png;base64,..." associated with download="meghroop-favicon-mark.png"
const faviconMatch = html.match(/href="(data:image\/png;base64,([^"]+))"[^>]*download="meghroop-favicon-mark\.png"/);

if (!faviconMatch) {
  console.error('Failed to locate Favicon / Icon Mark base64 string in logo-kit.html.');
  process.exit(1);
}

const base64Data = faviconMatch[2];
const monogramBuffer = Buffer.from(base64Data, 'base64');
console.log(`Extracted favicon base64 data successfully (length: ${base64Data.length} chars).`);

// Pure JS multi-resolution ICO generator function
function createIco(pngBuffers) {
  // pngBuffers is an array of objects: { buffer, width, height }
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type (1 = ICO)
  header.writeUInt16LE(pngBuffers.length, 4); // Number of images

  const entries = [];
  let currentOffset = 6 + 16 * pngBuffers.length;

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(currentOffset, 12); // Image offset in file

    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(x => x.buffer)]);
}

async function main() {
  try {
    // Helper to trim transparent borders and resize with balanced padding
    const trimAndResize = async (buffer, size, padRatio = 0.08) => {
      const pad = Math.max(1, Math.round(size * padRatio));
      const innerSize = size - pad * 2;
      return sharp(buffer)
        .trim()
        .resize(innerSize, innerSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .extend({
          top: pad,
          bottom: pad,
          left: pad,
          right: pad,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();
    };

    // Generate various standard sizes directly from high-resolution monogramBuffer
    const sizes = [
      { name: 'favicon-512.png', size: 512 },
      { name: 'icon-384.png', size: 384 },
      { name: 'icon-192.png', size: 192 },
      { name: 'icon-96.png', size: 96 },
      { name: 'apple-touch-icon.png', size: 180 }, // Apple Touch Icon (180x180)
    ];

    for (const target of sizes) {
      const outputPath = path.join(publicDir, target.name);
      const buf = await trimAndResize(monogramBuffer, target.size, 0.08);
      fs.writeFileSync(outputPath, buf);
      console.log(`Generated ${target.name} (${target.size}x${target.size})`);
    }

    // 3. Generate icon-512-maskable.png (solid #0d0d0d background, centred and padded monogram)
    // Centering a 320x320 monogram inside 512x512 solid black-gray background
    const maskableOutput = path.join(publicDir, 'icon-512-maskable.png');
    const monogramResizedForMaskable = await sharp(monogramBuffer)
      .trim()
      .resize(320, 320, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    await sharp({
      create: {
        width: 512,
        height: 512,
        channels: 4,
        background: { r: 13, g: 13, b: 13, alpha: 1 } // #0d0d0d
      }
    })
      .composite([{ input: monogramResizedForMaskable, gravity: 'center' }])
      .toFile(maskableOutput);
    console.log('Generated icon-512-maskable.png (512x512, solid #0d0d0d background)');

    // 4. Generate multi-resolution favicon.ico (containing 16x16, 32x32, and 48x48 PNG buffers)
    console.log('Assembling multi-resolution favicon.ico...');
    const icoSizes = [16, 32, 48];
    const icoBuffers = [];

    for (const size of icoSizes) {
      // Use a smaller padding ratio (4%) for tiny sizes to make them look larger/crisper in browser tabs
      const buf = await trimAndResize(monogramBuffer, size, 0.04);
      icoBuffers.push({ buffer: buf, width: size, height: size });
    }

    const icoOutput = path.join(publicDir, 'favicon.ico');
    const appIcoOutput = path.join(workspaceDir, 'app', 'favicon.ico');
    const icoBuffer = createIco(icoBuffers);
    fs.writeFileSync(icoOutput, icoBuffer);
    fs.writeFileSync(appIcoOutput, icoBuffer);
    console.log(`Generated favicon.ico successfully in /public and /app containing [16, 32, 48]px layers.`);

    console.log('All favicon PNG and ICO assets successfully generated in /public!');
  } catch (err) {
    console.error('Error during image generation:', err.message);
    process.exit(1);
  }
}

main();
