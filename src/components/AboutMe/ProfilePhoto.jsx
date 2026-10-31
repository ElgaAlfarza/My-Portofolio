'use client'

export default function ProfilePhoto({
  faceSrc = '/profile-face.png',
  alt = 'Foto profil formal Elga Alfareza, S.Kom.',
}) {
  return (
    <figure className="w-full max-w-[18.5rem] sm:max-w-[20.5rem] mx-auto lg:ml-auto lg:mr-0">
      <div className="exec-card p-2.5 bg-paper">
        <div className="relative w-full aspect-[4/5] rounded-lg bg-subtle border border-line/70 overflow-hidden flex items-end justify-center pt-4 px-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={faceSrc}
            alt={alt}
            {...{ fetchpriority: 'high' }}
            className="w-full h-full object-contain object-bottom portrait-cutout"
          />
        </div>
        <figcaption className="pt-2.5 pb-0.5 px-1.5 flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold text-ink">Elga Alfareza, S.Kom.</span>
          <span className="text-ink-muted">Mataram, NTB</span>
        </figcaption>
      </div>
    </figure>
  )
}
