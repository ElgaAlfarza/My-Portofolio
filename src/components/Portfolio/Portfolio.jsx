'use client'

import { useState } from 'react'

const FILTERS = [
  { id: 'all',           label: 'All Works (4)' },
  { id: 'ai',            label: 'AI & Riset' },
  { id: 'operations',    label: 'IT Operations' },
  { id: 'interactive3d', label: 'Interactive 3D & Sec' },
]

const WORKS = [
  {
    id: 1,
    category: 'ai',
    ref: 'SYS_REF // 01',
    badge: '-45% DRIFT',
    badgeType: 'primary',
    title: 'Model Machine Learning Aksara Sasak',
    desc: 'Perancangan, pelatihan, dan pengujian arsitektur Convolutional Neural Networks (CNN) untuk klasifikasi citra naskah kuno Aksara Sasak. Diterbitkan di Jurnal Nasional Terindeks SINTA 4 serta buku ilmiah resmi.',
    tags: ['Python', 'CNN Deep Learning', 'SINTA 4', 'Streamlit'],
    actionText: 'INSPECT SPEC',
    actionHref: '#',
    type: 'code',
    filename: 'sasak.cnn.config.json',
    code: `{
  "system": "Sasak-CNN-Classifier-v2",
  "layers": { "conv2d": 64, "dense": 128, "dropout": 0.3 },
  "accuracyVal": 98.42,
  "sintaIndex": "SINTA-4-VERIFIED"
}`,
  },
  {
    id: 2,
    category: 'operations',
    ref: 'SYS_REF // 02',
    badge: '< 250ms LATENCY',
    badgeType: 'secondary',
    title: 'Infrastruktur Server Simbank & Telemetri',
    desc: 'Pengoperasian dan pengelolaan server simbank untuk kelancaran layanan stok kartu SIM massal. Memantau real-time telemetry throughput dengan sinkronisasi inventori 100% akurat serta QC hardware/software.',
    tags: ['Server Simbank', 'Hardware QC', 'Zero Drift', 'Telemetry'],
    actionText: 'LIVE PREVIEW',
    actionHref: '#',
    type: 'telemetry',
    metricLabel: 'NETWORK EGRESS THROUGHPUT',
    metricValue: '142.8 GB/s',
    sparklineSub: 'SUB-SECOND ALERTING ENGAGED',
  },
  {
    id: 3,
    category: 'interactive3d',
    ref: 'SYS_REF // 03',
    badge: '60 FPS LOCKED',
    badgeType: 'primary',
    title: 'Aura 3D Interactive Spatial Studio',
    desc: 'Browser-based 3D photorealistic asset staging viewport with PBR lighting pipelines, GLTF mesh compression, and touch gesture kinematics for real-time 3D spatial experiences.',
    tags: ['Three.js', 'GLSL', 'Web Audio API', 'React Three Fiber'],
    actionText: 'LAUNCH RUNTIME',
    actionHref: '#',
    type: '3d-shader',
    titleBadge: 'CUSTOM SHADER COMPILES',
    subText: '+38% Session Time / Zero Jank',
    chip: 'PBR_ENGINE',
  },
  {
    id: 4,
    category: 'interactive3d',
    ref: 'SYS_REF // 04',
    badge: 'SOC2 COMPLIANT',
    badgeType: 'tertiary',
    title: 'Sentinel Zero-Trust Sec Pipeline',
    desc: 'Automated dependency provenance and immutable signing gateway preventing supply-chain anomalies across production deployments with cryptographic Sigstore attestations.',
    tags: ['TypeScript', 'GraphQL', 'Cosign', 'Docker Security'],
    actionText: 'VIEW REPO',
    actionHref: '#',
    type: 'security',
    titleBadge: 'CRYPTOGRAPHIC ATTESTATION',
    subText: 'Zero-Trust Verified Sigstore Keys',
    chip: 'ENCRYPTED',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredWorks =
    activeFilter === 'all'
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter)

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="works">
      {/* Section Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              SECTION 02
            </span>
            <span>// SELECTED WORKS &amp; SYSTEMS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Engineered for Extreme Reliability
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1 rounded-full bg-surface-container-low border border-white/[0.06]">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-full font-label-mono text-label-sm transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Engineering Portfolio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="rounded-2xl bg-surface-container-low p-space-lg shadow-xl flex flex-col justify-between border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
          >
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-mono text-label-mono text-secondary">
                  {work.ref}
                </span>
                <span
                  className={`px-2.5 py-1 rounded-full bg-surface-container-high font-label-mono text-label-sm font-semibold ${
                    work.badgeType === 'primary'
                      ? 'text-primary'
                      : work.badgeType === 'secondary'
                      ? 'text-secondary'
                      : 'text-tertiary'
                  }`}
                >
                  {work.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-headline-md text-xl sm:text-headline-md font-bold text-on-surface mb-2">
                {work.title}
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                {work.desc}
              </p>

              {/* Dynamic Exhibit Panel */}
              {work.type === 'code' && (
                <div className="p-space-sm rounded-xl bg-surface-container-lowest font-code-md text-code-md text-secondary mb-space-md overflow-x-auto border border-white/[0.04]">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-bright/40 text-[11px] font-label-mono text-outline">
                    <span>{work.filename}</span>
                    <span className="text-secondary font-medium">SYNTAX_CHECK: OK</span>
                  </div>
                  <pre className="font-code-md text-[13px] leading-relaxed text-on-surface-variant">
                    <code>
                      {`{\n`}
                      {`  `}
                      <span className="text-secondary">&quot;system&quot;</span>: <span className="text-tertiary">&quot;Sasak-CNN-Classifier-v2&quot;</span>,{`\n`}
                      {`  `}
                      <span className="text-secondary">&quot;layers&quot;</span>: &#123; <span className="text-secondary">&quot;conv2d&quot;</span>: <span className="text-primary">64</span>, <span className="text-secondary">&quot;dense&quot;</span>: <span className="text-primary">128</span> &#125;,{`\n`}
                      {`  `}
                      <span className="text-secondary">&quot;accuracyVal&quot;</span>: <span className="text-secondary">98.42</span>,{`\n`}
                      {`  `}
                      <span className="text-secondary">&quot;sintaIndex&quot;</span>: <span className="text-tertiary">&quot;SINTA-4-VERIFIED&quot;</span>{`\n`}
                      {`}`}
                    </code>
                  </pre>
                </div>
              )}

              {work.type === 'telemetry' && (
                <div className="p-space-md rounded-xl bg-surface-container-lowest mb-space-md border border-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-mono text-label-sm text-outline">
                      {work.metricLabel}
                    </span>
                    <span className="font-label-mono text-label-sm text-primary font-bold">
                      {work.metricValue}
                    </span>
                  </div>
                  {/* Inline Sparkline SVG */}
                  <svg
                    className="w-full h-16 text-primary"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 300 60"
                  >
                    <path
                      d="M0,45 Q25,10 50,30 T100,20 T150,40 T200,15 T250,25 T300,8 L300,60 L0,60 Z"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M0,45 Q25,10 50,30 T100,20 T150,40 T200,15 T250,25 T300,8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                  <div className="flex items-center justify-between mt-2 font-label-mono text-[10px] text-on-surface-variant">
                    <span>T-60s</span>
                    <span className="text-secondary font-semibold">
                      {work.sparklineSub}
                    </span>
                    <span className="text-primary font-bold">LIVE</span>
                  </div>
                </div>
              )}

              {work.type === '3d-shader' && (
                <div className="p-space-md rounded-xl bg-surface-container-lowest mb-space-md flex items-center justify-between border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                    </div>
                    <div>
                      <p className="font-label-mono text-label-sm text-on-surface font-semibold">
                        {work.titleBadge}
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        {work.subText}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-surface-container font-label-mono text-label-sm text-secondary">
                    {work.chip}
                  </span>
                </div>
              )}

              {work.type === 'security' && (
                <div className="p-space-md rounded-xl bg-surface-container-lowest mb-space-md flex items-center justify-between border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[24px]">security</span>
                    </div>
                    <div>
                      <p className="font-label-mono text-label-sm text-on-surface font-semibold">
                        {work.titleBadge}
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        {work.subText}
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-surface-container font-label-mono text-label-sm text-tertiary">
                    {work.chip}
                  </span>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-space-sm border-t border-surface-bright/30 mt-2">
              <div className="flex flex-wrap items-center gap-2 font-label-mono text-label-sm text-outline">
                {work.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < work.tags.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex items-center gap-1 font-label-mono text-label-sm text-primary hover:text-secondary font-semibold transition-colors shrink-0"
                href={work.actionHref}
              >
                <span>{work.actionText}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
