// Photos live in public/images (sources in public/images/CREDITS.md).
// Swap any of these for real shop photos by changing the path.
const img = (name) => `/images/${name}.jpg`

export const images = {
  customers: [
    { src: img('customer-smiling-man'), alt: 'Smiling man using his phone' },
    { src: img('customer-smiling-woman'), alt: 'Smiling woman reading a message on her phone' },
    { src: img('customer-floral-shirt'), alt: 'Young man smiling at his phone' },
    { src: img('customer-red-hoodie'), alt: 'Man in a red hoodie holding his phone' },
    { src: img('customer-curly-hair'), alt: 'Woman scrolling on her phone at work' },
    { src: img('customer-on-call'), alt: 'Woman on a phone call outdoors' },
    { src: img('customer-grey-wall'), alt: 'Young man texting on his phone' },
  ],
  repair: {
    board: { src: img('repair-board'), alt: 'Technician repairing a phone circuit board' },
    gloves: { src: img('repair-gloves'), alt: 'Technician in gloves opening a phone' },
    matBroken: { src: img('repair-mat-broken'), alt: 'Broken phone and repair tools on a mat' },
    parts: { src: img('repair-parts'), alt: 'Phone opened up with its parts laid out' },
    street: { src: img('repair-street-nigeria'), alt: 'Electronics repair work at an outdoor stall' },
    screwdriver: { src: img('repair-screwdriver'), alt: 'Close-up of a screwdriver opening a phone' },
    cracked: { src: img('cracked-phone'), alt: 'Phone with a badly cracked screen' },
  },
  business: {
    vendor: { src: img('business-vendor'), alt: 'Food vendor checking orders on his phone' },
    juiceShop: { src: img('business-juice-shop'), alt: 'Juice shop owner using her phone' },
    phoneShop: { src: img('phone-shop'), alt: 'Young man in a phone accessories shop' },
  },
  mountKenya: { src: img('mount-kenya'), alt: 'Mount Kenya, between Kirinyaga and Meru' },
}

// One photo per service id in site.js
export const serviceImages = {
  screen: images.repair.cracked,
  battery: images.repair.parts,
  charging: images.repair.screwdriver,
  water: images.repair.gloves,
  buttons: images.repair.board,
  audio: images.repair.street,
  software: images.customers[6],
  backglass: images.repair.matBroken,
}
