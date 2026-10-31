import { useRef } from 'react'
import { useInView } from '../hooks/useInView.js'

// Fades and slides its children in the first time they scroll into view.
// `delay` (ms) staggers items in a grid; `from` picks the direction.
export default function Reveal({ children, delay = 0, from = 'up', as: Tag = 'div', className = '', style, ...rest }) {
  const ref = useRef(null)
  const inView = useInView(ref, 0.15)

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${from} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
