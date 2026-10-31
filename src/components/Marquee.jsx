// An endless strip of items scrolling sideways. The list is rendered twice so the loop is seamless.
export default function Marquee({ items, reverse = false }) {
  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`} aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
