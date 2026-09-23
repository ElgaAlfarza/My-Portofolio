/**
 * Site-wide constants for Elga Alfareza, S.Kom.
 */

// ── Site metadata ──────────────────────────────────────────────────────────
export const SITE = {
  name:        'Elga Alfareza, S.Kom.',
  title:       'Elga Alfareza · IT Operations & AI Specialist',
  description: 'IT Operations & AI Specialist lulusan S1 Ilmu Komputer Universitas Bumigora (IPK 3.76). Berpengalaman dalam pengelolaan server simbank, quality control perangkat lunak/keras, dan pengembangan Machine Learning (CNN).',
  url:         'https://elga-alfareza.vercel.app',
  email:       'elgaalfarezabumigora@gmail.com',
  phone:       '085238208849',
  location:    'Mataram, Nusa Tenggara Barat',
}

// ── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
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
    category: 'Teknologi & AI',
    skills: ['Python', 'Machine Learning (CNN)', 'SQL Database', 'Streamlit', 'HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    category: 'Sistem & Operasional',
    skills: ['Manajemen Server Simbank', 'Software Testing / QC', 'Hardware Troubleshooting', 'Digital Filing'],
  },
  {
    category: 'Productivity & Tools',
    skills: ['Microsoft Office (Excel Advanced)', 'Google Workspace Online', 'AI Productivity Tools', 'Git'],
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
