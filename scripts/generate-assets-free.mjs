/**
 * BLACKHIDE — Free Asset Downloader (Unsplash API)
 * Ham deri / post / el yapımı deri ürün görselleri
 *
 * Kullanım:
 *   $env:UNSPLASH_KEY="key"; node scripts/generate-assets-free.mjs
 */

import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { get as httpsGet } from 'https'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const IMG_DIR = path.join(ROOT, 'public', 'images')
const PROD_DIR = path.join(IMG_DIR, 'products')
const COL_DIR = path.join(IMG_DIR, 'collections')

;[IMG_DIR, PROD_DIR, COL_DIR].forEach((d) => {
  if (!existsSync(d)) mkdirSync(d, { recursive: true })
})

const images = [
  // Hero & Lifestyle
  { file: 'hero-leather-brand.jpg',    dir: IMG_DIR,  query: 'leather jacket dark editorial man',   orientation: 'landscape', w: 1920, h: 1080 },
  { file: 'craftsmanship-closeup.jpg', dir: IMG_DIR,  query: 'leather craft stitching hands closeup', orientation: 'portrait', w: 800,  h: 1000 },
  { file: 'leather-bag-lifestyle.jpg', dir: IMG_DIR,  query: 'leather bag travel lifestyle tan',     orientation: 'landscape', w: 1920, h: 1080 },
  { file: 'lifestyle-banner.jpg',      dir: IMG_DIR,  query: 'leather goods dark background luxury', orientation: 'landscape', w: 1920, h: 1080 },

  // Koleksiyonlar
  { file: 'jackets.jpg',  dir: COL_DIR, query: 'sheepskin fur hide natural white',    orientation: 'portrait', w: 800, h: 1000 },
  { file: 'bags.jpg',     dir: COL_DIR, query: 'handmade leather bag brown',          orientation: 'portrait', w: 800, h: 1000 },
  { file: 'wallets.jpg',  dir: COL_DIR, query: 'leather wallet handcrafted minimal',  orientation: 'portrait', w: 800, h: 1000 },

  // Ham Deri — Koyun Postu Doğal
  { file: 'koyun-postu-dogal-01.jpg', dir: PROD_DIR, query: 'sheepskin white fur rug natural',    orientation: 'portrait', w: 800, h: 1000 },
  { file: 'koyun-postu-dogal-02.jpg', dir: PROD_DIR, query: 'fluffy sheepskin hide natural wool', orientation: 'portrait', w: 800, h: 1000 },

  // Ham Deri — Koyun Postu Siyah
  { file: 'koyun-postu-siyah-01.jpg', dir: PROD_DIR, query: 'black sheepskin fur rug dark',    orientation: 'portrait', w: 800, h: 1000 },
  { file: 'koyun-postu-siyah-02.jpg', dir: PROD_DIR, query: 'dark sheepskin fur hide modern',  orientation: 'portrait', w: 800, h: 1000 },

  // Ham Deri — Dana Taba
  { file: 'dana-derisi-taba-01.jpg', dir: PROD_DIR, query: 'cowhide leather tan natural hide',     orientation: 'portrait', w: 800, h: 1000 },
  { file: 'dana-derisi-taba-02.jpg', dir: PROD_DIR, query: 'full grain leather texture tan brown', orientation: 'portrait', w: 800, h: 1000 },

  // Ham Deri — Dana Bordo
  { file: 'dana-derisi-bordo-01.jpg', dir: PROD_DIR, query: 'leather burgundy dark red hide',     orientation: 'portrait', w: 800, h: 1000 },
  { file: 'dana-derisi-bordo-02.jpg', dir: PROD_DIR, query: 'cordovan leather oxblood texture',   orientation: 'portrait', w: 800, h: 1000 },

  // Çanta — Dana Omuz
  { file: 'omuz-cantasi-01.jpg', dir: PROD_DIR, query: 'handmade leather shoulder bag brown', orientation: 'portrait', w: 800, h: 1000 },
  { file: 'omuz-cantasi-02.jpg', dir: PROD_DIR, query: 'leather bag detail stitching brass',  orientation: 'portrait', w: 800, h: 1000 },

  // Çanta — Koyun Evrak
  { file: 'evrak-cantasi-01.jpg', dir: PROD_DIR, query: 'leather briefcase laptop bag dark',   orientation: 'portrait', w: 800, h: 1000 },
  { file: 'evrak-cantasi-02.jpg', dir: PROD_DIR, query: 'leather messenger bag open interior', orientation: 'portrait', w: 800, h: 1000 },

  // Cüzdan — Bifold
  { file: 'bifold-cuzdan-01.jpg', dir: PROD_DIR, query: 'handmade leather bifold wallet open cards', orientation: 'portrait', w: 800, h: 1000 },
  { file: 'bifold-cuzdan-02.jpg', dir: PROD_DIR, query: 'leather wallet minimal dark marble',        orientation: 'portrait', w: 800, h: 1000 },

  // Cüzdan — Kartlık
  { file: 'kartlik-01.jpg', dir: PROD_DIR, query: 'leather card holder slim minimal',    orientation: 'portrait', w: 800, h: 1000 },
  { file: 'kartlik-02.jpg', dir: PROD_DIR, query: 'leather cardholder cards wallet tan', orientation: 'portrait', w: 800, h: 1000 },

  // Kemer — Dana
  { file: 'deri-kemer-01.jpg', dir: PROD_DIR, query: 'leather belt handmade brass buckle', orientation: 'portrait', w: 800, h: 1000 },
  { file: 'deri-kemer-02.jpg', dir: PROD_DIR, query: 'leather belt buckle detail closeup', orientation: 'portrait', w: 800, h: 1000 },

  // Kemer — Koyun
  { file: 'koyun-kemer-01.jpg', dir: PROD_DIR, query: 'slim leather belt formal dark',       orientation: 'portrait', w: 800, h: 1000 },
  { file: 'koyun-kemer-02.jpg', dir: PROD_DIR, query: 'leather belt thin elegant dark brown', orientation: 'portrait', w: 800, h: 1000 },
]

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    httpsGet(url, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch { reject(new Error('Invalid JSON response')) }
      })
    }).on('error', reject)
  })
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const follow = (u) => {
      httpsGet(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          follow(res.headers.location)
          return
        }
        const file = createWriteStream(destPath)
        res.pipe(file)
        file.on('finish', () => { file.close(); resolve() })
        file.on('error', reject)
      }).on('error', reject)
    }
    follow(url)
  })
}

function log(emoji, msg) { console.log(`${emoji}  ${msg}`) }

async function main() {
  const key = process.env.UNSPLASH_KEY
  if (!key) {
    console.error('\n❌  UNSPLASH_KEY ortam değişkeni ayarlanmamış.')
    console.error('   $env:UNSPLASH_KEY="key"; node scripts/generate-assets-free.mjs')
    process.exit(1)
  }

  console.log('\n🐂  BLACKHIDE — Görsel İndirici')
  console.log('━'.repeat(52))
  console.log(`   Toplam görsel: ${images.length}`)
  console.log('━'.repeat(52) + '\n')

  let success = 0, skipped = 0, failed = 0

  for (let i = 0; i < images.length; i++) {
    const item = images[i]
    const dest = path.join(item.dir, item.file)

    if (existsSync(dest)) {
      log('⏭', `[${i+1}/${images.length}] Atlandı: ${item.file}`)
      skipped++
      continue
    }

    log('🔍', `[${i+1}/${images.length}] Aranıyor: "${item.query}"`)

    try {
      const apiUrl =
        `https://api.unsplash.com/photos/random` +
        `?query=${encodeURIComponent(item.query)}` +
        `&orientation=${item.orientation}` +
        `&client_id=${key}`

      const data = await fetchJson(apiUrl)
      if (data.errors) throw new Error(data.errors.join(', '))

      const photoUrl = `${data.urls.raw}&w=${item.w}&h=${item.h}&fit=crop&q=85&fm=jpg`
      await downloadFile(photoUrl, dest)

      const credit = `${data.user.name} (@${data.user.username})`
      log('✅', `İndirildi: ${item.file}  [${credit}]`)
      success++

      await new Promise((r) => setTimeout(r, 300))
    } catch (err) {
      log('❌', `Başarısız: ${item.file} — ${err.message}`)
      failed++
    }
  }

  console.log('\n' + '━'.repeat(52))
  console.log(`✅ Başarılı: ${success}   ⏭ Atlandı: ${skipped}   ❌ Başarısız: ${failed}`)
  console.log('\n🎉  Tamamlandı! Görseller /public/images/ klasörüne kaydedildi.\n')
}

main()
