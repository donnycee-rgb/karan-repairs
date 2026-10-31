import { useState, useRef, useEffect } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

// Cracks radiating from an impact point near the top-right, drawn over the screen photo
const CRACKS = [
  'M70 22 L58 34 L52 31 L40 47 L30 45 L18 60 L4 64',
  'M70 22 L74 40 L69 52 L76 66 L72 82 L78 100',
  'M70 22 L86 30 L92 26 L100 34',
  'M70 22 L60 14 L62 6 L56 0',
  'M70 22 L82 12 L90 14 L96 4',
  'M58 34 L64 46 L60 58',
  'M40 47 L46 62 L38 74 L42 88',
  'M74 40 L88 46 L94 58 L100 60',
  'M52 31 L42 26 L30 30 L20 24',
  'M69 52 L56 64 L48 62',
]

// A phone screen that is cracked on one side and fixed on the other. Drag the handle
// (or use arrow keys) to "repair" it. Gives a small nudge once when it scrolls into view.
export default function CrackSlider({ photo }) {
  const [pos, setPos] = useState(100)
  const ref = useRef(null)
  const dragging = useRef(false)
  const inView = useInView(ref, 0.5)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setPos(50)
      return
    }
    // Sweep from fully cracked to half-fixed so visitors see what the slider does
    const t = setTimeout(() => setPos(50), 400)
    return () => clearTimeout(t)
  }, [inView, reduced])

  const moveTo = (clientX) => {
    const rect = ref.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)))
  }

  const onPointerDown = (e) => {
    dragging.current = true
    ref.current.classList.add('is-dragging')
    e.currentTarget.setPointerCapture(e.pointerId)
    moveTo(e.clientX)
  }
  const onPointerMove = (e) => dragging.current && moveTo(e.clientX)
  const onPointerUp = () => {
    dragging.current = false
    ref.current.classList.remove('is-dragging')
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
  }

  return (
    <div className="crack-phone">
      <div
        ref={ref}
        className="crack-slider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img src={photo.src} alt={photo.alt} className="crack-photo" draggable="false" />

        {/* Cracked layer, visible to the left of the handle */}
        <div className="crack-layer" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={photo.src} alt="" className="crack-photo crack-photo--dim" draggable="false" />
          <svg className="crack-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {CRACKS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
          <span className="crack-label crack-label--before">Before</span>
        </div>
        <span className="crack-label crack-label--after">After</span>

        <div
          className="crack-handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare a cracked screen with a repaired one"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
        >
          <span className="crack-knob">
            <MoveHorizontal size={18} />
          </span>
        </div>
      </div>
    </div>
  )
}
