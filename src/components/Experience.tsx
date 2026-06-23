import { motion } from 'framer-motion'
import Section from './Section'
import { experiences } from '../data'

function handleMove(e: React.MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience" subtitle="Where I've worked and the impact I've made.">
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.period}
            onMouseMove={handleMove}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative grid gap-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/50 sm:p-10 md:grid-cols-[1fr_2fr]"
          >
            {/* Cursor spotlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.07), transparent 65%)',
              }}
            />
            <div className="relative">
              <span className="eyebrow">{exp.period}</span>
              <h3 className="font-display mt-3 text-2xl font-medium text-white">{exp.role}</h3>
              <p className="mt-1 text-neutral-500">
                {exp.company} — {exp.location}
              </p>
            </div>
            <ul className="relative space-y-3">
              {exp.points.map((p, idx) => (
                <li key={idx} className="flex gap-3 text-neutral-400">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-neutral-600" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
