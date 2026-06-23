import { motion } from 'framer-motion'

const blobs = [
  {
    size: 'h-[34rem] w-[34rem]',
    color: 'rgba(205,210,235,0.38)',
    style: { left: '20%', top: '30%' },
    animate: {
      x: ['-15%', '25%', '-10%', '-15%'],
      y: ['-10%', '15%', '25%', '-10%'],
      scale: [1, 1.25, 0.95, 1],
      borderRadius: [
        '42% 58% 60% 40% / 45% 45% 55% 55%',
        '60% 40% 35% 65% / 55% 60% 40% 45%',
        '40% 60% 65% 35% / 60% 40% 55% 45%',
        '42% 58% 60% 40% / 45% 45% 55% 55%',
      ],
    },
    duration: 18,
  },
  {
    size: 'h-[30rem] w-[30rem]',
    color: 'rgba(140,155,210,0.34)',
    style: { right: '18%', top: '40%' },
    animate: {
      x: ['10%', '-25%', '15%', '10%'],
      y: ['5%', '20%', '-15%', '5%'],
      scale: [1.1, 0.9, 1.2, 1.1],
      borderRadius: [
        '55% 45% 40% 60% / 50% 55% 45% 50%',
        '40% 60% 55% 45% / 45% 40% 60% 55%',
        '60% 40% 50% 50% / 55% 50% 50% 45%',
        '55% 45% 40% 60% / 50% 55% 45% 50%',
      ],
    },
    duration: 24,
  },
  {
    size: 'h-[26rem] w-[26rem]',
    color: 'rgba(235,235,250,0.30)',
    style: { left: '42%', top: '55%' },
    animate: {
      x: ['0%', '20%', '-20%', '0%'],
      y: ['10%', '-15%', '10%', '10%'],
      scale: [1, 1.15, 0.9, 1],
      borderRadius: [
        '50% 50% 45% 55% / 55% 45% 55% 45%',
        '45% 55% 60% 40% / 40% 60% 45% 55%',
        '55% 45% 50% 50% / 50% 50% 45% 55%',
        '50% 50% 45% 55% / 55% 45% 55% 45%',
      ],
    },
    duration: 21,
  },
]

export default function FluidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.size} blur-[70px] mix-blend-screen`}
          style={{ ...b.style, background: `radial-gradient(circle at 35% 35%, ${b.color}, transparent 70%)` }}
          animate={b.animate}
          transition={{ duration: b.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
