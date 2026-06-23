import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, Download } from 'lucide-react'
import Magnetic from './Magnetic'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-12 pt-14 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="divider mb-10" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="font-display mt-5 text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight">
            Let&rsquo;s work
            <br />
            <span className="serif font-normal text-neutral-300">together.</span>
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-8 inline-flex items-center gap-2 text-lg text-white sm:text-xl"
          >
            {profile.email}
            <ArrowUpRight size={22} />
          </a>

          <div className="mt-8">
            <Magnetic>
              <a
                href={profile.resume}
                download
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-black"
              >
                <span className="absolute inset-0 -z-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                  <Download
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-7"
                  />
                  <Download
                    size={16}
                    className="absolute -translate-y-7 transition-transform duration-300 group-hover:translate-y-0"
                  />
                </span>
                <span className="relative">Download Résumé</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3">
          <Detail label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          <Detail label="Location" value={profile.location} />
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
            <div>
              <span className="eyebrow">Socials</span>
              <div className="mt-2 text-white">Let's connect</div>
            </div>
            <div className="flex gap-3">
              <SocialIcon href={profile.github} label="GitHub">
                <Github size={16} />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin size={16} />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
      <span className="eyebrow">{label}</span>
      <div className="mt-6 text-white">{value}</div>
    </div>
  )
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
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
