'use client'

/**
 * Reusable Vector Icons matching the custom Scrapbook Icon Sheet
 * Provided in media_1793678519257_d5b14c6d.jpg
 */

// ─────────────────────────────────────────────────────────────
// Row 2: Developer & Tech Brand Icons with 3D Squircles
// ─────────────────────────────────────────────────────────────

export function IconPython({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* 3D Dark Squircle Base */}
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#1A2234" stroke="#2B3852" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.06" />
      {/* Python Logo */}
      <g transform="translate(14, 14) scale(0.75)">
        <path d="M23.6 0c-6.5 0-11.8 2.3-11.8 6.8v5h12.1v1.7H7.1C2.6 13.5 0 17 0 23.5c0 6.6 3.6 10.2 8.4 10.2h5v-5.1c0-4.6 4-8.5 8.7-8.5h12.1c3.9 0 6.9-3.2 6.9-7.1V6.8C41.1 2.3 35.8 0 29.3 0h-5.7zm-3.6 3.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3c0-1.2 1-2.3 2.3-2.3z" fill="#3776AB"/>
        <path d="M24.4 47.9c6.5 0 11.8-2.3 11.8-6.8v-5H24.1v-1.7h16.8c4.5 0 7.1-3.5 7.1-10 0-6.6-3.6-10.2-8.4-10.2h-5v5.1c0 4.6-4 8.5-8.7 8.5H13.8c-3.9 0-6.9 3.2-6.9 7.1v16.2c0 4.5 5.3 6.8 11.8 6.8h5.7zm3.6-3.7c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3c0 1.2-1 2.3-2.3 2.3z" fill="#FFD43B"/>
      </g>
    </svg>
  )
}

export function IconJS({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#F7DF1E" stroke="#D4BD0B" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.22" />
      {/* JS Letters */}
      <text x="21" y="44" fontFamily="'Plus Jakarta Sans', Impact, sans-serif" fontWeight="900" fontSize="24" fill="#000000" letterSpacing="-1">JS</text>
    </svg>
  )
}

export function IconReact({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#131B2E" stroke="#1E2C4A" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.08" />
      <g transform="translate(32, 32) scale(0.85)">
        <ellipse rx="19" ry="7.5" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
        <ellipse rx="19" ry="7.5" fill="none" stroke="#61DAFB" strokeWidth="2.2" transform="rotate(60)" />
        <ellipse rx="19" ry="7.5" fill="none" stroke="#61DAFB" strokeWidth="2.2" transform="rotate(120)" />
        <circle r="3.5" fill="#61DAFB" />
      </g>
    </svg>
  )
}

export function IconNode({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#101D1A" stroke="#1B332E" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.06" />
      {/* Node.js Hexagon with JS */}
      <g transform="translate(32, 32)">
        <path d="M0 -18 L16 -9 L16 9 L0 18 L-16 9 L-16 -9 Z" fill="#0D1614" stroke="#5FA04E" strokeWidth="3.2" strokeLinejoin="round" />
        <text x="0" y="5" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="12" fill="#5FA04E">JS</text>
      </g>
    </svg>
  )
}

export function IconSQL({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#00457A" stroke="#005B9F" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.14" />
      {/* Cylinder Database layers */}
      <g transform="translate(32, 22)">
        <ellipse cx="0" cy="0" rx="14" ry="4.5" fill="#38BDF8" />
        <path d="M-14 0 v8 c0 3 6.3 5 14 5 s14 -2 14 -5 v-8" fill="none" stroke="#E0F2FE" strokeWidth="2.5" />
        <path d="M-14 8 v8 c0 3 6.3 5 14 5 s14 -2 14 -5 v-8" fill="none" stroke="#E0F2FE" strokeWidth="2.5" />
      </g>
    </svg>
  )
}

export function IconAWS({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#141B24" stroke="#222E3D" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.08" />
      {/* AWS Text + Orange Smile */}
      <g transform="translate(32, 28)">
        <text x="0" y="4" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF" letterSpacing="0.5">aws</text>
        <path d="M-14 11 Q0 19 14 11" fill="none" stroke="#FF9900" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M12 9 L15 11 L13 14 Z" fill="#FF9900" />
      </g>
    </svg>
  )
}

export function IconGitHub({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#181717" stroke="#333333" strokeWidth="2" />
      <circle cx="32" cy="18" r="14" fill="white" fillOpacity="0.08" />
      {/* Octocat Silhouette */}
      <path fillRule="evenodd" clipRule="evenodd" d="M32 15C22.61 15 15 22.61 15 32c0 7.51 4.87 13.88 11.62 16.13.85.16 1.16-.37 1.16-.82 0-.4-.01-1.47-.02-2.89-4.73 1.03-5.72-2.28-5.72-2.28-.77-1.96-1.89-2.48-1.89-2.48-1.54-1.05.12-1.03.12-1.03 1.71.12 2.61 1.75 2.61 1.75 1.52 2.6 3.98 1.85 4.95 1.41.15-1.1.59-1.85 1.08-2.27-3.77-.43-7.74-1.89-7.74-8.41 0-1.86.66-3.38 1.75-4.57-.18-.43-.76-2.16.17-4.51 0 0 1.43-.46 4.68 1.74a16.3 16.3 0 014.26-.57c1.45.01 2.9.2 4.26.57 3.25-2.2 4.67-1.74 4.67-1.74.93 2.35.35 4.08.17 4.51 1.09 1.19 1.75 2.71 1.75 4.57 0 6.54-3.98 7.97-7.77 8.39.61.53 1.15 1.56 1.15 3.15 0 2.27-.02 4.1-.02 4.66 0 .46.31 1 .17.82C44.13 45.88 49 39.51 49 32c0-9.39-7.61-17-17-17z" fill="#FFFFFF"/>
    </svg>
  )
}

export function IconGit({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="32" y="4" width="40" height="40" rx="10" transform="rotate(45 32 4)" fill="#F05032" stroke="#D33719" strokeWidth="2" />
      <g transform="translate(32, 32)">
        <circle cx="-6" cy="6" r="3.5" fill="#FFFFFF" />
        <circle cx="6" cy="-6" r="3.5" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="3.5" fill="#FFFFFF" />
        <path d="M-6 6 L6 -6 M6 -6 L6 6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function IconFigma({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#18181B" stroke="#2E2E33" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.08" />
      <g transform="translate(24, 16) scale(0.7)">
        <path d="M11.5 0H0v11.5h11.5V0z" fill="#F24E1E"/>
        <path d="M23 0h-11.5v11.5H23V0z" fill="#FF7262"/>
        <path d="M23 11.5h-11.5V23H23V11.5z" fill="#1ABCFE"/>
        <path d="M11.5 11.5H0V23h11.5V11.5z" fill="#A259FF"/>
        <path d="M11.5 23H0v11.5C0 40.85 5.15 46 11.5 46s11.5-5.15 11.5-11.5V23z" fill="#0ACF83"/>
      </g>
    </svg>
  )
}

export function IconVSCode({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#101929" stroke="#1D2E4A" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.08" />
      <g transform="translate(18, 16) scale(0.6)">
        <path d="M37.8 0L24.8 12.1 11.5 1.8 0 10.3v27.4l11.5 8.5 13.3-10.3L37.8 48 48 43.1V4.9L37.8 0zM37.8 35.7L21.4 24l16.4-11.7v23.4z" fill="#007ACC"/>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────
// Row 3: Social & Communication Badges (Exact Sheet Match)
// ─────────────────────────────────────────────────────────────

export function IconLinkedInBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#0A66C2" stroke="#084E94" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <text x="32" y="44" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF">in</text>
    </svg>
  )
}

export function IconGmailBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#FFFFFF" stroke="#E5E0D8" strokeWidth="2" />
      <g transform="translate(16, 18) scale(0.7)">
        <path d="M2.5 40h7.5V19.4L0 12v25.5c0 1.4 1.1 2.5 2.5 2.5z" fill="#4285F4"/>
        <path d="M35 40h7.5c1.4 0 2.5-1.1 2.5-2.5V12l-10 7.4V40z" fill="#34A853"/>
        <path d="M35 5.5l-12.5 9.3L10 5.5V19.4L22.5 28.7 35 19.4V5.5z" fill="#EA4335"/>
        <path d="M0 12l10 7.4V5.5L0 12z" fill="#FBBC04"/>
        <path d="M35 5.5V19.4l10-7.4-10-6.5z" fill="#EA4335"/>
      </g>
    </svg>
  )
}

export function IconWhatsAppBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#25D366" stroke="#1EAB52" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <path d="M32 14c-9.94 0-18 8.06-18 18 0 3.17.83 6.15 2.27 8.74L14 48l7.51-2.22c2.47 1.35 5.3 2.12 8.31 2.12 9.94 0 18-8.06 18-18s-8.06-18-18-18zm8.68 25.44c-.37 1.03-1.83 1.89-2.99 2.14-.8.17-1.84.3-5.35-1.16-4.49-1.86-7.37-6.42-7.59-6.72-.22-.3-1.83-2.43-1.83-4.64s1.15-3.3 1.56-3.75c.41-.45.89-.56 1.19-.56s.6.02.86.03c.27.01.64-.1.99.76.37.89 1.27 3.09 1.38 3.32.11.22.19.49.04.78-.15.3-.22.49-.44.74-.22.26-.47.58-.67.78-.22.22-.45.47-.2.9.26.44 1.14 1.88 2.45 3.05 1.68 1.5 3.1 1.96 3.54 2.18.45.22.71.19.97-.11.26-.3 1.12-1.31 1.42-1.76.3-.45.6-.37 1.01-.22s2.61 1.23 3.06 1.45c.45.22.75.34.86.52.11.19.11 1.09-.26 2.12z" fill="#FFFFFF"/>
    </svg>
  )
}

export function IconYouTubeBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#FF0000" stroke="#CC0000" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <path d="M42 32L26 23v18l16-9z" fill="#FFFFFF"/>
    </svg>
  )
}

export function IconInstagramBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <radialGradient id="instaGrad" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#instaGrad)" stroke="#B31F85" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <rect x="18" y="18" width="28" height="28" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="32" cy="32" r="6.5" fill="none" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="39.5" cy="24.5" r="1.5" fill="#FFFFFF" />
    </svg>
  )
}

export function IconFacebookBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#1877F2" stroke="#105EC5" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <path d="M37 34h-5v18h-8V34h-4v-7h4v-5c0-4.4 2.8-7 7.2-7 2.1 0 4.2.3 4.2.3v5h-2.4c-2.3 0-2.8 1.4-2.8 2.8v3.9h6l-1 7z" fill="#FFFFFF"/>
    </svg>
  )
}

export function IconSpotifyBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#1DB954" stroke="#169A45" strokeWidth="2" />
      <circle cx="32" cy="18" r="14" fill="white" fillOpacity="0.1" />
      <path d="M43.8 38.6c-.5.8-1.5 1-2.3.5-6.3-3.9-14.3-4.7-23.7-2.6-.9.2-1.7-.4-1.9-1.3s.4-1.7 1.3-1.9c10.3-2.4 19.2-1.4 26.2 2.9.8.5 1 1.6.4 2.4zm2.7-6.1c-.6.9-1.8 1.2-2.7.6-7.3-4.5-18.4-5.8-27-3.2-1 .3-2.1-.3-2.4-1.3-.3-1 .3-2.1 1.3-2.4 9.8-3 22-1.5 30.3 3.6 1 .6 1.2 1.8.5 2.7zm.2-6.5c-8.7-5.2-23.1-5.7-31.5-3.1-1.3.4-2.7-.3-3.1-1.6-.4-1.3.3-2.7 1.6-3.1 9.7-2.9 25.6-2.4 35.7 3.6 1.2.7 1.6 2.3.9 3.5-.7 1-2.3 1.4-3.6.7z" fill="#FFFFFF"/>
    </svg>
  )
}

export function IconDiscordBadge({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#5865F2" stroke="#4752C4" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.18" />
      <path d="M43.7 20c-2.4-1.1-5-1.9-7.7-2.4-.3.6-.7 1.4-1 2-2.9-.4-5.8-.4-8.7 0-.3-.6-.7-1.4-1-2-2.7.5-5.3 1.3-7.7 2.4-4.9 7.3-6.2 14.4-5.5 21.4 3.3 2.4 6.4 3.9 9.5 4.9.8-1 1.4-2.1 2-3.3-1.1-.4-2.1-.9-3.1-1.6.3-.2.5-.4.8-.6 6.1 2.8 12.8 2.8 18.9 0 .3.2.5.4.8.6-1 .7-2 1.2-3.1 1.6.6 1.2 1.2 2.3 2 3.3 3.1-1 6.3-2.5 9.5-4.9.8-8.1-.9-15.1-5.4-21.4zM24.7 36.3c-1.8 0-3.3-1.6-3.3-3.6s1.4-3.6 3.3-3.6 3.3 1.6 3.3 3.6c0 2-1.5 3.6-3.3 3.6zm14.6 0c-1.8 0-3.3-1.6-3.3-3.6s1.4-3.6 3.3-3.6 3.3 1.6 3.3 3.6c0 2-1.5 3.6-3.3 3.6z" fill="#FFFFFF"/>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────
// Row 1, 4 & 5: 3D Purple Squircles & Utility/Feature Icons
// ─────────────────────────────────────────────────────────────

export function PurpleSquircleBase({ children, className = "w-11 h-11" }) {
  return (
    <div className={`relative rounded-2xl bg-[#4D3380] border border-[#3C2566] text-white flex items-center justify-center shadow-md select-none ${className}`}>
      {/* Top Gloss Highlight Arc */}
      <div className="absolute top-0.5 inset-x-1.5 h-3.5 bg-white/15 rounded-t-xl pointer-events-none" />
      {children}
    </div>
  )
}

export function SquircleCode({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleLaptop({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleDatabase({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleCloud({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <polyline points="12 13 12 17" />
        <polyline points="9 16 12 13 15 16" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleRocket({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-4.05 11a22.36 22.36 0 0 1-3.95 2z" />
        <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
        <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleLightbulb({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquirclePin({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-red-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleMail({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleBriefcase({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleDoc({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleCalendar({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleHeart({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-pink-300 fill-current" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </PurpleSquircleBase>
  )
}

// ─────────────────────────────────────────────────────────────
// Row 6: Hand-Drawn Purple Doodles (Exact Sheet Match)
// ─────────────────────────────────────────────────────────────

export function DoodleCrown({ className = "w-8 h-8 text-stone-900" }) {
  return (
    <svg className={className} viewBox="0 0 36 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 3 20 L 6 7 L 13 14 L 18 3 L 23 14 L 30 7 L 33 20 Z" />
      <line x1="3" y1="22" x2="33" y2="22" strokeWidth="2" />
    </svg>
  )
}

export function DoodleCrownAlt({ className = "w-8 h-8 text-[#583FA2]" }) {
  return (
    <svg className={className} viewBox="0 0 36 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 4 20 L 6 9 L 14 15 L 18 4 L 22 15 L 30 9 L 32 20 Z" />
      <circle cx="6" cy="7" r="1.5" fill="currentColor" />
      <circle cx="18" cy="2.5" r="1.5" fill="currentColor" />
      <circle cx="30" cy="7" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function DoodleSparkle({ className = "w-5 h-5 text-stone-900" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  )
}

export function DoodleExclamation({ className = "w-6 h-6 text-stone-900" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      {/* First exclamation */}
      <path d="M8 4 L12 4 L10 20 L8 20 Z" />
      <circle cx="9" cy="26" r="2.5" />
      {/* Second angled exclamation */}
      <path d="M20 4 L24 5 L21 21 L18 20 Z" />
      <circle cx="19.5" cy="26" r="2.5" />
    </svg>
  )
}

export function DoodleCurvedArrow({ className = "w-10 h-6 text-stone-900" }) {
  return (
    <svg className={className} viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M 5 22 Q 30 5 50 15" />
      <path d="M 44 8 L 52 16 L 40 22" fill="none" />
    </svg>
  )
}

export function DoodlePaperAirplane({ className = "w-16 h-8 text-stone-900" }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Dashed Loop Trail */}
      <svg className="w-14 h-8 text-stone-600" viewBox="0 0 70 35" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3">
        <path d="M 0 30 Q 25 35 38 22 C 46 12 42 4 30 8 C 22 12 30 25 55 12" />
      </svg>
      {/* Plane */}
      <svg className="w-6 h-6 text-stone-900 fill-current -rotate-12 transform -ml-2" viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </div>
  )
}

export function DoodleTrophy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M12 8 H28 V20 C28 25 24 28 20 28 C16 28 12 25 12 20 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
      {/* Handles */}
      <path d="M12 12 H6 C4.5 12 4 17 8 19 L12 19" stroke="#CA8A04" strokeWidth="2" fill="none" />
      <path d="M28 12 H34 C35.5 12 36 17 32 19 L28 19" stroke="#CA8A04" strokeWidth="2" fill="none" />
      {/* Base */}
      <path d="M17 28 V33 H23 V28" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
      <rect x="13" y="33" width="14" height="4" rx="1.5" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
    </svg>
  )
}

export function DoodleSmileyFace({ className = "w-6 h-6 text-stone-900" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M 8 15 Q 12 19 16 15" />
    </svg>
  )
}


// ─────────────────────────────────────────────────────────────
// Additional Icons & Elements from "Icon & Background Set"
// Provided in media_1793678625308_7cf6acb0.jpg
// ─────────────────────────────────────────────────────────────

/**
 * Deckled / Torn Paper Patch Container
 * Gives any icon the authentic scrapbook paper scrap / sticker backing
 */
export function IconPaperPatch({ children, className = "" }) {
  return (
    <div className={`relative inline-flex items-center justify-center p-1.5 rounded-2xl bg-white border border-[#E8E2D8] shadow-[0_4px_10px_rgba(40,20,70,0.07)] transform hover:scale-105 transition-transform ${className}`}>
      {/* Torn Paper Rough Edge Simulation */}
      <div className="absolute inset-0 rounded-2xl border border-dashed border-stone-200/60 pointer-events-none" />
      {children}
    </div>
  )
}

export function IconGoogle({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#FFFFFF" stroke="#E5E0D8" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.2" />
      <g transform="translate(18, 18) scale(0.6)">
        <path d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.5c-.5 2.8-2.1 5.2-4.5 6.8v5.6h7.3c4.3-3.9 6.8-9.8 6.8-16.7z" fill="#4285F4"/>
        <path d="M24 47c6.2 0 11.4-2.1 15.2-5.6l-7.3-5.6c-2.1 1.4-4.7 2.2-7.9 2.2-6.1 0-11.2-4.1-13-9.6H3.4v5.8C7.2 41.8 15 47 24 47z" fill="#34A853"/>
        <path d="M11 28.4c-.5-1.4-.7-2.9-.7-4.4s.2-3 .7-4.4V13.8H3.4C1.2 18.2 0 23 0 28.4s1.2 10.2 3.4 14.6l7.6-5.8v-8.8z" fill="#FBBC05"/>
        <path d="M24 9.8c3.4 0 6.4 1.2 8.8 3.5l6.6-6.6C35.4 2.6 30.2 0 24 0 15 0 7.2 5.2 3.4 12.8l7.6 5.8c1.8-5.5 6.9-9.6 13-9.6z" fill="#EA4335"/>
      </g>
    </svg>
  )
}

export function IconMicrosoft({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#4D3380" stroke="#3C2566" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.15" />
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="10" height="10" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="14" y="0" width="10" height="10" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="0" y="14" width="10" height="10" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="14" y="14" width="10" height="10" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
      </g>
    </svg>
  )
}

export function IconTikTok({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <rect x="2" y="2" width="60" height="60" rx="18" fill="#000000" stroke="#222222" strokeWidth="2" />
      <rect x="3" y="3" width="58" height="28" rx="16" fill="white" fillOpacity="0.1" />
      <g transform="translate(22, 16) scale(0.9)">
        <path d="M16.6 6.8c1.3 1.2 3 1.9 4.9 2V13c-2.4 0-4.6-.8-6.4-2.1V23c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c.6 0 1.2.1 1.8.2v4.3c-.6-.2-1.2-.3-1.8-.3-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8V0h4.2c0 2.6 1 5 2.7 6.8z" fill="#25F4EE" transform="translate(-1, -1)"/>
        <path d="M16.6 6.8c1.3 1.2 3 1.9 4.9 2V13c-2.4 0-4.6-.8-6.4-2.1V23c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c.6 0 1.2.1 1.8.2v4.3c-.6-.2-1.2-.3-1.8-.3-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8V0h4.2c0 2.6 1 5 2.7 6.8z" fill="#FE2C55" transform="translate(1, 1)"/>
        <path d="M16.6 6.8c1.3 1.2 3 1.9 4.9 2V13c-2.4 0-4.6-.8-6.4-2.1V23c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c.6 0 1.2.1 1.8.2v4.3c-.6-.2-1.2-.3-1.8-.3-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8V0h4.2c0 2.6 1 5 2.7 6.8z" fill="#FFFFFF"/>
      </g>
    </svg>
  )
}

export function SquircleDownload({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleLink({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleExternalLink({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </PurpleSquircleBase>
  )
}

export function SquircleGlobe({ className = "w-11 h-11" }) {
  return (
    <PurpleSquircleBase className={className}>
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </PurpleSquircleBase>
  )
}

// ─────────────────────────────────────────────────────────────
// UI Elements from Sheet (Exact Mockup Match)
// ─────────────────────────────────────────────────────────────

export function ButtonPurpleArrow({ children, href, onClick, className = "" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-between gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4D2C91] to-[#7B51D3] hover:from-[#40237C] hover:to-[#6B42BF] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 select-none ${className}`}
    >
      <span>{children}</span>
      <span className="w-5 h-5 rounded-full bg-white text-[#4D2C91] flex items-center justify-center text-xs font-black shadow-xs">
        ➔
      </span>
    </a>
  )
}

export function ButtonWhiteArrow({ children, href, onClick, className = "" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-between gap-3 px-6 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-[#4D2C91] text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all transform hover:scale-105 select-none ${className}`}
    >
      <span>{children}</span>
      <span className="w-5 h-5 rounded-full bg-[#4D2C91] text-white flex items-center justify-center text-xs font-black shadow-xs">
        ➔
      </span>
    </a>
  )
}

// ─────────────────────────────────────────────────────────────
// Shape & Decoration Doodles from Sheet (Row 6 & Left Bottom)
// ─────────────────────────────────────────────────────────────

export function DoodleHighlighter({ className = "w-16 h-6 text-[#7B51D3]" }) {
  return (
    <svg className={className} viewBox="0 0 80 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <path d="M 5 8 Q 40 4 75 12" />
      <path d="M 10 18 Q 45 15 70 24" />
      <path d="M 20 27 Q 48 25 65 28" />
    </svg>
  )
}

export function DoodleOvalScribble({ className = "w-16 h-8 text-[#583FA2]" }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2.2">
      <ellipse cx="40" cy="20" rx="36" ry="16" transform="rotate(-5 40 20)" strokeDasharray="120 4" />
      <ellipse cx="40" cy="20" rx="34" ry="14" transform="rotate(2 40 20)" />
    </svg>
  )
}

export function DoodleHeartOutline({ className = "w-7 h-7 text-[#583FA2]" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 27 C16 27 5 20 5 12 C5 7.5 8.5 4 13 4 C14.5 4 15.5 4.5 16 5 C16.5 4.5 17.5 4 19 4 C23.5 4 27 7.5 27 12 C27 20 16 27 16 27 Z" />
    </svg>
  )
}

export function DoodleStarHandDrawn({ className = "w-6 h-6 text-[#583FA2]" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3 L20 12 L29 13 L22 20 L24 29 L16 24 L8 29 L10 20 L3 13 L12 12 Z" />
    </svg>
  )
}
