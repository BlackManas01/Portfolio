import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="divider mb-10" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="max-w-xs text-sm text-neutral-500 sm:text-right">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
