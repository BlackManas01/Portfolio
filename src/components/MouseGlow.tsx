import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseGlow() {
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 90, damping: 26, mass: 0.7 })
  const sy = useSpring(y, { stiffness: 90, damping: 26, mass: 0.7 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[30] hidden md:block"
    >
      <div
        className="h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(180,180,200,0.10), rgba(180,180,200,0.04) 35%, transparent 65%)',
        }}
      />
    </motion.div>
  )
}
