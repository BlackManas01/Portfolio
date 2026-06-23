import { motion } from 'framer-motion'
import Section from './Section'
import CountUp from './CountUp'
import { about, stats } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About" subtitle="The engineer behind the automation.">
      <div className="relative isolate">
        {/* Blurred name watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -top-20 flex items-center justify-center overflow-hidden"
        >
          <span className="serif select-none whitespace-nowrap text-[20vw] leading-none text-white/[0.04] blur-[3px]">
            Sudhanshu
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl text-lg font-light leading-relaxed text-neutral-200 sm:text-2xl"
        >
          {about}
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"><CountUp value={s.value} /></div>
            <div className="eyebrow mt-3">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
