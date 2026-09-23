'use client'

/**
 * TimelineList – Reusable vertical timeline
 *
 * Used for both Education and Work/Project experience.
 * Each item has a year badge, title, subtitle, and optional description.
 *
 * Design: vertical line on the left, dot marker per item, items animate
 * in sequentially when the list enters the viewport.
 *
 * Props:
 *   items   {Array} – see EDUCATION_ITEMS / WORK_ITEMS for shape
 *   accent  {string} – Tailwind text colour class for the dot, default 'text-accent'
 */

import { motion } from 'framer-motion'

// ── Shared animation ───────────────────────────────────────────────────────
const ITEM_VARIANTS = {
  hidden: { opacity: 0, x: -16 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0, 0, 0.2, 1] },
  }),
}

// ── Sub-component: single timeline item ───────────────────────────────────
function TimelineItem({ item, index, isLast }) {
  return (
    <motion.li
      custom={index}
      variants={ITEM_VARIANTS}
      className="relative flex gap-4 pb-6 last:pb-0"
    >
      {/* Vertical connector line */}
      {!isLast && (
        <span
          className="absolute left-[7px] top-4 bottom-0 w-px bg-white/[0.07]"
          aria-hidden="true"
        />
      )}

      {/* Dot */}
      <span
        className="relative z-10 mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full
          border-2 border-accent/60 bg-bg-elevated"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Year badge */}
        <span className="inline-block font-mono text-[10px] text-accent/70 tracking-widest uppercase mb-0.5">
          {item.year}
        </span>

        {/* Title */}
        <p className="text-sm font-semibold text-white/90 leading-snug">
          {item.title}
        </p>

        {/* Subtitle (institution / company) */}
        <p className="text-xs text-white/50 mt-0.5">
          {item.subtitle}
        </p>

        {/* Optional description */}
        {item.description && (
          <p className="text-xs text-white/40 mt-1.5 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </motion.li>
  )
}

// ── Main export ────────────────────────────────────────────────────────────
export default function TimelineList({ items = [], label = 'Timeline' }) {
  return (
    <motion.ol
      aria-label={label}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {items.map((item, i) => (
        <TimelineItem
          key={item.id ?? i}
          item={item}
          index={i}
          isLast={i === items.length - 1}
        />
      ))}
    </motion.ol>
  )
}
