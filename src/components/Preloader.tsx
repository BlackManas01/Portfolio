import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 9) + 4
      if (n >= 100) {
        n = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 450)
      }
      setCount(n)
    }, 95)
    return () => clearInterval(id)
  }, [])

  // Lock scroll while the preloader is visible
  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="serif text-5xl text-white sm:text-6xl"
          >
            Sudhanshu
          </motion.span>
          <span className="eyebrow mt-4">Automation Engineer</span>

          {/* Progress line */}
          <div className="mt-10 h-px w-48 overflow-hidden bg-white/10 sm:w-64">
            <motion.div
              className="h-full bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: 'left' }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="font-display absolute bottom-8 right-8 text-6xl font-semibold text-white sm:bottom-10 sm:right-12 sm:text-8xl">
            {count}
            <span className="text-neutral-600">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
