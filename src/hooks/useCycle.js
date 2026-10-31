import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

// Cycles 0..count-1 every `interval` ms, starting after `delay` ms. Stays at 0 with reduced motion.
export function useCycle(count, interval = 3500, delay = 0) {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || count < 2) return
    let timer
    const start = setTimeout(() => {
      setIndex((i) => (i + 1) % count)
      timer = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    }, delay + interval)
    return () => {
      clearTimeout(start)
      clearInterval(timer)
    }
  }, [count, interval, delay, reduced])

  return index
}
