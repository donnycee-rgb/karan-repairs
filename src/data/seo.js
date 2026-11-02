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
  alt: `${business.name}: mobile phone repair in ${business.city}. Screens, batteries, charging ports and water damage.`,
}

export const pages = {
  '/': {
    title: `${business.name} | Mobile Phone Repair in Kirinyaga`,
    description:
      'Mobile phone repair in Kirinyaga: we come to you, any day, any time. Cracked screens, batteries, charging ports and water damage for iPhone, Samsung, Tecno, Infinix and all Android phones, plus TV and speaker repair. Free check and a 90-day warranty.',
  },
  '/services': {
    title: `Phone, TV and Speaker Repair in Kirinyaga | ${business.name}`,
    description:
      'Screen and battery replacement, charging ports, water damage, cameras, software and back glass for iPhone and Android, plus TV backlight and speaker repair. Mobile repairs anywhere in Kirinyaga.',
  },
  '/pricing': {
    title: `Phone Repair Prices | ${business.name}`,
    description:
      'Honest, upfront repair prices in Kirinyaga. Free check: send your phone, TV or speaker model on WhatsApp for a quick quote before any work starts.',
  },
  '/about': {
    title: `About Us | ${business.name}, Kirinyaga`,
    description:
      `Meet ${business.technician.name}, the technician behind ${business.name}, with ${business.technician.yearsExperience} years of experience repairing phones. A mobile repair service across Kirinyaga built on honest work and fair prices.`,
  },
  '/contact': {
    title: `Book a Phone Repair | ${business.name}`,
    description:
      'Book a mobile phone repair anywhere in Kirinyaga. Call, WhatsApp or fill in the form, tell us where you are, and get a quote for your iPhone or Android phone.',
  },
}

export const notFound = {
  title: `Page not found | ${business.name}`,
  description: pages['/'].description,
}

// Structured data so Google understands the business. It has no shop address, so it is
// described as a service-area business covering Kirinyaga County.
export function businessSchema(base) {
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
      {
        '@type': 'LocalBusiness',
        '@id': `${base}/#business`,
        name: business.name,
        description: pages['/'].description,
        url: base,
        image: base + defaultImage.path,
        logo: base + '/icon-512.png',
        telephone: business.phone.replace(/\s/g, ''),
        currenciesAccepted: 'KES',
        address: { '@type': 'PostalAddress', addressRegion: business.region, addressCountry: 'KE' },
        areaServed: { '@type': 'AdministrativeArea', name: business.region },
        founder: { '@type': 'Person', name: business.technician.name },
      },
    ],
  }
}
