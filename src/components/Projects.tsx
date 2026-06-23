import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import ProjectModal from './ProjectModal'
import { projects } from '../data'
import type { Project } from '../data'

const categories = ['All', 'Web', 'Mobile', 'Desktop'] as const
type Category = (typeof categories)[number]

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState<Category>('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="Real problems, engineered end to end — dive into any one.">
      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === c
                ? 'border-white bg-white text-black'
                : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.title}
              type="button"
              layout="position"
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-3 text-left transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Cover image */}
              <div className="relative mb-5 h-44 overflow-hidden rounded-xl sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-200 backdrop-blur">
                  {project.category}
                </span>
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-neutral-200 backdrop-blur transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="px-3 pb-3">
                <h3 className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400 transition-colors group-hover:border-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors group-hover:text-white">
                  View case study
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
