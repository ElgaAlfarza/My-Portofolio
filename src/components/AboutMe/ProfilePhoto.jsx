'use client'

export default function ProfilePhoto({
  faceSrc = '/profile-face.png',
  alt = 'Foto profil formal Elga Alfareza, S.Kom.',
}) {
  return (
    <figure className="w-full max-w-[18.5rem] sm:max-w-[21rem] mx-auto lg:ml-auto lg:mr-0 group">
      <div className="exec-card exec-card-hover p-2.5 bg-paper">
        <div className="relative w-full aspect-[4/5] rounded-lg studio-portrait-stage border border-line/80 overflow-hidden flex items-end justify-center pt-5 px-3">
          {/* Top Subtle Credential Pill */}
          <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-paper/90 backdrop-blur-sm border border-line text-[0.6875rem] font-semibold text-ink shadow-subtle">
            <span className="material-symbols-outlined text-[0.875rem] text-brand" aria-hidden="true">
              verified
            </span>
            <span>S.Kom. • Cum Laude 3.76</span>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={faceSrc}
            alt={alt}
            {...{ fetchpriority: 'high' }}
            className="w-full h-full object-contain object-bottom portrait-cutout transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <figcaption className="pt-2.5 pb-0.5 px-1.5 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-ink truncate">Elga Alfareza, S.Kom.</span>
          </div>
          <span className="text-ink-muted shrink-0">Mataram, NTB</span>
        </figcaption>
      </div>
    </figure>
  )
}
