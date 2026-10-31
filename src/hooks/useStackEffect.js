import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

// For a stack of sticky panels: as the next panel slides over a pinned one, gently scale and
// dim the pinned panel so it reads as "pushed back". Each panel needs a [data-stack-inner] child.
export function useStackEffect(containerRef) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const panels = Array.from(container.children)
    const inners = panels.map((p) => p.querySelector('[data-stack-inner]'))

    if (reduced) {
      inners.forEach((el) => {
        if (el) el.style.transform = el.style.filter = ''
      })
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      panels.forEach((panel, i) => {
        const inner = inners[i]
        const next = panels[i + 1]
        if (!inner || !next) return
        // Only panels that are actually pinned get pushed back
        if (getComputedStyle(panel).position !== 'sticky') {
          inner.style.transform = inner.style.filter = ''
          return
        }
        const progress = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / vh))
        inner.style.transform = progress ? `scale(${1 - progress * 0.06})` : ''
        inner.style.filter = progress ? `brightness(${1 - progress * 0.4})` : ''
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [containerRef, reduced])
}
