import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data'

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0a0a0a] sm:rounded-3xl"
          >
            {/* Cover image */}
            <div className="relative h-64 overflow-hidden border-b border-white/10 sm:h-72">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/10" />
              <span className="absolute left-6 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-200 backdrop-blur">
                {project.category}
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-neutral-300 backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="eyebrow">
                  {project.role} · {project.year}
                </span>
                <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-8 p-6 sm:p-9">
              <p className="text-lg leading-relaxed text-neutral-300">{project.summary}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Block label="The Challenge">
                <p className="leading-relaxed text-neutral-300">{project.challenge}</p>
              </Block>

              <Block label="Approach">
                <p className="leading-relaxed text-neutral-300">{project.overview}</p>
              </Block>

              <Block label="What I did">
                <ul className="space-y-3">
                  {project.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-neutral-300">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-neutral-600" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="eyebrow">Outcome</span>
                <p className="mt-3 flex gap-2 text-lg font-light leading-relaxed text-white">
                  <ArrowUpRight size={22} className="mt-1 shrink-0 text-neutral-500" />
                  {project.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="eyebrow">{label}</span>
      <div className="mt-3">{children}</div>
    </div>
  )
}
