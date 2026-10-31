// Search and link-preview text for every page. Used in two places:
//  - scripts/seo.js writes these into each page's HTML at build time (what WhatsApp,
//    Facebook, X and Google read when a link is shared)
//  - src/App.jsx updates the browser tab title while visitors click around

import { business } from './site.js'

// Netlify sets URL during builds; this is the fallback
export const siteUrl = 'https://fixtechrepair.netlify.app'

export const defaultImage = {
  path: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: `${business.name}: phone repair in ${business.city}. Screens, batteries, charging ports and water damage.`,
}

export const pages = {
  '/': {
    title: `${business.name} | Phone Repair in Kirinyaga and Meru`,
    description:
      'Fast, honest phone repair in Kirinyaga and Meru. Cracked screens, batteries, charging ports, water damage and more for iPhone, Samsung, Tecno, Infinix and all Android phones. Quality parts and a warranty on every repair.',
  },
  '/services': {
    title: `Phone Repair Services in Kirinyaga and Meru | ${business.name}`,
    description:
      'Screen and display replacement, battery replacement, charging port repair, water damage recovery, cameras, speakers, software and back glass. iPhone and Android repairs in Kirinyaga and Meru.',
  },
  '/pricing': {
    title: `Phone Repair Prices | ${business.name}`,
    description:
      'Honest, upfront phone repair prices in Kirinyaga and Meru. Send us your phone model on WhatsApp for a quick quote before any work starts.',
  },
  '/about': {
    title: `About Us | ${business.name}, Kirinyaga and Meru`,
    description:
      'A local phone repair shop serving Kirinyaga and Meru, built on honest work, quality parts and fair prices. Your data and privacy respected.',
  },
  '/contact': {
    title: `Book a Phone Repair | ${business.name}`,
    description:
      'Book a phone repair in Kirinyaga or Meru. Call, WhatsApp or fill in the form and get a quote for your iPhone or Android phone.',
  },
}

export const notFound = {
  title: `Page not found | ${business.name}`,
  description: pages['/'].description,
}

// Structured data so Google understands the business and its two locations
export function businessSchema(base) {
  const shared = {
    '@type': 'LocalBusiness',
    name: business.name,
    description: pages['/'].description,
    url: base,
    image: base + defaultImage.path,
    logo: base + '/icon-512.png',
    telephone: business.phone.replace(/\s/g, ''),
    currenciesAccepted: 'KES',
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        name: business.name,
        url: base,
        inLanguage: 'en-KE',
      },
      ...business.locations.map((l) => ({
        ...shared,
        '@id': `${base}/#${l.name.toLowerCase()}`,
        name: `${business.name} ${l.name}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: l.name,
          addressRegion: `${l.name} County`,
          addressCountry: 'KE',
        },
        areaServed: { '@type': 'AdministrativeArea', name: `${l.name} County` },
      })),
    ],
  }
}
