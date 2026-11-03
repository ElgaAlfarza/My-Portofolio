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
    title: 'Co-Pilot TikTok AI Video Creator & Prompt Center v2.0',
    description: 'Dashboard otomasi konten video TikTok dan perencana naskah multi-scene berbasis AI. Dilengkapi integrasi Google Gemini API, Remotion video render engine, Whisper Speech-to-Text, serta desain Cyber Dark Modern dengan format video vertikal 9:16 Full HD (1080x1920).',
    tags: ['React', 'Remotion', 'Google Gemini AI', 'Tailwind CSS', 'Vite', 'Node.js'],
    category: 'Full Stack & AI',
    featured: true,
    image: '/assets/projects/copilot-tiktok-web.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ElgaAlfarza/dashboard-copilot-tiktok-lokal',
  },
  {
    id: 2,
    title: 'BigBoz — Dashboard Keuangan Pribadi & PWA Finansial Cerdas',
    description: 'Aplikasi web modern, mobile-first, dan pendamping finansial cerdas (Catatan Uangku). Dilengkapi Dual Theme (Cinematic Dark & Clean Light), visualisasi analitik 3D Donut Chart, pelacakan rasio Debt-to-Income (DTI), input suara bahasa Indonesia via Web Speech API, dan sinkronisasi cloud Google Sheets.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dexie IndexedDB', 'Recharts', 'Web Speech API'],
    category: 'Full Stack & Fintech',
    featured: true,
    image: '/assets/projects/myfinance-home-web.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ElgaAlfarza/catatan-uangku',
  },
  {
    id: 3,
    title: 'TikTok Live Interactive Photo Printer & AI Rating (v6.2)',
    description: 'Sistem interaktif live streaming TikTok otomatis via WebSocket yang mencetak foto profil penonton pengirim gift (Mawar, Donat, Mahkota) secara real-time dengan animasi head printer mekanikal, rating aura sultan, filter anti-bot, dan kontrol dashboard host 2-kolom.',
    tags: ['Node.js', 'Express', 'WebSocket', 'TikTok-Live-Connector', 'HTML5 Canvas', 'Tailwind CSS'],
    category: 'Full Stack & Streaming',
    featured: true,
    image: '/assets/projects/tiktok-printer-stream-web.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ElgaAlfarza/tiktok-live-interactive-photo-printer',
  },
  {
    id: 4,
    title: 'Undangan Pernikahan Digital Mewah — Tari & Erik',
    description: 'Website undangan pernikahan digital mewah mobile-first dengan simulasi 3D akordeon 4 panel interaktif (drag/zoom), musik latar visualizer piringan hitam, kartu amplop digital metalik dengan chip timbul & QRIS, buku tamu real-time Supabase, dan generator link WhatsApp massal.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Web Audio API'],
    category: 'Full Stack & Web App',
    featured: true,
    image: '/assets/projects/wedding-cover-web.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ElgaAlfarza/undangan-pernikahan-digital-mewah',
  },
  {
    id: 5,
    title: 'Album Kenangan Nakama — Lemari Foto Privat Keluarga',
    description: 'Aplikasi web lemari foto privat keluarga bertema One Piece dengan antarmuka ramah lansia. Dilengkapi gerbang PIN virtual keypad layar sentuh besar, pohon silsilah keluarga interaktif multi-generasi, koleksi album map berbayang realistis, dan integrasi cloud storage aman.',
    tags: ['Node.js', 'Express', 'Supabase Storage', 'Sharp', 'Multer', 'Tailwind CSS'],
    category: 'Full Stack & Cloud Vault',
    featured: true,
    image: '/assets/projects/nakama-gallery-web.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ElgaAlfarza/album-kenangan-nakama',
  },
  {
    id: 6,
    title: 'Model Machine Learning Aksara Sasak (SINTA 4)',
    description: 'Merancang, melatih, dan menguji model Convolutional Neural Networks (CNN) untuk klasifikasi citra naskah Aksara Sasak dengan akurasi 94.6%. Diterbitkan di Jurnal Nasional Terindeks SINTA 4 serta buku ilmiah ber-ISBN.',
    tags: ['Python', 'Machine Learning', 'CNN', 'Deep Learning', 'SINTA 4'],
    category: 'AI & Riset',
    featured: true,
    image: null,
    liveUrl: '#research',
    githubUrl: '#',
  },
]

// ── Stats ──────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '3.76',    label: 'IPK S1 Ilmu Komputer' },
  { value: 'SINTA 4', label: 'Publikasi Riset Jurnal' },
  { value: '8+',      label: 'Sertifikasi Profesional' },
]
