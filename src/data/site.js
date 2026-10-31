// All business details live here. Edit this file to update the whole site.
// Anything marked TODO still needs confirming before the site goes live.

export const business = {
  name: 'FixTech Repair',
  tagline: 'Your phone fixed fast and reliably',
  city: 'Kirinyaga and Meru',
  region: 'Mount Kenya region',
  // TODO: add the street / building for each shop
  locations: [
    { name: 'Kirinyaga', address: 'TODO: building / street, Kirinyaga' },
    { name: 'Meru', address: 'TODO: building / street, Meru' },
  ],
  mapsUrl: '', // TODO: paste your Google Maps link
  phone: '+254 741 570 831',
  phoneLink: 'tel:+254741570831',
  whatsapp: '254741570831', // TODO: confirm WhatsApp number (digits only, no +)
  email: '', // TODO
  hours: [
    { days: 'Monday – Saturday', time: 'TODO' },
    { days: 'Sunday', time: 'TODO' },
  ],
  warrantyDays: 90, // TODO: confirm
  socials: {
    instagram: '', // TODO
    facebook: '', // TODO
    tiktok: '', // TODO
  },
}

export const whatsappLink = (message = '') =>
  `https://wa.me/${business.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

// icon names refer to lucide-react icons, mapped in src/components/ServiceIcon.jsx
export const services = [
  {
    id: 'screen',
    icon: 'smartphone',
    title: 'Screen and display',
    short: 'Cracked or broken screens replaced',
    details: 'Cracked glass, LCD and OLED replacement, touch not responding, lines or dead pixels.',
  },
  {
    id: 'battery',
    icon: 'battery',
    title: 'Battery replacement',
    short: 'Restore your battery life',
    details: 'Poor standby time, slow charging, phone switching off, swollen batteries.',
  },
  {
    id: 'charging',
    icon: 'plug',
    title: 'Charging port',
    short: 'Fix loose or faulty ports',
    details: 'Loose connection, phone not charging, damaged port or cable issues.',
  },
  {
    id: 'water',
    icon: 'droplets',
    title: 'Water damage',
    short: 'Professional cleaning and recovery',
    details: 'Deep cleaning, corrosion repair and power recovery after drops in water.',
  },
  {
    id: 'buttons',
    icon: 'camera',
    title: 'Buttons and cameras',
    short: 'Power, volume and camera fixes',
    details: 'Power, volume and home buttons; front and back camera replacement.',
  },
  {
    id: 'audio',
    icon: 'volume',
    title: 'Speakers and mic',
    short: 'Clear calls and sound again',
    details: 'No sound, distorted audio, earpiece and call microphone problems.',
  },
  {
    id: 'software',
    icon: 'cpu',
    title: 'Software and data',
    short: 'Updates, resets and data transfer',
    details: 'Phone stuck on logo, slow performance, software updates and data transfer.',
  },
  {
    id: 'backglass',
    icon: 'layers',
    title: 'Back glass and housing',
    short: 'Make your phone look new',
    details: 'Cracked back glass, bent frames and housing replacement.',
  },
]

export const brands = ['iPhone', 'Samsung', 'Tecno', 'Infinix', 'Oppo', 'Xiaomi', 'Itel', 'Huawei']

export const reasons = [
  { icon: 'shield', title: 'Quality parts', text: 'Genuine and high-quality replacement parts.' },
  { icon: 'clock', title: 'Fast service', text: 'Many repairs done while you wait.' }, // TODO: confirm timing claim
  { icon: 'badge', title: 'Warranty', text: `${business.warrantyDays}-day warranty on repairs.` },
  { icon: 'tag', title: 'Fair prices', text: 'Upfront quotes with no hidden fees.' },
]

// price: null shows "Get a quote". Use numbers in KSh, e.g. from: 3500
export const prices = [
  { repair: 'Screen replacement (Android)', from: null },
  { repair: 'Screen replacement (iPhone)', from: null },
  { repair: 'Battery replacement', from: null },
  { repair: 'Charging port repair', from: null },
  { repair: 'Water damage cleaning', from: null },
  { repair: 'Back glass replacement', from: null },
  { repair: 'Camera replacement', from: null },
  { repair: 'Software fix / update', from: null },
]

export const steps = [
  { title: 'Tell us the problem', text: 'Call, WhatsApp or book online with your phone model and issue.' },
  { title: 'Diagnosis and quote', text: 'We check your phone and give you a clear price before any work.' },
  { title: 'Repair and test', text: 'We fix it with quality parts and test everything before handover.' },
  { title: 'Pick up with warranty', text: 'Collect your phone, covered by our repair warranty.' },
]

export const faqs = [
  {
    q: 'How long does a repair take?',
    a: 'Most screen and battery repairs are done the same day. We give you a time estimate with your quote.', // TODO: confirm
  },
  {
    q: 'Will I lose my data?',
    a: 'Most hardware repairs do not affect your data, but we always recommend a backup first. We will tell you if a repair carries any risk.',
  },
  {
    q: 'Do you charge for checking my phone?',
    a: 'TODO: say whether diagnosis is free.',
  },
  {
    q: 'What does the warranty cover?',
    a: `Our ${business.warrantyDays}-day warranty covers the part we replaced and our workmanship. It does not cover new physical or water damage.`, // TODO: confirm
  },
]
