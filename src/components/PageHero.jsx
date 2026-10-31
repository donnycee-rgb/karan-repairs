// Sub-page header: a photo slowly zooming out behind a navy overlay, with the title rising in.
export default function PageHero({ title, text, image }) {
  return (
    <section className="page-hero">
      {image && <img src={image.src} alt="" className="page-hero-bg" />}
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1 className="hero-in" style={{ '--i': 0 }}>{title}</h1>
        {text && <p className="hero-in" style={{ '--i': 1 }}>{text}</p>}
      </div>
    </section>
  )
}
