'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ==============================================================================
// 1. DATA SKILLS ELGA ALFAREZA (100% SESUAI LATAR BELAKANG ASLI)
// ==============================================================================
const SKILLS_DATA = [
  // AI & Machine Learning
  { id: 'cnn', name: 'CNN Deep Learning', category: 'ai', level: 'ADVANCED', icon: 'psychology', desc: 'Arsitektur Convolutional Neural Networks untuk klasifikasi citra naskah kuno Aksara Sasak (SINTA 4).' },
  { id: 'python', name: 'Python', category: 'ai', level: 'ADVANCED', icon: 'terminal', desc: 'Bahasa komputasi utama untuk riset AI, data preprocessing, training model machine learning, dan automasi.' },
  { id: 'tf', name: 'TensorFlow & Keras', category: 'ai', level: 'COMPETENT', icon: 'hub', desc: 'Framework pembuatan dan evaluasi model klasifikasi citra berlapis konvolusi dan dense.' },
  { id: 'vision', name: 'Computer Vision', category: 'ai', level: 'COMPETENT', icon: 'visibility', desc: 'Pengolahan citra digital, augmentasi naskah lontar, edge detection, dan segmentasi karakter.' },
  { id: 'sinta', name: 'SINTA 4 Research', category: 'ai', level: 'VERIFIED', icon: 'menu_book', desc: 'Metodologi riset ilmiah terakreditasi nasional, penulisan manuskrip, dan publikasi buku ilmiah.' },
  { id: 'streamlit', name: 'Streamlit AI App', category: 'ai', level: 'COMPETENT', icon: 'web', desc: 'Deployment antarmuka visual interaktif untuk demonstrasi inferensi model klasifikasi AI.' },

  // IT Operations & Server Simbank
  { id: 'simbank', name: 'Server Simbank', category: 'operations', level: 'EXPERT', icon: 'dns', desc: 'Pengelolaan infrastruktur server simbank CV Rajawali untuk ketersediaan stok kartu SIM massal.' },
  { id: 'datasync', name: 'Real-Time Data Sync', category: 'operations', level: 'EXPERT', icon: 'sync', desc: 'Sinkronisasi inventori massal tanpa latensi untuk menjamin akurasi stok dan pelaporan 100% konsisten.' },
  { id: 'highavail', name: '99.9% Uptime Ops', category: 'operations', level: 'EXPERT', icon: 'speed', desc: 'Manajemen ketersediaan sistem operasional tinggi dan mitigasi downtime pada server produksi.' },
  { id: 'network', name: 'Network & Port Config', category: 'operations', level: 'COMPETENT', icon: 'router', desc: 'Routing port simbank, pemantauan kestabilan jaringan, dan konfigurasi IP address lokal/server.' },
  { id: 'monitoring', name: 'System Telemetry', category: 'operations', level: 'COMPETENT', icon: 'monitoring', desc: 'Pemantauan indikator kinerja perangkat keras dan arus transfer data secara real-time.' },

  // Hardware & Software Quality Control
  { id: 'hw-diag', name: 'Hardware Diagnostics', category: 'qc', level: 'ADVANCED', icon: 'memory', desc: 'Inspeksi fisik dan diagnosa kelayakan teknis unit perangkat keras di CV Sinar Mutiara Bali.' },
  { id: 'sw-qc', name: 'Software QA Testing', category: 'qc', level: 'ADVANCED', icon: 'bug_report', desc: 'Pengujian fungsionalitas aplikasi, penelusuran bug, dan validasi standar operasional software.' },
  { id: 'logistics', name: 'Logistics Mutation Sync', category: 'qc', level: 'ADVANCED', icon: 'inventory_2', desc: 'Pencatatan mutasi penerimaan dan pengeluaran logistik unit dari suplier secara presisi.' },
  { id: 'conformance', name: 'Zero-Defect Protocol', category: 'qc', level: 'ADVANCED', icon: 'verified', desc: 'Penerapan standar kendali mutu ketat untuk memastikan tidak ada unit cacat sampai ke mitra.' },

  // Database & Modern Web Systems
  { id: 'sql', name: 'SQL & Relational DB', category: 'systems', level: 'ADVANCED', icon: 'database', desc: 'Perancangan skema relasional, kueri data terstruktur, dan pemeliharaan integritas database.' },
  { id: 'data-audit', name: 'Transaction Auditing', category: 'systems', level: 'ADVANCED', icon: 'receipt_long', desc: 'Verifikasi bukti transaksi, rekonsiliasi data keuangan, dan pendataan digital terpadu di IPHI.' },
  { id: 'nextjs', name: 'Next.js 14 & React', category: 'systems', level: 'COMPETENT', icon: 'code', desc: 'Arsitektur web modern dengan Server Components, dynamic routing, dan UI reaktif.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'systems', level: 'COMPETENT', icon: 'style', desc: 'Desain antarmuka modern presisi tinggi, responsive bento grids, dan custom cosmic theme.' },
  { id: 'cloudinary', name: 'Cloudinary API', category: 'systems', level: 'COMPETENT', icon: 'cloud_upload', desc: 'Integrasi cloud media hosting, manajemen aset otomatis, dan upload multi-file server-side.' },
  { id: 'git', name: 'Git & CI/CD GitHub', category: 'systems', level: 'COMPETENT', icon: 'merge', desc: 'Version control, branch workflow terstruktur, dan otomatisasi deployment produksi ke Vercel.' },
]

// Kategori Filter
const CATEGORIES = [
  { id: 'all', label: 'Semua Bidang (21)' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'operations', label: 'Server Simbank & IT Ops' },
  { id: 'qc', label: 'Hardware & Software QC' },
  { id: 'systems', label: 'Database & Modern Web' },
]

// Warna & Aksen per Kategori
const CATEGORY_COLORS = {
  ai: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    dot: '#2c67ed',
    glow: 'rgba(44, 103, 237, 0.4)',
    name: 'Artificial Intelligence',
  },
  operations: {
    badge: 'bg-secondary/10 text-secondary border-secondary/20',
    dot: '#00a6e0',
    glow: 'rgba(0, 166, 224, 0.4)',
    name: 'IT Operations',
  },
  qc: {
    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    dot: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    name: 'Quality Control',
  },
  systems: {
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    dot: '#10b981',
    glow: 'rgba(16, 185, 129, 0.4)',
    name: 'Database & Web',
  },
}

// 4 Bento Domain Cards untuk Tampilan 3D Tilt
const BENTO_DOMAINS = [
  {
    id: 'bento-ai',
    category: 'ai',
    title: 'Artificial Intelligence & Deep Learning',
    roleTag: 'SINTA 4 RESEARCHED',
    icon: 'psychology',
    colorKey: 'primary',
    accentColor: '#2c67ed',
    desc: 'Pengembangan arsitektur Convolutional Neural Networks (CNN) untuk klasifikasi naskah lontar Aksara Sasak dengan akurasi teruji serta publikasi di jurnal ilmiah nasional.',
    skills: ['Python', 'CNN Deep Learning', 'TensorFlow', 'Computer Vision', 'Data Preprocessing', 'Streamlit'],
    metric: '100% SINTA 4',
    metricLabel: 'PUBLIKASI ILMIAH',
  },
  {
    id: 'bento-ops',
    category: 'operations',
    title: 'Server Simbank & Infrastructure Ops',
    roleTag: 'CV RAJAWALI PRODUCTION',
    icon: 'dns',
    colorKey: 'secondary',
    accentColor: '#00a6e0',
    desc: 'Pengelolaan infrastruktur server simbank berkapasitas masif. Pemantauan kesiapan stok kartu SIM, sinkronisasi inventori real-time, dan pemeliharaan ketersediaan sistem.',
    skills: ['Server Simbank', 'Real-Time Sync', '99.9% Uptime', 'Network Config', 'Hardware Monitoring'],
    metric: '99.9% Uptime',
    metricLabel: 'SIMBANK AVAILABILITY',
  },
  {
    id: 'bento-qc',
    category: 'qc',
    title: 'Hardware & Software Quality Control',
    roleTag: 'ZERO-DEFECT PROTOCOL',
    icon: 'verified',
    colorKey: 'tertiary',
    accentColor: '#f59e0b',
    desc: 'Inspeksi komprehensif pada komponen perangkat keras dan performa perangkat lunak di CV Sinar Mutiara Bali guna memastikan standar mutu tanpa cacat sebelum pengiriman logistik.',
    skills: ['Hardware Diagnostic', 'Software QA', 'Mutation Sync', 'Defect Analysis', 'Logistics Audit'],
    metric: '100% Tested',
    metricLabel: 'QUALITY CONFORMANCE',
  },
  {
    id: 'bento-systems',
    category: 'systems',
    title: 'Database Architecture & Modern Web',
    roleTag: 'MAGNA CUM LAUDE PEDIGREE',
    icon: 'database',
    colorKey: 'emerald',
    accentColor: '#10b981',
    desc: 'Perancangan skema basis data relasional, integritas data transaksi, serta pengembangan antarmuka web modern dengan Next.js, Cloudinary cloud storage, dan Tailwind CSS.',
    skills: ['SQL Database', 'Transaction Audit', 'Next.js 14', 'Tailwind CSS', 'Cloudinary API', 'Git & CI/CD'],
    metric: 'IPK 3.76',
    metricLabel: 'S1 ILMU KOMPUTER',
  },
]

// ==============================================================================
// 2. 3D HOLOGRAM CANVAS SPHERE COMPONENT (HTML5 Canvas 3D Perspective)
// ==============================================================================
function HologramSphere3D({ activeFilter, selectedSkill, onSelectSkill }) {
  const canvasRef = useRef(null)
  const isDraggingRef = useRef(false)
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef({ x: 0.2, y: 0.4 })
  const velocityRef = useRef({ x: 0.003, y: 0.005 })
  const hoveredNodeRef = useRef(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const autoRotateRef = useRef(true)

  useEffect(() => {
    autoRotateRef.current = autoRotate
  }, [autoRotate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    // Setup Canvas Resolution with DPR for Ultra-Sharp Retinal 3D Text & Graphics
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Generate 3D Fibonacci Sphere Coordinates for Even Node Distribution
    const count = SKILLS_DATA.length
    const radius = 175
    const nodes = SKILLS_DATA.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      return {
        ...skill,
        origX: radius * Math.cos(theta) * Math.sin(phi),
        origY: radius * Math.sin(theta) * Math.sin(phi),
        origZ: radius * Math.cos(phi),
        projX: 0,
        projY: 0,
        projScale: 1,
        projAlpha: 1,
      }
    })

    // Animation Loop
    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2

      ctx.clearRect(0, 0, width, height)

      // Auto rotation physics & inertial deceleration
      if (autoRotateRef.current && !isDraggingRef.current) {
        rotationRef.current.y += 0.004
        rotationRef.current.x += 0.0015
      } else if (!isDraggingRef.current) {
        rotationRef.current.x += velocityRef.current.x
        rotationRef.current.y += velocityRef.current.y
        velocityRef.current.x *= 0.95
        velocityRef.current.y *= 0.95
      }

      const rotX = rotationRef.current.x
      const rotY = rotationRef.current.y

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      // Project each node from 3D space to 2D screen
      const focalLength = 340
      nodes.forEach((node) => {
        // Rotate around Y
        const x1 = node.origX * cosY - node.origZ * sinY
        const z1 = node.origZ * cosY + node.origX * sinY

        // Rotate around X
        const y2 = node.origY * cosX - z1 * sinX
        const z2 = z1 * cosX + node.origY * sinX

        const scale = focalLength / (focalLength + z2)
        node.projX = centerX + x1 * scale
        node.projY = centerY + y2 * scale
        node.projScale = scale
        node.projZ = z2
        node.projAlpha = Math.max(0.18, (z2 + radius) / (2 * radius))
      })

      // Sort nodes by Z-depth (back-to-front painter's algorithm)
      const sorted = [...nodes].sort((a, b) => a.projZ - b.projZ)

      // Draw subtle holographic constellation lines between neighboring nodes of same category
      ctx.lineWidth = 0.8
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i]
          const b = sorted[j]
          if (a.category === b.category) {
            const dx = a.projX - b.projX
            const dy = a.projY - b.projY
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 110) {
              const alpha = Math.min(a.projAlpha, b.projAlpha) * 0.18
              ctx.strokeStyle = `rgba(44, 103, 237, ${alpha})`
              ctx.beginPath()
              ctx.moveTo(a.projX, a.projY)
              ctx.lineTo(b.projX, b.projY)
              ctx.stroke()
            }
          }
        }
      }

      // Draw 3D Orbit Guide Rings
      ctx.save()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // Render Each 3D Skill Tag / Pill
      sorted.forEach((node) => {
        const isHovered = hoveredNodeRef.current?.id === node.id
        const isSelected = selectedSkill?.id === node.id
        const isFilteredOut = activeFilter !== 'all' && node.category !== activeFilter

        const colorMeta = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.ai
        const baseAlpha = isFilteredOut ? 0.08 : node.projAlpha
        const effectiveScale = isHovered || isSelected ? node.projScale * 1.15 : node.projScale

        ctx.save()
        ctx.translate(node.projX, node.projY)
        ctx.scale(effectiveScale, effectiveScale)

        // Pill Dimensions
        const text = node.name
        ctx.font = '600 11px "JetBrains Mono", monospace'
        const metrics = ctx.measureText(text)
        const textWidth = metrics.width
        const pillWidth = textWidth + 24
        const pillHeight = 22
        const pillRadius = 11

        // Holographic Glow for Selected / Front Nodes
        if ((isHovered || isSelected || node.projZ > 50) && !isFilteredOut) {
          ctx.shadowColor = colorMeta.dot
          ctx.shadowBlur = isHovered || isSelected ? 18 : 8
        }

        // Pill Background
        ctx.beginPath()
        ctx.roundRect(-pillWidth / 2, -pillHeight / 2, pillWidth, pillHeight, pillRadius)
        if (isSelected) {
          ctx.fillStyle = `rgba(44, 103, 237, 0.9)`
        } else if (isHovered) {
          ctx.fillStyle = `rgba(20, 24, 33, 0.95)`
        } else {
          ctx.fillStyle = `rgba(13, 14, 18, ${Math.max(0.4, baseAlpha * 0.9)})`
        }
        ctx.fill()

        // Pill Border
        ctx.strokeStyle = isSelected
          ? '#ffffff'
          : isHovered
          ? colorMeta.dot
          : `rgba(255, 255, 255, ${baseAlpha * 0.25})`
        ctx.lineWidth = isHovered || isSelected ? 1.5 : 1
        ctx.stroke()

        // Status Dot
        ctx.beginPath()
        ctx.arc(-pillWidth / 2 + 10, 0, 3, 0, Math.PI * 2)
        ctx.fillStyle = isFilteredOut ? 'rgba(255,255,255,0.2)' : colorMeta.dot
        ctx.fill()

        // Text Label
        ctx.fillStyle = isSelected
          ? '#ffffff'
          : isFilteredOut
          ? 'rgba(255,255,255,0.2)'
          : `rgba(255, 255, 255, ${Math.max(0.4, baseAlpha * 1.2)})`
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        ctx.fillText(text, -pillWidth / 2 + 18, 0)

        // Bounding box for mouse click / hover detection
        node.screenBBox = {
          x1: node.projX - (pillWidth / 2) * effectiveScale,
          y1: node.projY - (pillHeight / 2) * effectiveScale,
          x2: node.projX + (pillWidth / 2) * effectiveScale,
          y2: node.projY + (pillHeight / 2) * effectiveScale,
        }

        ctx.restore()
      })

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', updateSize)
    }
  }, [activeFilter, selectedSkill])

  // Mouse / Touch Drag Handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true
    const clientX = e.clientX || (e.touches && e.touches[0].clientX)
    const clientY = e.clientY || (e.touches && e.touches[0].clientY)
    lastMousePosRef.current = { x: clientX, y: clientY }
  }

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0

    if (isDraggingRef.current) {
      const deltaX = clientX - lastMousePosRef.current.x
      const deltaY = clientY - lastMousePosRef.current.y
      rotationRef.current.y += deltaX * 0.007
      rotationRef.current.x -= deltaY * 0.007
      velocityRef.current = { x: -deltaY * 0.001, y: deltaX * 0.001 }
      lastMousePosRef.current = { x: clientX, y: clientY }
    } else {
      // Hover detection on nodes
      const mouseX = clientX - rect.left
      const mouseY = clientY - rect.top
      const found = SKILLS_DATA.find((s) => {
        if (!s.screenBBox) return false
        return (
          mouseX >= s.screenBBox.x1 &&
          mouseX <= s.screenBBox.x2 &&
          mouseY >= s.screenBBox.y1 &&
          mouseY <= s.screenBBox.y2
        )
      })
      hoveredNodeRef.current = found || null
      canvas.style.cursor = found ? 'pointer' : 'grab'
    }
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
  }

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const found = SKILLS_DATA.find((s) => {
      if (!s.screenBBox) return false
      return (
        mouseX >= s.screenBBox.x1 &&
        mouseX <= s.screenBBox.x2 &&
        mouseY >= s.screenBBox.y1 &&
        mouseY <= s.screenBBox.y2
      )
    })
    if (found) {
      onSelectSkill(found)
    }
  }

  return (
    <div className="relative w-full rounded-2xl bg-surface-container-low border border-white/[0.08] shadow-2xl overflow-hidden p-space-md sm:p-space-lg flex flex-col items-center">
      {/* Top Telemetry Header */}
      <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06] font-label-mono text-label-sm">
        <div className="flex items-center gap-2 text-secondary">
          <span className="material-symbols-outlined text-[16px] animate-pulse">radar</span>
          <span>INTERACTIVE 3D SKILL SPHERE // 360° DRAG &amp; ROTATE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-outline hidden sm:inline">VELOCITY // 60 FPS</span>
          <button
            onClick={() => setAutoRotate((prev) => !prev)}
            className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border transition-all ${
              autoRotate
                ? 'bg-primary/20 text-primary border-primary/40'
                : 'bg-surface-container text-on-surface-variant border-white/[0.06]'
            }`}
          >
            {autoRotate ? 'AUTO-ORBIT: ON' : 'AUTO-ORBIT: OFF'}
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full aspect-[1.4/1] sm:aspect-[1.8/1] max-h-[460px] flex items-center justify-center select-none touch-none">
        <canvas
          ref={canvasRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          onClick={handleClick}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        />

        {/* Ambient radial lighting behind sphere */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(44,103,237,0.12)_0%,transparent_65%)]" />

        {/* Drag Hint Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none font-label-mono text-[10px] text-outline opacity-70">
          <span>DRAG MOUSE / TOUCH TO ROTATE SPHERE</span>
          <span>KLIK SKILL UNTUK DETAIL</span>
        </div>
      </div>
    </div>
  )
}

// ==============================================================================
// 3. 3D PARALLAX BENTO TILT CARD COMPONENT (Hardware CSS 3D Transforms)
// ==============================================================================
function BentoTiltCard({ domain, isSelected, onClick }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max 14 deg tilt
    const rotateX = -((y - centerY) / centerY) * 12
    const rotateY = ((x - centerX) / centerX) * 12
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setTransform({ rotateX, rotateY, glareX, glareY })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: '1100px' }}
      className="cursor-pointer group select-none"
    >
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className={`relative w-full h-full rounded-2xl bg-surface-container-low p-space-md sm:p-space-lg border transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden ${
          isSelected
            ? 'border-primary shadow-[0_0_30px_rgba(44,103,237,0.35)] ring-1 ring-primary'
            : 'border-white/[0.08] hover:border-white/[0.2] hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* Dynamic Light Sheen Following Cursor */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: domain.accentColor }}
        />

        {/* 3D Depth Layer 1: Header */}
        <div style={{ transform: 'translateZ(30px)' }} className="relative z-20">
          <div className="flex items-center justify-between mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-md"
              style={{
                backgroundColor: `${domain.accentColor}18`,
                borderColor: `${domain.accentColor}40`,
                color: domain.accentColor,
              }}
            >
              <span className="material-symbols-outlined text-[22px]">{domain.icon}</span>
            </div>
            <span
              className="font-label-mono text-[10px] px-2.5 py-1 rounded-full font-bold border tracking-wider uppercase"
              style={{
                backgroundColor: `${domain.accentColor}15`,
                color: domain.accentColor,
                borderColor: `${domain.accentColor}30`,
              }}
            >
              {domain.roleTag}
            </span>
          </div>

          <h3 className="font-headline-md text-lg sm:text-headline-md font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
            {domain.title}
          </h3>

          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed mb-4">
            {domain.desc}
          </p>
        </div>

        {/* 3D Depth Layer 2: Floating Skill Pills */}
        <div style={{ transform: 'translateZ(45px)' }} className="relative z-20 mb-4">
          <div className="flex flex-wrap gap-1.5 font-label-mono text-label-sm">
            {domain.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded bg-surface-container text-on-surface/90 border border-white/[0.05] group-hover:border-white/[0.12] transition-colors text-[11px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Depth Layer 3: Verified Metric Footer */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="relative z-20 pt-3 border-t border-white/[0.06] flex items-center justify-between font-label-mono text-label-sm"
        >
          <div>
            <p className="text-[10px] text-outline uppercase">{domain.metricLabel}</p>
            <p className="font-bold text-base" style={{ color: domain.accentColor }}>
              {domain.metric}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] text-outline group-hover:text-primary transition-colors font-semibold">
            <span>EXPLORE</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </div>
  )
}

// ==============================================================================
// 4. MAIN SKILLS3D SECTION
// ==============================================================================
export default function Skills3D() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0])

  return (
    <section className="w-full pt-space-xl pb-space-xl mb-margin" id="skills">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase mb-2">
            <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold border border-white/[0.05]">
              SECTION 02
            </span>
            <span>// TECHNICAL MASTERY &amp; SKILL SPHERE 3D</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-bold text-on-surface tracking-tight">
            Keahlian Teknis &amp; Spesialisasi 3D
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-surface-container-low border border-white/[0.06]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-label-mono text-label-sm transition-all ${
                activeFilter === cat.id
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: 3D Holographic Sphere + Live Telemetry Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg items-stretch">
        {/* Left (7 cols): Interactive 3D Canvas Sphere */}
        <div className="lg:col-span-7 flex flex-col">
          <HologramSphere3D
            activeFilter={activeFilter}
            selectedSkill={selectedSkill}
            onSelectSkill={(skill) => setSelectedSkill(skill)}
          />
        </div>

        {/* Right (5 cols): Dynamic Telemetry HUD of Selected Skill */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full p-space-lg rounded-2xl bg-surface-container-low border border-white/[0.08] shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] font-label-mono text-label-sm">
                <span className="text-secondary flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  SYS_TELEMETRY // INSPECTOR
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold text-[11px] border border-primary/20">
                  {selectedSkill.level}
                </span>
              </div>

              {/* Skill Icon & Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary border border-white/[0.08] shadow-inner">
                  <span className="material-symbols-outlined text-[26px]">
                    {selectedSkill.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-xl font-bold text-on-surface">
                    {selectedSkill.name}
                  </h4>
                  <p className="font-label-mono text-[11px] text-outline uppercase tracking-wider">
                    BIDANG: {CATEGORY_COLORS[selectedSkill.category]?.name || 'TECHNICAL SPEC'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-space-sm rounded-xl bg-surface-container-lowest border border-white/[0.05] mb-space-md">
                <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  {selectedSkill.desc}
                </p>
              </div>

              {/* Technical Specifications Bento Grid */}
              <div className="grid grid-cols-2 gap-space-xs font-label-mono text-label-sm mb-4">
                <div className="p-space-xs px-space-sm rounded-lg bg-surface-container border border-white/[0.04]">
                  <p className="text-[10px] text-outline">STATUS LISENSI</p>
                  <p className="font-semibold text-secondary">TERVERIFIKASI</p>
                </div>
                <div className="p-space-xs px-space-sm rounded-lg bg-surface-container border border-white/[0.04]">
                  <p className="text-[10px] text-outline">INTEGRASI KERJA</p>
                  <p className="font-semibold text-primary">PRODUCTION-READY</p>
                </div>
                <div className="p-space-xs px-space-sm rounded-lg bg-surface-container border border-white/[0.04]">
                  <p className="text-[10px] text-outline">VERIFIKASI ILMIAH</p>
                  <p className="font-semibold text-on-surface">SINTA 4 / INDUSTRI</p>
                </div>
                <div className="p-space-xs px-space-sm rounded-lg bg-surface-container border border-white/[0.04]">
                  <p className="text-[10px] text-outline">RELIABILITAS</p>
                  <p className="font-semibold text-tertiary">100% PRESTASI</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-label-mono text-label-sm">
              <span className="text-on-surface-variant text-[11px]">
                Putar 3D Sphere untuk eksplorasi skill lainnya
              </span>
              <a
                href="#works"
                className="inline-flex items-center gap-1 text-primary hover:text-secondary font-semibold transition-colors shrink-0"
              >
                <span>Lihat Proyek</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Bento Cards with 3D Parallax Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {BENTO_DOMAINS.map((domain) => (
          <BentoTiltCard
            key={domain.id}
            domain={domain}
            isSelected={activeFilter === domain.category}
            onClick={() => setActiveFilter(domain.category)}
          />
        ))}
      </div>
    </section>
  )
}
