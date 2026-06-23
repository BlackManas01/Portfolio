import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, Download, MapPin, Phone, Send, Check } from 'lucide-react'
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
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left: details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="max-w-md text-lg leading-relaxed text-neutral-400">
              Have a role or project in mind? Send a message and I&rsquo;ll get back to you — or
              reach out directly.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-8 inline-flex items-center gap-2 text-lg text-white sm:text-xl"
            >
              {profile.email}
              <ArrowUpRight size={20} />
            </a>

            <div className="mt-6 space-y-2 text-neutral-400">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-neutral-500" /> {profile.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-neutral-500" /> {profile.location}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={profile.resume}
                  download
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:text-black"
                >
                  <span className="absolute inset-0 -z-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
                  <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                    <Download size={16} className="transition-transform duration-300 group-hover:translate-y-7" />
                    <Download size={16} className="absolute -translate-y-7 transition-transform duration-300 group-hover:translate-y-0" />
                  </span>
                  <span className="relative">Download Résumé</span>
                </a>
              </Magnetic>
              <SocialIcon href={profile.github} label="GitHub">
                <Github size={18} />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex h-full min-h-[20rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
          <Check size={26} />
        </span>
        <h3 className="font-display mt-5 text-xl font-medium text-white">Message sent!</h3>
        <p className="mt-2 text-sm text-neutral-400">
          Thanks for reaching out — I&rsquo;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="link-underline mt-5 text-sm font-medium text-white"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-5">
        <Field label="Name">
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white/40"
          />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white/40"
          />
        </Field>
        <Field label="Message">
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell me a bit about it…"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white/40"
          />
        </Field>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>

        {status === 'error' && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please email me directly at {profile.email}.
          </p>
        )}
      </div>
    </form>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-white hover:bg-white hover:text-black"
      >
        {children}
      </a>
    </Magnetic>
  )
}
