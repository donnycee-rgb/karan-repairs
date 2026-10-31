import { useRef } from 'react'
import { useInView } from '../hooks/useInView.js'

// Hand-drawn strokes, deliberately imperfect: the circle overshoots its start, the underline wobbles
const SHAPES = {
  circle: {
    viewBox: '0 0 200 100',
    d: 'M118 9 C 60 4, 12 20, 8 50 C 4 80, 50 96, 104 95 C 160 94, 200 74, 193 44 C 187 16, 130 4, 70 12',
  },
  underline: {
    viewBox: '0 0 200 20',
    d: 'M3 13 C 40 5, 82 18, 122 9 S 178 6, 197 11',
  },
}

// Wraps a word with a marker stroke — like a technician circling the fault — that draws itself
// once the word scrolls into view.
export default function Marker({ children, type = 'underline', delay = 300 }) {
  const ref = useRef(null)
  const inView = useInView(ref, 0.6)
  const shape = SHAPES[type]

  return (
    <span ref={ref} className="marker">
      {children}
      <svg aria-hidden="true" viewBox={shape.viewBox} preserveAspectRatio="none" className={`marker-svg marker-svg--${type}`}>
        <path
          d={shape.d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={3.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: inView ? 0 : 1,
            transition: `stroke-dashoffset 900ms cubic-bezier(0.65, 0, 0.35, 1) ${delay}ms`,
          }}
        />
      </svg>
    </span>
  )
}
