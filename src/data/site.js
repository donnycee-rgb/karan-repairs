// All business details live here. Edit this file to update the whole site.

export const business = {
  name: 'FixTech Repair',
  tagline: 'Your phone fixed fast and reliably',
  city: 'Kirinyaga',
  region: 'Kirinyaga County',
  // No physical shop: the technician comes to the customer or meets them somewhere convenient
  serviceArea: 'Mobile repairs across Kirinyaga County',
  meetUp: 'No shop to queue at. We come to you or meet at a spot that suits you, anywhere in Kirinyaga.',
  technician: {
    name: 'Benedict Karani',
    role: 'Founder and technician',
    yearsExperience: 3,
  },
  phone: '+254 741 570 831',
  phoneLink: 'tel:+254741570831',
  whatsapp: '254741570831', // digits only, no +
  email: '', // optional: shown in the footer when filled in
  hours: [{ days: 'Every day', time: 'any time. Just call or WhatsApp' }],
  warrantyDays: 90,
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
    id: 'tv',
    icon: 'tv',
    title: 'TV repair',
    short: 'No picture, dim screen or no power',
    details: 'Backlight strips, no picture or a dark screen, power faults and sound problems on LED and smart TVs.',
  },
  {
    id: 'sound',
    icon: 'speaker',
    title: 'Speakers and sound systems',
    short: 'Reconing, amplifiers and distortion',
    details: 'Speaker reconing, blown or distorted speakers, amplifier boards and home sound systems.',
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
  { icon: 'search', title: 'Free check', text: 'We check your phone for free and quote before any work.' },
  { icon: 'pin', title: 'We come to you', text: 'No shop queue. We meet you where it suits you in Kirinyaga.' },
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
  { repair: 'TV backlight repair', from: null },
  { repair: 'Speaker reconing', from: null },
]

export const steps = [
  { title: 'Tell us the problem', text: 'Call or WhatsApp any day, any time with your phone model, the issue and where you are.' },
  { title: 'Free check and quote', text: 'We agree a place to meet, check your phone for free and give you a clear price before any work.' },
  { title: 'Repair and test', text: 'We fix it with quality parts and test everything before handover.' },
  { title: 'Back to you with warranty', text: 'Your phone comes back to you, covered by our repair warranty.' },
]

export const faqs = [
  {
    q: 'Where is your shop?',
    a: 'We do not have a physical shop. We are a mobile repair service: we come to you or meet at a convenient spot anywhere in Kirinyaga. Send us a WhatsApp message with where you are and we will arrange it.',
  },
  {
    q: 'How long does a repair take?',
    a: 'Most repairs are done the same day. We give you a time estimate with your quote.',
  },
  {
    q: 'Do you also fix TVs and speakers?',
    a: 'Yes. Besides phones we repair LED and smart TVs (backlights, no picture, power faults) and speakers and sound systems, including reconing. Send a photo and the model on WhatsApp for a quote.',
  },
  {
    q: 'Will I lose my data?',
    a: 'Most hardware repairs do not affect your data, but we always recommend a backup first. We will tell you if a repair carries any risk.',
  },
  {
    q: 'Do you charge for checking my phone?',
    a: 'No. Checking your phone is free. You get a clear quote and decide whether to go ahead, with no charge if you do not.',
  },
  {
    q: 'What does the warranty cover?',
    a: `Our ${business.warrantyDays}-day warranty covers the part we replaced. It does not cover new drops, cracks or water damage after the repair.`,
  },
]
