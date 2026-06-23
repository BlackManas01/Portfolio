import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Magnetic from './Magnetic'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#home')

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = ['#home', ...navLinks.map((l) => l.href)]
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="#home" className="shrink-0 text-2xl tracking-tight">
          <span className="serif text-3xl">Sudhanshu</span>
          <sup className="ml-0.5 text-xs text-neutral-500">®</sup>
        </a>

        {/* Center pill */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-black' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden shrink-0 items-center lg:flex">
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
            >
              Let's Talk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white backdrop-blur-xl lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-t border-white/5 first:border-t-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-sm font-medium text-neutral-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-white/5 px-6 py-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
                >
                  Let's Talk <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
