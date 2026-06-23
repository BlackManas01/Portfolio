import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Magnetic from './Magnetic'
import FluidBackground from './FluidBackground'
import { profile } from '../data'

const ease = [0.22, 1, 0.36, 1] as const

const services = ['Web Automation', 'Mobile Testing', 'API & CI/CD', 'Device Emulation']

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-between gap-y-10 overflow-hidden px-6 pb-12 pt-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Optional video background (drop a file at public/hero-bg.mp4 to enable) */}
        <video
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Fluid blobs (CSS fallback, shows when no video is present) */}
        <FluidBackground />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
        {/* Vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.12)_0%,rgba(5,5,5,0.45)_65%,rgba(5,5,5,0.9)_100%)]" />
        {/* Bottom fade to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Top row: statement + contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between"
      >
        <span className="eyebrow">Automation Engineer — {profile.location}</span>
        <div className="max-w-md md:text-right">
          <p className="text-lg leading-snug text-neutral-300">
            <span className="text-neutral-500">©</span> I design{' '}
            <span className="serif text-xl text-white">automation</span> frameworks that make
            testing fast, reliable and scalable across web and mobile.
          </p>
          <div className="mt-5 flex items-center gap-3 md:justify-end">
            <a href={`mailto:${profile.email}`} className="link-underline text-sm font-medium text-white">
              Contact Me
            </a>
            <span className="text-neutral-600">·</span>
            <SocialIcon href={profile.github} label="GitHub">
              <Github size={16} />
            </SocialIcon>
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail size={16} />
            </SocialIcon>
          </div>
        </div>
      </motion.div>

      {/* Center: display heading */}
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.9] tracking-tight">
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="block"
            >
              Test smarter,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              className="serif block font-normal text-neutral-300"
            >
              release faster.
            </motion.span>
          </span>
        </h1>
      </div>

      {/* Bottom row: services + avatar + scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.3 }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="eyebrow">I work with</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <Magnetic className="hidden self-center md:block">
          <a
            href="#about"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-white hover:text-white"
            aria-label="Scroll down"
          >
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        </Magnetic>

        <div className="flex items-center gap-4 md:justify-end">
          <div className="text-right">
            <div className="font-display text-3xl font-semibold">{profile.yearsExperience}</div>
            <div className="eyebrow mt-1">Years of experience</div>
          </div>
          <div className="h-16 w-px bg-white/10" />
          <div className="group relative h-24 w-24">
            <div className="spin-slow absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.55),transparent_55%)]" />
            <div className="absolute inset-0 rounded-full bg-[#050505]" />
            <div className="absolute inset-0 rounded-full bg-white/[0.04] blur-md" />
            <img
              src={profile.avatar}
              alt="Sudhanshu Singh avatar"
              className="relative h-24 w-24 rounded-full border border-white/10 bg-neutral-900 object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Magnetic>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-white hover:bg-white hover:text-black"
      >
        {children}
      </a>
    </Magnetic>
  )
}
