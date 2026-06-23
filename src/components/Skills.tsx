import { motion } from 'framer-motion'
import { FlaskConical, Wrench, Braces, GitBranch, Layers, Sparkles, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from './Section'
import { skillGroups } from '../data'

const icons: LucideIcon[] = [FlaskConical, Wrench, Braces, GitBranch, Layers, Sparkles]

function handleMove(e: React.MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Expertise" title="Capabilities" subtitle="The frameworks, languages and tools I use to deliver quality.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={group.title}
              onMouseMove={handleMove}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25, ease: 'easeOut' } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Cursor spotlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 65%)',
                }}
              />
              {/* Hover sheen */}
              <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-white/[0.06] to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              {/* Giant ghost index */}
              <span className="font-display pointer-events-none absolute -right-2 -top-4 text-7xl font-bold text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.06]">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Icon size={18} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>

              <h3 className="font-display relative mt-5 text-lg font-medium text-white">
                {group.title}
              </h3>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-400 transition-all duration-300 group-hover:border-white/25 group-hover:text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
