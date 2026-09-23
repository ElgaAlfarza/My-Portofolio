'use client'

/**
 * MetricsStrip – Achievement metrics row
 *
 * Shows 3–4 metric slots. Values and labels are passed as props so the
 * user fills in real numbers — no fake statistics are hardcoded.
 *
 * Design: Each metric is a glass card with a large value and a label.
 * The strip is intentionally understated — no decorative icons or gradients
 * that would inflate the perceived importance of placeholder numbers.
 *
 * Props:
 *   metrics  {Array<{value, label, sublabel?}>}
 */

import { motion } from 'framer-motion'

// ── Placeholder slots (user fills real data) ───────────────────────────────
export const METRICS_PLACEHOLDER = [
  { id: 1, value: '—',    label: 'Projects Completed',    sublabel: 'fill real number' },
  { id: 2, value: '—',    label: 'Certificates Earned',   sublabel: 'fill real number' },
  { id: 3, value: '—',    label: 'Years of Learning',     sublabel: 'fill real number' },
  { id: 4, value: '—',    label: 'Cups of Coffee',        sublabel: 'fill real number' },
]

// ── Card ──────────────────────────────────────────────────────────────────
function MetricCard({ metric, index }) {
  return (
    <motion.div
      className="card-glass flex flex-col items-center text-center px-4 py-5 rounded-2xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0, 0, 0.2, 1] }}
    >
      <span
        className="text-2xl sm:text-3xl font-bold text-gradient tabular-nums"
        aria-label={`${metric.value} ${metric.label}`}
      >
        {metric.value}
      </span>
      <span className="text-xs text-white/55 mt-1.5 leading-snug">
        {metric.label}
      </span>
      {metric.sublabel && (
        <span className="text-[10px] font-mono text-white/25 mt-1 tracking-wide">
          {metric.sublabel}
        </span>
      )}
    </motion.div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────
export default function MetricsStrip({ metrics = METRICS_PLACEHOLDER }) {
  return (
    <dl
      className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      aria-label="Achievement metrics"
    >
      {metrics.map((m, i) => (
        <MetricCard key={m.id ?? i} metric={m} index={i} />
      ))}
    </dl>
  )
}
