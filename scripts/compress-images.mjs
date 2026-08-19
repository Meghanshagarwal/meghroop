import sharp from 'sharp'
import fs from 'fs'

const jobs = [
  // Unused OG PNGs (verified: og-image.png IS used in JsonLd.tsx LocalBusiness.image;
  // og-twitter/og-square/og-story are unreferenced in code but kept for safety).
  { file: 'public/og-image.png', type: 'png', width: 1200, height: 630 },
  { file: 'public/og-twitter.png', type: 'png', width: 1200, height: 675 },
  { file: 'public/og-square.png', type: 'png', width: 1080, height: 1080 },
  { file: 'public/og-story.png', type: 'png', width: 1080, height: 1920 },
  // Unreferenced hero image, wildly oversized (5955x3349) for any web usage.
  { file: 'public/images/project-hero.jpeg', type: 'jpeg', maxWidth: 2400 },
]

for (const job of jobs) {
  const before = fs.statSync(job.file).size
  const img = sharp(job.file)
  const meta = await img.metadata()

  if (job.type === 'png') {
    // Keep exact dimensions (OG aspect ratio matters), just re-encode with strong compression.
    await sharp(job.file)
      .resize(job.width, job.height, { fit: 'cover' })
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toFile(job.file + '.tmp')
  } else {
    const targetWidth = meta.width > job.maxWidth ? job.maxWidth : meta.width
    await sharp(job.file)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(job.file + '.tmp')
  }

  fs.renameSync(job.file + '.tmp', job.file)
  const after = fs.statSync(job.file).size
  console.log(`${job.file}: ${before} -> ${after} bytes (${(100 - (after / before) * 100).toFixed(1)}% smaller)`)
}
