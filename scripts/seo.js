// Runs after `vite build`. Social apps (WhatsApp, Facebook, X, LinkedIn) don't run JavaScript,
// so each page needs its own HTML file with its title, description and preview image already
// in the <head>. This writes dist/<page>/index.html for every page, plus sitemap.xml and robots.txt.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { siteUrl, defaultImage, pages, businessSchema } from '../src/data/seo.js'
import { business } from '../src/data/site.js'

const dist = join(import.meta.dirname, '..', 'dist')
// Netlify provides URL (the live address) during builds
const base = (process.env.URL || siteUrl).replace(/\/$/, '')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function head(path, { title, description }) {
  const url = base + (path === '/' ? '/' : path)
  const image = base + defaultImage.path
  return `<title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow" />
    <meta name="geo.region" content="KE" />
    <meta name="geo.placename" content="${business.region}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(business.name)}" />
    <meta property="og:locale" content="en_KE" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="${defaultImage.width}" />
    <meta property="og:image:height" content="${defaultImage.height}" />
    <meta property="og:image:alt" content="${esc(defaultImage.alt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${esc(defaultImage.alt)}" />

    <script type="application/ld+json">${JSON.stringify(businessSchema(base))}</script>`
}

function render(path, meta) {
  if (!template.includes('<!-- seo -->')) throw new Error('index.html is missing the <!-- seo --> marker')
  return template.replace(/<title>.*?<\/title>/, '').replace('<!-- seo -->', head(path, meta))
}

for (const [path, meta] of Object.entries(pages)) {
  const dir = path === '/' ? dist : join(dist, path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), render(path, meta))
}
const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pages)
  .map(
    (p) => `  <url>
    <loc>${base}${p === '/' ? '/' : p}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`,
)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)

console.log(`SEO: wrote ${Object.keys(pages).length} pages, sitemap.xml and robots.txt for ${base}`)
