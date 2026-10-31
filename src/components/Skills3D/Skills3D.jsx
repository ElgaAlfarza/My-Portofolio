'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ==============================================================================
// 1. DATA SKILLS ELGA ALFAREZA (100% SESUAI LATAR BELAKANG ASLI & SERTIFIKASI)
// ==============================================================================
const SKILLS_DATA = [
  // Full Stack & Vibe Coding (Developer)
  { id: 'fullstack-vibe', name: 'Full Stack (Vibe Coding)', category: 'fullstack', level: 'EXPERT', icon: 'auto_awesome', desc: 'Pengembangan full stack end-to-end dengan vibe coding, prompt engineering, agentic AI workflows, integrasi frontend-backend cepat dan terverifikasi Google AI.' },
  { id: 'vercel', name: 'Vercel Deployment', category: 'fullstack', level: 'EXPERT', icon: 'cloud_done', desc: 'Deployment produksi aplikasi web modern, custom domain edge routing, zero-downtime continuous deployment, dan serverless scaling.' },
  { id: 'github', name: 'GitHub & Git CI/CD', category: 'fullstack', level: 'ADVANCED', icon: 'merge', desc: 'Version control branch workflows terstruktur, automasi GitHub CI/CD pipelines, dan manajemen arsitektur repositori multi-lingkungan.' },
  { id: 'vscode', name: 'Visual Studio Code', category: 'fullstack', level: 'EXPERT', icon: 'code_blocks', desc: 'Lingkungan IDE utama dengan penguasaan AI-assisted extensions, multi-terminal debugging, workspace custom presets, dan dev containers.' },
  { id: 'nextjs', name: 'Next.js 14 & React', category: 'fullstack', level: 'ADVANCED', icon: 'devices', desc: 'Arsitektur web modern dengan React 18, Server Components, SSR/SSG, optimized performance rendering, dan dynamic routes.' },
  { id: 'sql', name: 'SQL & Database Design', category: 'fullstack', level: 'ADVANCED', icon: 'database', desc: 'Perancangan skema relasional, kueri data terstruktur, verifikasi bukti transaksi, dan integritas database.' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'fullstack', level: 'COMPETENT', icon: 'style', desc: 'Desain antarmuka modern presisi tinggi, responsive bento grids, glassmorphism, dan custom design systems.' },
  { id: 'cloudinary', name: 'Cloudinary API', category: 'fullstack', level: 'COMPETENT', icon: 'cloud_upload', desc: 'Integrasi cloud media hosting, manajemen aset foto dinamis, dan secure server-side multi-file processing.' },

  // AI & Machine Learning (Python)
  { id: 'python-ml', name: 'Python (Machine Learning)', category: 'ai', level: 'ADVANCED', icon: 'terminal', desc: 'Bahasa komputasi utama untuk riset AI, preprocessing data, training model machine learning, feature engineering, dan automasi.' },
  { id: 'cnn', name: 'CNN Deep Learning', category: 'ai', level: 'ADVANCED', icon: 'psychology', desc: 'Arsitektur Convolutional Neural Networks untuk klasifikasi citra naskah kuno Aksara Sasak dengan akurasi teruji terpublikasi SINTA 4.' },
  { id: 'streamlit', name: 'Streamlit AI Apps', category: 'ai', level: 'ADVANCED', icon: 'web', desc: 'Pembuatan dashboard aplikasi web machine learning interaktif, visualisasi prediksi inferensi model AI, dan demo visual langsung.' },
  { id: 'tf', name: 'TensorFlow & Keras', category: 'ai', level: 'COMPETENT', icon: 'hub', desc: 'Framework perancangan arsitektur deep learning, layer konvolusi, pooling, dense layers, dan optimasi loss function.' },
  { id: 'vision', name: 'Computer Vision', category: 'ai', level: 'COMPETENT', icon: 'visibility', desc: 'Pengolahan citra digital, augmentasi naskah lontar, edge detection, dan segmentasi karakter berdimensi tinggi.' },
  { id: 'sinta', name: 'SINTA 4 Research', category: 'ai', level: 'VERIFIED', icon: 'menu_book', desc: 'Metodologi riset ilmiah terakreditasi nasional, penulisan manuskrip ilmiah, dan publikasi buku referensi resmi.' },
  { id: 'google-ai', name: 'Google AI & Prompt Eng.', category: 'ai', level: 'VERIFIED', icon: 'smart_toy', desc: 'Sertifikasi profesional Google AI & Coursera (7 Courses), pembuatan 20+ artifacts, prompt engineering terstruktur, dan pemecahan masalah berbasis AI.' },

  // IT Operations & Server Simbank
  { id: 'simbank', name: 'Server Simbank', category: 'operations', level: 'EXPERT', icon: 'dns', desc: 'Pengelolaan infrastruktur server simbank CV Rajawali untuk ketersediaan stok kartu SIM massal.' },
  { id: 'datasync', name: 'Real-Time Data Sync', category: 'operations', level: 'EXPERT', icon: 'sync', desc: 'Sinkronisasi inventori massal tanpa latensi untuk menjamin akurasi stok dan pelaporan 100% konsisten.' },
  { id: 'highavail', name: '99.9% Uptime Ops', category: 'operations', level: 'EXPERT', icon: 'speed', desc: 'Manajemen ketersediaan sistem operasional tinggi dan mitigasi downtime pada server produksi.' },
  { id: 'network', name: 'Network & Port Config', category: 'operations', level: 'COMPETENT', icon: 'router', desc: 'Routing port simbank, pemantauan kestabilan jaringan, dan konfigurasi IP address lokal/server.' },
  { id: 'monitoring', name: 'System Telemetry', category: 'operations', level: 'COMPETENT', icon: 'monitoring', desc: 'Pemantauan indikator kinerja perangkat keras dan arus transfer data secara real-time.' },

  // Hardware & Software Quality Control & K3
  { id: 'hw-diag', name: 'Hardware Diagnostics', category: 'qc', level: 'ADVANCED', icon: 'memory', desc: 'Inspeksi fisik dan diagnosa kelayakan teknis unit perangkat keras di CV Sinar Mutiara Bali.' },
  { id: 'sw-qc', name: 'Software QA Testing', category: 'qc', level: 'ADVANCED', icon: 'bug_report', desc: 'Pengujian fungsionalitas aplikasi, penelusuran bug, dan validasi standar operasional software.' },
  { id: 'k3-hira', name: 'K3 (HIRA & JSA)', category: 'qc', level: 'CERTIFIED', icon: 'health_and_safety', desc: 'Identifikasi bahaya (HIRA) dan analisa keselamatan kerja (JSA) bersertifikat resmi Kemnaker RI untuk manajemen risiko.' },
  { id: 'spreadsheet', name: 'Spreadsheet Kemnaker', category: 'qc', level: 'CERTIFIED', icon: 'table_view', desc: 'Pengolahan lembar sebar data operasional, formula kuantitatif, dan rekonsiliasi inventori massal (Kemnaker 20 Jam).' },
  { id: 'toefl', name: 'English (TOEFL ITP)', category: 'qc', level: 'CERTIFIED', icon: 'translate', desc: 'Pemahaman listening dan komunikasi teknis standar internasional bersertifikat Kemnaker BPVP Bandung Barat.' },
]

const CATEGORIES = [
  { id: 'all', label: 'Semua Keahlian (25)' },
  { id: 'fullstack', label: 'Full Stack & Vibe Coding' },
  { id: 'ai', label: 'Python & Machine Learning' },
  { id: 'operations', label: 'Server Simbank & IT Ops' },
  { id: 'qc', label: 'Quality Control & K3' },
]

const CATEGORY_COLORS = {
  fullstack: {
    badge: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
    dot: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.4)',
    name: 'Full Stack & Vibe Coding',
  },
  ai: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    dot: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.4)',
    name: 'Python & Machine Learning',
  },
  operations: {
    badge: 'bg-secondary/10 text-secondary border-secondary/20',
    dot: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.4)',
    name: 'IT Operations & Simbank',
  },
  qc: {
    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    dot: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    name: 'QC, K3 & Standar Industri',
  },
}

const BENTO_DOMAINS = [
  {
    id: 'bento-fullstack',
    category: 'fullstack',
    title: 'Full Stack Developer (Vibe Coding)',
    roleTag: 'GOOGLE AI CERTIFIED',
    icon: 'auto_awesome',
    accentColor: '#818cf8',
    desc: 'Pengembangan web end-to-end modern dengan vibe coding, prompt engineering terstruktur, integrasi deployment otomatis Vercel, GitHub CI/CD, Next.js 14, dan VS Code.',
    skills: ['Full Stack Vibe Coding', 'Vercel Deployment', 'GitHub CI/CD', 'VS Code', 'Streamlit', 'Next.js & React'],
    metric: '20+ Artifacts',
    metricLabel: 'RAPID VIBE CODING',
  },
  {
    id: 'bento-ai',
    category: 'ai',
    title: 'Python (Machine Learning & Deep Learning)',
    roleTag: 'SINTA 4 & GOOGLE AI',
    icon: 'psychology',
    accentColor: '#3b82f6',
    desc: 'Pemodelan machine learning berbasis Python, arsitektur CNN klasifikasi Aksara Sasak SINTA 4, TensorFlow, augmentasi citra digital, dan Streamlit interactive apps.',
    skills: ['Python (Machine Learning)', 'CNN Deep Learning', 'Streamlit AI Apps', 'TensorFlow', 'Computer Vision', 'Komdigi DTA 2026'],
    metric: '100% SINTA 4',
    metricLabel: 'RISET & PRESTASI AI',
  },
  {
    id: 'bento-ops',
    category: 'operations',
    title: 'Server Simbank & Infrastructure Ops',
    roleTag: 'CV RAJAWALI PRODUCTION',
    icon: 'dns',
    accentColor: '#38bdf8',
    desc: 'Pengelolaan infrastruktur server simbank berkapasitas masif di CV Rajawali. Pemantauan kesiapan stok kartu SIM, sinkronisasi inventori real-time, dan uptime 99.9%.',
    skills: ['Server Simbank', 'Real-Time Sync', '99.9% Uptime', 'Network Config', 'Hardware Monitoring'],
    metric: '99.9% Uptime',
    metricLabel: 'SIMBANK AVAILABILITY',
  },
  {
    id: 'bento-qc',
    category: 'qc',
    title: 'Hardware & Software QC & K3',
    roleTag: 'KEMNAKER & BALI QC',
    icon: 'health_and_safety',
    accentColor: '#f59e0b',
    desc: 'Inspeksi komprehensif mutu hardware dan software di CV Sinar Mutiara Bali, sertifikasi K3 (HIRA & JSA) Kemnaker RI, manajemen lembar sebar Spreadsheet, dan zero-defect.',
    skills: ['Hardware Diagnostics', 'Software QA', 'K3 (HIRA & JSA)', 'Spreadsheet Kemnaker', 'TOEFL ITP', 'Zero-Defect'],
    metric: '100% Tested',
    metricLabel: 'MUTU & K3 CONFORMANCE',
  },
]

// ==============================================================================
// 2. 3D HOLOGRAM CANVAS SPHERE COMPONENT
// ==============================================================================
function HologramSphere3D({ activeFilter, selectedSkill, onSelectSkill }) {
  const canvasRef = useRef(null)
  const isDraggingRef = useRef(false)
  const hasDraggedRef = useRef(false)
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef({ x: 0.2, y: 0.4 })
  const velocityRef = useRef({ x: 0.003, y: 0.005 })
  const hoveredNodeRef = useRef(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const autoRotateRef = useRef(true)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAutoRotate(false)
      autoRotateRef.current = false
    }
  }, [])

  useEffect(() => {
    autoRotateRef.current = autoRotate
  }, [autoRotate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    const count = SKILLS_DATA.length
    const baseRadius = 175
    const nodes = SKILLS_DATA.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      return {
        ...skill,
        origX: baseRadius * Math.cos(theta) * Math.sin(phi),
        origY: baseRadius * Math.sin(theta) * Math.sin(phi),
        origZ: baseRadius * Math.cos(phi),
        projX: 0,
        projY: 0,
        projScale: 1,
        projAlpha: 1,
      }
    })

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2

      ctx.clearRect(0, 0, width, height)

      if (autoRotateRef.current && !isDraggingRef.current) {
        rotationRef.current.y += 0.0038
        rotationRef.current.x += 0.0012
      } else if (!isDraggingRef.current) {
        rotationRef.current.x += velocityRef.current.x
        rotationRef.current.y += velocityRef.current.y
        velocityRef.current.x *= 0.94
        velocityRef.current.y *= 0.94
      }

      const rotX = rotationRef.current.x
      const rotY = rotationRef.current.y
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      const dynamicRadius = Math.min(172, Math.max(105, width * 0.34))
      const sphereScale = dynamicRadius / baseRadius
      const focalLength = Math.max(270, width * 0.74)

      // Glowing reactor core at sphere center
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, dynamicRadius * 0.55)
      coreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)')
      coreGrad.addColorStop(0.45, 'rgba(44, 103, 237, 0.08)')
      coreGrad.addColorStop(1, 'rgba(8, 9, 13, 0)')
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(centerX, centerY, dynamicRadius * 0.55, 0, Math.PI * 2)
      ctx.fill()

      // Outer orbit telemetry rings
      ctx.save()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)'
      ctx.setLineDash([4, 6])
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, dynamicRadius * 0.98, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.beginPath()
      ctx.ellipse(centerX, centerY, dynamicRadius * 1.05, dynamicRadius * 0.42, rotY * 0.2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      nodes.forEach((node) => {
        const nx = node.origX * sphereScale
        const ny = node.origY * sphereScale
        const nz = node.origZ * sphereScale

        const x1 = nx * cosY - nz * sinY
        const z1 = nz * cosY + nx * sinY
        const y2 = ny * cosX - z1 * sinX
        const z2 = z1 * cosX + ny * sinX

        const scale = focalLength / (focalLength + z2)
        node.projX = centerX + x1 * scale
        node.projY = centerY + y2 * scale
        node.projScale = scale
        node.projZ = z2
        node.projAlpha = Math.max(0.18, (z2 + dynamicRadius) / (2 * dynamicRadius))
      })

      const sorted = [...nodes].sort((a, b) => a.projZ - b.projZ)

      // Constellation links
      ctx.lineWidth = 0.85
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i]
          const b = sorted[j]
          if (a.category === b.category) {
            const dx = a.projX - b.projX
            const dy = a.projY - b.projY
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 112) {
              const filtered = activeFilter !== 'all' && a.category !== activeFilter
              const alpha = filtered ? 0.03 : Math.min(a.projAlpha, b.projAlpha) * 0.22
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
              ctx.beginPath()
              ctx.moveTo(a.projX, a.projY)
              ctx.lineTo(b.projX, b.projY)
              ctx.stroke()
            }
          }
        }
      }

      // Render 3D Skill Pills
      sorted.forEach((node) => {
        const isHovered = hoveredNodeRef.current?.id === node.id
        const isSelected = selectedSkill?.id === node.id
        const isFilteredOut = activeFilter !== 'all' && node.category !== activeFilter

        const colorMeta = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.ai
        const baseAlpha = isFilteredOut ? 0.08 : node.projAlpha
        const effectiveScale = isHovered || isSelected ? node.projScale * 1.16 : node.projScale

        ctx.save()
        ctx.translate(node.projX, node.projY)
        ctx.scale(effectiveScale, effectiveScale)

        const text = node.name
        ctx.font = '600 11px "JetBrains Mono", monospace'
        const metrics = ctx.measureText(text)
        const pillWidth = metrics.width + 26
        const pillHeight = 23
        const pillRadius = 11.5

        if ((isHovered || isSelected || node.projZ > 50) && !isFilteredOut) {
          ctx.shadowColor = colorMeta.dot
          ctx.shadowBlur = isHovered || isSelected ? 18 : 8
        }

        ctx.beginPath()
        ctx.roundRect(-pillWidth / 2, -pillHeight / 2, pillWidth, pillHeight, pillRadius)
        if (isSelected) {
          ctx.fillStyle = 'rgba(44, 103, 237, 0.94)'
        } else if (isHovered) {
          ctx.fillStyle = 'rgba(20, 26, 40, 0.96)'
        } else {
          ctx.fillStyle = `rgba(12, 14, 22, ${Math.max(0.45, baseAlpha * 0.92)})`
        }
        ctx.fill()

        ctx.strokeStyle = isSelected
          ? '#7bd0ff'
          : isHovered
          ? colorMeta.dot
          : `rgba(255, 255, 255, ${baseAlpha * 0.25})`
        ctx.lineWidth = isHovered || isSelected ? 1.5 : 1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(-pillWidth / 2 + 10, 0, 3, 0, Math.PI * 2)
        ctx.fillStyle = isFilteredOut ? 'rgba(255,255,255,0.2)' : isSelected ? '#ffffff' : colorMeta.dot
        ctx.fill()

        ctx.fillStyle = isSelected
          ? '#ffffff'
          : isFilteredOut
          ? 'rgba(255,255,255,0.2)'
          : `rgba(241, 245, 249, ${Math.max(0.45, baseAlpha * 1.2)})`
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        ctx.fillText(text, -pillWidth / 2 + 19, 0)

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

  const handlePointerDown = (e) => {
    isDraggingRef.current = true
    hasDraggedRef.current = false
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0
    lastMousePosRef.current = { x: clientX, y: clientY }
  }

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0

    if (isDraggingRef.current) {
      const deltaX = clientX - lastMousePosRef.current.x
      const deltaY = clientY - lastMousePosRef.current.y
      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
        hasDraggedRef.current = true
      }
      rotationRef.current.y += deltaX * 0.007
      rotationRef.current.x -= deltaY * 0.007
      velocityRef.current = { x: -deltaY * 0.001, y: deltaX * 0.001 }
      lastMousePosRef.current = { x: clientX, y: clientY }
    } else {
      const mouseX = clientX - rect.left
      const mouseY = clientY - rect.top
      const found = SKILLS_DATA.find(
        (s) =>
          s.screenBBox &&
          mouseX >= s.screenBBox.x1 &&
          mouseX <= s.screenBBox.x2 &&
          mouseY >= s.screenBBox.y1 &&
          mouseY <= s.screenBBox.y2
      )
      hoveredNodeRef.current = found || null
      canvas.style.cursor = found ? 'pointer' : 'grab'
    }
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  const handleClick = (e) => {
    if (hasDraggedRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const found = SKILLS_DATA.find(
      (s) =>
        s.screenBBox &&
        mouseX >= s.screenBBox.x1 &&
        mouseX <= s.screenBBox.x2 &&
        mouseY >= s.screenBBox.y1 &&
        mouseY <= s.screenBBox.y2
    )
    if (found) {
      onSelectSkill(found)
    }
  }

  return (
    <div className="card-glass relative w-full overflow-hidden p-4 sm:p-5 flex flex-col items-center">
      {/* Top Telemetry Header */}
      <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06] font-label-mono text-xs gap-2">
        <div className="flex items-center gap-2 text-secondary min-w-0">
          <span className="material-symbols-outlined text-[16px] animate-pulse shrink-0">radar</span>
          <span className="hidden sm:inline truncate">INTERACTIVE 3D SKILL SPHERE // 360° DRAG &amp; ROTATE</span>
          <span className="sm:hidden text-[11px] truncate">3D SKILL SPHERE // 360°</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-outline hidden sm:inline text-[11px]">25 NODES</span>
          <button
            type="button"
            onClick={() => setAutoRotate((prev) => !prev)}
            className={`px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold border transition-all ${
              autoRotate
                ? 'bg-primary/20 text-primary border-primary/40'
                : 'bg-surface-container text-on-surface-variant border-white/[0.08]'
            }`}
          >
            {autoRotate ? 'ORBIT: ON' : 'ORBIT: OFF'}
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full aspect-[1.25/1] sm:aspect-[1.6/1] md:aspect-[1.75/1] min-h-[300px] max-h-[450px] flex items-center justify-center select-none touch-none">
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

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none font-label-mono text-[10px] text-outline">
          <span>DRAG TO ROTATE 360°</span>
          <span>CLICK NODE FOR SPEC</span>
        </div>
      </div>
    </div>
  )
}

// ==============================================================================
// 3. 3D PARALLAX BENTO TILT CARD COMPONENT
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

    const rotateX = -((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10
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
      className="cursor-pointer group"
    >
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className={`relative w-full h-full rounded-2xl bg-[#11141e]/85 backdrop-blur-md p-5 border transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden ${
          isSelected
            ? 'border-primary shadow-[0_0_32px_rgba(44,103,237,0.35)] ring-1 ring-primary'
            : 'border-white/[0.08] hover:border-secondary/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.65)]'
        }`}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }}
        />

        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: domain.accentColor }}
        />

        <div style={{ transform: 'translateZ(26px)' }} className="relative z-20">
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

          <h3 className="font-headline-sm text-base sm:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {domain.title}
          </h3>

          <p className="prose-pretty font-body-sm text-xs sm:text-body-sm text-on-surface-variant mb-4">
            {domain.desc}
          </p>
        </div>

        <div style={{ transform: 'translateZ(38px)' }} className="relative z-20 mb-4">
          <div className="flex flex-wrap gap-1.5 font-label-mono text-label-sm">
            {domain.skills.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] text-on-surface/90 border border-white/[0.06] group-hover:border-white/[0.14] transition-colors text-[11px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{ transform: 'translateZ(22px)' }}
          className="relative z-20 pt-3 border-t border-white/[0.06] flex items-center justify-between font-label-mono text-label-sm"
        >
          <div>
            <p className="text-[10px] text-outline uppercase">{domain.metricLabel}</p>
            <p className="font-bold text-base" style={{ color: domain.accentColor }}>
              {domain.metric}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] text-outline group-hover:text-secondary transition-colors font-semibold">
            <span>{isSelected ? 'RESET FILTER' : 'FILTER SPHERE'}</span>
            <span className="material-symbols-outlined text-[14px]">
              {isSelected ? 'restart_alt' : 'arrow_forward'}
            </span>
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

  const visibleQuickSkills =
    activeFilter === 'all'
      ? SKILLS_DATA.slice(0, 8)
      : SKILLS_DATA.filter((s) => s.category === activeFilter)

  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId)
    if (categoryId !== 'all') {
      const firstMatch = SKILLS_DATA.find((s) => s.category === categoryId)
      if (firstMatch) setSelectedSkill(firstMatch)
    }
  }

  return (
    <section className="w-full py-14 sm:py-20" id="skills">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2.5 font-label-mono text-label-mono text-secondary uppercase mb-2.5">
            <span className="section-badge">SECTION 02</span>
            <span>// TECHNICAL MASTERY &amp; SKILL SPHERE 3D</span>
          </div>
          <h2 className="heading-balance font-headline-lg text-headline-lg font-bold text-white tracking-tight">
            Keahlian Teknis &amp; Spesialisasi 3D
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#101420]/90 border border-white/[0.07] overflow-x-auto max-w-full flex-nowrap sm:flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleFilterChange(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-label-mono text-xs transition-all shrink-0 sm:shrink ${
                activeFilter === cat.id
                  ? 'bg-primary-container text-white font-semibold shadow-[0_0_16px_rgba(44,103,237,0.35)]'
                  : 'text-on-surface-variant hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: 3D Holographic Sphere + Live Telemetry Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
        <div className="lg:col-span-7 flex flex-col">
          <HologramSphere3D
            activeFilter={activeFilter}
            selectedSkill={selectedSkill}
            onSelectSkill={(skill) => setSelectedSkill(skill)}
          />
        </div>

        {/* Right: Dynamic Telemetry HUD of Selected Skill */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="card-glass h-full p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] font-label-mono text-xs">
                <span className="text-secondary flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  SYS_TELEMETRY // INSPECTOR
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-primary/15 text-primary font-semibold text-[11px] border border-primary/30">
                  {selectedSkill.level}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-secondary border border-primary/30 shadow-inner shrink-0">
                      <span className="material-symbols-outlined text-[26px]">
                        {selectedSkill.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline-sm text-lg sm:text-xl font-bold text-white truncate">
                        {selectedSkill.name}
                      </h4>
                      <p className="font-label-mono text-[11px] text-secondary uppercase tracking-wider truncate">
                        {CATEGORY_COLORS[selectedSkill.category]?.name || 'TECHNICAL SPEC'}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/35 border border-white/[0.06] mb-4">
                    <p className="prose-pretty font-body-md text-xs sm:text-body-sm text-on-surface-variant">
                      {selectedSkill.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Quick-Select Skill Index Chips */}
              <div className="mb-4">
                <p className="font-label-mono text-[10px] text-outline uppercase tracking-wider mb-2">
                  QUICK NODE SELECTOR //
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {visibleQuickSkills.map((sk) => {
                    const active = selectedSkill.id === sk.id
                    return (
                      <button
                        key={sk.id}
                        type="button"
                        onClick={() => setSelectedSkill(sk)}
                        className={`px-2.5 py-1 rounded-lg font-label-mono text-[11px] border transition-all ${
                          active
                            ? 'bg-primary-container text-white border-primary/60 font-semibold'
                            : 'bg-white/[0.03] text-on-surface-variant border-white/[0.07] hover:text-white hover:border-secondary/40'
                        }`}
                      >
                        {sk.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 font-label-mono text-xs">
              <span className="text-outline text-[11px]">
                VERIFIED // PRODUCTION &amp; SINTA 4
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BENTO_DOMAINS.map((domain) => (
          <BentoTiltCard
            key={domain.id}
            domain={domain}
            isSelected={activeFilter === domain.category}
            onClick={() =>
              handleFilterChange(activeFilter === domain.category ? 'all' : domain.category)
            }
          />
        ))}
      </div>
    </section>
  )
}
