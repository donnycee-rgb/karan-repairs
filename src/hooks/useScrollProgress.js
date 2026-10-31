import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

// Writes how far the page has scrolled through `ref` (0 → 1) to the CSS variable `--p`,
// so children can animate with calc(var(--p) …) without React re-renders.
// 0 when the element's top reaches 70% down the screen, 1 when its bottom reaches the same line.
export function useScrollProgress(ref) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) {
      el.style.setProperty('--p', '1')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const line = window.innerHeight * 0.7
      const p = Math.min(1, Math.max(0, (line - rect.top) / rect.height))
      el.style.setProperty('--p', p.toFixed(4))
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
  }, [ref, reduced])
}
