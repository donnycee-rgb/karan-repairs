import { useRef } from 'react'
import { useStackEffect } from '../hooks/useStackEffect.js'

// A run of full-screen panels: each pins to the top and the next one slides over it,
// while the covered panel is gently pushed back. Falls back to normal flow on short screens.
export function StackPanels({ children }) {
  const ref = useRef(null)
  useStackEffect(ref)
  return <div ref={ref}>{children}</div>
}

export function StackPanel({ children, tone = 'light', first = false, className = '', label }) {
  return (
    <section aria-label={label} className={`stack-panel ${first ? 'stack-panel--first' : ''}`}>
      <div data-stack-inner className={`stack-inner stack-inner--${tone} ${className}`}>
        {children}
      </div>
    </section>
  )
}
