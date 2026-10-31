import { useEffect, useState } from 'react'

// Becomes true the first time the element is `threshold` visible, then stays true.
export function useInView(ref, threshold = 0.25) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, inView])

  return inView
}
