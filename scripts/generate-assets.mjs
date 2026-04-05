/**
 * BLACKHIDE — AI Asset Generator
 * Generates all site images and hero video using fal.ai
 *
 * Usage:
 *   node scripts/generate-assets.mjs
 *
 * Requirements:
 *   Set FAL_KEY environment variable with your fal.ai API key
 *   Get your key at: https://fal.ai/dashboard/keys
 *
 * Options (edit the CONFIG section below):
 *   GENERATE_IMAGES = true/false
 *   GENERATE_VIDEO  = true/false
 */

import { fal } from '@fal-ai/client'
import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { pipeline } from 'stream/promises'
import { get as httpsGet } from 'https'
import { get as httpGet } from 'http'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const GENERATE_IMAGES = true
const GENERATE_VIDEO = true            // Set false if you want images only first
const IMAGE_MODEL = 'fal-ai/flux-realism'  // Best for photorealistic leather shots
const VIDEO_MODEL = 'fal-ai/kling-video/v1.6/standard/text-to-video'
const IMAGE_SIZE = 'portrait_4_3'     // Options: square, portrait_4_3, landscape_16_9
// ─────────────────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const IMG_DIR = path.join(ROOT, 'public', 'images')
const PROD_DIR = path.join(IMG_DIR, 'products')
const COL_DIR = path.join(IMG_DIR, 'collections')
const VID_DIR = path.join(ROOT, 'public', 'videos')

// Ensure directories exist
;[IMG_DIR, PROD_DIR, COL_DIR, VID_DIR].forEach((d) => {
  if (!existsSync(d)) mkdirSync(d, { recursive: true })
})

// ─── PROMPTS ─────────────────────────────────────────────────────────────────
const STYLE_PREFIX =
  'ultra photorealistic commercial photography, cinematic lighting, warm rich tones, dark luxury aesthetic, 8k resolution, professional studio'

const STYLE_SUFFIX =
  'black obsidian background, dramatic side lighting, shallow depth of field, high-end fashion editorial, no text, no watermarks'

const images = [
  // ── Hero & Lifestyle
  {
    file: 'hero-leather-brand.jpg',
    dir: IMG_DIR,
    prompt: `${STYLE_PREFIX}, premium full-grain black leather moto jacket draped over a dark wooden chair, masculine luxury lifestyle, cinematic mood, rich leather texture detail, ${STYLE_SUFFIX}`,
    size: 'landscape_16_9',
  },
  {
    file: 'craftsmanship-closeup.jpg',
    dir: IMG_DIR,
    prompt: `${STYLE_PREFIX}, extreme close-up of a craftsperson's hands saddle-stitching a tan leather wallet with a curved needle and waxed linen thread, workshop tools visible, warm ambient light, grain detail visible, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'leather-bag-lifestyle.jpg',
    dir: IMG_DIR,
    prompt: `${STYLE_PREFIX}, dark tan full-grain leather duffle bag on a weathered wooden surface, a whiskey glass and vintage map beside it, masculine travel lifestyle, ${STYLE_SUFFIX}`,
    size: 'landscape_16_9',
  },
  {
    file: 'lifestyle-banner.jpg',
    dir: IMG_DIR,
    prompt: `${STYLE_PREFIX}, man in a dark leather moto jacket standing in a dimly lit city alley at night, cinematic film still, warm street lighting, moody atmosphere, luxury fashion editorial, ${STYLE_SUFFIX}`,
    size: 'landscape_16_9',
  },

  // ── Collections
  {
    file: 'jackets.jpg',
    dir: COL_DIR,
    prompt: `${STYLE_PREFIX}, collection of premium full-grain leather moto jackets hanging on brass hooks against a dark stone wall, different colors — black, cognac, slate brown, editorial product photography, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'bags.jpg',
    dir: COL_DIR,
    prompt: `${STYLE_PREFIX}, premium leather bag collection — messenger bag, duffle bag, tote bag — arranged on a dark slate surface with brass hardware visible, editorial fashion photography, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'wallets.jpg',
    dir: COL_DIR,
    prompt: `${STYLE_PREFIX}, shell cordovan bifold wallets and card holders in oxblood, natural, and black, fanned out on a dark marble surface, extreme detail on leather grain and stitching, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Midnight Moto Jacket
  {
    file: 'midnight-moto-jacket-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, jet black full-grain cowhide moto jacket, asymmetric brass zip closure, quilted shoulder panels, flat lay on dark surface, extreme leather texture detail, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'midnight-moto-jacket-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, black leather moto jacket on a mannequin, side angle showing quilted shoulder and brass snap buttons, cinematic studio lighting, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'midnight-moto-jacket-03.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, extreme close-up of black leather moto jacket chest area, showing hand-stitched seams, solid brass zipper pull, grain pattern, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Heritage Duffle
  {
    file: 'heritage-duffle-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, dark tan full-grain leather duffle bag, rolled handles, brass hardware, structured shape, flat lay on dark surface, saddle stitching detail visible, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'heritage-duffle-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, tan leather weekend duffle bag half-open showing cotton canvas interior and interior pockets, leather handles and brass D-ring, studio product photography, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Cordovan Bifold
  {
    file: 'cordovan-bifold-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, oxblood shell cordovan bifold wallet open, showing 8 card slots and mirror-like patina on the leather surface, extreme macro detail, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'cordovan-bifold-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, oxblood shell cordovan wallet closed, showing natural patina and deep rich color, thin profile, waxed linen stitching, dark marble surface, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Garrison Belt
  {
    file: 'garrison-belt-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, dark havana full-grain leather dress belt coiled on dark surface, solid brass roller buckle, edge burnishing visible, 1.25 inch width, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'garrison-belt-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, close-up of full-grain leather belt end with punch holes and brass roller buckle, showing grain and edge finishing detail, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Nomad Messenger
  {
    file: 'nomad-messenger-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, chestnut pull-up leather messenger bag with magnetic flap closure, brass D-ring and sliding shoulder pad, laptop compartment, flat lay, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'nomad-messenger-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, brown leather messenger bag worn cross-body by a man in dark clothing, urban editorial, cinematic lighting, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Slim Card Sleeve
  {
    file: 'slim-card-sleeve-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, oxblood shell cordovan card sleeve with two outer pockets fanned with credit cards, ultra thin 4mm profile, macro leather detail, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'slim-card-sleeve-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, three shell cordovan card sleeves in oxblood, natural, and whiskey colors, flat lay on dark slate, showing patina gradient, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Navigator Tote
  {
    file: 'navigator-tote-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, natural vegetable-tanned leather open-top tote bag, structured base, wide leather handles, brass rivets, studio product shot on dark surface, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'navigator-tote-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, pale honey veg-tan leather tote bag carried by hand, showing patina development and grain character, lifestyle editorial, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },

  // ── Products — Expedition Passport Wallet
  {
    file: 'expedition-passport-01.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, dark tan full-grain leather passport wallet open showing passport slot and 6 card slots, pen loop on spine, flat lay on dark marble, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
  {
    file: 'expedition-passport-02.jpg',
    dir: PROD_DIR,
    prompt: `${STYLE_PREFIX}, leather passport wallet beside a passport, boarding pass, and compass on a dark oak surface, travel lifestyle editorial, warm lighting, ${STYLE_SUFFIX}`,
    size: 'portrait_4_3',
  },
]

const video = {
  file: 'hero-loop.mp4',
  dir: VID_DIR,
  prompt:
    'cinematic slow-motion close-up of black full-grain leather texture, light gently moving across the surface revealing rich grain, dark luxury aesthetic, ultra smooth motion, 5 seconds, seamless loop, no people, no text',
  duration: '5',
  aspect_ratio: '16:9',
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const getter = url.startsWith('https') ? httpsGet : httpGet
    const file = createWriteStream(destPath)
    getter(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject)
        return
      }
      response.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', reject)
  })
}

function log(emoji, msg) {
  console.log(`${emoji} ${msg}`)
}

// ─── IMAGE GENERATION ────────────────────────────────────────────────────────
async function generateImage(item, index, total) {
  const dest = path.join(item.dir, item.file)
  if (existsSync(dest)) {
    log('⏭ ', `[${index}/${total}] Skipping (exists): ${item.file}`)
    return
  }

  log('🎨', `[${index}/${total}] Generating: ${item.file}`)
  try {
    const result = await fal.subscribe(IMAGE_MODEL, {
      input: {
        prompt: item.prompt,
        image_size: item.size || IMAGE_SIZE,
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
        enable_safety_checker: true,
      },
      logs: false,
    })

    const imageUrl = result?.data?.images?.[0]?.url
    if (!imageUrl) throw new Error('No image URL in response')

    await downloadFile(imageUrl, dest)
    log('✅', `Saved: ${item.file}`)
  } catch (err) {
    log('❌', `Failed: ${item.file} — ${err.message}`)
  }
}

// ─── VIDEO GENERATION ────────────────────────────────────────────────────────
async function generateVideo() {
  const dest = path.join(video.dir, video.file)
  if (existsSync(dest)) {
    log('⏭ ', `Skipping video (exists): ${video.file}`)
    return
  }

  log('🎬', `Generating hero video: ${video.file} (this takes 2–5 minutes...)`)
  try {
    const result = await fal.subscribe(VIDEO_MODEL, {
      input: {
        prompt: video.prompt,
        duration: video.duration,
        aspect_ratio: video.aspect_ratio,
      },
      logs: false,
      onQueueUpdate: (update) => {
        if (update.status === 'IN_QUEUE') {
          log('⏳', `Video queued — position ${update.queue_position ?? '?'}`)
        } else if (update.status === 'IN_PROGRESS') {
          log('🔄', 'Video generating...')
        }
      },
    })

    const videoUrl = result?.data?.video?.url
    if (!videoUrl) throw new Error('No video URL in response')

    log('⬇️ ', 'Downloading video...')
    await downloadFile(videoUrl, dest)
    log('✅', `Video saved: ${video.file}`)
  } catch (err) {
    log('❌', `Video failed: ${err.message}`)
  }
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  const key = process.env.FAL_KEY
  if (!key) {
    console.error('\n❌  FAL_KEY environment variable is not set.')
    console.error('   Get your key at: https://fal.ai/dashboard/keys')
    console.error('   Then run:  FAL_KEY=your_key node scripts/generate-assets.mjs\n')
    process.exit(1)
  }

  fal.config({ credentials: key })

  console.log('\n🐂  BLACKHIDE Asset Generator')
  console.log('━'.repeat(50))
  console.log(`   Model:  ${IMAGE_MODEL}`)
  console.log(`   Images: ${images.length}`)
  console.log(`   Video:  ${GENERATE_VIDEO ? 'yes' : 'no'}`)
  console.log('━'.repeat(50) + '\n')

  if (GENERATE_IMAGES) {
    for (let i = 0; i < images.length; i++) {
      await generateImage(images[i], i + 1, images.length)
      // Small delay to avoid rate limiting
      if (i < images.length - 1) await new Promise((r) => setTimeout(r, 500))
    }
  }

  if (GENERATE_VIDEO) {
    await generateVideo()
  }

  console.log('\n🎉  Done! Assets saved to /public/images/ and /public/videos/')
  console.log('   Refresh your browser to see the images live.\n')
}

main()
