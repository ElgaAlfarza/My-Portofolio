'use client'

import {
  IconGitHub,
  IconLinkedInBadge,
  IconGmailBadge,
  IconWhatsAppBadge,
  IconYouTubeBadge,
  IconInstagramBadge,
  IconTikTok,
  DoodleSmileyFace
} from '../Icons/ScrapbookIcons'

const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const WHATSAPP_URL = 'https://wa.me/6285238208849'

export default function Footer() {
  return (
    <footer className="w-full bg-[#10223B] border-t border-[#091526] text-white py-8 sm:py-10 select-none mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: elga's PORTFOLIO + Code • Create • Inspire (Exact Mockup Match) */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-baseline">
            <span className="font-handwriting text-2xl text-purple-300 font-bold mr-1.5">
              elga&apos;s
            </span>
            <span className="font-sans font-black text-lg tracking-tight text-white uppercase">
              PORTFOLIO
            </span>
          </div>
          <p className="font-marker text-xs text-stone-300 tracking-wider mt-0.5">
            Code &nbsp;•&nbsp; Create &nbsp;•&nbsp; Inspire
          </p>
        </div>

        {/* Center: Vertical Divider + 3D Scrapbook Social Badges (Exact Icon Sheet Match) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block w-px h-8 bg-white/20" aria-hidden="true" />
          
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="GitHub"
            >
              <IconGitHub className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="LinkedIn"
            >
              <IconLinkedInBadge className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* Gmail */}
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Email Me"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="Gmail"
            >
              <IconGmailBadge className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="WhatsApp"
            >
              <IconWhatsAppBadge className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="YouTube"
            >
              <IconYouTubeBadge className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="Instagram"
            >
              <IconInstagramBadge className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Profile"
              className="transform hover:scale-115 hover:-translate-y-0.5 transition-transform"
              title="TikTok"
            >
              <IconTikTok className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>
        </div>

        {/* Right: Copyright & Corner Doodle (Exact Mockup Match) */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-sans text-xs text-stone-400">
            © {new Date().getFullYear()} Elga Alfareza, S.Kom. All rights reserved.
          </p>
          <div className="mt-1 flex items-center gap-1.5 -rotate-3 text-stone-300">
            <span className="font-handwriting text-base font-bold">Thanks for visiting!</span>
            <span className="text-red-400">❤️</span>
            <DoodleSmileyFace className="w-4 h-4 text-stone-300 ml-0.5 inline-block" />
          </div>
        </div>

      </div>
    </footer>
  )
}
