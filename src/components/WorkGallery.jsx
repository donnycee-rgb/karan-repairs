import Reveal from './Reveal.jsx'
import { images } from '../data/images.js'

// Real jobs from the technician's own phone. The first photo is shown large.
export default function WorkGallery() {
  return (
    <div className="work-gallery">
      {images.work.map((w, i) => (
        <Reveal key={w.src} as="figure" delay={i * 90} className={`work-item${i === 0 ? ' work-item--big' : ''}`}>
          <img src={w.src} alt={w.alt} loading="lazy" />
          <figcaption>{w.caption}</figcaption>
        </Reveal>
      ))}
    </div>
  )
}
