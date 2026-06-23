import { profile, marquee } from '../data'

export default function Footer() {
  const items = [...marquee, ...marquee]
  return (
    <footer className="border-t border-white/[0.06]">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-white/[0.06] py-6">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {items.map((word, i) => (
            <span key={i} className="flex items-center text-2xl text-neutral-600">
              {word}
              <span className="serif mx-8 text-neutral-700">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-neutral-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline transition-colors hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline transition-colors hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
