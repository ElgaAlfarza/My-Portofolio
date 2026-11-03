/**
 * Site-wide constants for Elga Alfareza, S.Kom.
 */

// ── Site metadata ──────────────────────────────────────────────────────────
export const SITE = {
  name:        'Elga Alfareza, S.Kom.',
  title:       'Elga Alfareza · Full Stack Developer, Multimedia & AI Specialist',
  description: 'Full Stack Developer, Photoshop & Video Editor, dan AI Specialist lulusan S1 Ilmu Komputer Universitas Bumigora (IPK 3.76 Cum Laude). Berpengalaman dalam pengembangan web full stack, desain grafis Photoshop, editing video, server simbank, software quality control, dan Machine Learning.',
  url:         'https://elga-alfareza.vercel.app',
  email:       'elgaalfarezabumigora@gmail.com',
  phone:       '085238208849',
  location:    'Mataram, Nusa Tenggara Barat',
}

// ── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

// ── Social links ───────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/elga-alfareza', icon: 'li' },
  { label: 'Email',    href: 'mailto:elgaalfarezabumigora@gmail.com',  icon: 'mail' },
]

// ── Skills ─────────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    category: 'Full Stack Web Development',
    skills: ['React / Next.js', 'JavaScript / Node.js', 'Python Backend', 'REST APIs', 'SQL Database', 'HTML5 / CSS3'],
  },
  {
    category: 'Desain Grafis & Video Editing',
    skills: ['Adobe Photoshop', 'Video Editing (Premiere / CapCut)', 'Visual Asset Design', 'Multimedia Content Production'],
  },
  {
    category: 'AI & Data Science',
    skills: ['Machine Learning (CNN)', 'Deep Learning (VGG)', 'OpenCV Computer Vision', 'TensorFlow', 'Streamlit'],
  },
  {
    category: 'Sistem & Operasional',
    skills: ['Manajemen Server Simbank', 'Software Testing / QC', 'Hardware Troubleshooting', 'Digital Filing'],
  },
  {
    category: 'Productivity & Tools',
    skills: ['Microsoft Office (Excel Advanced BPVP)', 'Git & GitHub', 'Google Workspace Online', 'AI Productivity Tools'],
  },
]

// ── Projects / Research ────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Model Machine Learning Aksara Sasak',
    description: 'Merancang, melatih, dan menguji model Convolutional Neural Networks (CNN) untuk klasifikasi citra naskah Aksara Sasak. Diterbitkan di Jurnal Nasional Terindeks SINTA 4 serta buku ilmiah "Blueprint for Sasak Script Digitization".',
    tags: ['Python', 'Machine Learning', 'CNN', 'Deep Learning', 'SINTA 4'],
    category: 'AI & Riset',
    featured: true,
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Infrastruktur Server Simbank & QC Sistem',
    description: 'Pengoperasian dan pengelolaan server simbank untuk kelancaran layanan stok kartu SIM dengan sinkronisasi inventori 100% akurat serta QC software/hardware.',
    tags: ['Server Simbank', 'Quality Control', 'Data Sync', 'Troubleshooting'],
    category: 'IT Operations',
    featured: true,
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Digitalisasi Pendidikan - Kampus Mengajar',
    description: 'Program Kemendikbudristek di SMPN 20 Mataram untuk mengakselerasi adaptasi teknologi, digitalisasi administrasi pembelajaran, dan pengelolaan AKM Kelas.',
    tags: ['Digital Transformation', 'Kemendikbud', 'Administrasi Digital'],
    category: 'Program',
    featured: false,
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
]

// ── Stats ──────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '3.76',    label: 'IPK S1 Ilmu Komputer' },
  { value: 'SINTA 4', label: 'Publikasi Riset Jurnal' },
  { value: '8+',      label: 'Sertifikasi Profesional' },
]
