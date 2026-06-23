import { motion } from 'framer-motion'
import { Trophy, Lightbulb, Rocket, GraduationCap, School } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from './Section'
import { awards, education } from '../data'

const awardIcons: LucideIcon[] = [Trophy, Lightbulb, Rocket]
const eduIcons: LucideIcon[] = [GraduationCap, School]

export default function Awards() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards & Education" subtitle="Recognition for my work and my academic background.">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Awards */}
        <div>
          <span className="eyebrow">Awards</span>
          <div className="mt-6 flex flex-col gap-3">
            {awards.map((award, i) => {
              const Icon = awardIcons[i % awardIcons.length]
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display text-lg font-medium text-white">{award.title}</h4>
                    </div>
                    <span className="eyebrow">{award.org}</span>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{award.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education */}
        <div>
          <span className="eyebrow">Education</span>
          <div className="mt-6 flex flex-col gap-3">
            {education.map((edu, i) => {
              const Icon = eduIcons[i % eduIcons.length]
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-medium text-white">{edu.degree}</h4>
                    <p className="mt-1 text-sm text-neutral-400">{edu.school}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
