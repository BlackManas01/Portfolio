import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value, duration = 1300 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? parseInt(match[2], 10) : 0
  const suffix = match?.[3] ?? ''
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
