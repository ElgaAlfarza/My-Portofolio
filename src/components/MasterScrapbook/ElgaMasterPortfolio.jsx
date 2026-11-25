'use client'

import { useState } from 'react'
import MasterScrapbookPoster from './MasterScrapbookPoster'

const WHATSAPP_URL = 'https://wa.me/6285238208849'
const EMAIL_ADDRESS = 'elgaalfarezabumigora@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/elga-alfareza'
const GITHUB_URL = 'https://github.com/ElgaAlfarza'
const DRIVE_URL = 'https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing'

const FAVORITE_BOOKS = [
  {
    id: 'eat-and-run',
    title: 'Eat & Run',
    subtitle: 'My Unlikely Journey to Ultramarathon Greatness',
    author: 'Scott Jurek',
    coAuthor: 'with Steve Friedman',
    cover: '/books/eat-and-run.png',
    pillar: 'Ketahanan & Konsistensi',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    accentDot: 'bg-emerald-600',
    quote:
      'Batas kemampuan fisik dan mental kita jauh melampaui apa yang kita bayangkan. Daya tahan sejati dibangun dari konsistensi langkah demi langkah di tengah kelelahan.',
    personalImpact:
      'Membentuk ketangguhan mental dalam menghadapi sesi debugging sistem yang kompleks, sprint pengembangan panjang, dan menjaga fokus operasional server secara konsisten.',
    coreTakeaways: [
      {
        label: 'Fokus Jangka Panjang',
        desc: 'Mempertahankan ketenangan dan ketelitian saat menyelesaikan masalah teknis yang rumit.',
      },
      {
        label: 'Disiplin Holistik',
        desc: 'Menjaga keseimbangan kebugaran fisik dan kejernihan berpikir sebagai fondasi kerja profesional.',
      },
      {
        label: 'Ketahanan Operasional',
        desc: 'Tetap terukur dan dapat diandalkan ketika beban sistem mencapai titik puncak.',
      },
    ],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'Tiny Changes, Remarkable Results',
    author: 'James Clear',
    coAuthor: 'Practical Systems Framework',
    cover: '/books/atomic-habits.png',
    pillar: 'Sistem & Perbaikan +1%',
    badgeClass: 'bg-purple-100 text-purple-900 border-purple-300',
    accentDot: 'bg-purple-600',
    quote:
      'You do not rise to the level of your goals. You fall to the level of your systems. Perbaikan kecil 1% setiap hari menghasilkan peningkatan kualitas yang signifikan dalam jangka panjang.',
    personalImpact:
      'Menjadi dasar kebiasaan kerja saya: keandalan server 99.9%, kode yang bersih, dan akurasi data inventori lahir dari SOP dan disiplin kecil yang dijalankan setiap hari.',
    coreTakeaways: [
      {
        label: 'Sistem di Atas Target',
        desc: 'Membangun alur kerja terstruktur dan checklist verifikasi agar kualitas terjaga secara konsisten.',
      },
      {
        label: 'Pembelajaran Berkelanjutan',
        desc: 'Meningkatkan kompetensi Python ML, Full Stack, dan automasi secara bertahap setiap hari.',
      },
      {
        label: 'Efisiensi Lingkungan Kerja',
        desc: 'Merapikan peralatan kerja (VS Code, Git CI/CD, dokumentasi) untuk meminimalkan hambatan eksekusi.',
      },
    ],
  },
  {
    id: 'how-to-make-shit-happen',
    title: 'How to Make Sh*t Happen',
    subtitle: 'Make More Money. Get in Better Shape. Control Your Life.',
    author: 'Sean Whalen',
    coAuthor: 'Accountability & Execution',
    cover: '/books/make-shit-happen.png',
    pillar: 'Tanggung Jawab & Eksekusi',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    accentDot: 'bg-amber-600',
    quote:
      'Hentikan keraguan berlebih. Ambil tanggung jawab penuh atas setiap hasil, bergerak cepat, dan wujudkan rencana menjadi karya nyata yang terukur.',
    personalImpact:
      'Mendorong etos kepemilikan penuh (ownership): berfokus pada penyelesaian masalah secara langsung, menuntaskan deployment, dan mempertanggungjawabkan hasil kerja.',
    coreTakeaways: [
      {
        label: 'Kepemilikan Penuh',
        desc: 'Saat muncul kendala pada aplikasi atau server, fokus utama adalah menemukan akar masalah dan menyelesaikannya.',
      },
      {
        label: 'Orientasi Tindakan',
        desc: 'Mengubah rancangan menjadi prototipe fungsional dan solusi nyata tanpa menunda-nunda.',
      },
      {
        label: 'Keseimbangan Peran',
        desc: 'Menyelaraskan integritas pribadi, kesehatan, komunikasi tim, dan produktivitas kerja.',
      },
    ],
  },
]

const PROJECTS_DATA = [
  {
    id: 'minegate-system',
    title: 'MINEGATE — Mining Vehicle Gate Management System',
    subtitle: 'Portal Kontrol Gerbang, Validasi K3 & Logistik Armada Tambang Terpadu',
    category: 'Full Stack Enterprise Cloud',
    badge: 'Latest Release 2026',
    badgeColor: 'bg-amber-500 text-slate-950',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-6 w-28 h-5 rotate-1',
    previewImage: '/assets/projects/minegate-dashboard-web.png',
    screenshots: [
      { id: 'mg-1', label: 'Executive Dashboard & Overstay', url: '/assets/projects/minegate-dashboard-web.png', desc: 'Dashboard analitik armada tambang, KPI hauling harian, volume per jam (WITA), dan peringatan overstay kritis >8 jam', type: 'desktop' },
      { id: 'mg-2', label: 'Pos Gerbang Operasional (/gate)', url: '/assets/projects/minegate-gate-web.png', desc: 'Sistem check-in & out multi-gate dengan validasi Hard Blocker K3, verifikasi SIMPER, anti-duplicate, dan kalkulasi jarak', type: 'desktop' },
      { id: 'mg-3', label: 'Portal Otentikasi RBAC (/login)', url: '/assets/projects/minegate-login-web.png', desc: 'Industrial command login dengan RBAC 3-tingkat (Officer, Supervisor, Admin) berproteksi JWT HttpOnly Secure Cookie', type: 'desktop' }
    ],
    tech: ['Next.js 14 (App Router)', 'TypeScript 5', 'Tailwind CSS', 'Google Sheets API v4', 'JWT (jose)', 'Zod', 'Vitest', 'Bcryptjs', 'Date-fns (WITA)'],
    description: 'Sistem pencatatan logistik keluar-masuk kendaraan tambang terbuka (open-pit mining) berkecepatan tinggi tanpa dependensi sensor IoT yang rentan lumpur dan debu. Dilengkapi validasi kelaikan K3 otomatis, pencegahan duplikasi check-in, mitigasi armada overstay real-time, dan arsitektur backend konkurensi berbasis Google Sheets API v4.',
    highlights: [
      'Role-Based Access Control (RBAC): 3 tingkatan hak akses terproteksi (Officer, Supervisor, Admin)',
      'Validasi K3 & Kelaikan: Unit maintenance/inactive ditolak otomatis & anti-duplicate check-in',
      'Mitigasi Insiden K3: Sistem deteksi otomatis armada overstay (> 8 jam di pit) secara real-time',
      'Persistence Gateway: Google Sheets API v4 dengan In-Memory Mutex Lock, Cache TTL 10s, & Retry Backoff'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/minegate',
    prdUrl: 'https://github.com/ElgaAlfarza/minegate/blob/main/docs/PRD.md',
    archUrl: 'https://github.com/ElgaAlfarza/minegate/blob/main/docs/ARCHITECTURE.md',
    prd: {
      philosophy: 'Operasional pertambangan terbuka (open-pit mining) menuntut pencatatan arus kendaraan secara disiplin, cepat, dan presisi. MINEGATE dirancang khusus untuk pencatatan manual oleh petugas pos gerbang (industrial command aesthetic) tanpa ketergantungan pada sensor IoT, ANPR otomatis, atau loop detector yang sering gagal akibat debu tambang tebal, lumpur, dan getaran alat berat.',
      targetSLA: 'Siklus waktu pencatatan check-in di bawah 15 detik per unit kendaraan di pos barrier.',
      problemStatements: [
        {
          title: 'Kerentanan Logbook Kertas Konvensional',
          desc: 'Formulir kertas rawan robek, basah, dan kotor akibat cuaca ekstrem pit tambang. Rekonsiliasi log harian berjalan lambat dan rentan human error.',
          icon: 'fa-solid fa-file-excel',
          badge: 'Operasional Lapangan'
        },
        {
          title: 'Risiko Pelanggaran K3 & Kelaikan Kendaraan',
          desc: 'Tanpa validasi digital instan, unit yang sedang dijadwalkan maintenance atau sopir dengan SIMPER kedaluwarsa berpotensi lolos masuk ke jalur hauling berisiko tinggi.',
          icon: 'fa-solid fa-triangle-exclamation',
          badge: 'Keselamatan K3'
        },
        {
          title: 'Blindspot Armada Overstay di Dalam Pit',
          desc: 'Pengawas kesulitan memantau unit yang tertahan lebih dari 8 jam di dalam pit, yang menjadi indikator kritis unit amblas, kerusakan mekanis, atau insiden darurat.',
          icon: 'fa-solid fa-clock-rotate-left',
          badge: 'Visibilitas Armada'
        }
      ],
      userRoles: [
        {
          role: 'Operator Barrier (OFFICER)',
          badge: 'Pos Gerbang Lapangan',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          tasks: [
            'Pemeriksaan fisik identitas kendaraan, nomor polisi, dan kode lambung di pos gerbang.',
            'Input data check-in kedatangan dan verifikasi masa berlaku SIMPER pengemudi.',
            'Input check-out kepulangan, verifikasi kargo muatan, dan kalkulasi odometer trip.',
            'Buka barrier gate dan cetak tiket gate pass fisik resmi untuk dibawa pengemudi.'
          ]
        },
        {
          role: 'Supervisor Pit (SUPERVISOR)',
          badge: 'Pengawas Operasional',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          tasks: [
            'Memantau live dashboard analitik dan KPI hauling harian secara real-time.',
            'Mengawasi unit aktif di dalam pit dan menindaklanjuti peringatan armada overstay (>8 jam).',
            'Berkoordinasi intensif via radio VHF dengan safety officer, marshall, dan mekanik.'
          ]
        },
        {
          role: 'System Administrator (ADMIN)',
          badge: 'Tata Kelola & Audit',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Manajemen master data 20+ kendaraan tambang (Dump Truck, Light Vehicle, Fuel, Water).',
            'Manajemen master data pengemudi dan verifikasi nomor SIMPER K3.',
            'Manajemen akun pengguna sistem, pembagian pos stasiun, dan ekspor CSV audit log.'
          ]
        }
      ]
    },
    workflow: {
      checkInSteps: [
        {
          step: '01',
          name: 'Input Kendaraan & Sopir',
          desc: 'Petugas memilih kode unit / plat nomor dan menginput pengemudi di stasiun gerbang aktif (/gate).'
        },
        {
          step: '02',
          name: 'Pemeriksaan Hard-Blocker K3',
          desc: 'Sistem mengecek status unit. Jika berstatus MAINTENANCE atau INACTIVE, sistem langsung menolak check-in (HTTP 422).'
        },
        {
          step: '03',
          name: 'Anti-Duplicate & Driver Check',
          desc: 'Verifikasi status log. Jika unit atau sopir sudah tercatat INSIDE di pit, check-in dicekal (HTTP 409 Conflict).'
        },
        {
          step: '04',
          name: 'Validasi Odometer Masuk',
          desc: 'Memastikan nilai odometer masuk tidak lebih kecil dari catatan odometer terakhir kendaraan (mencegah regresi data).'
        },
        {
          step: '05',
          name: 'Mutex Lock & Append Log',
          desc: 'In-Memory Mutex Lock mengunci penulisan, mencatat baris baru berstatus INSIDE, dan menerbitkan tiket gate pass.'
        }
      ],
      checkOutSteps: [
        {
          step: '01',
          name: 'Pilih Unit di Roster INSIDE',
          desc: 'Petugas memilih kendaraan yang akan keluar dari tabel armada aktif di dalam area pit.'
        },
        {
          step: '02',
          name: 'Inspeksi Kargo & Odometer Keluar',
          desc: 'Petugas memeriksa kondisi muatan (Kosongan vs Muatan Penuh) serta menginput angka odometer keluar unit.'
        },
        {
          step: '03',
          name: 'Kalkulasi Otomatis Trip Math',
          desc: 'Sistem menghitung jarak tempuh ritase secara presisi (odometer keluar - odometer masuk).'
        },
        {
          step: '04',
          name: 'Pembaruan Atomic Google Sheets',
          desc: 'Status log diperbarui menjadi OUT, waktu kepulangan tercatat, dan last_odometer kendaraan di-update otomatis.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Edge Middleware (Edge Runtime)',
          desc: 'Verifikasi stateless session cookie JWT (minegate_token) via jose, proteksi rute halaman dan API berdasarkan Role (Officer, Supervisor, Admin).'
        },
        {
          layer: 'Layer 2: Standardized Route Handlers',
          desc: 'Endpoint API terstruktur (/api/gate, /api/dashboard, /api/vehicles, /api/logs) dengan validasi skema Zod dan penanganan error terpusat.'
        },
        {
          layer: 'Layer 3: Core Service Layer (7 Aturan Bisnis)',
          desc: 'Menegakkan 7 aturan bisnis tambang: Hard Blocker K3, Anti-Duplicate, Odometer Progression, Driver Eligibility, Atomic Checkout, dan Dynamic Overstay Calculation.'
        },
        {
          layer: 'Layer 4: In-Memory Mutex Lock & Caching Gateway',
          desc: 'withSheetsLock mencegah race condition penulisan paralel, in-memory cache TTL 10 detik mengurangi beban kuota Google API v4, dan Exponential Backoff Retry (maks 3x).'
        },
        {
          layer: 'Layer 5: Google Sheets API v4 Persistence',
          desc: 'Spreadsheet enterprise 4 tab terstruktur (vehicles, drivers, gate_logs, users) dengan timestamp ISO 8601 zona WITA (+08:00 Asia/Makassar).'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Pos Gerbang Operasional (/gate)',
        badge: 'Core Operations',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-torii-gate',
        items: [
          'Multi-Gate Stations: Stasiun Gate 1 (Utama Pit), Gate 2 (Hauling West), dan Gate 3 (Workshop & ROM).',
          'Check-in Kilat (<15 detik) dengan autocomplete kode unit, plat nomor, dan perusahaan pemilik armada.',
          'Hard-Blocker K3 Otomatis: Pencekalan unit berstatus MAINTENANCE langsung dari sistem untuk keselamatan.',
          'Validasi SIMPER Pengemudi: Memastikan sopir aktif dan memiliki izin mengemudi tambang yang masih berlaku.',
          'Trip Distance Math: Kalkulasi otomatis jarak tempuh perjalanan unit saat proses check-out keluar.',
          'Inspeksi Kargo & Cetak Gate Pass: Checklist visual kondisi bak/kabin muatan dan pencetakan bukti resmi.'
        ]
      },
      {
        module: 'Executive Dashboard & Mitigasi Overstay (/dashboard)',
        badge: 'Real-time Telemetry',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-chart-line',
        items: [
          '4 Kartu KPI Utama: Di Dalam Area, Ritase Masuk Hari Ini, Ritase Keluar Hari Ini, dan Overstay Kritis (>8 Jam).',
          'Traffic Flow Hourly Chart: Visualisasi grafik batang volume keluar-masuk per jam (06:00 - 14:00 WITA).',
          'Fleet Composition Donut: Persentase Dump Truck (55%), Fuel Truck (20%), Light Vehicle (15%), Water Tank (10%).',
          '7-Day Hauling Trend: Visualisasi grafik garis tren produktivitas ritase selama seminggu terakhir.',
          'Interactive Unit Roster: Tabel kendaraan di dalam pit dengan filter cepat (Semua, Overstay, DT, LV).',
          'Live Activity Ticker: Rekam jejak transaksi pos gerbang terkini yang diperbarui otomatis.'
        ]
      },
      {
        module: 'Riwayat Logbook & Audit Trail (/logs)',
        badge: 'Compliance & Export',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: 'fa-solid fa-clock-rotate-left',
        items: [
          'Log Audit Transaksional: Penomoran ID urut harian unik (LOG-YYYYMMDD-001) untuk setiap pergerakan unit.',
          'Pencarian Multi-Parameter: Cari berdasarkan kode lambung, plat nomor, nama sopir, atau nomor surat jalan.',
          'Filter Status & Tanggal: Filter berdasarkan status INSIDE vs OUT, filter rentang tanggal, dan filter pos gate.',
          'Ekspor CSV UTF-8 dengan BOM: Unduh laporan rekapitulasi data lengkap yang langsung terbaca rapi di Microsoft Excel.'
        ]
      },
      {
        module: 'Master Data & Akses RBAC (/vehicles, /drivers, /login)',
        badge: 'Enterprise Governance',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-shield-halved',
        items: [
          'Manajemen Armada Kendaraan: Registrasi kode lambung unik, tipe unit, brand/model, kapasitas, dan status kelaikan.',
          'Manajemen Pengemudi & SIMPER: Profil sopir, kontak darurat, perusahaan, dan masa kedaluwarsa SIMPER K3.',
          'Role-Based Access Control (RBAC): Pembagian wewenang ketat antara Officer (Pos), Supervisor (Pit), dan Admin.',
          'Keamanan Stateless JWT: Token terenkripsi dalam HttpOnly secure cookie dengan masa aktif 8 jam.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Frontend & UI Engineering',
        icon: 'fa-solid fa-laptop-code',
        color: 'text-indigo-600',
        items: [
          { name: 'Next.js 14 (App Router)', role: 'Framework React fullstack modern dengan Server & Client Components untuk performa tinggi.' },
          { name: 'React 18', role: 'State management interaktif untuk dashboard telemetri dan antarmuka pos gerbang.' },
          { name: 'Tailwind CSS', role: 'Desain responsif tema Industrial Command (#0f172a, aksen amber & emerald K3).' },
          { name: 'Lucide React & FontAwesome', role: 'Ikonografi industrial konsisten untuk status kendaraan dan rambu keselamatan K3.' }
        ]
      },
      {
        category: 'Backend, API & Konkurensi',
        icon: 'fa-solid fa-server',
        color: 'text-purple-600',
        items: [
          { name: 'TypeScript 5', role: 'Type safety ketat end-to-end dari skema Google Sheets hingga komponen antarmuka.' },
          { name: 'Zod v3', role: 'Validasi skema runtime untuk semua payload request API check-in, check-out, dan otentikasi.' },
          { name: 'In-Memory Mutex Lock', role: 'Mencegah race condition ketika beberapa petugas menginput kendaraan yang sama bersamaan.' },
          { name: 'In-Memory Cache (TTL 10s)', role: 'Mengoptimalkan kuota read Google Sheets API dengan invalidasi otomatis saat penulisan.' },
          { name: 'Date-fns & Date-fns-tz', role: 'Standardisasi perhitungan timestamp ISO 8601 berbasis zona WITA (+08:00 Asia/Makassar).' }
        ]
      },
      {
        category: 'Keamanan, RBAC & Otentikasi',
        icon: 'fa-solid fa-lock',
        color: 'text-emerald-600',
        items: [
          { name: 'Next.js Edge Middleware', role: 'Pemeriksaan sesi JWT pada lapisan edge sebelum request mencapai handler rute.' },
          { name: 'Jose (JWT Library)', role: 'Penandatanganan dan verifikasi token JWT stateless disimpan di HttpOnly SameSite=Lax cookie.' },
          { name: 'Bcryptjs', role: 'Hashing kata sandi satu arah dengan salt rounds untuk keamanan kredensial pengguna.' },
          { name: 'Role Guards (3 Tiers)', role: 'OFFICER (input pos), SUPERVISOR (dashboard & mitigasi overstay), ADMIN (master data & audit).' }
        ]
      },
      {
        category: 'Persistence & Integrasi Cloud',
        icon: 'fa-solid fa-database',
        color: 'text-amber-600',
        items: [
          { name: 'Google Sheets API v4', role: 'Penyimpanan data cloud tanpa server database SQL terpisah, mudah diakses manajemen.' },
          { name: 'Exponential Backoff Retry', role: 'Mekanisme coba ulang cerdas (maks 3x) saat menghadapi rate limit (429) atau server lag (5xx).' },
          { name: 'Structured Tab Schemas', role: '4 tab terstruktur: vehicles, drivers, gate_logs, dan users dengan relasi logis terpelihara.' }
        ]
      },
      {
        category: 'Quality Assurance & Testing',
        icon: 'fa-solid fa-vial-circle-check',
        color: 'text-rose-600',
        items: [
          { name: 'Vitest 5.1', role: 'Unit & integration test cepat untuk 7 aturan bisnis kelaikan K3 dan service layer.' },
          { name: 'Automated Seed Script', role: 'Script TSX mandiri untuk inisialisasi data 20 kendaraan, 15 sopir, dan 60 log transaksi.' },
          { name: 'ESLint & Prettier', role: 'Penjaminan kualitas kode bersih berstandar clean code enterprise.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Tab Google Sheets Persistence Gateway',
      badge: 'Zona WITA (+08:00 Asia/Makassar)',
      description: 'Arsitektur data menggunakan 4 tab Google Sheets terstruktur dengan penegakan relasi logis di Repository Layer:',
      tables: [
        { name: '1. vehicles (9 Kolom)', fields: 'vehicle_id, unit_code, plate_number, type, brand_model, owner_company, status, last_odometer, created_at' },
        { name: '2. drivers (7 Kolom)', fields: 'driver_id, name, license_type, company, phone, status, created_at' },
        { name: '3. gate_logs (13 Kolom)', fields: 'log_id, vehicle_id, driver_id, gate, purpose, destination, time_in, time_out, odometer_in, odometer_out, status, officer_id, notes' },
        { name: '4. users (7 Kolom)', fields: 'user_id, name, username, password_hash, role, status, created_at' }
      ]
    }
  },
  {
    id: 'finextrade-algo',
    title: 'FinexTrade — Quantitative Algorithmic Trading & Risk Control Terminal',
    subtitle: 'Institutional MT5 Direct IPC, Deterministic Fibonacci & EMA Signal Pipeline, and SQLite Persistent Risk Guardrails',
    category: 'Fintech & Algorithmic Trading',
    badge: 'Quantitative Algo Trading',
    badgeColor: 'bg-blue-600 text-white',
    tape: 'washi-tape-blue',
    tapePosition: '-top-3 left-8 w-28 h-5 rotate-1',
    previewImage: '/assets/projects/finextrade-terminal-web.svg',
    screenshots: [
      { id: 'ft-1', label: 'Terminal Trading & 3 Pillars HUD', url: '/assets/projects/finextrade-terminal-web.svg', desc: 'Dashboard trading kuantitatif real-time dengan candlestick XAUUSD M5, zona retest Fibonacci 61.8%, radar berita high-impact USD, dan HUD 3 Pilar Trading Profesional', type: 'desktop' },
      { id: 'ft-2', label: 'Arsitektur Risiko & Circuit Breaker', url: '/assets/projects/finextrade-risk-web.svg', desc: 'Diagram alir perlindungan modal berlapis: Persistent Daily Circuit Breaker (-3.0R), Monotonic Profit Lock non-decreasing, dan jurnal audit trade SQLite atomik', type: 'desktop' },
      { id: 'ft-3', label: 'Evaluasi Out-of-Sample Walk-Forward', url: '/assets/projects/finextrade-oos-web.svg', desc: 'Tabel evaluasi kuantitatif walk-forward jujur pada 25.000 candle XAUUSD M5, rincian friksi biaya transaksi scalping 46%, dan laporan status 38/38 pengujian Pytest', type: 'desktop' }
    ],
    tech: ['Python 3.11+', 'FastAPI', 'MetaTrader 5 Direct IPC', 'SQLite3', 'NumPy & Pandas', 'WebSockets', 'Pytest (38 Tests)', 'Tailwind CSS'],
    description: 'Sistem trading algoritmik berbasis Python berstandar institusional untuk MetaTrader 5 (MT5 Direct IPC) dan Paper Trading Simulator lokal terisolasi. Dibangun dengan fokus utama pada prinsip deterministik matematika murni tanpa halusinasi AI, fail-closed security, integritas data kuantitatif, dan perlindungan modal berlapis (Persistent Daily Circuit Breaker -3.0R & Monotonic Profit Lock).',
    highlights: [
      'Eksekusi sinyal deterministik 100% berbasis pandas & numpy (EMA Trend, Fibonacci 61.8% Retest Zone, ADX Filter) tanpa melibatkan halusinasi LLM pada jalur kritis',
      'Perlindungan modal mutlak: Persistent Daily Circuit Breaker (-3.0R) tersimpan atomik di SQLite & Monotonic Profit Lock berjenjang non-decreasing',
      'Fail-Closed News Shield yang menahan order 30 menit sebelum/sesudah berita USD High-Impact atau saat data kalender offline/stale (>24 jam)',
      'Riset empiris out-of-sample transparan pada 25.000 candle XAUUSD M5 membuktikan friksi biaya scalping (spread 1.8 pip + slippage 0.5 pip = 46% target)',
      '38 rangkaian unit test otomatis Pytest (Fase 0 - Fase 5) memvalidasi zero-trust security, anti-repaint determinism, risk rules, dan paritas backtest'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/FinexTrade',
    prdUrl: 'https://github.com/ElgaAlfarza/FinexTrade#readme',
    prd: {
      philosophy: 'Trading instrumen dengan leverage tinggi seperti Forex dan Emas (XAUUSD) menuntut disiplin manajemen risiko yang ketat dan deterministik. FinexTrade dibangun dengan filosofi institusional: modal adalah pertahanan utama seorang trader kuantitatif. Segala bentuk optimisme palsu (curve-fitting backtest) dieliminasi melalui metodologi validasi out-of-sample walk-forward yang jujur, eliminasi keterlibatan AI generatif dalam eksekusi order (zero hallucination risk), dan penerapan circuit breaker atomik yang tidak dapat di-reset oleh restart server.',
      targetSLA: 'Eksekusi order lokal < 25ms via MT5 Direct IPC Windows, latensi stream WebSocket telemetri < 50ms, dan fail-closed news validation < 5ms.',
      problemStatements: [
        {
          title: 'Overfitting & Curve Fitting Ilusi Profit',
          desc: 'Mayoritas robot trading komersial mengoptimalkan parameter secara berlebihan pada data historis (in-sample) sehingga terlihat fantastis namun kolaps saat diterjunkan ke pasar nyata karena tidak memperhitungkan out-of-sample drift.'
        },
        {
          title: 'Bencana Emosional & Revenge Trading saat Drawdown',
          desc: 'Trader manual kerap melipatgandakan lot (martingale) saat mengalami kerugian beruntun, berujung margin call. Sistem otomatis tanpa circuit breaker fisik juga rentan terhadap looping error tak terkendali.'
        },
        {
          title: 'Volatilitas Ekstrem Berita Ekonomi Makro',
          desc: 'Rilis berita Non-Farm Payrolls (NFP), FOMC, atau CPI sering memicu pelebaran spread drastis dan slippage masif yang menghancurkan stop loss standar dalam hitungan detik.'
        },
        {
          title: 'Risiko Halusinasi AI pada Eksekusi Finansial Langsung',
          desc: 'Menggunakan Large Language Model (LLM) untuk memutuskan beli/jual secara real-time sangat berbahaya karena sifat non-deterministik dan potensi halusinasi prompt yang tidak dapat diprediksi.'
        }
      ],
      targetUsers: [
        {
          role: 'Algorithmic & Quantitative Trader',
          needs: 'Memerlukan terminal eksekusi otomatis dengan latensi rendah, kalkulasi sinyal deterministik berbasis time-series, dan manajemen posisi bebas emosi manusia.'
        },
        {
          role: 'Prop Firm Trader & Risk Manager',
          needs: 'Membutuhkan penegakan batas kerugian harian mutlak (daily drawdown limit) yang tahan restart server untuk memastikan akun lolos audit aturan prop firm ketat.'
        },
        {
          role: 'Software Engineer & Financial Researcher',
          needs: 'Membutuhkan arsitektur kode bersih, suite unit test lengkap dengan mocking broker, serta transparansi metrik out-of-sample tanpa bias kurva.'
        }
      ],
      kpis: [
        { metric: 'Daily Loss Hard Ceiling', target: '-3.0R Terkunci SQLite', achieve: 'Proteksi atomik aktif dan tidak dapat di-reset restart' },
        { metric: 'Friksi Biaya Transaksi Terkuantisasi', target: '46% dari Target Profit', achieve: 'Transparansi spread 1.8 pip + slippage 0.5 pip pada target 5 pip' },
        { metric: 'Cakupan Unit Test Suite', target: '38/38 Passed 100%', achieve: 'Memvalidasi security, determinisme, kejujuran, dan risiko' },
        { metric: 'Keandalan Fail-Closed Sinyal', target: '99.9% Uptime', achieve: 'News radar offline otomatis memblokir order demi proteksi modal' }
      ]
    },
    workflow: {
      title: 'Alur Kerja Operasional & Protokol Pengamanan Modal',
      phases: [
        {
          phase: 'Fase 1: Pipeline Sinyal Deterministik 5 Tahap',
          title: 'Dari Feed Harga Menjadi Keputusan Matematika Murni',
          icon: 'fa-solid fa-chart-line',
          color: 'from-blue-600 to-indigo-600',
          steps: [
            {
              step: '1. Ingest Tick & Bar M5',
              title: 'Pengambilan Candle Terkonfirmasi',
              desc: 'Engine live mengambil 100 bar M5 terakhir dari MT5 Direct IPC. Bar berjalan yang belum close diabaikan untuk menjamin data anti-repaint.'
            },
            {
              step: '2. Trend Ribbon Filter',
              title: 'Penyelarasan EMA 20 / 50 / 200',
              desc: 'Arah tren utama divalidasi secara matematis. Kondisi Bullish mewajibkan EMA 20 > EMA 50 > EMA 200 dengan kemiringan positif.'
            },
            {
              step: '3. Fibonacci Retest Detection',
              title: 'Identifikasi Zona Emas 61.8%',
              desc: 'Kalkulasi swing high dan swing low lokal untuk memetakan level koreksi Fibonacci. Rebound harga pada zona 50.0% - 61.8% memvalidasi potensi entri.'
            },
            {
              step: '4. ADX Volatility & Spread Guard',
              title: 'Filter Konsolidasi & Biaya Broker',
              desc: 'ADX wajib bernilai > 25 (menolak pasar sideways). Spread pasar saat tick tiba harus <= 2.2 pip, jika melebar sinyal otomatis ditolak.'
            },
            {
              step: '5. Order Dispatch',
              title: 'Routing ke MT5 IPC atau Paper Simulator',
              desc: 'Order dieksekusi dengan Stop Loss terpasang langsung di server broker, volume lot dihitung proporsional dari risiko 1.0% saldo akun.'
            }
          ]
        },
        {
          phase: 'Fase 2: Protokol Perlindungan Modal 4 Lapisan',
          title: 'Pertahanan Multi-Tier Tanpa Kompromi',
          icon: 'fa-solid fa-shield-halved',
          color: 'from-amber-600 to-rose-600',
          steps: [
            {
              step: 'Layer 1: Persistent Daily Circuit Breaker',
              title: 'Batas Kerugian Harian SQLite (-3.0R)',
              desc: 'Jika kerugian harian mencapai akumulasi -3.0R, seluruh bot trading dinonaktifkan seketika. Status tersimpan di database SQLite dan tidak akan pulih hanya dengan me-restart aplikasi.'
            },
            {
              step: 'Layer 2: Monotonic Profit Lock Guard',
              title: 'Penguncian Profit Berjenjang Non-Decreasing',
              desc: 'Saat trade floating mencapai +1.5R, stop loss otomatis dipindahkan ke Breakeven (+0.1R). Saat mencapai +2.5R, profit dikunci di +1.0R, menjamin trade menang tidak berbalik kalah.'
            },
            {
              step: 'Layer 3: Dynamic Fractional Sizing',
              title: 'Kalkulasi Lot Otomatis Berbasis Risiko Tetap',
              desc: 'Ukuran lot dihitung dinamis dengan rumus: Lot = (Equity * 1%) / (SL_pips * Pip_Value). Menjaga risiko moneter konstan terlepas dari jarak stop loss.'
            },
            {
              step: 'Layer 4: Fail-Closed News Shield',
              title: 'Radar Pemblokir Order Berita Makro USD',
              desc: 'Order diblokir total dalam rentang 30 menit sebelum hingga 30 menit sesudah rilis berita berdampak tinggi USD. Jika koneksi kalender gagal, sistem otomatis menolak eksekusi (fail-closed).'
            }
          ]
        },
        {
          phase: 'Fase 3: Arsitektur 5 Lapis Terisolasi',
          title: 'Pemisahan Tanggung Jawab Sistem Bersih',
          icon: 'fa-solid fa-layer-group',
          color: 'from-emerald-600 to-teal-600',
          steps: [
            {
              step: 'Layer 1: Presentation & Telemetri',
              title: 'Modern Responsive Web UI Dual-Theme',
              desc: 'Antarmuka web modern dengan tema Dark Neon Glass dan Santorini Light, chart interaktif, visualisasi HUD 3 Pilar, dan stream WebSocket real-time.'
            },
            {
              step: 'Layer 2: Gateway & Autentikasi',
              title: 'FastAPI REST & Kriptografis Session Token',
              desc: 'Server asinkron FastAPI dengan proteksi header X-Session-Token, CORS ketat, rate limiting, dan validasi skema Pydantic.'
            },
            {
              step: 'Layer 3: Quantitative Execution Engine',
              title: 'Mesin Strategi & Validator Deterministik',
              desc: 'Kalkulasi vektor array numpy/pandas untuk analisis teknikal, state machine siklus hidup order, dan validator guardrails.'
            },
            {
              step: 'Layer 4: Hardware Broker Integration',
              title: 'MetaTrader 5 Direct Shared Memory IPC',
              desc: 'Komunikasi antarproses berkecepatan tinggi langsung ke terminal MT5 di Windows OS tanpa perantara cloud pihak ketiga.'
            },
            {
              step: 'Layer 5: Persistence & Audit Store',
              title: 'SQLite3 Transaksional Jurnal & Recovery',
              desc: 'Basis data ACID compliant dengan WAL mode untuk pencatatan riwayat trade, status circuit breaker, dan audit trail operasional.'
            }
          ]
        }
      ]
    },
    fullFeatures: [
      {
        id: 'ft-feat-1',
        title: 'Trading Terminal Dashboard & HUD 3 Pilar Trading Profesional',
        icon: 'fa-solid fa-desktop',
        color: 'from-blue-600 to-indigo-700',
        description: 'Antarmuka web terintegrasi untuk pemantauan pasar dan kontrol bot secara instan dengan visualisasi HUD 3 Pilar (Mindset, Risk Management, Method):',
        capabilities: [
          'HUD 3 Pilar Trading Profesional: Panel indikator real-time yang memantau kesiapan Psikologi/Disiplin (Mindset), Kepatuhan Risiko/Drawdown (Risk Management), dan Validitas Strategi/Sinyal (Method).',
          'Grafik Candlestick Real-Time XAUUSD M5: Visualisasi pergerakan harga emas secara langsung dengan overlay EMA Ribbon (20/50/200) dan penanda zona retest Fibonacci.',
          'Pemilih Mode Operasional Dual: Kemampuan beralih antara PAPER SIMULATOR (lingkungan simulasi aman) dan MT5 DIRECT IPC (koneksi live broker) dengan indikator status jelas.',
          'Telemetri WebSocket Asinkron: Pembaharuan data harga bid/ask, floating P&L, status bot, dan timer berita tanpa perlu me-refresh peramban.'
        ]
      },
      {
        id: 'ft-feat-2',
        title: 'Risk Management Engine, Circuit Breaker & Profit Lock',
        icon: 'fa-solid fa-shield-heart',
        color: 'from-rose-600 to-red-700',
        description: 'Mesin manajemen risiko proaktif yang mengutamakan keselamatan modal trader di atas peluang keuntungan:',
        capabilities: [
          'Persistent Daily Circuit Breaker (-3.0R): Sistem pelacak akumulasi kerugian harian yang tersimpan atomik di SQLite. Begitu ambang batas -3.0R terlewati, bot otomatis mengunci diri dan menolak seluruh order baru hingga pergantian hari.',
          'Monotonic Profit Lock Guard: Algoritma penyesuaian stop loss satu arah (non-decreasing) yang mengunci profit secara berjenjang ketika harga bergerak menguntungkan.',
          'Dynamic Lot Sizing Presisi: Menghitung volume lot secara otomatis berdasarkan persentase risiko tetap per trade (default 1.0% equity) dan jarak stop loss teknikal.',
          'Fail-Closed Real Account Guard: Mode akun REAL diblokir secara keras di level kode program (ALLOW_LIVE_REAL=0) untuk mencegah salah klik fatal pada akun modal riil.'
        ]
      },
      {
        id: 'ft-feat-3',
        title: 'News Shield & Fail-Closed Guardrails',
        icon: 'fa-solid fa-satellite-dish',
        color: 'from-amber-600 to-orange-700',
        description: 'Sistem pertahanan terintegrasi terhadap guncangan pasar akibat rilis berita ekonomi makro dan pelebaran spread:',
        capabilities: [
          'Radar Berita Berdampak Tinggi USD: Menjadwalkan penghentian aktivitas trading 30 menit sebelum dan sesudah rilis data ekonomi berdampak tinggi (NFP, CPI, FOMC, Suku Bunga).',
          'Arsitektur Fail-Closed Aman: Bila umpan data kalender berita mengalami kendala jaringan atau data telah usang (>24 jam), sistem secara default memblokir eksekusi demi melindungi modal.',
          'Dynamic Spread Threshold Filter: Mengukur spread broker secara real-time pada setiap tick. Jika spread melebihi batas toleransi 2.2 pip, sinyal beli/jual langsung dibatalkan.',
          'Zero-Trust Credential Vault: Kredensial akun MT5 dibaca secara terisolasi dari file konfigurasi .env lokal, disensor dari seluruh keluaran log, dan tidak pernah dikirim ke browser.'
        ]
      },
      {
        id: 'ft-feat-4',
        title: 'SQLite Audit Journal, Out-of-Sample Walk-Forward & Test Suite',
        icon: 'fa-solid fa-database',
        color: 'from-emerald-600 to-teal-700',
        description: 'Pencatatan data audit komprehensif, evaluasi kuantitatif empiris tanpa bias kurva, dan verifikasi kode otomatis:',
        capabilities: [
          'Jurnal Audit Trade SQLite: Setiap transaksi (open, close, SL hit, TP hit, manual close) dicatat secara terperinci beserta alasan penutupan dan nilai $R$ terealisasi.',
          'Evaluasi Walk-Forward Out-of-Sample: Pengujian kuantitatif jujur pada 25.000 candle Finex XAUUSD M5 yang membeberkan realitas friksi biaya transaksi scalping 46% (spread 1.8 pip + slippage 0.5 pip terhadap target 5 pip).',
          '38 Unit Test Otomatis Pytest: Rangkaian pengujian lengkap yang mencakup Keamanan (Fase 0), Determinisik Waktu & Data (Fase 1), Kejujuran Metrik (Fase 2), Aturan Risiko & Circuit Breaker (Fase 3), Integritas Jurnal (Fase 4), dan Paritas Backtest (Fase 5).',
          'Perhitungan Interval Kepercayaan Wilson 95%: Menghitung tingkat kepercayaan statistik yang ketat untuk rasio kemenangan (win rate) guna menghindari kesimpulan prematur.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Core Backend & API Service',
        icon: 'fa-brands fa-python',
        color: 'text-blue-600',
        items: [
          { name: 'Python 3.11+ / 3.12', role: 'Bahasa pemrograman utama dengan performa komputasi tinggi, type hinting ketat, dan dukungan ekosistem kuantitatif lengkap.' },
          { name: 'FastAPI & Uvicorn', role: 'Framework API asinkron berperforma tinggi untuk antarmuka REST, kontrol engine, dan streaming WebSocket telemetri real-time.' },
          { name: 'Pydantic v2', role: 'Validasi skema payload pesanan, konfigurasi akun, dan aturan verifikasi input yang ketat dan aman.' },
          { name: 'WebSockets', role: 'Komunikasi dua arah latensi rendah untuk stream tick harga, floating P&L, dan status circuit breaker ke frontend.' }
        ]
      },
      {
        category: 'Quantitative & Mathematical Computing',
        icon: 'fa-solid fa-square-root-variable',
        color: 'text-indigo-600',
        items: [
          { name: 'Pandas & NumPy', role: 'Kalkulasi array berkecepatan tinggi untuk indikator teknikal (EMA Ribbon, ADX, ATR, Swing High/Low, Fibonacci Retracements).' },
          { name: 'Scikit-Learn & SciPy', role: 'Analisis statistik regresi, estimasi interval kepercayaan (Wilson Score 95% CI), dan evaluasi distribusi return.' },
          { name: 'Deterministic Time-Series Logic', role: 'Aturan sinyal matematika murni tanpa ketergantungan pada model probabilistik generatif pada jalur eksekusi kritis.' }
        ]
      },
      {
        category: 'Broker Integration & Hardware IPC',
        icon: 'fa-solid fa-server',
        color: 'text-purple-600',
        items: [
          { name: 'MetaTrader 5 Python API', role: 'Pustaka resmi integrasi broker untuk transmisi order, pengambilan riwayat transaksi, dan pemantauan akun.' },
          { name: 'Direct Shared Memory IPC', role: 'Komunikasi antarproses langsung berkecepatan tinggi di OS Windows tanpa perantara HTTP cloud eksternal.' },
          { name: 'Paper Trading Simulator', role: 'Mesin simulasi internal terisolasi untuk menguji strategi secara realistis dengan simulasi spread dan slippage buatan.' }
        ]
      },
      {
        category: 'Persistence & Security Layer',
        icon: 'fa-solid fa-database',
        color: 'text-emerald-600',
        items: [
          { name: 'SQLite3 (WAL Mode)', role: 'Penyimpanan transaksi ACID lokal untuk pencatatan status circuit breaker harian dan jurnal audit transaksi.' },
          { name: 'Cryptographic Session Token', role: 'Autentikasi token sesi dinamis yang dihasilkan saat booting untuk memvalidasi setiap pemanggilan API dan WebSocket.' },
          { name: 'Zero-Trust Credential Isolation', role: 'Pemisahan kredensial broker dalam file .env lokal dengan sanitasi string otomatis pada seluruh berkas log.' }
        ]
      },
      {
        category: 'Testing & Quality Assurance',
        icon: 'fa-solid fa-vial-circle-check',
        color: 'text-rose-600',
        items: [
          { name: 'Pytest (38 Unit Tests)', role: 'Rangkaian pengujian otomatis berjenjang mencakup keamanan, determinisme, transparansi, aturan risiko, jurnal, dan paritas backtest.' },
          { name: 'Isolated MT5 Mock Driver', role: 'Sistem mock driver MT5 mandiri yang memungkinkan eksekusi rangkaian pengujian penuh tanpa memerlukan terminal MT5 aktif.' },
          { name: 'Walk-Forward OOS Evaluator', role: 'Script evaluasi out-of-sample terpisah untuk membuktikan performa strategi pada data yang belum pernah dilihat model.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Database SQLite3 Transaksional & Jurnal Audit',
      badge: 'SQLite3 ACID Compliant & WAL Mode',
      description: 'FinexTrade menggunakan arsitektur basis data relasional SQLite3 lokal dengan pencatatan status atomik untuk mencegah pemulihan saldo buatan atau modifikasi status risiko saat restart server:',
      tables: [
        { name: '1. daily_circuit_breaker (6 Kolom)', fields: 'date (TEXT PK), total_realized_r (REAL), trades_count (INTEGER), is_tripped (INTEGER), tripped_at (TEXT), updated_at (TEXT)' },
        { name: '2. trade_journal (14 Kolom)', fields: 'ticket (INTEGER PK), symbol (TEXT), direction (TEXT), open_price (REAL), close_price (REAL), stop_loss (REAL), take_profit (REAL), lots (REAL), pnl_cash (REAL), pnl_r (REAL), open_time (TEXT), close_time (TEXT), close_reason (TEXT), session_id (TEXT)' },
        { name: '3. news_calendar (7 Kolom)', fields: 'event_id (TEXT PK), title (TEXT), country (TEXT), impact (TEXT), release_time (TEXT), actual (REAL), forecast (REAL)' },
        { name: '4. account_vault (6 Kolom)', fields: 'account_id (TEXT PK), login_id (INTEGER), broker_server (TEXT), account_type (TEXT), is_active (INTEGER), created_at (TEXT)' }
      ]
    }
  },
  {
    id: 'tiktok-copilot',
    title: 'Co-Pilot TikTok AI Video Creator & Prompt Center v2.0',
    subtitle: 'TikTok Vertical Video Automation, Google Gemini Prompt Center & Remotion Engine',
    category: 'Full Stack & AI Automation',
    badge: 'Flagship Web App',
    badgeColor: 'bg-[#FE2C55] text-white',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 left-6 w-28 h-5 -rotate-2',
    previewImage: '/assets/projects/copilot-tiktok-web.png',
    screenshots: [
      { id: 'tt-1', label: 'Desktop Script Planner', url: '/assets/projects/copilot-tiktok-web.png', desc: 'Tampilan desktop 1440x900 Script Planner dengan timeline durasi & preview scene', type: 'desktop' },
      { id: 'tt-2', label: 'AI Prompt Center', url: '/assets/projects/copilot-tiktok-prompt.png', desc: 'Pusat prompt AI terintegrasi Google Gemini API untuk 5 scene visual & narasi', type: 'desktop' },
      { id: 'tt-3', label: 'Mobile Viewport PWA', url: '/assets/projects/copilot-tiktok-mobile.png', desc: 'Tampilan mobile smartphone (412x915) responsif untuk edit naskah langsung dari HP', type: 'mobile' },
      { id: 'tt-4', label: 'Modal Edit Naskah', url: '/assets/projects/copilot-tiktok-modal.png', desc: 'Modal dialog pengeditan naskah, timing narasi, dan konfigurasi API key', type: 'desktop' }
    ],
    tech: ['React 18', 'Remotion Engine', 'Google Gemini AI', 'Whisper CPP', 'Tailwind CSS', 'Vite', 'Node.js'],
    description: 'Dashboard otomasi konten video vertikal TikTok (9:16) dan perencana naskah multi-scene berbasis AI. Dilengkapi integrasi Google Gemini API untuk prompt visual & narasi otomatis, Remotion engine untuk render programmatic video Full HD (1080x1920), dan antarmuka Cyber Dark Modern (#FE2C55 & #25F4EE).',
    highlights: [
      'Perancangan alur 5-scene naskah otomatis dengan estimasi timing presisi (Hook, Problem, Climax, CTA)',
      'Pusat Prompt Center AI Gemini untuk generasi gambar vertikal 9:16 & narasi audio',
      'Remotion Programmatic Video Engine untuk render frame-by-frame 1080x1920 Full HD',
      'Desain UI Cyber Dark Modern dengan dukungan penuh Desktop & PWA Mobile'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/copilot-tiktok-ai-video-creator',
    prd: {
      philosophy: 'Pembuatan konten video pendek vertikal (9:16) untuk TikTok, Reels, dan Shorts menuntut ritme produksi yang konsisten dan penceritaan terstruktur. Co-Pilot TikTok dirancang untuk menjembatani ide mentah kreator menjadi video siap tayang melalui perencana naskah 5-scene otomatis, integrasi Google Gemini API untuk prompt visual & narasi, serta pipeline render programmatic berbasis Remotion.',
      targetSLA: 'Siklus perancangan naskah 5 scene lengkap dengan prompt visual dalam waktu < 30 detik.',
      problemStatements: [
        {
          title: 'Creative Burnout & Waktu Riset Konten',
          desc: 'Kreator video pendek menghabiskan 3-5 jam hanya untuk merumuskan hook, narasi per scene, dan prompt visual secara manual.',
          icon: 'fa-solid fa-hourglass-half',
          badge: 'Efisiensi Kreator'
        },
        {
          title: 'Inkonsistensi Struktur Penceritaan Vertikal',
          desc: 'Video sering kehilangan retensi penonton di 3 detik pertama karena ketiadaan format standar (Hook, Masalah, Penjelasan, Solusi, Call to Action).',
          icon: 'fa-solid fa-chart-line-down',
          badge: 'Retensi Penonton'
        },
        {
          title: 'Rendering Manual yang Memakan Waktu',
          desc: 'Proses editing konvensional memerlukan penataan layer teks, audio narasi, dan aset visual berulang-ulang untuk format 9:16 Full HD (1080x1920).',
          icon: 'fa-solid fa-film',
          badge: 'Otomasi Render'
        }
      ],
      userRoles: [
        {
          role: 'Content Creator / Video Producer',
          badge: 'Kreator Konten',
          badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
          tasks: [
            'Merumuskan topik video dan memilih persona gaya penceritaan naskah.',
            'Meninjau dan mengedit naskah dialog 5 babak di desktop planner atau mobile PWA.',
            'Memicu render programmatic Remotion dan mengunduh berkas video MP4 Full HD.'
          ]
        },
        {
          role: 'AI Prompt Engineer',
          badge: 'Spesialis Prompt',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Mengoptimalkan struktur prompt visual Gemini untuk gaya Cinematic / Cyber Dark.',
            'Menyesuaikan parameter temperatur kreativitas dan token output AI.',
            'Mengatur deskripsi pencahayaan, rasio 9:16, dan gaya estetika visual.'
          ]
        },
        {
          role: 'Social Media Strategist',
          badge: 'Analisis Audiens',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          tasks: [
            'Menganalisis efektivitas hook 3 detik pertama untuk retensi audiens TikTok.',
            'Memastikan ketepatan penempatan subtitle agar tidak tertutup UI tombol TikTok.',
            'Mengevaluasi rasio durasi total video terhadap algoritma distribusi FYP.'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Alur Perencanaan Naskah & Generasi AI Gemini (5 Scene)',
      primaryBadge: 'AI Prompt Pipeline',
      primaryIcon: 'fa-solid fa-wand-magic-sparkles',
      primaryColor: 'bg-[#FE2C55]',
      primaryStepColor: 'text-[#FE2C55] bg-rose-50',
      primarySteps: [
        {
          step: '01',
          name: 'Input Tema & Persona',
          desc: 'Kreator memasukkan topik bahasan dan memilih tone bahasa (edukatif, storytelling, atau kontroversial).'
        },
        {
          step: '02',
          name: 'Prompt Center Gemini API',
          desc: 'Sistem memanggil Google Gemini untuk menguraikan tema ke dalam struktur baku 5 scene (Hook, Problem, Deep Dive, Climax, CTA).'
        },
        {
          step: '03',
          name: 'Visual & Audio Prompting',
          desc: 'Ekstraksi otomatis kata kunci visual resolusi tinggi dan perkiraan timing pembacaan narasi suara per scene.'
        },
        {
          step: '04',
          name: 'Editor Naskah Interaktif',
          desc: 'Kreator dapat mengubah teks dialog, menyesuaikan durasi detik tiap scene, dan melakukan preview live.'
        },
        {
          step: '05',
          name: 'Sinkronisasi Timeline State',
          desc: 'Naskah final disimpan ke state engine siap untuk disuntikkan ke pipeline render video Remotion.'
        }
      ],
      secondaryTitle: 'Pipeline Render Programmatic Video Vertikal 9:16 (Remotion)',
      secondaryBadge: 'Programmatic Video Engine',
      secondaryIcon: 'fa-solid fa-video',
      secondaryColor: 'bg-purple-600',
      secondaryStepColor: 'text-purple-700 bg-purple-100',
      secondarySteps: [
        {
          step: '01',
          name: 'Komposisi Kanvas 9:16',
          desc: 'Remotion merakit kanvas vertikal 1080x1920 Full HD dengan aspect ratio 9:16 standar TikTok/Reels.'
        },
        {
          step: '02',
          name: 'Animasi Teks & Subtitle',
          desc: 'Penerapan transisi smooth spring dynamic untuk hook judul dan teks subtitle berjalan.'
        },
        {
          step: '03',
          name: 'Sinkronisasi Audio & BGM',
          desc: 'Penggabungan narasi audio AI dengan musik latar bebas royalti pada trek multitrack.'
        },
        {
          step: '04',
          name: 'Ekspor MP4 Kualitas Studio',
          desc: 'Rendering frame-by-frame menjadi file MP4 berstandar kompresi tinggi siap upload.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Frontend Script Planner (React 18 & Vite)',
          desc: 'Antarmuka responsif Cyber Dark (#FE2C55 & #25F4EE) dengan editor timeline multi-scene interaktif.'
        },
        {
          layer: 'Layer 2: AI Orchestrator (Google Gemini 1.5 Flash API)',
          desc: 'Handler prompt terstruktur menghasilkan output JSON skenario 5 babak presisi dan konsisten.'
        },
        {
          layer: 'Layer 3: Video Timeline Engine (Remotion Core)',
          desc: 'React-based programmatic video composition engine mengatur keyframe animasi dan layering visual 60fps.'
        },
        {
          layer: 'Layer 4: Audio Synthesis & Subtitle Staging (Whisper / Web Speech)',
          desc: 'Ekstraksi cue timestamp audio untuk penempatan teks karaoke subtitle otomatis.'
        },
        {
          layer: 'Layer 5: Export & Asset Bundler (Node.js & FFmpeg)',
          desc: 'Bundling aset visual, audio, dan font ke format video vertikal Full HD (1080x1920).'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Desktop Script Planner (1440x900)',
        badge: 'Timeline Studio',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        icon: 'fa-solid fa-table-columns',
        items: [
          'Visualisasi Timeline 5 Babak: Hook (0-3s), Problem (3-15s), Deep Dive (15-40s), Climax (40-50s), CTA (50-60s).',
          'Kalkulator Durasi Otomatis: Estimasi kata per menit (WPM) untuk memastikan pacing video tidak terlalu cepat/lambat.',
          'Live Preview Scene: Tampilan simulasi layar HP real-time saat naskah diketik di editor.',
          'Ekspor Naskah & Clipboard: Salin format skrip siap baca untuk teleprompter atau rekaman suara.'
        ]
      },
      {
        module: 'AI Prompt Center (Google Gemini API)',
        badge: 'Generative AI',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-brain',
        items: [
          'Generator Prompt Gambar 9:16: Prompt visual kaya detail dengan gaya Cyber Dark, Neon Accent, dan Fotorealistik.',
          'Generator Hook Bertenaga Tinggi: 10 variasi kalimat pembuka provokatif dan memancing rasa penasaran audiens.',
          'Preset Kategori Konten: Template khusus untuk Finansial, Teknologi, Edukasi Coding, dan Lifestyle.',
          'Manajemen Kunci API Privat: Konfigurasi API Key pengguna tersimpan aman di Local Storage lokal.'
        ]
      },
      {
        module: 'Mobile Viewport PWA (412x915)',
        badge: 'Mobile First',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-mobile-screen',
        items: [
          'Navigasi Responsif Jempol: Akses cepat ke 5 babak naskah langsung dari layar smartphone.',
          'Input Cepat di Lapangan: Perbarui ide konten saat di perjalanan tanpa perlu membuka laptop.',
          'Dukungan Layar Penuh PWA: Instalasi web app ke homescreen smartphone tanpa bilah browser.',
          'Optimasi Konsumsi Memori: Arsitektur ringan yang hemat baterai saat proses preview naskah.'
        ]
      },
      {
        module: 'Modal Dialog Edit Naskah & Remotion Config',
        badge: 'Fine-Tuning',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-sliders',
        items: [
          'Pengaturan Parameter Kreativitas: Penggeser temperatur AI untuk variasi ide liar vs naskah formal.',
          'Manajemen Suara Narasi: Pilihan kecepatan membaca 0.75x hingga 1.5x untuk video ritme cepat.',
          'Preset Warna Branding: Penyesuaian skema warna teks hook dan subtitle agar senada dengan identitas channel.',
          'Format Siap Render: Ekspor konfigurasi JSON naskah yang kompatibel penuh dengan Remotion CLI.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Frontend & UI Engineering',
        icon: 'fa-solid fa-laptop-code',
        color: 'text-rose-600',
        items: [
          { name: 'React 18', role: 'State management deklaratif untuk timeline scene dan live text binding.' },
          { name: 'Vite 5', role: 'Build tool kilat dengan Hot Module Replacement (HMR) untuk iterasi desain cepat.' },
          { name: 'Tailwind CSS', role: 'Styling tema Cyber Dark Modern (#FE2C55, #25F4EE, slate-950).' },
          { name: 'Lucide React', role: 'Ikonografi modern dan konsisten untuk kontrol media dan timeline.' }
        ]
      },
      {
        category: 'AI & Generative Language Model',
        icon: 'fa-solid fa-brain',
        color: 'text-purple-600',
        items: [
          { name: 'Google Gemini 1.5 Flash', role: 'Eksekusi inferensi naskah multi-scene dan prompt visual berlatensi rendah.' },
          { name: 'Structured JSON Schemas', role: 'Format pemaksaan skema respons Zod agar output AI selalu konsisten 5 babak.' },
          { name: 'Prompt Engineering Templates', role: 'Formula prompt hook 3 detik teruji untuk retensi video vertikal tinggi.' }
        ]
      },
      {
        category: 'Video Programmatic Composition',
        icon: 'fa-solid fa-film',
        color: 'text-indigo-600',
        items: [
          { name: 'Remotion Core', role: 'Pemrograman video berbasis React komponen dengan kontrol frame demi frame.' },
          { name: 'Spring Animations', role: 'Fisika gerakan teks dan transisi scene yang luwes tanpa kaku.' },
          { name: 'Canvas 2D Text Sync', role: 'Render teks resolusi tinggi 1080x1920 tanpa penurunan ketajaman font.' }
        ]
      },
      {
        category: 'Audio & Subtitle Processing',
        icon: 'fa-solid fa-waveform',
        color: 'text-amber-600',
        items: [
          { name: 'Whisper CPP / Web Speech', role: 'Penyelarasan cue transkrip terhadap narasi suara audio.' },
          { name: 'Multi-Track Audio Mixing', role: 'Penggabungan suara vokal dubbing dengan background music otomatis.' }
        ]
      },
      {
        category: 'Runtime & Build Tools',
        icon: 'fa-solid fa-gears',
        color: 'text-emerald-600',
        items: [
          { name: 'Node.js 20 LTS', role: 'Runtime environment untuk automasi script dan render pipeline.' },
          { name: 'FFmpeg Media Engine', role: 'Encoding berkas video akhir ke format MP4 H.264 standar web.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema State Store & Pipeline Timeline Skenario',
      badge: 'Remotion Core State',
      description: 'Struktur data reaktif JSON untuk pengelolaan naskah 5 babak, aset prompt visual, dan sinkronisasi audio:',
      tables: [
        { name: '1. scene_scripts (6 Kolom)', fields: 'scene_id, scene_type (Hook/Problem/Climax/CTA), narrative_text, target_duration_sec, prompt_visual, bg_color' },
        { name: '2. prompt_assets (5 Kolom)', fields: 'prompt_id, scene_id, gemini_prompt_text, visual_aspect_ratio (9:16), generated_image_url' },
        { name: '3. audio_sync (5 Kolom)', fields: 'audio_id, voice_style, speed_rate, transcript_cues, audio_blob_url' },
        { name: '4. video_meta (6 Kolom)', fields: 'project_id, title, resolution (1080x1920), fps (30fps), render_status, export_path' }
      ]
    }
  },
  {
    id: 'my-finance',
    title: 'BigBoz — Dashboard Keuangan Pribadi & PWA Finansial Cerdas',
    subtitle: 'Sistem Manajemen Arus Kas, Pelacak Cicilan & Edukasi Finansial',
    category: 'Full Stack Fintech & PWA',
    badge: 'Flagship PWA App',
    badgeColor: 'bg-emerald-600 text-white',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 right-6 w-28 h-5 rotate-2',
    previewImage: '/assets/projects/myfinance-home-web.png',
    screenshots: [
      { id: 'fin-1', label: 'Dashboard Utama', url: '/assets/projects/myfinance-home-web.png', desc: 'Beranda finansial interaktif bertema Cinematic Dark Mode dengan metrik arus kas', type: 'desktop' },
      { id: 'fin-2', label: 'Grafik 3D & Donut', url: '/assets/projects/myfinance-charts-web.png', desc: 'Visualisasi analitik pengeluaran harian, proporsi kategori, dan hari terboros', type: 'desktop' },
      { id: 'fin-3', label: 'Riwayat Transaksi', url: '/assets/projects/myfinance-history-web.png', desc: 'Log book transaksi cerdas dengan filter kategori, tanggal, dan bukti transaksi', type: 'desktop' },
      { id: 'fin-4', label: 'Target Tabungan (Goals)', url: '/assets/projects/myfinance-goals-web.png', desc: 'Pelacak target tabungan impian dengan progress bar dan estimasi capaian', type: 'desktop' },
      { id: 'fin-5', label: 'Mobile PWA Viewport', url: '/assets/projects/myfinance-home-mobile.png', desc: 'Tampilan aplikasi mobile PWA dengan navigasi jempol dan input cepat', type: 'mobile' }
    ],
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Dexie IndexedDB', 'Recharts', 'Web Speech API', 'Vite'],
    description: 'Aplikasi web modern, mobile-first, dan pendamping finansial cerdas (Catatan Uangku). Dilengkapi Dual Theme (Cinematic Dark & Clean Light), visualisasi analitik 3D Donut Chart, pelacakan rasio Debt-to-Income (DTI), pengingat jatuh tempo cicilan, input suara bahasa Indonesia via Web Speech API, dan sinkronisasi cloud Google Sheets.',
    highlights: [
      'Dual Theme System: Cinematic Slate Dark Mode & Modern Light Mode',
      'Debt & Installment Tracker dengan kalkulator DTI & simulasi pelunasan cepat',
      'Input suara otomatis (Web Speech API id-ID) untuk mencatat pengeluaran instan',
      'Database lokal offline-first (Dexie IndexedDB) dengan ekspor laporan PDF formal'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/my-finance-tracker',
    prd: {
      philosophy: 'Manajemen keuangan pribadi sering kali gagal bukan karena rumitnya rumus, melainkan karena tingginya gesekan saat mencatat pengeluaran harian. BigBoz dirancang dengan filosofi Zero-Friction Tracking: mendukung input suara instan Bahasa Indonesia via Web Speech API, bekerja offline-first via Dexie IndexedDB, serta memberikan edukasi kesehatan finansial melalui metrik Debt-to-Income (DTI) dan visualisasi 3D.',
      targetSLA: 'Pencatatan transaksi instan di bawah 3 detik via input suara atau tap cepat mobile PWA.',
      problemStatements: [
        {
          title: 'Tingginya Gesekan Pencatatan Manual',
          desc: 'Pengguna malas mengetik angka dan kategori satu per satu saat di kasir atau perjalanan, berujung lupa mencatat pengeluaran harian.',
          icon: 'fa-solid fa-keyboard',
          badge: 'Zero-Friction UX'
        },
        {
          title: 'Ketergantungan Sinyal Internet',
          desc: 'Aplikasi pencatatan berbasis cloud murni sering lambat atau gagal dibuka saat pengguna berada di basement parkir atau area minim sinyal.',
          icon: 'fa-solid fa-wifi',
          badge: 'Offline-First'
        },
        {
          title: 'Blindspot Beban Utang & Cicilan (DTI)',
          desc: 'Banyak orang tidak sadar rasio utang mereka telah melebihi batas aman (30-35% penghasilan), memicu krisis arus kas bulanan.',
          icon: 'fa-solid fa-scale-unbalanced',
          badge: 'Kesehatan Finansial'
        }
      ],
      userRoles: [
        {
          role: 'Personal User (Pemilik Anggaran)',
          badge: 'Pengguna Utama',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          tasks: [
            'Mencatat pengeluaran harian via input suara instan bahasa Indonesia.',
            'Mengawasi sisa kuota amplop pos anggaran (Kebutuhan, Keinginan, Tabungan).',
            'Memantau progress target tabungan impian dengan estimasi tanggal tercapai.'
          ]
        },
        {
          role: 'Financial Analyst / Perencana',
          badge: 'Perencana Finansial',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          tasks: [
            'Mengevaluasi rasio Debt-to-Income (DTI) dan beban bunga pinjaman.',
            'Menganalisis tren hari terboros mingguan untuk efisiensi gaya hidup.',
            'Merancang strategi pelunasan utang tercepat (Debt Snowball vs Avalanche).'
          ]
        },
        {
          role: 'Auditor Pribadi / Keluarga',
          badge: 'Audit & Laporan',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Mengekspor rekapitulasi laporan bulanan dalam format PDF formal.',
            'Menyinkronkan data keuangan ke cloud spreadsheet Google Sheets keluarga.',
            'Melakukan pencocokan bukti transfer/struk belanja dengan log transaksi.'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Alur Input Suara & Pengkategorian Cerdas (Web Speech API)',
      primaryBadge: 'Zero-Friction Voice',
      primaryIcon: 'fa-solid fa-microphone-lines',
      primaryColor: 'bg-emerald-600',
      primaryStepColor: 'text-emerald-700 bg-emerald-100',
      primarySteps: [
        {
          step: '01',
          name: 'Aktivasi Voice Mic',
          desc: 'Pengguna mengetuk tombol mic mengaktifkan Web Speech API pengenalan suara bahasa Indonesia (id-ID).'
        },
        {
          step: '02',
          name: 'Natural Language Parsing',
          desc: 'Parser mengenali nominal uang dan entitas belanja (contoh: "Beli bensin 50 ribu").'
        },
        {
          step: '03',
          name: 'Auto-Mapping Kategori',
          desc: 'Mesin aturan otomatis memetakan transaksi ke pos anggaran "Transportasi" dan nominal "Rp 50.000".'
        },
        {
          step: '04',
          name: 'Local Commit (IndexedDB)',
          desc: 'Data tersimpan secara instan di Dexie IndexedDB lokal tanpa jeda tunggu jaringan (<10ms).'
        },
        {
          step: '05',
          name: 'Update Analitik Realtime',
          desc: 'Grafik pengeluaran dan kuota anggaran harian langsung diperbarui secara realtime di layar.'
        }
      ],
      secondaryTitle: 'Alur Pelacak Cicilan & Kalkulasi Rasio Debt-to-Income (DTI)',
      secondaryBadge: 'Fintech Analytics',
      secondaryIcon: 'fa-solid fa-calculator',
      secondaryColor: 'bg-blue-600',
      secondaryStepColor: 'text-blue-700 bg-blue-100',
      secondarySteps: [
        {
          step: '01',
          name: 'Registrasi Cicilan',
          desc: 'Input data pinjaman, suku bunga, tenor bulan, dan tanggal jatuh tempo bulanan.'
        },
        {
          step: '02',
          name: 'Amortisasi & Pengingat',
          desc: 'Kalkulasi sisa pokok hutang dan jadwal jatuh tempo dengan indikator warna status aman/waspada.'
        },
        {
          step: '03',
          name: 'Kalkulasi Rasio DTI',
          desc: 'Sistem membagi total cicilan bulanan terhadap total pendapatan bersih (Batas Sehat: <35%).'
        },
        {
          step: '04',
          name: 'Ekspor Laporan PDF',
          desc: 'Pembuatan lembar ringkasan kesehatan finansial formal siap unduh atau cetak via jsPDF.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Progressive Web App Shell (React 18 & Vite)',
          desc: 'PWA dapat di-install di Android & iOS dengan Service Worker caching untuk akses instan.'
        },
        {
          layer: 'Layer 2: Dual Theme UI System (Tailwind CSS)',
          desc: 'Cinematic Slate Dark Mode (#0B0F17) dan Modern Clean Light Mode dengan kontras tajam.'
        },
        {
          layer: 'Layer 3: Natural Voice Processor (Web Speech API)',
          desc: 'Speech-to-Text bahasa Indonesia dengan parsing regex nominal, angka, & kata kunci belanja.'
        },
        {
          layer: 'Layer 4: Local Storage Engine (Dexie.js IndexedDB)',
          desc: 'Database terstruktur client-side dengan performa query cepat dan indeks multikey tanpa server.'
        },
        {
          layer: 'Layer 5: Cloud Sync & Export Gateway (Google Sheets & jsPDF)',
          desc: 'Sinkronisasi data opsional ke spreadsheet cloud dan generator PDF formal berstandar akuntansi.'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Dashboard Finansial & Arus Kas',
        badge: 'Cash Flow Core',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-wallet',
        items: [
          '4 Kartu Metrik Finansial: Total Saldo Aktif, Pemasukan Bulan Ini, Pengeluaran Bulan Ini, dan Rasio Tabungan.',
          'Input Suara Bahasa Indonesia: Rekam pengeluaran dalam 2 detik menggunakan suara via Web Speech API.',
          'Dual Theme System: Cinematic Dark Mode untuk malam hari dan Clean Light Mode untuk siang hari.',
          'Offline-First Guaranteed: Tetap berfungsi 100% normal tanpa jaringan internet di basement/area pelosok.'
        ]
      },
      {
        module: 'Visualisasi Analitik 3D & Donut Chart',
        badge: 'Visual Analytics',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-chart-pie',
        items: [
          '3D Donut Chart Proporsi Pos: Pembagian otomatis ke pos Kebutuhan Pokok, Keinginan, dan Tabungan.',
          'Analitik Hari Terboros: Grafik batang mingguan yang menyorot hari dengan konsumsi pengeluaran tertinggi.',
          'Tren Pengeluaran 30 Hari: Visualisasi garis fluktuasi pengeluaran harian terhadap batas aman harian.',
          'Tooltip Interaktif: Detail pengeluaran per kategori yang muncul halus saat kursor mengarah ke grafik.'
        ]
      },
      {
        module: 'Riwayat Logbook & Smart Search',
        badge: 'Transaction Book',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-clock-rotate-left',
        items: [
          'Pencarian Cepat & Filter Multi-Kategori: Cari transaksi berdasarkan nama toko, nominal, atau metode bayar.',
          'Lampiran Bukti Transaksi: Simpan struk belanja atau bukti transfer langsung ke IndexedDB lokal.',
          'Kategori Kustom Dinamis: Tambahkan kategori pengeluaran dan warna ikon sesuai kebutuhan pribadi.',
          'Ekspor PDF Laporan Bulanan: Unduh laporan rekapitulasi keuangan formal berstandar akuntansi rapi.'
        ]
      },
      {
        module: 'Pelacak Utang, Cicilan (DTI) & Target Tabungan',
        badge: 'Debt & Goals',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: 'fa-solid fa-bullseye',
        items: [
          'Debt-to-Income (DTI) Calculator: Deteksi kesehatan finansial dengan rambu batas aman cicilan <35%.',
          'Pengingat Jatuh Tempo: Status visual sisa hari pembayaran cicilan agar tidak terkena denda keterlambatan.',
          'Target Tabungan Impian: Progress bar tabungan dengan kalkulasi sisa dana dan estimasi bulan tercapai.',
          'Sinkronisasi Google Sheets: Cadangkan seluruh histori data transaksi ke spreadsheet Google pengguna.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Frontend & PWA Engineering',
        icon: 'fa-solid fa-laptop-code',
        color: 'text-emerald-600',
        items: [
          { name: 'React 18', role: 'Arsitektur komponen modular dengan hooks kustom untuk state keuangan reaktif.' },
          { name: 'TypeScript', role: 'Keamanan tipe data moneter (handling desimal dan kalkulasi saldo tanpa rounding error).' },
          { name: 'Tailwind CSS', role: 'Styling responsif mobile-first dengan tema ganda Slate Dark dan Clean Light.' },
          { name: 'Service Worker PWA', role: 'Instalasi aplikasi di layar utama HP dengan caching aset offline-first.' }
        ]
      },
      {
        category: 'Client Database & Offline Storage',
        icon: 'fa-solid fa-database',
        color: 'text-blue-600',
        items: [
          { name: 'Dexie.js (IndexedDB)', role: 'Penyimpanan lokal terindeks berkapasitas besar tanpa batasan 5MB LocalStorage.' },
          { name: 'Reactive Live Queries', role: 'Pembaruan UI otomatis seketika data transaksi baru dimasukkan ke database.' },
          { name: 'Index Compounds', role: 'Pencarian cepat multi-indeks berdasarkan tanggal, kategori, dan metode bayar.' }
        ]
      },
      {
        category: 'Data Visualization & Charts',
        icon: 'fa-solid fa-chart-line',
        color: 'text-purple-600',
        items: [
          { name: 'Recharts / Chart.js', role: 'Rendering grafik donat 3D interaktif dan diagram batang tren pengeluaran.' },
          { name: 'Framer Motion', role: 'Animasi transisi halus saat membuka modal transaksi dan pergantian tab.' }
        ]
      },
      {
        category: 'Voice Input & Audio Processing',
        icon: 'fa-solid fa-microphone',
        color: 'text-rose-600',
        items: [
          { name: 'Web Speech API', role: 'Pengenalan suara native browser Bahasa Indonesia (id-ID) tanpa biaya API tambahan.' },
          { name: 'Regex Token Parser', role: 'Pemisahan nominal uang, nama entitas barang, dan kategori dari rekaman suara.' }
        ]
      },
      {
        category: 'Export & Cloud Integration',
        icon: 'fa-solid fa-cloud-arrow-up',
        color: 'text-amber-600',
        items: [
          { name: 'jsPDF & AutoTable', role: 'Penyusunan dokumen laporan PDF formal siap cetak langsung di peramban.' },
          { name: 'Google Sheets API', role: 'Sinkronisasi data terenkripsi ke spreadsheet Google pengguna untuk backup.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Database Client-Side (Dexie.js IndexedDB)',
      badge: 'Offline-First Storage',
      description: 'Database relasional client-side berbasis IndexedDB dengan indeks multikey untuk performa analitik instan:',
      tables: [
        { name: '1. transactions (7 Kolom)', fields: 'id (++id), date, category_id, amount, note, receipt_image_url, payment_method' },
        { name: '2. budgets (5 Kolom)', fields: 'category_id, name, allocated_amount, spent_amount, period_month' },
        { name: '3. debt_installments (8 Kolom)', fields: 'id, lender_name, total_debt, monthly_installment, due_date, interest_rate, remaining_tenor, status' },
        { name: '4. savings_goals (6 Kolom)', fields: 'goal_id, title, target_amount, current_amount, deadline_date, icon' }
      ]
    }
  },
  {
    id: 'tiktok-live-printer',
    title: 'TikTok Live Interactive Photo Printer & AI Rating (v6.2)',
    subtitle: 'Real-Time Stream Overlay, Mechanical Print Simulation & Host Control Center via WebSocket',
    category: 'Full Stack & Live Stream IoT',
    badge: 'Interactive Stream',
    badgeColor: 'bg-rose-600 text-white',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 left-6 w-28 h-5 -rotate-2',
    previewImage: '/assets/projects/tiktok-printer-stream-web.png',
    screenshots: [
      { id: 'ttprint-1', label: 'Layar Stream Cetak Aktif', url: '/assets/projects/tiktok-printer-stream-web.png', desc: 'Layar OBS Overlay 9:16 dengan head printer gerak bolak-balik mencetak foto live dan rating aura', type: 'desktop' },
      { id: 'ttprint-2', label: 'Dashboard Kontrol Host', url: '/assets/projects/tiktok-printer-control-web.png', desc: 'Panel kontrol host untuk koneksi live TikTok, sistem gift pancingan otomatis, dan monitor gift', type: 'desktop' },
      { id: 'ttprint-3', label: 'Galeri 50 Profil & Filter Bot', url: '/assets/projects/tiktok-printer-gallery-web.png', desc: 'Monitor pemisah gift penonton asli vs bot otomatis dengan 50 profil lokal simulator', type: 'desktop' },
      { id: 'ttprint-4', label: 'Layar Stream Mobile', url: '/assets/projects/tiktok-printer-mobile-standby.png', desc: 'Tampilan standby di HP dengan radar penonton live dan papan peringkat Top 1-5 Sultan', type: 'mobile' },
      { id: 'ttprint-5', label: 'Cetak Jumbo Full Kertas', url: '/assets/projects/tiktok-printer-mobile-print.png', desc: 'Mode cetak jumbo untuk gift sultan dengan skor rating 100% dan efek kilau visual', type: 'mobile' },
      { id: 'ttprint-6', label: 'Kontrol Host di Mobile', url: '/assets/projects/tiktok-printer-mobile-control.png', desc: 'Dashboard operasional responsif di smartphone untuk kendali jarak jauh tanpa laptop', type: 'mobile' }
    ],
    tech: ['Node.js', 'Express', 'WebSocket', 'TikTok-Live-Connector', 'HTML5 Canvas', 'Tailwind CSS'],
    description: 'Aplikasi interaktif live streaming TikTok yang secara otomatis mendeteksi gift penonton (Mawar, Donat, Mahkota) secara real-time via WebSocket, mengunduh foto profil mereka, dan mencetaknya secara virtual dengan simulasi animasi head printer mekanikal, efek suara, sistem anti-bot, serta leaderboard Top 1-5 Sultan.',
    highlights: [
      'Integrasi real-time TikTok Live Connector via WebSocket tanpa jeda koneksi',
      '3 Mode Cetak Dinamis: Foto Kecil Polaroid, Sedang VIP, dan Jumbo Full Kertas',
      'Sistem filter pintar pemisah gift penonton asli vs bot/fake gift otomatis',
      'Dual interface: OBS Stream Overlay 9:16 dan Dashboard Kontrol Host 2-Kolom'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/tiktok-live-interactive-photo-printer',
    prd: {
      philosophy: 'Interaksi live streaming modern membutuhkan imbalan visual langsung (instant gamification) agar penonton terdorong memberikan gift. TikTok Live Interactive Photo Printer mengubah setiap gift penonton (Mawar, Donat, Mahkota) menjadi aksi mekanikal real-time: mengunduh avatar penonton, mensimulasikan cetak foto fisik dengan suara printer dot-matrix asli, dan memberikan skor rating aura 1-100%.',
      targetSLA: 'Latensi deteksi gift hingga mulai mencetak di layar OBS kurang dari 500 milidetik.',
      problemStatements: [
        {
          title: 'Rendahnya Keterlibatan & Monotoni Stream',
          desc: 'Host streaming kesulitan memberikan apresiasi visual langsung kepada ratusan penonton yang mengirimkan gift secara bersamaan.',
          icon: 'fa-solid fa-gamepad',
          badge: 'Stream Gamification'
        },
        {
          title: 'Serangan Fake Gift & Bot Spam',
          desc: 'Banyak akun bot di TikTok Live yang mengirimkan spam komentar dan trigger palsu yang mengacaukan perhitungan gift donatur asli.',
          icon: 'fa-solid fa-robot',
          badge: 'Anti-Bot Filter'
        },
        {
          title: 'Keterbatasan Kendali di Depan Kamera',
          desc: 'Host yang berdiri di depan kamera kesulitan mengoperasikan laptop OBS, membutuhkan remote control responsif via smartphone.',
          icon: 'fa-solid fa-mobile-screen-button',
          badge: 'Remote Mobile'
        }
      ],
      userRoles: [
        {
          role: 'Live Stream Host',
          badge: 'Pengisi Acara',
          badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
          tasks: [
            'Menghibur penonton dan mengajak donasi gift untuk mencetak foto.',
            'Membaca hasil skor rating aura wajah yang tercetak di layar kanvas.',
            'Mengapresiasi penonton donatur terbesar yang memuncaki Top Sultan.'
          ]
        },
        {
          role: 'Stream Co-Host / Operator',
          badge: 'Operator Kontrol',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          tasks: [
            'Menghubungkan room ID TikTok live via dashboard kontrol host.',
            'Menyuntikkan gift pancingan simulator untuk menstimulasi penonton.',
            'Mengatur volume efek suara printer mekanikal dan membersihkan antrean.'
          ]
        },
        {
          role: 'Audience / Donatur (Sultan)',
          badge: 'Penonton Live',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
          tasks: [
            'Mengirimkan gift TikTok (Mawar, Donat, Paus, Mahkota).',
            'Melihat foto profil terunduh dan tercetak secara real-time di layar.',
            'Memperoleh skor rating aura 100% dan gelar Top 1-5 Sultan room.'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Alur Deteksi Real-Time Gift & Unduh Avatar (WebSocket)',
      primaryBadge: 'Real-Time Event Loop',
      primaryIcon: 'fa-solid fa-satellite-dish',
      primaryColor: 'bg-rose-600',
      primaryStepColor: 'text-rose-700 bg-rose-50',
      primarySteps: [
        {
          step: '01',
          name: 'Handshake WebSocket TikTok',
          desc: 'Koneksi live room aktif mendengarkan event gift masuk via TikTok-Live-Connector.'
        },
        {
          step: '02',
          name: 'Filter Bot & Validasi Akun',
          desc: 'Sistem memverifikasi ID penonton dan memisahkan gift asli penonton dari bot spam simulasi.'
        },
        {
          step: '03',
          name: 'Download & Cache Avatar',
          desc: 'Mengunduh foto profil resolusi tinggi penonton donatur secara asynchronous ke memori server.'
        },
        {
          step: '04',
          name: 'Antrean Prioritas (Queue)',
          desc: 'Gift tier tinggi (Mahkota, Kereta) otomatis melompati antrean untuk segera dicetak.'
        },
        {
          step: '05',
          name: 'Broadcast ke Layar OBS',
          desc: 'Server mengirim payload data penonton ke OBS Browser Source 9:16 dalam <50ms.'
        }
      ],
      secondaryTitle: 'Alur Simulasi Cetak Mekanikal & Scoring Rating Aura',
      secondaryBadge: 'Interactive Canvas Print',
      secondaryIcon: 'fa-solid fa-print',
      secondaryColor: 'bg-purple-600',
      secondaryStepColor: 'text-purple-700 bg-purple-100',
      secondarySteps: [
        {
          step: '01',
          name: 'Animasi Print Head',
          desc: 'Kepala printer mekanikal bergerak horizontal bolak-balik di atas kanvas kertas foto.'
        },
        {
          step: '02',
          name: 'Sinkronisasi Audio Mekanikal',
          desc: 'Memutar efek suara printer jarum mekanikal (dot-matrix sound) selaras dengan gerakan print head.'
        },
        {
          step: '03',
          name: 'Kalkulasi Rating Aura',
          desc: 'Menghitung skor aura wajah (skor sultan otomatis 100% dengan partikel kilau emas).'
        },
        {
          step: '04',
          name: 'Kertas Keluar & Leaderboard',
          desc: 'Kertas foto terjatuh ke baki display dan nama donatur masuk ke Top 5 Sultan live room.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Ingest WebSocket Layer (Node.js & TikTok-Live-Connector)',
          desc: 'Membaca stream event data gift, komentar, dan like TikTok Live secara non-blocking.'
        },
        {
          layer: 'Layer 2: Event Queue & Anti-Bot Engine',
          desc: 'Buffer antrean pengunduhan avatar dengan rate limiter dan validasi keaslian donatur.'
        },
        {
          layer: 'Layer 3: Canvas 2D Mechanical Animation (HTML5 Canvas)',
          desc: 'Render frame pergerakan print head dan efek kertas foto terisi pixel per pixel pada 60fps.'
        },
        {
          layer: 'Layer 4: Real-Time Broadcast Server (Express & WebSocket WS)',
          desc: 'Sinkronisasi status antara Layar OBS PC dan Dashboard Kontrol HP tanpa delay jaringan.'
        },
        {
          layer: 'Layer 5: Sound Engine (Web Audio API)',
          desc: 'Pengatur multi-channel audio efek suara printer, lonceng gift, dan suara sorak penonton.'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Layar Stream OBS Overlay (9:16 Vertikal)',
        badge: 'Stream Overlay',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        icon: 'fa-solid fa-display',
        items: [
          'Animasi Print Head Mekanikal: Gerakan kepala printer horizontal bolak-balik di kanvas kertas foto.',
          'Efek Kertas Keluar Realistis: Lembaran kertas foto turun bertahap dengan bayangan 3D realistis.',
          'Sistem Rating Aura 1-100%: Skor aura wajah interaktif lengkap dengan badge emoji dan suara reaksi.',
          'Papan Top 1-5 Sultan: Leaderboard berjalan donatur terbesar dengan mahkota emas menyala.'
        ]
      },
      {
        module: 'Dashboard Kontrol Host 2-Kolom',
        badge: 'Host Control',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-gamepad',
        items: [
          'Koneksi Sekali Klik: Cukup masukkan username TikTok host tanpa perlu token API rumit.',
          'Gift Injector Pancingan: Simulasi trigger gift buatan untuk memancing penonton mulai memberi gift.',
          'Monitor Transaksi Real-Time: Rekapitulasi jumlah diamond terkumpul dan daftar nama penyumbang.',
          'Pengatur Volume FX Audio: Kontrol intensitas suara printer jarum, lonceng, dan fanfare kemenangan.'
        ]
      },
      {
        module: 'Sistem Filter Bot & Galeri 50 Profil',
        badge: 'Anti-Bot Security',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-shield-virus',
        items: [
          'Pemisah Akun Asli vs Bot: Mendeteksi dan memblokir bot spam yang mencoba memicu cetak palsu.',
          '50 Profil Simulasi Lokal: Bank profil cadangan untuk pengujian gladi bersih sebelum sesi live dimulai.',
          'Penyimpanan Cache Avatar: Caching gambar profil di memori RAM lokal untuk menghemat kuota internet.',
          'Anti-Duplicate Protection: Mencegah cetak ganda saat penonton melakukan spam gift dalam 1 detik.'
        ]
      },
      {
        module: 'Multi-Device Smartphone Control',
        badge: 'Remote Mobile',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-mobile-screen',
        items: [
          'Akses Jarak Jauh via IP Lokal: Kontrol aplikasi dari HP melalui jaringan Wi-Fi rumah yang sama.',
          'Tombol Darurat Bersihkan Antrean: Kosongkan antrean cetak seketika saat gift membludak.',
          'Pilihan 3 Mode Cetak Cepat: Ubah mode cetak Polaroid, VIP Sedang, atau Jumbo Kertas Penuh dalam satu tap.',
          'Indikator Ping Jaringan: Monitor stabilitas koneksi WebSocket antara HP host dan OBS studio.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Backend & WebSocket Ingest',
        icon: 'fa-solid fa-server',
        color: 'text-rose-600',
        items: [
          { name: 'Node.js LTS', role: 'Runtime asynchronous berkecepatan tinggi untuk menangani event stream padat.' },
          { name: 'Express.js', role: 'Web server ringan melayani assets overlay dan endpoint API remote control.' },
          { name: 'WebSocket (ws)', role: 'Protokol full-duplex dua arah menghubungkan backend, OBS, dan controller HP.' },
          { name: 'TikTok-Live-Connector', role: 'Library penghubung langsung ke TikTok Webcast WebSocket live chat.' }
        ]
      },
      {
        category: 'Overlay Graphic & Canvas Animation',
        icon: 'fa-solid fa-palette',
        color: 'text-purple-600',
        items: [
          { name: 'HTML5 Canvas 2D', role: 'Render animasi pergerakan print head dan efek rasterisasi gambar pixel per pixel.' },
          { name: 'CSS 3D Transforms', role: 'Efek perspektif kertas foto terjatuh ke baki display dengan bayangan halus.' },
          { name: 'Tailwind CSS', role: 'Penyusunan antarmuka dashboard kontrol host bertema Cyber Streamer.' }
        ]
      },
      {
        category: 'Audio Engineering & Sound FX',
        icon: 'fa-solid fa-volume-high',
        color: 'text-amber-600',
        items: [
          { name: 'Web Audio API', role: 'Pemutaran audio low-latency multi-track untuk efek suara printer mekanikal.' },
          { name: 'Audio Sprites', role: 'Bundling puluhan sound effect (ding, dot-matrix, cheering) dalam satu berkas efisien.' }
        ]
      },
      {
        category: 'Networking & Multi-Client Sync',
        icon: 'fa-solid fa-network-wired',
        color: 'text-blue-600',
        items: [
          { name: 'Localhost IP Binding', role: 'Akses instan dari HP controller di jaringan lokal tanpa perlu domain publik.' },
          { name: 'State Broadcast Engine', role: 'Sinkronisasi status real-time ke seluruh klien yang terhubung bersamaan.' }
        ]
      },
      {
        category: 'Quality & Simulator Testing',
        icon: 'fa-solid fa-vial',
        color: 'text-emerald-600',
        items: [
          { name: 'Mock Gift Generator', role: 'Simulator event gift acak untuk menguji batas performa render canvas.' },
          { name: 'Memory Leak Watchdog', role: 'Pembersihan memori avatar berkala agar server stabil streaming berjam-jam.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema In-Memory Event Cache & WebSocket State',
      badge: 'Real-Time Event Buffer',
      description: 'Manajemen buffer memori server berkecepatan tinggi untuk mitigasi spam dan antrean render cetak OBS:',
      tables: [
        { name: '1. gift_events (7 Kolom)', fields: 'event_id, timestamp, sender_uid, nickname, gift_name, diamond_value, is_verified' },
        { name: '2. audience_profiles (6 Kolom)', fields: 'uid, nickname, avatar_highres_url, total_diamonds_sent, aura_rating_score, tier_status' },
        { name: '3. print_queue (6 Kolom)', fields: 'queue_id, uid, print_mode (Polaroid/VIP/Jumbo), priority_level, render_status, printed_at' },
        { name: '4. sultan_leaderboard (5 Kolom)', fields: 'rank (1-5), uid, nickname, total_contributed, crown_animation_type' }
      ]
    }
  },
  {
    id: 'wedding-invitation',
    title: 'Undangan Pernikahan Digital Mewah — Tari & Erik',
    subtitle: 'Luxury 3D Accordion, Music Visualizer & Supabase Real-Time RSVP',
    category: 'Full Stack & Interactive Web',
    badge: 'Luxury Digital Web',
    badgeColor: 'bg-amber-600 text-white',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 right-6 w-28 h-5 rotate-2',
    previewImage: '/assets/projects/wedding-cover-web.png',
    screenshots: [
      { id: 'wed-1', label: 'Sampul Mewah & Wax Seal', url: '/assets/projects/wedding-cover-web.png', desc: 'Cover layar penuh 100dvh dengan royal wax seal, debu emas partikel, dan hitung mundur ganda WITA', type: 'desktop' },
      { id: 'wed-2', label: 'Profil Mempelai & Adat', url: '/assets/projects/wedding-mempelai-web.png', desc: 'Kartu lengkung arch profil mempelai pria & wanita berlatar belah ketupat Bugis-Sumbawa', type: 'desktop' },
      { id: 'wed-3', label: 'Rangkaian Akad & Resepsi', url: '/assets/projects/wedding-acara-web.png', desc: 'Jadwal resepsi lengkap dengan tombol unduh kalender .ics dan integrasi Google Maps Sumbawa', type: 'desktop' },
      { id: 'wed-4', label: 'Amplop Digital ATM Metalik', url: '/assets/projects/wedding-amplop-web.png', desc: 'Desain kartu ATM perbankan metalik timbul dengan chip emas, salin nomor rekening, dan QRIS', type: 'desktop' },
      { id: 'wed-5', label: 'Generator Link Tamu Massal', url: '/assets/projects/wedding-generator-web.png', desc: 'Panel aplikasi generator tautan khusus nama tamu dan format template WhatsApp sekali klik', type: 'desktop' },
      { id: 'wed-6', label: 'Buku Tamu & Ucapan Selamat', url: '/assets/projects/wedding-guestbook-web.png', desc: 'Feed ucapan selamat real-time dengan form RSVP terintegrasi Supabase dan Google Sheets', type: 'desktop' },
      { id: 'wed-7', label: 'Tampilan Mobile Responsive', url: '/assets/projects/wedding-cover-mobile.png', desc: 'Tampilan mobile-first yang sangat nyaman dan mewah saat dibuka di perangkat smartphone tamu', type: 'mobile' }
    ],
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Web Audio API', 'Google Apps Script'],
    description: 'Website undangan pernikahan digital mewah mobile-first yang dirancang khusus dengan palet warna marun tua, emas bergradasi, dan ornamen adat. Dilengkapi simulasi 3D akordeon 4 panel interaktif yang dapat digeser dan di-zoom, musik latar otomatis dengan visualizer piringan hitam, kartu amplop digital metalik dengan chip timbul & QRIS, form RSVP real-time Supabase dengan confetti, serta generator link tamu massal.',
    highlights: [
      'Simulasi 3D Akordeon 4 Panel interaktif dengan preset Berdiri, Rapat, dan Datar',
      'Cover 100dvh dengan nama tamu dinamis URL (?to=...), segel lilin kerajaan & partikel emas',
      'Audio Visualizer piringan hitam dengan jeda otomatis saat ganti tab (Page Visibility API)',
      'Amplop digital metalik mewah dengan chip emas, copy nomor rekening & modal QRIS'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/undangan-pernikahan-digital-mewah',
    prd: {
      philosophy: 'Undangan pernikahan digital sering kali monoton dan sekadar halaman gulung biasa. Proyek Tari & Erik dirancang untuk memberikan sensasi membuka undangan fisik kerajaan yang megah: menggabungkan estetika adat Bugis-Sumbawa dengan teknologi interaktif modern seperti 3D Accordion Card 4-panel, segel lilin kerajaan (wax seal), pemutar musik piringan hitam, serta amplop digital perbankan metalik timbul dengan QRIS.',
      targetSLA: 'First Contentful Paint di bawah 1 detik dengan pemuatan aset audio dan ornamen emas halus.',
      problemStatements: [
        {
          title: 'Desain Undangan Digital yang Monoton',
          desc: 'Mayoritas undangan web sekadar template scroll panjang tanpa interaktivitas emosional bagi tamu terhormat.',
          icon: 'fa-solid fa-scroll',
          badge: 'Estetika Interaktif'
        },
        {
          title: 'Tamu Luar Kota Kesulitan Akses Rekening',
          desc: 'Rekening bank yang hanya berupa teks sering salah disalin oleh kerabat, serta ketiadaan opsi pembayaran instan QRIS.',
          icon: 'fa-solid fa-credit-card',
          badge: 'Akses Finansial'
        },
        {
          title: 'Penyebaran Tautan WhatsApp yang Lambat',
          desc: 'Calon pengantin kerepotan membuat ratusan tautan undangan dengan nama tamu yang dipersonalisasi satu per satu.',
          icon: 'fa-solid fa-share-nodes',
          badge: 'Otomasi Sebar'
        }
      ],
      userRoles: [
        {
          role: 'Tamu Undangan (Guest)',
          badge: 'Tamu Kehormatan',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
          tasks: [
            'Membuka segel lilin kerajaan dan menikmati musik piringan hitam.',
            'Mengeksplorasi kartu akordeon 3D dan menyimak jadwal akad/resepsi WITA.',
            'Mengirimkan konfirmasi kehadiran (RSVP) serta amplop digital via QRIS.'
          ]
        },
        {
          role: 'Calon Mempelai (Admin)',
          badge: 'Penyelenggara',
          badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
          tasks: [
            'Membuat ratusan tautan nama tamu khusus via generator link massal.',
            'Menyebarkan pesan WhatsApp undangan formal sekali klik.',
            'Memantau rekapitulasi jumlah porsi katering berdasarkan konfirmasi RSVP.'
          ]
        },
        {
          role: 'Keluarga & Panitia Acara',
          badge: 'Panitia Acara',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Membaca ucapan doa restu yang masuk real-time di buku tamu Supabase.',
            'Memastikan rute Google Maps lokasi resepsi di Sumbawa dapat diakses lancar.',
            'Mengunduh jadwal acara ke kalender smartphone (.ics file).'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Alur Interaksi Pembukaan Segel & Simulasi 3D Akordeon',
      primaryBadge: 'Luxury 3D Interaction',
      primaryIcon: 'fa-solid fa-stamp',
      primaryColor: 'bg-amber-600',
      primaryStepColor: 'text-amber-700 bg-amber-50',
      primarySteps: [
        {
          step: '01',
          name: 'Cover 100dvh Personal',
          desc: 'Tamu disambut nama pribadi dinamis dari parameter URL (?to=Nama+Tamu) dan taburan partikel debu emas.'
        },
        {
          step: '02',
          name: 'Klik Segel Lilin (Wax Seal)',
          desc: 'Efek animasi retak lilin kerajaan membuka gerbang undangan dan memicu pemutar musik otomatis.'
        },
        {
          step: '03',
          name: 'Visualizer Piringan Hitam',
          desc: 'Lagu instrumental berputar halus dengan piringan hitam berputar (jeda otomatis saat ganti tab browser).'
        },
        {
          step: '04',
          name: 'Simulasi 3D Akordeon',
          desc: 'Tamu dapat menggeser sudut pandang kartu lipat 3D dengan 3 preset: Berdiri, Rapat, dan Datar.'
        },
        {
          step: '05',
          name: 'Jadwal Acara & Google Maps',
          desc: 'Informasi akad & resepsi waktu WITA dengan tombol unduh kalender .ics dan navigasi peta.'
        }
      ],
      secondaryTitle: 'Alur Form RSVP Real-Time & Amplop Digital Metalik',
      secondaryBadge: 'RSVP & Digital Envelope',
      secondaryIcon: 'fa-solid fa-envelope-open-text',
      secondaryColor: 'bg-rose-700',
      secondaryStepColor: 'text-rose-700 bg-rose-50',
      secondarySteps: [
        {
          step: '01',
          name: 'Kartu ATM Metalik Timbul',
          desc: 'Tampilan kartu bank mewah bertekstur chip emas dengan tombol salin nomor rekening satu sentuhan.'
        },
        {
          step: '02',
          name: 'Modal QRIS Terpadu',
          desc: 'Pop-up kode QRIS nasional untuk kemudahan transfer dari seluruh bank dan e-wallet.'
        },
        {
          step: '03',
          name: 'Input Ucapan & Kehadiran',
          desc: 'Tamu menuliskan doa restu serta memilih status kehadiran (Hadir / Berhalangan).'
        },
        {
          step: '04',
          name: 'Live Feed & Confetti',
          desc: 'Ucapan tersimpan di Supabase secara real-time disertai ledakan partikel kembang api/confetti.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Mobile-First Presentation (React 18 & Vite)',
          desc: 'Desain mewah palet Burgundy (#4A0E17), Royal Gold, dan aksen belah ketupat adat Bugis-Sumbawa.'
        },
        {
          layer: 'Layer 2: 3D Transform & Motion (Framer Motion & CSS 3D)',
          desc: 'Perspektif kartu akordeon interaktif dengan akselerasi hardware GPU 60fps yang sangat halus.'
        },
        {
          layer: 'Layer 3: Audio Management (Web Audio API & Page Visibility API)',
          desc: 'Musik latar pintar yang otomatis pause saat tab diminimalkan atau membuka aplikasi lain.'
        },
        {
          layer: 'Layer 4: Real-Time Data (Supabase Client)',
          desc: 'Database Postgres serverless menyimpan pesan buku tamu dengan pub/sub real-time feed.'
        },
        {
          layer: 'Layer 5: Guest Link Generator & Automation (Google Apps Script)',
          desc: 'Generator tautan massal nama tamu dengan tombol tembak pesan WhatsApp otomatis.'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Sampul Mewah 100dvh & Wax Seal Kerajaan',
        badge: 'Royal Cover',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: 'fa-solid fa-gem',
        items: [
          'Personalisasi Nama Tamu Dinamis: URL parameter (?to=Bapak+Ahmad) langsung tertera di amplop utama.',
          'Animasi Pecah Lilin Kerajaan: Interaksi sentuh membuka amplop segel lilin 3D dengan efek haptic visual.',
          'Hitung Mundur Menuju Hari H: Dual countdown timer akad dan resepsi berbasis zona waktu WITA.',
          'Floating Gold Particles: Hujan partikel debu emas mengapung yang memberi kesan eksklusif.'
        ]
      },
      {
        module: 'Simulasi 3D Akordeon 4 Panel Interaktif',
        badge: '3D Perspective',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-cubes',
        items: [
          '3 Sudut Pandang Presisi: Pilihan tampilan Berdiri (Standing), Rapat (Folded), dan Datar (Flat View).',
          'Akselerasi GPU 60fps: Efek bayangan dinamis dan tekukan lipatan kertas yang mengikuti sapuan jari.',
          'Ornamen Belah Ketupat Adat: Motif geometris khas Bugis-Sumbawa yang elegan dan berakar tradisi.',
          'Responsive di Seluruh Layar: Proporsi lipatan yang tetap proporsional di tablet maupun smartphone.'
        ]
      },
      {
        module: 'Piringan Hitam Audio & Rangkaian Acara',
        badge: 'Sound & Events',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        icon: 'fa-solid fa-compact-disc',
        items: [
          'Visualizer Piringan Hitam Berputar: Jarum gramofon turun otomatis saat segel dibuka memutar musik.',
          'Smart Tab Visibility Detection: Musik otomatis berhenti jika tamu membuka tab lain dan lanjut kembali.',
          'Integrasi Google Maps & Rute: Navigasi akurat menuju Gedung Resepsi di Sumbawa Besar.',
          'Unduh Jadwal Kalender (.ics): Tamu dapat menyimpan pengingat akad & resepsi langsung ke Google Calendar/iOS.'
        ]
      },
      {
        module: 'Amplop Digital Metalik, QRIS & Form RSVP',
        badge: 'Digital Envelope',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-envelope-circle-check',
        items: [
          'Desain Kartu ATM Mewah: Tekstur chip kartu emas timbul dengan tombol salin nomor rekening instan.',
          'Modal QRIS Terpadu: Kode QRIS nasional beresolusi tinggi yang dapat di-scan dari seluruh mobile banking.',
          'Live Guestbook Feed (Supabase): Pesan ucapan selamat dari tamu langsung muncul tanpa reload halaman.',
          'Generator Link Tamu Massal: Panel admin pembuat ratusan link undangan dengan template WhatsApp rapi.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Frontend & UI Framework',
        icon: 'fa-solid fa-laptop-code',
        color: 'text-amber-600',
        items: [
          { name: 'React 18', role: 'State management modular untuk interaksi segel, akordeon, dan audio controller.' },
          { name: 'Vite 5', role: 'Bundler super cepat untuk optimasi loading gambar dan aset font kerajaan.' },
          { name: 'Tailwind CSS', role: 'Custom palet warna Burgundy (#4A0E17), Royal Gold, dan tipografi serif klasik.' }
        ]
      },
      {
        category: '3D Interaction & Animation',
        icon: 'fa-solid fa-cube',
        color: 'text-purple-600',
        items: [
          { name: 'Framer Motion', role: 'Orkestrasi animasi transisi pembukaan amplop dan gesture swipe akordeon.' },
          { name: 'CSS 3D Perspective Transforms', role: 'Manipulasi rotasi sumbu X, Y, Z untuk simulasi lipatan kartu fisik.' },
          { name: 'Canvas Confetti', role: 'Animasi ledakan partikel kembang api saat tamu berhasil mengirim ucapan RSVP.' }
        ]
      },
      {
        category: 'Audio Architecture',
        icon: 'fa-solid fa-volume-high',
        color: 'text-rose-600',
        items: [
          { name: 'HTML5 Audio & Web Audio API', role: 'Playback musik latar bebas glitch dengan transisi fade-in volume.' },
          { name: 'Page Visibility API', role: 'Deteksi status layar aktif untuk pause otomatis saat ganti tab.' }
        ]
      },
      {
        category: 'Real-Time Database & Backend',
        icon: 'fa-solid fa-database',
        color: 'text-emerald-600',
        items: [
          { name: 'Supabase (PostgreSQL)', role: 'Penyimpanan pesan buku tamu dan konfirmasi kehadiran dengan RLS aman.' },
          { name: 'Supabase Realtime Pub/Sub', role: 'Siaran instan pesan ucapan baru ke seluruh tamu yang sedang membuka web.' }
        ]
      },
      {
        category: 'Automation & Deployment',
        icon: 'fa-solid fa-cloud',
        color: 'text-blue-600',
        items: [
          { name: 'Google Apps Script', role: 'Ekstensi generator link tamu massal dan sinkronisasi ke Google Sheets.' },
          { name: 'Vercel Edge Network', role: 'Distribusi CDN global menjamin akses instan di smartphone tamu undangan.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Relasional Supabase PostgreSQL & Realtime Feed',
      badge: 'Supabase Realtime Cloud',
      description: 'Tabel database cloud terkelola dengan Row Level Security (RLS) dan listener langganan WebSocket realtime:',
      tables: [
        { name: '1. guests (6 Kolom)', fields: 'id (uuid), slug, guest_name, category (Keluarga/Sahabat/VIP), phone, is_opened' },
        { name: '2. rsvp_submissions (6 Kolom)', fields: 'id, guest_id, guest_name, attendance_status (Hadir/Tidak), total_attendees, submitted_at' },
        { name: '3. guestbook_wishes (5 Kolom)', fields: 'id, guest_name, relationship, wish_message, created_at' },
        { name: '4. bank_envelopes (5 Kolom)', fields: 'bank_id, bank_name, account_number, account_holder, qris_image_url' }
      ]
    }
  },
  {
    id: 'nakama-family-album',
    title: 'Album Kenangan Nakama — Lemari Foto Privat Keluarga',
    subtitle: 'Private Cloud Photo Vault, Interactive Family Tree & One Piece UX',
    category: 'Full Stack & Cloud Vault',
    badge: 'Family Cloud PWA',
    badgeColor: 'bg-blue-600 text-white',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 left-8 w-28 h-5 rotate-1',
    previewImage: '/assets/projects/nakama-gallery-web.png',
    screenshots: [
      { id: 'nak-1', label: 'Beranda Galeri Lemari Foto', url: '/assets/projects/nakama-gallery-web.png', desc: 'Lemari foto keluarga bertema petualangan One Piece dengan frame Polaroid dan filter cerdas', type: 'desktop' },
      { id: 'nak-2', label: 'Gerbang Masuk PIN Privat', url: '/assets/projects/nakama-login-web.png', desc: 'Layar masuk 3D Gateway dengan virtual keypad layar sentuh ramah lansia tanpa keyboard fisik', type: 'desktop' },
      { id: 'nak-3', label: 'Peta Album Kertas', url: '/assets/projects/nakama-map-web.png', desc: 'Koleksi album foto fisik dengan efek tumpukan berbayang realistis (photo stack)', type: 'desktop' },
      { id: 'nak-4', label: 'Silsilah Kru Keluarga', url: '/assets/projects/nakama-genealogy-web.png', desc: 'Pohon silsilah visual hirarkis generasi kakek-nenek, orang tua, hingga anak dan cucu', type: 'desktop' },
      { id: 'nak-5', label: 'Panel Kapten Admin', url: '/assets/projects/nakama-admin-web.png', desc: 'Pusat pengaturan lemari foto, manajemen hak akses keluarga, backup, dan tong sampah 30 hari', type: 'desktop' },
      { id: 'nak-6', label: 'Beranda Galeri Mobile', url: '/assets/projects/nakama-gallery-mobile.png', desc: 'Navigasi jempol bawah (bottom navigation) yang mudah digunakan anggota keluarga di HP', type: 'mobile' },
      { id: 'nak-7', label: 'Silsilah Keluarga Mobile', url: '/assets/projects/nakama-genealogy-mobile.png', desc: 'Struktur pohon silsilah keluarga yang tetap nyaman dieksplorasi di layar ponsel', type: 'mobile' }
    ],
    tech: ['Node.js', 'Express', 'Supabase Storage', 'Sharp', 'Multer', 'EXIF Metadata', 'Tailwind CSS'],
    description: 'Aplikasi web privat penyimpanan arsip foto dan kenangan keluarga bertema One Piece. Dirancang khusus dengan prinsip accessibility-first agar mudah dioperasikan oleh orang tua/lansia melalui tombol angka PIN layar sentuh besar, silsilah pohon keluarga interaktif, pembagian album bergaya lemari arsip fisik, ekstraksi metadata foto otomatis, serta tombol sekali klik untuk berbagi ke grup WhatsApp keluarga.',
    highlights: [
      'Virtual Keypad PIN layar sentuh besar yang ramah lansia/orang tua tanpa keyboard fisik',
      'Silsilah Kru: Pohon silsilah visual hirarkis multi-generasi keluarga yang interaktif',
      'Ekstraksi metadata foto otomatis (tanggal, lokasi, model kamera) menggunakan Sharp & EXIF',
      'Keamanan privat berbasis Supabase Storage dengan auto-backup berkala & recovery trash 30 hari'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/album-kenangan-nakama',
    prd: {
      philosophy: 'Momen berharga keluarga kerap kali berserakan di grup chat WhatsApp dan terhapus seiring berjalannya waktu saat ganti perangkat. Album Kenangan Nakama dirancang sebagai "Brankas Kenangan Abadi" bertema bajak laut One Piece: memadukan keamanan cloud privat dengan prinsip aksesibilitas tinggi untuk lansia/orang tua (tombol PIN virtual besar tanpa keyboard), silsilah pohon keluarga multi-generasi, serta ekstraksi otomatis tanggal dan lokasi foto.',
      targetSLA: 'Pemuatan galeri foto instan dengan kompresi thumbnail WebP di bawah 200 milidetik.',
      problemStatements: [
        {
          title: 'Hilangnya Foto Keluarga di Riwayat Chat',
          desc: 'Foto di WhatsApp sering terhapus setelah ganti HP atau terkompresi hingga buram dan pecah saat dicetak.',
          icon: 'fa-solid fa-images',
          badge: 'Preservasi Kenangan'
        },
        {
          title: 'Kerumitan Login bagi Orang Tua/Lansia',
          desc: 'Orang tua sering lupa password teks rumit dan kesulitan mengetik di keyboard virtual kecil smartphone.',
          icon: 'fa-solid fa-wheelchair',
          badge: 'Ramah Lansia'
        },
        {
          title: 'Kurangnya Pemahaman Silsilah Keluarga',
          desc: 'Anak cucu sering tidak mengenal nama lengkap dan hubungan kekerabatan kakek, nenek, paman, dan bibi.',
          icon: 'fa-solid fa-sitemap',
          badge: 'Silsilah Trah'
        }
      ],
      userRoles: [
        {
          role: 'Anggota Senior (Orang Tua / Kakek Nenek)',
          badge: 'Senior Nakama',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          tasks: [
            'Membuka album dengan PIN angka besar layar sentuh tanpa mengetik.',
            'Menikmati album foto masa lalu berbingkai Polaroid klasik.',
            'Menelusuri foto cucu dan silsilah keluarga secara mudah.'
          ]
        },
        {
          role: 'Kolektor Foto (Anak / Remaja)',
          badge: 'Perekam Momen',
          badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          tasks: [
            'Mengunggah foto momen wisuda, liburan, dan mudik dari ponsel.',
            'Menambahkan catatan cerita kenangan dan caption hangat.',
            'Membagikan tautan album ke grup WhatsApp keluarga sekali sentuh.'
          ]
        },
        {
          role: 'Kapten Keluarga (Family Admin)',
          badge: 'Kapten Brankas',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Mengelola master silsilah kru keluarga dan hubungan kekerabatan.',
            'Mengatur hak akses PIN keluarga dan pencadangan (auto-backup) cloud.',
            'Memulihkan foto yang tidak sengaja terhapus via Recycle Bin 30 hari.'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Alur Akses PIN Ramah Lansia & Navigasi Lemari Foto',
      primaryBadge: 'Accessibility First',
      primaryIcon: 'fa-solid fa-key',
      primaryColor: 'bg-blue-600',
      primaryStepColor: 'text-blue-700 bg-blue-100',
      primarySteps: [
        {
          step: '01',
          name: 'Gerbang Masuk 3D Gateway',
          desc: 'Layar sambutan privat dengan papan kayu bertema kapal Nakama dan logo Jolly Roger keluarga.'
        },
        {
          step: '02',
          name: 'Virtual Keypad PIN Besar',
          desc: 'Tombol angka sentuh 0-9 ukuran besar ramah sentuhan lansia tanpa perlu membuka keyboard fisik HP.'
        },
        {
          step: '03',
          name: 'Verifikasi Sesi Terenkripsi',
          desc: 'Pencocokan PIN keluarga via bcrypt hash dan penerbitan sesi aman di cookie browser.'
        },
        {
          step: '04',
          name: 'Navigasi Lemari Foto',
          desc: 'Foto dikelompokkan ke dalam rak album fisik (Pernikahan, Mudik, Wisuda, Reuni Akbar).'
        },
        {
          step: '05',
          name: 'Tampilan Polaroid Klasik',
          desc: 'Foto disajikan dengan frame polaroid klasik lengkap dengan catatan tangan dan tanggal kenangan.'
        }
      ],
      secondaryTitle: 'Alur Ekstraksi Metadata EXIF & Kompresi Cloud Vault',
      secondaryBadge: 'EXIF & Cloud Pipeline',
      secondaryIcon: 'fa-solid fa-camera-rotate',
      secondaryColor: 'bg-indigo-600',
      secondaryStepColor: 'text-indigo-700 bg-indigo-100',
      secondarySteps: [
        {
          step: '01',
          name: 'Multi-File Upload (Multer)',
          desc: 'Pengguna memilih beberapa foto sekaligus dari galeri kamera ponsel secara bersamaan.'
        },
        {
          step: '02',
          name: 'Ekstraksi Metadata EXIF',
          desc: 'Sistem membaca tanggal asli pengambilan foto, merek kamera, dan koordinat lokasi otomatis.'
        },
        {
          step: '03',
          name: 'Optimasi WebP (Sharp Engine)',
          desc: 'Gambar dikompresi menjadi thumbnail ringan WebP untuk akses cepat tanpa merusak file asli.'
        },
        {
          step: '04',
          name: 'Sinkronisasi Supabase Vault',
          desc: 'File terdistribusi aman ke bucket cloud dengan proteksi token dan pemulihan tong sampah 30 hari.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: Mobile PWA Client (HTML5, Tailwind & Vanilla JS)',
          desc: 'Desain responsif bertema bajak laut dengan bottom-bar navigation ramah jempol smartphone.'
        },
        {
          layer: 'Layer 2: API Gateway & Session Guard (Express.js)',
          desc: 'Pengamanan akses rute dengan verifikasi cookie PIN sesi terenkripsi bcrypt.'
        },
        {
          layer: 'Layer 3: Image Processing Pipeline (Sharp & EXIF-Parser)',
          desc: 'Generator thumbnail WebP otomatis dan ekstraktor informasi tanggal & kamera foto.'
        },
        {
          layer: 'Layer 4: Cloud Storage Gateway (Supabase Storage)',
          desc: 'Penyimpanan arsip foto keluarga dengan enkripsi at-rest dan CDN global berkecepatan tinggi.'
        },
        {
          layer: 'Layer 5: Genealogy Visualizer (SVG Hierarchical Tree)',
          desc: 'Komponen pohon silsilah visual menghubungkan 3 generasi keluarga secara interaktif.'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Beranda Galeri Lemari Foto',
        badge: 'Photo Vault',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-folder-open',
        items: [
          'Tampilan Rak Lemari Kayu: Visualisasi lemari foto bertema One Piece dengan rak album tematik.',
          'Bingkai Polaroid Klasik: Foto dibalut bingkai polaroid putih dengan teks tulisan tangan kenangan.',
          'Penyaring Tahun & Kategori: Filter cepat berdasarkan tahun kejadian dan kategori momen keluarga.',
          'Tampilan Layar Penuh (Lightbox): Mode inspeksi foto resolusi tinggi dengan gestur pinch-to-zoom.'
        ]
      },
      {
        module: 'Gerbang Masuk PIN Ramah Lansia',
        badge: 'Accessibility',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-lock',
        items: [
          'Virtual Keypad Layar Sentuh Besar: Tombol angka sentuh bundar besar anti-salah pencet untuk lansia.',
          'Tanpa Repot Password Teks: Cukup 4-6 digit PIN keluarga yang mudah dihafal seluruh anggota trah.',
          'Sesi Login Tahan Lama: Anggota keluarga tidak perlu login berulang-ulang setiap membuka aplikasi.',
          'Enkripsi Bcrypt Aman: Hash PIN keluarga terlindungi dari kebocoran data di sisi server.'
        ]
      },
      {
        module: 'Silsilah Kru Keluarga (Genealogy Tree)',
        badge: 'Family Tree',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-sitemap',
        items: [
          'Peta Hirarkis 3 Generasi: Hubungan visual dari kakek-nenek, orang tua, paman/bibi, hingga anak & cucu.',
          'Avatar Profil Kru: Foto profil bulat anggota keluarga dengan nama panggilan dan tanggal lahir.',
          'Filter Foto Berdasarkan Orang: Klik profil anggota keluarga untuk melihat seluruh foto kenangan bersamanya.',
          'Navigasi Responsif di HP: Struktur pohon silsilah yang dapat digeser (pan/drag) dengan lancar.'
        ]
      },
      {
        module: 'Panel Kapten Admin & Tong Sampah 30 Hari',
        badge: 'Admin & Safety',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: 'fa-solid fa-trash-can-arrow-up',
        items: [
          'Recycle Bin Recovery 30 Hari: Foto yang tidak sengaja terhapus tersimpan aman dan dapat dipulihkan kapan saja.',
          'Ekstraksi Metadata EXIF Otomatis: Membaca tanggal pemotretan, merek kamera, dan lokasi dari berkas asli.',
          'Auto-Compression Sharp WebP: Menghemat kapasitas penyimpanan hingga 75% tanpa mengurangi ketajaman visual.',
          'Unduh Arsip Keluarga Sekaligus: Opsi download seluruh foto dalam satu album ke format ZIP.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Backend & Server Runtime',
        icon: 'fa-solid fa-server',
        color: 'text-blue-600',
        items: [
          { name: 'Node.js LTS', role: 'Runtime backend server untuk menangani upload file dan endpoint API RESTful.' },
          { name: 'Express.js', role: 'Web framework untuk routing proteksi sesi PIN dan manajemen aset statis.' },
          { name: 'Multer', role: 'Middleware multipart form-data untuk penanganan upload foto massal.' }
        ]
      },
      {
        category: 'Image Processing & EXIF',
        icon: 'fa-solid fa-camera',
        color: 'text-indigo-600',
        items: [
          { name: 'Sharp Engine', role: 'Kompresi gambar berkecepatan tinggi ke format WebP hemat bandwidth.' },
          { name: 'Exif-Parser', role: 'Membaca metadata tanggal asli pemotretan dan informasi kamera dari file JPEG.' }
        ]
      },
      {
        category: 'Cloud Storage & CDN',
        icon: 'fa-solid fa-cloud',
        color: 'text-purple-600',
        items: [
          { name: 'Supabase Storage', role: 'Penyimpanan cloud bucket S3-compatible dengan proteksi token privat.' },
          { name: 'Global CDN Delivery', role: 'Pemuatan galeri foto instan di mana pun anggota keluarga berada.' }
        ]
      },
      {
        category: 'Frontend & Accessibility',
        icon: 'fa-solid fa-universal-access',
        color: 'text-emerald-600',
        items: [
          { name: 'Tailwind CSS', role: 'Desain responsif bertema kayu kapal One Piece dengan kontras tinggi.' },
          { name: 'Virtual Touch Keypad', role: 'Antarmuka angka sentuh besar yang mudah dipencet tanpa keyboard HP.' },
          { name: 'SVG Genealogy Tree', role: 'Komponen visual interaktif pohon silsilah keluarga multi-generasi.' }
        ]
      },
      {
        category: 'Security & Data Retention',
        icon: 'fa-solid fa-shield-halved',
        color: 'text-rose-600',
        items: [
          { name: 'Bcryptjs', role: 'Hashing PIN sesi keluarga satu arah untuk mencegah akses orang tak berwenang.' },
          { name: '30-Day Trash Retention', role: 'Mekanisme soft-delete untuk mencegah kehilangan foto kenangan secara permanen.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Data Album Kenangan & Supabase Storage',
      badge: 'Encrypted Cloud Storage',
      description: 'Arsitektur penyimpanan berkas foto keluarga dengan ekstraksi metadata EXIF dan otentikasi PIN privat:',
      tables: [
        { name: '1. albums (6 Kolom)', fields: 'album_id, title, theme (One Piece Theme), cover_photo_url, photo_count, created_at' },
        { name: '2. photos (8 Kolom)', fields: 'photo_id, album_id, file_path_webp, caption, taken_date, location_name, camera_model, file_size' },
        { name: '3. genealogy_members (7 Kolom)', fields: 'member_id, full_name, call_name, generation_level (1/2/3), parent_id, spouse_id, avatar_url' },
        { name: '4. family_sessions (5 Kolom)', fields: 'session_id, pin_hash (bcrypt), access_role, last_login_ip, expires_at' }
      ]
    }
  },
  {
    id: 'sasak-classifier',
    title: 'Sasak Script Classification Web App',
    subtitle: 'Deep Learning Convolutional Neural Network (CNN) VGG16/VGG19 — SINTA 4 Accredited Journal',
    category: 'AI & Computer Vision',
    badge: 'SINTA 4 Research',
    badgeColor: 'bg-purple-700 text-white',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-6 w-24 h-5 -rotate-2',
    previewImage: '/assets/projects/sasak-cnn-preview.svg',
    screenshots: [
      { id: 'sasak-1', label: 'Arsitektur CNN & Inferensi Citra', url: '/assets/projects/sasak-cnn-preview.svg', desc: 'Diagram arsitektur Deep Learning CNN VGG16 & VGG19 dengan akurasi 94.6% untuk klasifikasi aksara Sasak SINTA 4', type: 'desktop' }
    ],
    gradient: 'from-purple-900 via-indigo-900 to-purple-800',
    iconText: 'ᬅ ᬓ ᬱ ᬭ',
    iconSubtext: 'Accuracy 94.6% • VGG16/VGG19',
    tech: ['Python 3.10', 'TensorFlow / Keras', 'CNN (VGG16 & VGG19)', 'OpenCV', 'Streamlit', 'Scikit-Learn'],
    description: 'Platform web interaktif pengenalan dan klasifikasi citra tulisan tangan aksara tradisional Sasak pada daun lontar berbasis Deep Learning Convolutional Neural Network (CNN). Menggunakan arsitektur transfer learning VGG16 & VGG19 dengan tingkat akurasi 94.6%, dan telah diterbitkan pada Jurnal Ilmiah Terakreditasi Nasional SINTA 4.',
    highlights: [
      'Model Deep Learning CNN VGG16 & VGG19 dengan tingkat akurasi 94.6%',
      'Segmentasi otomatis karakter aksara kuno Sasak pada daun lontar (Otsu Thresholding)',
      'Interface interaktif berbasis Streamlit untuk inferensi citra real-time <120ms',
      'Publikasi Ilmiah Resmi pada Jurnal Terakreditasi Nasional SINTA 4'
    ],
    repoUrl: 'https://github.com/ElgaAlfarza/sasak-script-cnn-classifier',
    prd: {
      philosophy: 'Naskah kuno aksara Sasak (Lontar Monyeh & Babad Lombok) merupakan warisan budaya Nusantara yang terancam punah. Sistem ini dibangun untuk mendigitalkan dan mengklasifikasikan karakter tulisan tangan aksara Sasak secara otomatis menggunakan Deep Learning Convolutional Neural Network (arsitektur VGG16 dan VGG19), mencapai akurasi 94.6% dan telah dipublikasikan pada Jurnal Ilmiah Nasional Terakreditasi SINTA 4.',
      targetSLA: 'Waktu inferensi klasifikasi citra di bawah 120 milidetik per karakter dengan akurasi 94.6%.',
      problemStatements: [
        {
          title: 'Pudarnya Kemampuan Membaca Aksara Kuno',
          desc: 'Generasi muda kesulitan mengenali dan membaca ragam bentuk goresan aksara tradisional Sasak pada daun lontar kuno.',
          icon: 'fa-solid fa-book-skull',
          badge: 'Pelestarian Budaya'
        },
        {
          title: 'Kerusakan Fisik Naskah Kuno Lontar',
          desc: 'Daun lontar rentan lapuk, berjamur, dan pudar dimakan usia, menuntut upaya penyelamatan dan digitalisasi secara cepat.',
          icon: 'fa-solid fa-scroll',
          badge: 'Preservasi Digital'
        },
        {
          title: 'Tingginya Variasi Goresan Tangan',
          desc: 'Karakter tulisan tangan memiliki ketebalan goresan dan lengkungan unik yang sulit dideteksi metode computer vision konvensional.',
          icon: 'fa-solid fa-signature',
          badge: 'Computer Vision AI'
        }
      ],
      userRoles: [
        {
          role: 'Peneliti Filologi & Budayawan',
          badge: 'Peneliti Naskah',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
          tasks: [
            'Menganalisis naskah kuno lontar dan memvalidasi teks babad sejarah Sasak.',
            'Mengidentifikasi karakter aksara kuno yang telah pudar atau terpotong.',
            'Memanfaatkan hasil klasifikasi AI untuk transliterasi naskah ke huruf latin.'
          ]
        },
        {
          role: 'Mahasiswa & Akademisi AI',
          badge: 'Akademisi AI',
          badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
          tasks: [
            'Menguji model klasifikasi CNN dan membandingkan performa VGG16 vs VGG19.',
            'Menganalisis matriks evaluasi (Confusion Matrix, Precision, Recall, F1-Score).',
            'Mengembangkan riset lanjutan untuk aksara daerah Nusantara lainnya.'
          ]
        },
        {
          role: 'Masyarakat Umum & Penggiat Budaya',
          badge: 'Edukasi Budaya',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          tasks: [
            'Mempelajari bentuk 18 karakter utama aksara Sasak secara interaktif.',
            'Mengunggah foto tulisan aksara Sasak di web Streamlit untuk cek akurasi.',
            'Melihat nama aksara dan bunyi fonetik pelafalannya secara langsung.'
          ]
        }
      ]
    },
    workflow: {
      primaryTitle: 'Pipeline Preprocessing Citra & Segmentasi Karakter',
      primaryBadge: 'Computer Vision Preprocessing',
      primaryIcon: 'fa-solid fa-microscope',
      primaryColor: 'bg-purple-700',
      primaryStepColor: 'text-purple-700 bg-purple-100',
      primarySteps: [
        {
          step: '01',
          name: 'Akuisisi Citra Naskah',
          desc: 'Input foto naskah aksara Sasak melalui kamera ponsel atau pemindai beresolusi tinggi.'
        },
        {
          step: '02',
          name: 'Grayscale & Noise Reduction',
          desc: 'Konversi citra ke ruang warna kelabu (grayscale) dan reduksi noise serat daun lontar dengan Gaussian Blur.'
        },
        {
          step: '03',
          name: 'Adaptive Thresholding (Otsu)',
          desc: 'Binerisasi adaptif memisahkan goresan aksara hitam dari latar serat daun lontar yang kotor.'
        },
        {
          step: '04',
          name: 'Bounding Box Segmentation',
          desc: 'Deteksi kontur (contour extraction) untuk memisahkan setiap karakter aksara menjadi citra mandiri.'
        },
        {
          step: '05',
          name: 'Normalisasi Matriks 224x224',
          desc: 'Penskalaan ukuran citra ke dimensi input standar model CNN (224x224 piksel) dan normalisasi piksel [0, 1].'
        }
      ],
      secondaryTitle: 'Pipeline Ekstraksi Fitur & Inferensi Deep Learning CNN',
      secondaryBadge: 'VGG16 / VGG19 Deep CNN',
      secondaryIcon: 'fa-solid fa-brain',
      secondaryColor: 'bg-indigo-600',
      secondaryStepColor: 'text-indigo-700 bg-indigo-100',
      secondarySteps: [
        {
          step: '01',
          name: 'Ekstraksi Fitur Konvolusi',
          desc: 'Melewati blok konvolusi 2D dan MaxPooling untuk mengekstrak pola lengkungan goresan aksara.'
        },
        {
          step: '02',
          name: 'Dense & Dropout 0.5',
          desc: 'Lapisan Fully Connected dense 1024 unit dengan aktivasi ReLU dan Dropout 0.5 untuk mencegah overfitting.'
        },
        {
          step: '03',
          name: 'Klasifikasi Softmax 18 Kelas',
          desc: 'Menghitung distribusi probabilitas kelas aksara Sasak (Ha, Na, Ca, Ra, Ka, Da, Ta, Sa, Wa, La, Pa...).'
        },
        {
          step: '04',
          name: 'Output Confidence Score',
          desc: 'Menampilkan nama aksara terpilih, nilai keyakinan (confidence score), dan inferensi berkecepatan <120ms.'
        }
      ],
      backendArchitecture: [
        {
          layer: 'Layer 1: User Interface (Streamlit & Python Web)',
          desc: 'Antarmuka interaktif unggah citra, penyesuaian threshold, dan visualisasi hasil klasifikasi.'
        },
        {
          layer: 'Layer 2: Image Processing Engine (OpenCV & PIL)',
          desc: 'Pustaka computer vision untuk manipulasi matriks gambar, thresholding, dan crop kontur.'
        },
        {
          layer: 'Layer 3: Deep Learning Framework (TensorFlow & Keras)',
          desc: 'Runtime eksekusi model CNN dengan bobot terlatih (pre-trained fine-tuned weights).'
        },
        {
          layer: 'Layer 4: Evaluation & Analytics (Scikit-Learn & Matplotlib)',
          desc: 'Kalkulasi confusion matrix, precision, recall, F1-score, dan grafik kurva akurasi.'
        },
        {
          layer: 'Layer 5: Academic Publication Gateway (SINTA 4)',
          desc: 'Integrasi metodologi riset ilmiah yang telah lolos peer-review jurnal nasional bereputasi.'
        }
      ]
    },
    fullFeatures: [
      {
        module: 'Model Deep Learning CNN (VGG16 & VGG19)',
        badge: 'Deep CNN Core',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: 'fa-solid fa-network-wired',
        items: [
          'Arsitektur Konvolusi Multi-Lapis: VGG16 (13 conv layers) dan VGG19 (16 conv layers) untuk ekstraksi fitur mendalam.',
          'Klasifikasi 18 Karakter Utama: Mengenali seluruh aksara dasar Sasak (Ha, Na, Ca, Ra, Ka, Da, Ta, Sa...).',
          'Fine-Tuning Transfer Learning: Bobot ImageNet yang di-fine tune secara khusus pada dataset naskah lokal.',
          'Dropout Regularization: Teknik pencegahan overfitting agar model mampu menggeneralisasi goresan tangan baru.'
        ]
      },
      {
        module: 'Tingkat Akurasi Tinggi 94.6% & Evaluasi',
        badge: 'Evaluation Matrix',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: 'fa-solid fa-chart-pie',
        items: [
          'Akurasi Uji 94.6%: Teruji pada ratusan sampel citra lontar tulisan tangan asli dengan cross-validation.',
          'Confusion Matrix Lengkap: Analisis akurat tingkat presisi dan recall per kelas karakter aksara.',
          'Waktu Inferensi Kilat: Eksekusi prediksi citra di bawah 120 milidetik per karakter aksara.',
          'Kurva Loss & Accuracy: Grafik visualisasi proses training yang stabil tanpa indikasi overfitting.'
        ]
      },
      {
        module: 'Segmentasi Citra Naskah Lontar Otomatis',
        badge: 'Computer Vision',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: 'fa-solid fa-crop-simple',
        items: [
          'Otsu Adaptive Thresholding: Pemisahan goresan tinta dari latar serat daun lontar yang kotor dan berjamur.',
          'Contour Bounding Box: Pemotongan karakter mandiri secara otomatis dari sebaris kalimat naskah lontar panjang.',
          'Denoising Filter: Pembersihan bintik-bintik debu naskah kuno menggunakan Gaussian dan Median Blur.',
          'Penskalaan Matriks 224x224: Normalisasi otomatis rasio aspek gambar sebelum diumpankan ke model CNN.'
        ]
      },
      {
        module: 'Web Interface Streamlit & Publikasi SINTA 4',
        badge: 'Academic Research',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: 'fa-solid fa-graduation-cap',
        items: [
          'Antarmuka Web Interaktif: Memungkinkan penguji mengunggah gambar dan melihat probabilitas klasifikasi seketika.',
          'Visualisasi Confidence Score: Menampilkan persentase keyakinan model terhadap 3 kandidat aksara teratas.',
          'Diterbitkan di Jurnal SINTA 4: Pengakuan akademik resmi atas metodologi dan kontribusi pelestarian budaya.',
          'Dokumentasi Riset Terbuka: Kode sumber repositori dan bobot model terbuka untuk kolaborasi penelitian filologi.'
        ]
      }
    ],
    techStackDetails: [
      {
        category: 'Machine Learning & AI Framework',
        icon: 'fa-solid fa-brain',
        color: 'text-purple-600',
        items: [
          { name: 'Python 3.10', role: 'Bahasa pemrograman utama untuk pemrosesan data ilmiah dan arsitektur model.' },
          { name: 'TensorFlow 2 & Keras', role: 'Framework deep learning untuk training, validasi, dan inferensi model CNN.' },
          { name: 'VGG16 & VGG19', role: 'Arsitektur neural network konvolusi dalam untuk klasifikasi visual pola goresan.' }
        ]
      },
      {
        category: 'Computer Vision & Preprocessing',
        icon: 'fa-solid fa-eye',
        color: 'text-blue-600',
        items: [
          { name: 'OpenCV (cv2)', role: 'Pustaka computer vision untuk manipulasi matriks, thresholding Otsu, dan kontur.' },
          { name: 'Pillow (PIL)', role: 'Manipulasi format gambar, rotasi naskah, dan normalisasi kanvas citra.' }
        ]
      },
      {
        category: 'Interactive Web GUI',
        icon: 'fa-solid fa-globe',
        color: 'text-emerald-600',
        items: [
          { name: 'Streamlit Framework', role: 'Pengembangan antarmuka web interaktif pythonik tanpa perlu backend terpisah.' },
          { name: 'Matplotlib & Seaborn', role: 'Visualisasi grafik confusion matrix dan kurva performa akurasi model.' }
        ]
      },
      {
        category: 'Data Science & Evaluasi Ilmiah',
        icon: 'fa-solid fa-square-root-variable',
        color: 'text-amber-600',
        items: [
          { name: 'Scikit-Learn', role: 'Metrik evaluasi klasifikasi (Precision, Recall, F1-Score, K-Fold Validation).' },
          { name: 'NumPy & Pandas', role: 'Komputasi matriks tensor dan manajemen dataset naskah lontar.' }
        ]
      },
      {
        category: 'Akreditasi & Publikasi Riset',
        icon: 'fa-solid fa-award',
        color: 'text-rose-600',
        items: [
          { name: 'Jurnal SINTA 4', role: 'Publikasi ilmiah terakreditasi Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.' },
          { name: 'Pelestarian Aksara Nusantara', role: 'Dampak nyata digitalisasi warisan budaya Sasak Lombok berbasis kecerdasan buatan.' }
        ]
      }
    ],
    databaseSchema: {
      title: 'Skema Arsitektur Deep Learning & Dataset Naskah Kuno',
      badge: 'CNN Weights & Classes',
      description: 'Spesifikasi dataset naskah daun lontar Sasak dan matriks output probabilitas inferensi model CNN:',
      tables: [
        { name: '1. lontar_dataset (6 Kolom)', fields: 'image_id, source_manuscript, character_label, resolution (224x224x3), split_type (Train/Val/Test), augmentation_type' },
        { name: '2. cnn_layers_vgg16 (5 Kolom)', fields: 'layer_name, filter_count, kernel_size (3x3), activation (ReLU), output_shape' },
        { name: '3. classes_sasak_18 (4 Kolom)', fields: 'class_index (0-17), latin_char (Ha, Na, Ca, Ra, Ka...), unicode_glyph (ᬅ, ᬓ, ᬱ...), sample_count' },
        { name: '4. evaluation_metrics (6 Kolom)', fields: 'experiment_id, architecture (VGG16 vs VGG19), accuracy (94.6%), precision, recall, f1_score' }
      ]
    }
  },
]

const ACTIVITY_PHOTOS = [
  {
    id: 'photo-01',
    url: '/assets/gallery/activity-01-wisuda.jpg',
    title: 'Wisuda S1 Ilmu Komputer 🎓',
    tag: 'CUM LAUDE 3.76',
    tagColor: 'bg-amber-400 text-slate-900',
    category: 'Universitas Bumigora (2024)',
    description: 'Foto studio resmi kelulusan S1 Ilmu Komputer Universitas Bumigora dengan predikat kehormatan Cum Laude (IPK 3.76 / 4.00).',
    rotation: '-rotate-2',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-10 w-24 h-5 rotate-1',
  },
  {
    id: 'photo-02',
    url: '/assets/gallery/activity-02-puncak-nanggi.jpg',
    title: 'Puncak Nanggi 2.050 MDPL ⛰️',
    tag: 'SEMBALUN LOMBOK',
    tagColor: 'bg-emerald-600 text-white',
    category: 'Mendaki & Menikmati Alam',
    description: 'Aktivitas mendaki dan menikmati panorama alam di Puncak Nanggi 2.050 MDPL Sembalun, Lombok Timur untuk melatih kebugaran fisik dan kecintaan pada alam.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-8 w-24 h-5 -rotate-2',
  },
  {
    id: 'photo-03',
    url: '/assets/gallery/activity-03-bioskop.jpg',
    title: 'Santai Nonton Bioskop 🎬',
    tag: 'WEEKEND VIBES',
    tagColor: 'bg-indigo-600 text-white',
    category: 'Film Agak Laen • Refreshing',
    description: 'Momen santai akhir pekan menonton film komedi di bioskop untuk menyegarkan pikiran dan beristirahat sejenak di sela rutinitas.',
    rotation: '-rotate-1',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-8 w-24 h-5 rotate-2',
  },
  {
    id: 'photo-04',
    url: '/assets/gallery/activity-04-maraton.jpg',
    title: 'Lari Maraton & Fun Run 🏃‍♂️',
    tag: 'RUNNING 10K',
    tagColor: 'bg-amber-500 text-slate-950',
    category: 'Olahraga & Disiplin Fisik',
    description: 'Aktivitas olahraga lari jarak jauh bersama pelari jalanan untuk melatih stamina, ketahanan nafas, dan disiplin fisik sesuai prinsip ketahanan diri.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-10 w-24 h-5 -rotate-1',
  },
  {
    id: 'photo-05',
    url: '/assets/gallery/activity-05-wisuda-sahabat.jpg',
    title: 'Wisuda Bareng Sahabat 🎓',
    tag: 'S.KOM SQUAD',
    tagColor: 'bg-purple-700 text-white',
    category: 'Studio Wisuda • Univ. Bumigora',
    description: 'Momen seru dan penuh tawa foto wisuda bersama sahabat-sahabat seperjuangan S1 Ilmu Komputer Universitas Bumigora mengenakan jas dan selempang kelulusan.',
    rotation: '-rotate-2',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-12 w-24 h-5 rotate-1',
  },
  {
    id: 'photo-06',
    url: '/assets/gallery/activity-06-kacamata-hitam.jpg',
    title: 'Photoshoot Kacamata Hitam 😎',
    tag: 'BESTIES',
    tagColor: 'bg-slate-800 text-white',
    category: 'Studio Session • Sahabat Dekat',
    description: 'Sesi foto studio tematik monokrom hitam putih memakai kacamata hitam bersama kawan-kawan akrab untuk mengabadikan kebersamaan yang hangat.',
    rotation: 'rotate-1',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-10 w-24 h-5 rotate-2',
  },
  {
    id: 'photo-07',
    url: '/assets/gallery/activity-07-almamater-biru.jpg',
    title: 'Jas Almamater Biru 💙',
    tag: 'KAMPUS LIFE',
    tagColor: 'bg-blue-600 text-white',
    category: 'Teknik Informatika Bumigora',
    description: 'Pose ekspresif dan ceria bersama rekan-rekan kuliah satu jurusan mengenakan jas almamater biru kebanggaan kampus Universitas Bumigora.',
    rotation: '-rotate-1',
    tape: 'washi-tape-tan',
    tapePosition: '-top-3 left-8 w-24 h-5 -rotate-2',
  },
  {
    id: 'photo-08',
    url: '/assets/gallery/activity-08-seperjuangan.jpg',
    title: 'Potret Seperjuangan Kuliah 🤝',
    tag: 'ALMAMATER',
    tagColor: 'bg-indigo-700 text-white',
    category: 'Kenangan Masa Kuliah',
    description: 'Potret kenangan bersama teman-teman seperjuangan selama menempuh studi bangku perkuliahan di Universitas Bumigora.',
    rotation: 'rotate-2',
    tape: 'washi-tape-purple',
    tapePosition: '-top-3 right-12 w-24 h-5 -rotate-1',
  },
]

const CERTIFICATES_DATA = [
  {
    id: 'cert-google-ai',
    title: 'Google AI Professional',
    issuer: 'Coursera x Google (7 Kursus)',
    category: 'Artificial Intelligence',
    icon: 'fa-brands fa-google',
    iconBg: 'bg-purple-100 text-purple-700',
    categoryColor: 'text-purple-700',
    url: 'https://coursera.org/verify/professional-cert/LJSDQ0ASEAVR',
    providerName: 'Coursera x Google',
  },
  {
    id: 'cert-huawei-ai',
    title: 'Fundamental AI - DEX',
    issuer: 'Komdigi x Huawei',
    category: 'AI Infrastructure',
    icon: 'fa-solid fa-robot',
    iconBg: 'bg-indigo-100 text-indigo-700',
    categoryColor: 'text-indigo-700',
    url: 'https://drive.google.com/file/d/1qmCXJdsj0q6I5KOi5GYHqMzKRqtod3Qy/view',
    providerName: 'Komdigi x Huawei',
  },
  {
    id: 'cert-google-dasar-ai',
    title: 'Pengenalan Dasar AI',
    issuer: 'Komdigi x Google',
    category: 'Machine Learning',
    icon: 'fa-solid fa-lightbulb',
    iconBg: 'bg-purple-100 text-purple-700',
    categoryColor: 'text-purple-700',
    url: 'https://drive.google.com/file/d/1_CV3_BNhi10MVdZXhYlpjfE3v47Lf3ba/view',
    providerName: 'Komdigi x Google',
  },
  {
    id: 'cert-bpvp-spreadsheet',
    title: 'Lembar Sebar Lanjutan',
    issuer: 'BPVP Belitung Kemnaker (20 JP)',
    category: 'Excel & Data Prep',
    icon: 'fa-solid fa-table-cells',
    iconBg: 'bg-emerald-100 text-emerald-700',
    categoryColor: 'text-emerald-700',
    url: 'https://drive.google.com/file/d/1AV0sDclH6zWg22n0ppJIY70qTjH21BY3/view',
    providerName: 'BPVP Belitung Kemnaker RI',
  },
  {
    id: 'cert-bpvp-k3',
    title: 'K3 HIRA & JSA',
    issuer: 'Balai Pelatihan Vokasi',
    category: 'Safety & Compliance',
    icon: 'fa-solid fa-shield-halved',
    iconBg: 'bg-amber-100 text-amber-700',
    categoryColor: 'text-amber-700',
    url: 'https://drive.google.com/file/d/1BqSt99GON2VRP1i7M1x6d9QXrcpUIO7I/view',
    providerName: 'Balai Pelatihan Vokasi Kemnaker RI',
  },
  {
    id: 'cert-bpvp-toefl',
    title: 'English Proficiency (TOEFL)',
    issuer: 'BPVP Kemnaker (102 Jam)',
    category: 'Professional English',
    icon: 'fa-solid fa-language',
    iconBg: 'bg-blue-100 text-blue-700',
    categoryColor: 'text-blue-700',
    url: 'https://drive.google.com/file/d/18_RhzvAnI2UQrqYmmy3zqa2zL82dCdhR/view',
    providerName: 'BPVP Bandung Barat Kemnaker RI',
  },
  {
    id: 'cert-kampus-mengajar',
    title: 'Kampus Mengajar Angk. 7',
    issuer: 'Kemendikbudristek RI',
    category: 'Leadership & Pedagogy',
    icon: 'fa-solid fa-award',
    iconBg: 'bg-indigo-100 text-indigo-700',
    categoryColor: 'text-indigo-700',
    url: 'https://drive.google.com/file/d/1jt633I3QZI1Nf4bbaYf6TnBzQcESrw2l/view',
    providerName: 'Kemendikbudristek RI',
  },
  {
    id: 'cert-dicoding-ai',
    title: 'AI Prompting & Tools',
    issuer: 'Generative AI Competency',
    category: 'Generative AI Ops',
    icon: 'fa-solid fa-wand-magic-sparkles',
    iconBg: 'bg-purple-100 text-purple-700',
    categoryColor: 'text-purple-700',
    url: 'https://www.dicoding.com/certificates/9c5a0f27-dc6c-481a-9140-c09d28014560',
    providerName: 'Dicoding Indonesia',
  },
]

export default function ElgaMasterPortfolio() {
  const photoMode = 'elga' // Hero uses Elga's real graduation photo
  const [showStudioModal, setShowStudioModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const [activePhoto, setActivePhoto] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProjectScreenshotIdx, setActiveProjectScreenshotIdx] = useState(0)
  const [modalActiveTab, setModalActiveTab] = useState('overview')
  const viewMode = 'full' // Follows the user's master HTML layout

  return (
    <div className="relative min-h-screen bg-[#FBF7EE] text-slate-800 antialiased overflow-x-hidden selection:bg-purple-300 selection:text-purple-950 font-sans">
      
      {viewMode === 'poster' ? (
        <div className="w-full max-w-5xl mx-auto py-8 px-4">
          <MasterScrapbookPoster />
        </div>
      ) : (
        <>
          {/* ═════════════════════════════════════════════════════════════
             BEGIN: MainHeader (Sticky Navbar)
          ═════════════════════════════════════════════════════════════ */}
          <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#FBF7EE]/90 border-b border-purple-200/80 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              
              {/* Brand Logo with Scrapbook sticker style */}
              <a className="flex items-center gap-2 group cursor-pointer" href="#hero">
                <div className="relative inline-block rotate-[-2deg] transition-transform group-hover:rotate-0">
                  <div className="washi-tape-purple absolute -top-2 left-3 w-10 h-3 rounded-sm rotate-6 z-10 opacity-75"></div>
                  <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-display text-xl sm:text-2xl px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-purple-400">
                    <span className="font-handwritten text-purple-200 text-2xl -rotate-6 mr-0.5">elga&apos;s</span>
                    <span className="tracking-wider uppercase font-extrabold text-sm sm:text-base">PORTFOLIO</span>
                    <i className="fa-solid fa-crown text-yellow-300 text-xs ml-1 animate-pulse"></i>
                  </div>
                </div>
              </a>

              {/* Desktop Navigation Menu */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm text-xs lg:text-sm font-semibold text-slate-700">
                <a className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-700 text-white shadow-sm transition hover:bg-purple-800" href="#hero">
                  <i className="fa-solid fa-house text-xs"></i>
                  <span>Home</span>
                </a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#about">About</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#skills">Skills</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#experience">Experience</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#projects">Projects</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#research">Research</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#gallery">Gallery</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#books">Books</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#certifications">Certificates</a>
                <a className="px-2.5 py-1 rounded-full hover:text-purple-700 hover:bg-purple-50 transition" href="#contact">Contact</a>
              </nav>

              {/* WhatsApp CTA Button */}
              <div className="flex items-center gap-3">
                <a 
                  className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0" 
                  href={WHATSAPP_URL} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span className="hidden sm:inline">WhatsApp</span>
                  <span className="text-xs bg-emerald-800/40 px-2 py-0.5 rounded-full border border-emerald-400/30">Hubungi</span>
                </a>
              </div>
            </div>
          </header>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: HeroSection (3D Typography & Character)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative pt-6 pb-20 sm:pb-28 overflow-hidden" id="hero">
            
            {/* Hand-drawn Scrapbook Doodles, Scribbles & Stickers Background */}
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              
              {/* Slogan with crown doodle (Top Left) */}
              <div className="absolute top-5 left-4 sm:left-10 lg:left-14 rotate-[-9deg] z-10">
                <div className="font-handwritten text-lg sm:text-2xl text-slate-700 leading-tight flex flex-col">
                  <span className="flex items-center gap-1.5 text-purple-900 font-bold">
                    Dream it.
                    <i className="fa-solid fa-crown text-amber-400 text-sm rotate-12"></i>
                  </span>
                  <span className="text-purple-700 font-bold ml-2">Build it.</span>
                  <span className="text-slate-800 ml-4 font-semibold">Innovate it ✨</span>
                </div>
                <svg className="w-16 h-4 text-purple-400 -mt-1 ml-3" fill="none" viewBox="0 0 100 20">
                  <path d="M5 12 Q 50 2 95 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"></path>
                </svg>
              </div>

              {/* Paper Airplane with whimsical arched trail (Top Center / Right) */}
              <div className="absolute top-4 right-1/4 sm:right-1/3 hidden md:block rotate-6">
                <svg className="text-purple-600 w-28 h-20" fill="none" viewBox="0 0 140 90">
                  <path d="M10 75 Q 60 15 120 20" fill="none" stroke="#8B5CF6" strokeDasharray="4 4" strokeWidth="2.5" strokeLinecap="round"></path>
                  <path d="M120 20 L102 36 L118 30 L132 14 Z" fill="#6D28D9"></path>
                </svg>
              </div>

              {/* Playful Scrapbook Speech / Doodles (Top Right) */}
              <div className="absolute top-6 right-6 sm:right-12 hidden sm:block rotate-12 z-10">
                <div className="relative bg-[#FAF7F2] border-2 border-dashed border-purple-400 px-3.5 py-1.5 rounded-2xl shadow-sm text-center">
                  <p className="font-handwritten text-purple-900 font-bold text-sm sm:text-base leading-none">
                    Let&apos;s Code<br />Together! 🚀
                  </p>
                </div>
              </div>

              {/* Hand-drawn Scribble Sparks and Floating Accents */}
              <div className="absolute top-1/2 left-3 sm:left-8 text-purple-400 text-3xl font-handwritten select-none">✦</div>
              <div className="absolute bottom-16 left-12 text-amber-500 text-2xl font-handwritten select-none hidden sm:block">👑</div>
              <div className="absolute top-1/3 right-4 sm:right-8 text-purple-600 text-4xl font-handwritten select-none rotate-12">!!</div>
              <div className="absolute bottom-20 right-1/3 text-purple-300 text-2xl font-handwritten select-none">~*</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2 sm:pt-4">
                
                {/* Left Hero Column: Dynamic 3D Scrapbook Typography & Badges */}
                <div className="lg:col-span-7 text-center lg:text-left">
                  
                  {/* Top Washi Tape over 3D Title */}
                  <div className="inline-block relative">
                    <div className="washi-tape-tan absolute -top-3 left-6 sm:left-10 w-28 sm:w-36 h-5 -rotate-3 z-20 shadow-sm"></div>
                    <div className="washi-tape-purple absolute -top-2 right-4 w-20 h-4 rotate-3 z-20 opacity-80 shadow-sm"></div>
                    
                    {/* Layered 3D Puffy PORTFOLIO Headline */}
                    <div className="font-display tracking-tight font-black select-none pt-2">
                      <h1 className="text-6xl sm:text-7xl lg:text-8xl text-3d-purple uppercase leading-[0.88] drop-shadow-md">
                        PORT<br />FOLIO
                      </h1>
                    </div>
                  </div>

                  {/* Creative Pill Badge: Full Stack & AI Specialist */}
                  <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                    <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white px-5 sm:px-6 py-2.5 rounded-full shadow-lg border-2 border-purple-400/50 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                      <span className="font-extrabold text-sm sm:text-lg tracking-wide uppercase">Full Stack &amp;</span>
                      <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent font-black text-sm sm:text-lg uppercase">AI Specialist</span>
                      <span className="bg-purple-700/80 text-purple-200 text-xs px-2 py-0.5 rounded-full border border-purple-400/60 font-mono">&lt;/&gt;</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-950 text-white px-4 py-2 rounded-full shadow-md border border-purple-300/40 text-xs sm:text-sm font-bold rotate-1 hover:rotate-0 transition-transform">
                      <i className="fa-solid fa-wand-magic-sparkles text-amber-300 text-xs"></i>
                      <span>Photoshop &amp; Video Editor</span>
                    </div>
                  </div>

                  {/* Handwritten Slogan Quote */}
                  <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-purple-400 font-handwritten text-2xl">“</span>
                    <p className="font-handwritten text-xl sm:text-2xl text-purple-900 font-bold tracking-wide leading-tight">
                      Turning Ideas Into Digital Solutions.
                    </p>
                    <span className="text-purple-400 font-handwritten text-2xl">”</span>
                  </div>

                  {/* Role Keywords with Hand-drawn Dots */}
                  <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-slate-700 font-medium">
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">Full Stack Developer</span>
                    <span className="text-purple-400 text-sm">•</span>
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">Photoshop &amp; Video Editor</span>
                    <span className="text-purple-400 text-sm">•</span>
                    <span className="font-handwritten text-lg sm:text-xl font-bold text-purple-900">AI &amp; Problem Solver</span>
                  </div>

                  {/* Bio Summary paragraph */}
                  <p className="mt-4 text-slate-600 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                    Lulusan Ilmu Komputer <strong className="text-purple-900">Universitas Bumigora (IPK 3.76 / 4.00 Cum Laude)</strong>. Berfokus sebagai <strong className="text-purple-900">Full Stack Developer</strong>, perancangan visual dengan <strong className="text-purple-900">Adobe Photoshop</strong>, produksi <strong className="text-purple-900">Video Editing</strong>, operasional server simbank skala live, serta riset Computer Vision terakreditasi SINTA 4.
                  </p>

                  {/* Interactive Call-To-Action Buttons */}
                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <a className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-puffy transition-all transform hover:-translate-y-1 hover:brightness-110 active:translate-y-0.5 active:shadow-puffy-sm" href="#projects">
                      <span>Explore My Work</span>
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </div>
                    </a>
                    <a className="inline-flex items-center gap-2 bg-white/95 hover:bg-purple-50 text-purple-900 font-semibold text-base px-6 py-3.5 rounded-full border-2 border-purple-300 shadow-sm transition transform hover:-translate-y-0.5" href="#contact">
                      <i className="fa-regular fa-paper-plane text-purple-600"></i>
                      <span>Hubungi Saya</span>
                    </a>
                  </div>

                  {/* Scrapbook Trust / Achievement Badges Strip */}
                  <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-amber-50/80 text-amber-900 rounded-xl border border-amber-300 shadow-sm rotate-[-1deg]">
                      <span className="text-sm">🏆</span> IPK 3.76 / 4.00 (Cum Laude)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-purple-50/80 text-purple-900 rounded-xl border border-purple-200 shadow-sm rotate-1">
                      <span className="text-sm">🛡️</span> Google AI &amp; Komdigi Certified
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-50/80 text-emerald-900 rounded-xl border border-emerald-300 shadow-sm rotate-[-1deg]">
                      <span className="text-sm">⭐</span> Penulis Jurnal SINTA 4
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-sky-50/80 text-sky-900 rounded-xl border border-sky-300 shadow-sm rotate-1">
                      <span className="text-sm">🎨</span> Photoshop &amp; Video Editing
                    </span>
                  </div>
                </div>

                {/* Right Hero Column: Layered Organic Scrapbook Photo Collage with Impasto Paint Splash */}
                <div className="lg:col-span-5 flex justify-center relative">
                  <div className="relative w-full max-w-md sm:max-w-lg flex flex-col items-center justify-center py-4 select-none">
                    
                    {/* Contemporary Impasto Paint Splash Backdrop (Diagonal Palette Knife Brush Strokes) */}
                    <div className="absolute -inset-12 sm:-inset-20 flex items-center justify-center pointer-events-none select-none z-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/assets/hero-paint-splash-transparent.png"
                        alt="Impasto Paint Brush Stroke Splash"
                        className="w-[145%] h-[145%] max-w-none object-contain drop-shadow-[0_20px_35px_rgba(76,29,149,0.35)] transform scale-115 -rotate-2 hover:rotate-0 transition-transform duration-700"
                      />
                    </div>

                    {/* Decorative Hand-Drawn Ring & Dashed Orbit Scribbles */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75" fill="none" viewBox="0 0 400 400">
                      <path d="M40 120 Q120 70 210 90 T360 80" stroke="#c084fc" strokeDasharray="4 6" strokeLinecap="round" strokeWidth="2.5"></path>
                      <path d="M60 310 Q160 360 280 320 T360 340" stroke="#e9d5ff" strokeDasharray="8 6" strokeLinecap="round" strokeWidth="2"></path>
                    </svg>

                    {/* Washi Tape Accents Across Corners */}
                    <div className="washi-tape-purple absolute -top-4 left-8 sm:left-12 w-28 sm:w-32 h-6 -rotate-6 z-30 shadow-md"></div>
                    <div className="washi-tape-tan absolute bottom-12 right-4 sm:right-8 w-32 h-6 rotate-3 z-30 shadow-md"></div>

                    {/* Main Character Visual Wrapper with Floating Badges */}
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="relative w-72 h-[22rem] sm:w-80 sm:h-[26rem] lg:w-96 lg:h-[28rem] flex items-center justify-center">
                        
                        {/* Soft Glow backdrop */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/30 via-amber-400/20 to-transparent blur-2xl"></div>
                        
                        {/* Portrait Character Cutout (Half-Body Enlarge) */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          alt="Elga Alfareza, S.Kom." 
                          className="relative z-20 h-full w-auto max-h-[22rem] sm:max-h-[26rem] lg:max-h-[28rem] object-contain drop-shadow-[0_25px_35px_rgba(46,8,84,0.55)] transform hover:scale-105 transition-transform duration-300 cursor-pointer" 
                          src={photoMode === 'aida' ? '/assets/hero-aida-character.png' : '/assets/elga-halfbody-cutout.png'}
                          onClick={() => setShowStudioModal(true)}
                        />

                        {/* Floating Badge 1 (Top Left): System Developer & AI */}
                        <div className="absolute -top-3 -left-4 sm:-left-6 z-30 bg-purple-950/95 text-white font-mono text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-purple-400/50 flex items-center gap-2 backdrop-blur-md rotate-[-4deg]">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"></span>
                          <span className="font-sans font-bold text-white">System Developer &amp; AI</span>
                        </div>

                        {/* Floating Badge 2 (Top Right): 3D Code Sticker Tag */}
                        <div className="absolute top-3 -right-4 sm:-right-6 z-30 bg-gradient-to-tr from-purple-800 to-indigo-700 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-base font-bold shadow-xl border-2 border-white rotate-12 hover:rotate-0 transition-transform duration-300">
                          &lt;/&gt;
                        </div>

                        {/* Floating Badge 3 (Bottom Left): Cum Laude Pill */}
                        <div className="absolute bottom-10 sm:bottom-12 -left-3 sm:-left-6 z-30 bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-xl shadow-md border border-amber-300 flex items-center gap-1.5 rotate-[-2deg]">
                          <i className="fa-solid fa-star text-slate-900"></i>
                          <span>IPK 3.76 (Cum Laude)</span>
                        </div>

                        {/* Floating Badge 4 (Bottom Right): SINTA 4 Author Pill */}
                        <div className="absolute bottom-10 sm:bottom-12 -right-3 sm:-right-6 z-30 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-emerald-300/40 flex items-center gap-1.5 rotate-3">
                          <i className="fa-solid fa-book-bookmark"></i>
                          <span>SINTA 4 Author</span>
                        </div>
                      </div>

                      {/* Scrapbook Style Nameplate Sticker Overlapping Bottom of Photo */}
                      <div className="-mt-9 sm:-mt-11 relative z-30 text-center">
                        <div className="relative bg-white/95 backdrop-blur-sm px-6 sm:px-7 py-3 rounded-2xl shadow-xl border-2 border-purple-200 rotate-[-1deg] inline-block hover:rotate-0 transition-transform duration-300">
                          {/* Washi tape pinning the nameplate onto the photo */}
                          <div className="washi-tape-tan absolute -top-3 right-6 w-24 h-4.5 rotate-3 z-40 shadow-xs"></div>
                          <div className="washi-tape-purple absolute -top-2.5 left-6 w-16 h-3.5 -rotate-2 z-40 opacity-75"></div>

                          <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight flex items-center justify-center gap-1.5">
                            <span>Elga Alfareza, S.Kom.</span>
                            <i className="fa-solid fa-circle-check text-purple-600 text-sm"></i>
                          </h3>
                          <p className="text-purple-900 font-semibold text-xs font-sans mt-0.5">
                            Universitas Bumigora | Full Stack Dev, Multimedia &amp; AI
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Scrapbook Key Metrics Ticket Strip */}
              <div className="mt-12 pt-6 border-t border-purple-200/60 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {/* Metric 1: IPK 3.76 */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper -rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-tan absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rotate-1"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">3.76</span>
                    <span className="text-amber-500 text-xs font-bold block">/ 4.00</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">IPK S1 Cum Laude</p>
                    <p className="text-[11px] text-slate-500">Univ. Bumigora (2024)</p>
                  </div>
                  {/* Metric 2: 99.9% Server Uptime */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-purple absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 -rotate-2"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">99.9%</span>
                    <span className="text-emerald-600 text-xs font-bold block">UPTIME</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Server Simbank Ops</p>
                    <p className="text-[11px] text-slate-500">CV Rajawali Live System</p>
                  </div>
                  {/* Metric 3: SINTA 4 Publication */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper -rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-tan absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rotate-2"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">SINTA 4</span>
                    <span className="text-purple-600 text-xs font-bold block">94.6% AKURASI</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Publikasi Riset Jurnal</p>
                    <p className="text-[11px] text-slate-500">CNN Aksara Sasak &amp; ISBN</p>
                  </div>
                  {/* Metric 4: 8+ Verified Certifications */}
                  <div className="relative bg-white/95 p-4 rounded-xl border border-purple-200 shadow-paper rotate-1 hover:rotate-0 transition-transform text-center group">
                    <div className="washi-tape-purple absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 -rotate-1"></div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-900 group-hover:scale-105 transition-transform inline-block">8+</span>
                    <span className="text-indigo-600 text-xs font-bold block">VERIFIED</span>
                    <p className="text-slate-800 text-xs font-bold mt-1">Sertifikasi Profesional</p>
                    <p className="text-[11px] text-slate-500">Google AI, Komdigi, Kemnaker</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 1: Hero to About
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-hero-to-about.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: AboutAndSkillsSection (Polaroid + Bio + Skills)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative py-14 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Polaroid Bio Card */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div 
                    onClick={() => setShowStudioModal(true)}
                    className="relative w-full max-w-sm bg-white p-4 pt-5 pb-6 rounded-md shadow-polaroid border border-stone-200 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer"
                    title="Klik untuk melihat foto studio wisuda resmi"
                  >
                    <div className="washi-tape-tan absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 rotate-1 z-20"></div>
                    
                    <div className="relative bg-slate-900 rounded-sm overflow-hidden aspect-[4/5] flex flex-col items-center justify-center p-4 text-center border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/elga-id-portrait.png"
                        alt="Elga Alfareza, S.Kom."
                        className="w-full h-full object-cover object-top filter contrast-110"
                      />
                      <div className="absolute bottom-2 right-2 bg-amber-400 text-slate-900 font-extrabold text-[10px] px-2 py-0.5 rounded shadow-sm">
                        IPK 3.76
                      </div>
                    </div>

                    {/* Handwritten Yellow Post-It Tape Label at the bottom */}
                    <div className="mt-4 bg-[#fef08a] p-3 rounded-sm shadow-sm border border-yellow-300 -rotate-1">
                      <p className="font-handwritten text-slate-800 text-base font-bold text-center leading-tight">
                        Elga Alfareza, S.Kom. <br />
                        <span className="text-xs text-purple-900 font-sans font-semibold">Bachelor of Computer Science</span>
                      </p>
                    </div>
                  </div>

                  {/* Contact Details Card */}
                  <div className="mt-6 w-full max-w-sm bg-purple-50/70 p-4 rounded-2xl border border-purple-200/80 text-xs space-y-2.5 text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-location-dot text-purple-700 w-4 text-center"></i>
                      <span>Mataram, Nusa Tenggara Barat, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-envelope text-purple-700 w-4 text-center"></i>
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="truncate hover:underline">{EMAIL_ADDRESS}</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-brands fa-whatsapp text-purple-700 w-4 text-center"></i>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">085238208849</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-brands fa-linkedin text-purple-700 w-4 text-center"></i>
                      <a className="text-purple-800 font-semibold hover:underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/elga-alfareza
                      </a>
                    </div>
                  </div>
                </div>

                {/* Middle Column: About Me Bio & Academic Cards */}
                <div className="lg:col-span-4 space-y-5">
                  <div className="inline-block relative">
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="font-handwritten text-purple-700 text-4xl">About</span> Me
                      <span className="text-2xl text-purple-500">✨</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mt-1"></div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-paper border border-purple-100 text-slate-700 text-sm leading-relaxed space-y-3">
                    <p>
                      Halo! Saya <strong>Elga Alfareza, S.Kom.</strong>, lulusan S1 Ilmu Komputer 
                      (<span className="text-purple-800 font-bold">IPK 3.76 / 4.00 - Cum Laude</span>) dari 
                      <strong> Universitas Bumigora</strong>. Saya berfokus sebagai <strong>Full Stack Developer</strong> yang mampu merancang dan mengembangkan aplikasi web modern dari frontend hingga backend, serta memiliki keahlian kreatif mendalam pada <strong>Adobe Photoshop</strong> (desain grafis &amp; visual asset) dan <strong>Video Editing</strong> (produksi konten multimedia).
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Memiliki pengalaman profesional dalam <strong>operasional server simbank skala live</strong>, <strong>Quality Control (QC) perangkat lunak &amp; keras</strong>, serta pengembangan model <strong>Deep Learning CNN</strong> untuk pengenalan aksara budaya yang terpublikasi di jurnal ilmiah terakreditasi nasional SINTA 4.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Tersertifikasi resmi oleh <strong>Google AI</strong>, <strong>Komdigi</strong>, dan <strong>BPVP</strong>. Siap berkontribusi aktif dalam perancangan sistem web, editing media kreatif, dan operasional solusi teknologi modern.
                    </p>
                  </div>

                  {/* Education & Specialization Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Education</h5>
                        <p className="text-xs text-purple-900 font-semibold">Universitas Bumigora</p>
                        <p className="text-[11px] text-slate-600">Bachelor of Computer Science (S.Kom.) • GPA: 3.76 / 4.00</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-700 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        <i className="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Specialization</h5>
                        <p className="text-xs text-purple-900 font-semibold">Full Stack, Multimedia &amp; AI</p>
                        <p className="text-[11px] text-slate-600">Full Stack Web, Adobe Photoshop, Video Editing, CNN Deep Learning, Simbank Server</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Skills Matrix Categorized with 3D Glossy Icons */}
                <div className="lg:col-span-4 space-y-3.5" id="skills">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="font-handwritten text-purple-700 text-4xl">Technical</span> Skills
                    </h2>
                    <span className="font-handwritten text-2xl text-purple-600 font-bold rotate-12">!!</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Matriks keahlian Full Stack, multimedia kreatif (Photoshop &amp; Video), AI/ML, dan sistem server:
                  </p>

                  {/* Category 1: Full Stack Web Development */}
                  <div className="bg-white p-3 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-layer-group text-purple-600"></i> Full Stack Web Development
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-cyan-600 to-blue-800 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-react"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">React / Next</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-yellow-500 to-amber-700 flex items-center justify-center text-slate-900 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-js font-bold"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">JavaScript</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-900 to-purple-950 flex items-center justify-center text-amber-400 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-python"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Python (API)</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-orange-600 to-red-700 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-brands fa-html5"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">HTML5 / REST</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Creative Design & Video Editing */}
                  <div className="bg-white p-3 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-wand-magic-sparkles text-purple-600"></i> Desain Grafis &amp; Video Editing
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#001e36] to-[#000814] border border-sky-400/50 flex items-center justify-center shadow-icon3d transition transform group-hover:scale-105">
                          <span className="font-sans font-black tracking-tighter text-sky-400 text-sm drop-shadow-[0_0_5px_rgba(56,189,248,0.7)]">Ps</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Photoshop</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-rose-600 to-pink-800 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-clapperboard"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Video Edit</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-amber-500 to-orange-700 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-palette"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Visual Asset</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-purple-800 to-indigo-950 flex items-center justify-center text-purple-200 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-photo-film"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Multimedia</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: AI, Deep Learning & Data */}
                  <div className="bg-white p-3 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-brain text-purple-600"></i> AI, Deep Learning &amp; Data
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-orange-500 to-amber-700 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-microchip"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">TensorFlow</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-purple-800 to-purple-950 flex items-center justify-center text-cyan-300 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">CNN / VGG</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-blue-700 to-indigo-900 flex items-center justify-center text-sky-200 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-eye"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">OpenCV</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-rose-600 to-pink-900 flex items-center justify-center text-white text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Streamlit</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 4: Systems & IT Operations */}
                  <div className="bg-white p-3 rounded-2xl shadow-paper border border-purple-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-server text-purple-600"></i> Systems &amp; IT Operations
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-violet-800 to-purple-950 flex items-center justify-center text-emerald-300 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-sim-card"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Simbank</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-purple-900 to-slate-950 flex items-center justify-center text-fuchsia-300 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-vial-circle-check"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">QC Testing</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-900 to-purple-950 flex items-center justify-center text-orange-300 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-screwdriver-wrench"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">Hardware</span>
                      </div>
                      <div className="group flex flex-col items-center p-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 transition border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-slate-800 to-indigo-950 flex items-center justify-center text-cyan-300 text-base shadow-icon3d transition transform group-hover:scale-105">
                          <i className="fa-solid fa-database"></i>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 mt-1">SQL / DB</span>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Productivity Banner */}
                  <div className="bg-purple-50/70 p-3 rounded-2xl border border-purple-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <i className="fa-solid fa-table-cells text-emerald-600"></i> Excel (BPVP)
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <i className="fa-brands fa-git-alt text-orange-600"></i> Git &amp; GitHub
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <i className="fa-solid fa-scissors text-rose-600"></i> Premiere &amp; CapCut
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 2: White to Navy Deckle Edge
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-about-to-experience.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ExperienceSection (Timeline)
          ═════════════════════════════════════════════════════════════ */}
          <section className="relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white py-16 overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              
              {/* Section Title & Hand-Drawn Slogan */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-wide">
                    <span className="font-handwritten text-purple-300 text-4xl sm:text-5xl block sm:inline">Experience</span>
                  </h2>
                  <div className="w-32 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <p className="text-purple-200/90 text-sm sm:text-base mt-2">
                  Rekam jejak kontribusi dalam operasional sistem, kualitas perangkat, data, dan edukasi
                </p>
                <div className="mt-2 font-handwritten text-purple-300 text-xl sm:text-2xl font-bold rotate-[-2deg]">
                  ~ Keep Learning, Keep Growing ~
                </div>
              </div>

              {/* Experience Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                
                {/* Card 1 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/40 text-purple-300 border border-purple-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                    <i className="fa-solid fa-server"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                    2026 – Sekarang
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">CV RAJAWALI</h3>
                  <p className="text-purple-300 text-xs font-semibold">System Operator Officer</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Pengelolaan &amp; pemeliharaan server simbank, monitoring transmisi kartu SIM live, sinkronisasi inventori log, dan troubleshooting jaringan perangkat.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/40 text-indigo-300 border border-indigo-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2025 – 2026
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">CV SINAR MUTIARA BALI</h3>
                  <p className="text-purple-300 text-xs font-semibold">Staff Operasional &amp; QC</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Quality Control (QC) software &amp; hardware kendaraan/logistik, verifikasi spesifikasi komponen, pelaporan inventarisasi pergudangan.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/40 text-purple-300 border border-purple-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2025
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 leading-tight">IPHI (Ikatan Haji Indonesia)</h3>
                  <p className="text-purple-300 text-xs font-semibold">Computer Operator</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Digitalisasi berkas pendaftaran jemaah haji, pemrosesan data anggota secara komputerisasi, dan perapian arsip digital jemaah secara sistematis.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="relative bg-white/5 border border-purple-500/30 hover:border-purple-400 p-5 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/40 text-indigo-300 border border-indigo-400/50 flex items-center justify-center text-xl shadow-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    2024
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">KEMDIKBUDRISTEK</h3>
                  <p className="text-purple-300 text-xs font-semibold">Kampus Mengajar 7 - SMPN 20</p>
                  <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                    Pendampingan digitalisasi sekolah, penguatan Asesmen Kompetensi Minimum (AKM), dan pelatihan literasi komputasi bagi siswa dan guru.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 3: Navy to Cream Paper Deckle Edge
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-experience-to-projects.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: SelectedWorksSection (6 Cards)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 relative" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header with Star Doodle */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-amber-500 text-3xl font-handwritten">⭐</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                      Selected Works
                    </h2>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                    Aplikasi web, sistem operasional backend, serta platform Machine Learning yang telah dirancang &amp; diimplementasikan oleh Elga Alfareza.
                  </p>
                </div>
                <a className="inline-flex items-center gap-2 text-xs font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-full border border-purple-300 transition" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <span>View All Repositories</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project, idx) => (
                  <div
                    key={project.id}
                    className="group relative bg-white rounded-3xl p-5 shadow-paper border border-purple-200 transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
                  >
                    {/* Washi Tape */}
                    <div className={`${project.tape} absolute ${project.tapePosition} z-10`}></div>

                    <div>
                      {/* Card Visual Header: Real Image Preview OR Themed Gradient */}
                      {project.previewImage ? (
                        <div 
                          onClick={() => {
                            setSelectedProject(project)
                            setActiveProjectScreenshotIdx(0)
                            setModalActiveTab('overview')
                          }}
                          className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 border border-stone-200 group-hover:border-purple-400 transition-all bg-slate-950 cursor-pointer"
                          title="Klik untuk melihat preview screenshot & fitur lengkap"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.previewImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-65 group-hover:opacity-40 transition-opacity"></div>
                          
                          <span className="absolute top-3 left-3 bg-purple-700/90 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm backdrop-blur-xs">
                            0{idx + 1}
                          </span>
                          <span className={`absolute top-3 right-3 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full shadow-sm ${project.badgeColor}`}>
                            {project.badge}
                          </span>

                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                            <span className="font-mono text-[11px] opacity-90 drop-shadow flex items-center gap-1">
                              <i className="fa-solid fa-layer-group text-purple-300"></i> {project.screenshots?.length || 1} Layar
                            </span>
                            <span className="bg-white/25 hover:bg-white/35 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold transition flex items-center gap-1">
                              <i className="fa-solid fa-expand"></i> Preview UI
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className={`relative w-full h-48 rounded-2xl bg-gradient-to-tr ${project.gradient} overflow-hidden mb-4 border border-purple-300 flex items-center justify-center text-center p-3`}>
                          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                          <span className="absolute top-3 left-3 bg-purple-700 text-white font-mono text-xs font-bold px-2 py-0.5 rounded-lg shadow-sm">
                            0{idx + 1}
                          </span>
                          <span className={`absolute top-3 right-3 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border border-purple-300/40 ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                          <div className="relative z-10">
                            {project.iconText ? (
                              <div className="text-3xl text-amber-300 mb-1 font-serif tracking-widest font-bold">
                                {project.iconText}
                              </div>
                            ) : (
                              <div className={`w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center ${project.iconColor} text-2xl mb-1 border border-white/20`}>
                                <i className={project.icon}></i>
                              </div>
                            )}
                            <p className="text-white font-bold text-sm">{project.title}</p>
                            <p className="text-purple-200 text-[11px] font-mono">{project.subtitle}</p>
                          </div>
                        </div>
                      )}

                      {/* Category Pill */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => {
                          if (project.screenshots) {
                            setSelectedProject(project)
                            setActiveProjectScreenshotIdx(0)
                            setModalActiveTab('overview')
                          }
                        }}
                        className={`font-bold text-slate-900 text-base leading-snug group-hover:text-purple-800 transition ${project.screenshots ? 'cursor-pointer' : ''}`}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500 truncate mr-2">
                        {project.tech.slice(0, 3).join(' • ')}
                      </span>
                      {project.screenshots ? (
                        <button
                          onClick={() => {
                            setSelectedProject(project)
                            setActiveProjectScreenshotIdx(0)
                            setModalActiveTab('overview')
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 cursor-pointer shrink-0"
                        >
                          <span>Lihat UI</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </button>
                      ) : (
                        <a
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 shrink-0"
                          href={project.repoUrl}
                          target={project.repoUrl.startsWith('#') ? '_self' : '_blank'}
                          rel={project.repoUrl.startsWith('#') ? undefined : 'noopener noreferrer'}
                        >
                          <span>{project.repoUrl.startsWith('#') ? 'Lihat Riset' : 'View Repo'}</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 4: Cream Paper to Grid Notebook
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-projects-to-research.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ResearchAndProjectsSection (SINTA 4 & Book)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#FAF7F2] grid-notebook relative" id="research">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  Inovasi, Riset &amp; Publikasi Akademik
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-2">
                  Hasil Penelitian AI &amp; Publikasi Ilmiah
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Dedikasi riset terstruktur dalam implementasi Convolutional Neural Networks untuk preservasi digital manuskrip aksara tradisional Sasak dan komputasi cerdas.
                </p>
              </div>

              {/* Research Highlights Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Research Card 1: CNN Model */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 left-8 w-24 h-5 rotate-[-3deg]"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-purple-700 font-bold font-mono">
                      <span>Deep Learning / CNN</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Akurasi 94.6%</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Klasifikasi &amp; Pengenalan Aksara Sasak Berbasis CNN
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Riset pengembangan Convolutional Neural Network (CNN) dengan dataset citra aksara Sasak tulisan tangan. Meliputi augmentasi data, grayscale thresholding, reduksi noise citra, serta uji performa melalui Confusion Matrix, Precision, Recall, dan F1-Score tinggi.
                    </p>
                    <div className="mt-4 p-3 bg-purple-50 rounded-xl border border-purple-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Metodologi:</strong> Custom CNN, VGG16 Transfer Learning</div>
                      <div><strong>Optimalisasi:</strong> Adam Optimizer, Dropout Regularization</div>
                      <div><strong>Evaluasi:</strong> 94.6% Classification Accuracy</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Python • TensorFlow • OpenCV</span>
                    <span className="text-purple-700 font-bold"><i className="fa-solid fa-microchip"></i> Core ML</span>
                  </div>
                </div>

                {/* Research Card 2: SINTA 4 Journal */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-purple absolute -top-3 left-10 w-24 h-5 rotate-2"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-emerald-700 font-bold font-mono">
                      <span>Publikasi Ilmiah Terindeks</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">SINTA 4 Terakreditasi</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Publikasi Jurnal Nasional Terakreditasi SINTA 4
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Penulis utama artikel jurnal ilmiah bidang informatika dan visi komputer. Mengangkat digitalisasi dan pengenalan karakter aksara nusantara yang telah melalui proses peer-review ketat dewan editor jurnal nasional bereputasi SINTA 4 Kemendikbudristek.
                    </p>
                    <div className="mt-4 p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Status Indeks:</strong> SINTA Peringkat 4 (Kemendikbud)</div>
                      <div><strong>Peran Penulis:</strong> Penulis Utama (First Author)</div>
                      <div><strong>Akses:</strong> Open Access Peer-Reviewed Journal</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Terindeks Nasional SINTA</span>
                    <a className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1" href={DRIVE_URL} target="_blank" rel="noopener noreferrer">
                      <span>Buka Sertifikat &amp; Paper</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                {/* Research Card 3: Published Book Blueprint */}
                <div className="relative bg-white rounded-3xl p-6 shadow-paper border border-purple-200 transition-transform hover:-translate-y-1.5 flex flex-col justify-between">
                  <div className="washi-tape-tan absolute -top-3 right-8 w-24 h-5 rotate-3"></div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-amber-800 font-bold font-mono">
                      <span>Karya Buku / ISBN</span>
                      <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">Published Book</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      Buku: &quot;Blueprint for Sasak Script Digitization&quot;
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      Penulisan buku referensi akademis mengenai arsitektur digitalisasi aksara lokal Sasak. Menjabarkan pipeline data acquisition, standarisasi representasi digital glif aksara, hingga integrasi kecerdasan buatan dalam aplikasi preservasi budaya.
                    </p>
                    <div className="mt-4 p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs space-y-1 text-slate-700">
                      <div><strong>Tipe Karya:</strong> Buku Referensi Ilmiah Ber-ISBN</div>
                      <div><strong>Kontribusi:</strong> Konsep Teknis &amp; Implementasi AI</div>
                      <div><strong>Penerbit:</strong> Universitas Bumigora Press</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Book Author &amp; Researcher</span>
                    <span className="text-amber-800 font-bold"><i className="fa-solid fa-feather"></i> Buku Resmi</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 5: Grid to Paper Background
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-research-to-gallery.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: PhotoGallerySection (Polaroid Photos)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 relative" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center justify-center gap-2">
                    <span className="font-handwritten text-purple-700 text-4xl">Activity</span> Gallery
                    <span className="text-amber-500 text-2xl">📸</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto mt-1"></div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Potret momen wisuda resmi, mendaki alam, olahraga lari, dan kebersamaan hangat bersama sahabat:
                </p>
              </div>

              {/* Scrapbook Polaroid Cards Grid (8 Real Activity Photos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ACTIVITY_PHOTOS.map((photo, pIdx) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(pIdx)}
                    className={`relative bg-white p-3.5 pb-5 rounded-md shadow-polaroid border border-stone-200 ${photo.rotation} hover:rotate-0 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:shadow-xl`}
                    title="Klik untuk memperbesar foto dokumentasi"
                  >
                    {/* Washi Tape */}
                    <div className={`${photo.tape} absolute ${photo.tapePosition} z-20`}></div>

                    {/* Photo Container - Square Polaroid Format with object-top */}
                    <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-stone-900 border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Photo Badge */}
                      <span className={`absolute bottom-1 right-1.5 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm ${photo.tagColor}`}>
                        {photo.tag}
                      </span>
                      {/* Photo Index Indicator */}
                      <span className="absolute top-1 left-1.5 bg-black/60 text-white font-mono text-[8px] px-1 py-0.5 rounded">
                        #{String(pIdx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Yellow Post-It Label */}
                    <div className="mt-3 bg-[#fef08a] p-2.5 rounded-sm border border-yellow-300 rotate-[-0.5deg]">
                      <p className="font-handwritten text-slate-800 text-sm font-bold text-center leading-tight">
                        {photo.title}
                      </p>
                      <p className="text-[10px] text-purple-900 text-center font-sans font-semibold mt-0.5">
                        {photo.category}
                      </p>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="mt-2 text-center">
                      <span className="text-[10px] text-purple-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                        <i className="fa-solid fa-magnifying-glass-plus text-xs"></i> Klik untuk perbesar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition: Gallery to Favorite Books
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-gallery-to-books.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: FavoriteBooksSection (Scrapbook Mindset & Readings)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#FAF7F2] grid-notebook relative" id="books">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block relative">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 flex items-center justify-center gap-2">
                    <span className="font-handwritten text-purple-700 text-4xl">Favorite Books</span> &amp; Mindset
                    <span className="text-amber-500 text-2xl">📚</span>
                  </h2>
                  <div className="w-28 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mx-auto mt-1"></div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Buku-buku yang membentuk etos kerja, ketangguhan mental operasional 99.9%, dan kepemilikan rekayasa sistem yang saya terapkan dalam setiap proyek teknologi:
                </p>
              </div>

              {/* 3 Books Scrapbook Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FAVORITE_BOOKS.map((book, idx) => (
                  <div 
                    key={book.id}
                    className={`relative bg-white p-5 rounded-2xl shadow-polaroid border border-stone-200 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                      idx === 0 ? '-rotate-1 hover:rotate-0' : idx === 1 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
                    }`}
                  >
                    {/* Washi Tape */}
                    <div className={`${idx % 2 === 0 ? 'washi-tape-tan' : 'washi-tape-purple'} absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-2'} z-20`}></div>

                    <div>
                      {/* Book Cover Frame */}
                      <div className="relative w-full aspect-[3/4] max-h-64 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-3 border border-stone-200 shadow-inner group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          className="max-h-full object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.25)] rounded-md transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className={`absolute top-2 left-2 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border shadow-xs ${book.badgeClass}`}>
                          {book.pillar}
                        </span>
                      </div>

                      {/* Title & Author */}
                      <div className="mt-4">
                        <h3 className="font-display font-extrabold text-slate-900 text-lg leading-snug">
                          {book.title}
                        </h3>
                        <p className="text-xs text-purple-900 font-semibold mt-0.5">
                          {book.author} <span className="text-slate-400 font-normal">{book.coAuthor}</span>
                        </p>
                        <p className="text-[11px] text-slate-500 italic mt-0.5">
                          {book.subtitle}
                        </p>
                      </div>

                      {/* Sticky Quote */}
                      <div className="mt-3.5 bg-[#fef08a] p-3 rounded-lg border border-yellow-300 shadow-xs rotate-[-0.5deg]">
                        <p className="font-handwritten text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                          &ldquo;{book.quote}&rdquo;
                        </p>
                      </div>

                      {/* Engineering Impact */}
                      <div className="mt-3 bg-purple-50/70 p-3 rounded-xl border border-purple-200/60 text-xs text-slate-700">
                        <span className="font-bold text-purple-900 block text-[11px] mb-1">
                          ⚡ Relevansi Rekayasa Sistem:
                        </span>
                        <p className="text-[11px] leading-relaxed text-slate-600">
                          {book.personalImpact}
                        </p>
                      </div>
                    </div>

                    {/* View Reading Notes Button */}
                    <div className="mt-4 pt-3 border-t border-stone-200">
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="w-full py-2 px-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-sans text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-95 cursor-pointer"
                      >
                        <i className="fa-solid fa-book-open text-xs"></i>
                        <span>Buka Catatan Pembelajaran</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 7: Books to Certifications
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-books-to-certifications.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: CertificationsSection (8 Cards)
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#EFECE4]" id="certifications">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="font-handwritten text-purple-700 text-2xl font-bold">Verified Credentials</span>
                  <h2 className="text-3xl font-display font-extrabold text-slate-900">
                    Sertifikasi &amp; Pelatihan Profesional
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Pengakuan kompetensi dari institusi global, kementerian, dan balai vokasi nasional dalam bidang Kecerdasan Buatan, IT Support, Pengolahan Data Spreadsheet, dan Keselamatan Kerja (K3).
                </p>
              </div>

              {/* Comprehensive Credentials Grid - Clickable to Provider Pages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {CERTIFICATES_DATA.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Klik untuk membuka sertifikat asli dari ${cert.providerName} (Tab Baru)`}
                    className="group bg-white p-5 rounded-2xl shadow-paper border border-purple-100 hover:border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${cert.iconBg} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-xs`}>
                          <i className={cert.icon}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-purple-800 transition-colors flex items-center gap-1.5">
                            <span className="truncate">{cert.title}</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-purple-400 opacity-60 group-hover:opacity-100 group-hover:text-purple-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"></i>
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className={`${cert.categoryColor} font-semibold truncate mr-2`}>
                        {cert.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <i className="fa-solid fa-circle-check text-emerald-500"></i>
                        <span>Resmi</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Verified Certificate Drive Archive Link */}
              <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-purple-200 shadow-sm">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                    <i className="fa-solid fa-folder-open"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Arsip Dokumen &amp; Sertifikat Digital Terverifikasi</h5>
                    <p className="text-xs text-slate-600">Seluruh dokumen PDF bertanda tangan digital resmi penyelenggara (BSrE, Kemnaker, Coursera) tersimpan di Google Drive.</p>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1V9izCpYLOhobTcPBbF3nS8GQdKtIMieR?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm hover:scale-102 shrink-0 cursor-pointer"
                >
                  <i className="fa-brands fa-google-drive text-amber-300"></i>
                  <span>Buka Semua Dokumen di Drive</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             Realistic Torn Paper Transition 8: Certifications to Contact
          ═════════════════════════════════════════════════════════════ */}
          <div className="relative w-full z-20 -my-1 pointer-events-none select-none overflow-hidden">
            <img
              src="/assets/torn-certifications-to-contact.png"
              alt="Sobekan Kertas Realistis"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: ContactSection
          ═════════════════════════════════════════════════════════════ */}
          <section className="py-20 relative overflow-hidden" id="contact">
            
            {/* Paper plane doodle in background */}
            <div className="absolute top-12 left-10 opacity-70 hidden sm:block pointer-events-none">
              <svg className="-rotate-12" fill="none" height="60" viewBox="0 0 100 80" width="80">
                <path d="M10 50 Q 40 20 80 15" fill="none" stroke="#7c3aed" strokeDasharray="3 3" strokeWidth="2"></path>
                <path d="M80 15 L70 28 L85 22 L92 10 Z" fill="#5B2C91"></path>
              </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-purple-200">
                
                {/* Washi Tape stickers */}
                <div className="washi-tape-purple absolute -top-4 left-1/4 w-36 h-6 rotate-[-2deg] z-10"></div>
                <div className="washi-tape-tan absolute -bottom-3 right-1/4 w-36 h-6 rotate-2 z-10"></div>

                <div className="text-center max-w-xl mx-auto">
                  <span className="font-handwritten text-purple-700 text-3xl font-bold">Let&apos;s Connect &amp; Collaborate!</span>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-1">
                    Siap Berkolaborasi Bersama Elga
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                    Terbuka untuk kesempatan karir <strong>Full Stack Developer</strong>, <strong>Photoshop &amp; Video Editor</strong>, <strong>IT Operations Officer</strong>, <strong>System / Database Operator</strong>, <strong>AI / ML Engineer</strong>, maupun kolaborasi proyek kreatif dan teknologi.
                  </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
                  
                  {/* WhatsApp Card */}
                  <a className="p-5 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 transition group flex flex-col items-center" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">WhatsApp Langsung</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">085238208849</p>
                    <span className="text-xs font-semibold text-emerald-700 mt-2">Chat Sekarang →</span>
                  </a>

                  {/* Email Card */}
                  <a className="p-5 rounded-2xl bg-purple-50/80 hover:bg-purple-100 border border-purple-200 transition group flex flex-col items-center" href={`mailto:${EMAIL_ADDRESS}`}>
                    <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">Email Resmi</h4>
                    <p className="text-xs text-slate-600 mt-1 truncate max-w-full font-mono">{EMAIL_ADDRESS}</p>
                    <span className="text-xs font-semibold text-purple-700 mt-2">Kirim Pesan →</span>
                  </a>

                  {/* LinkedIn Card */}
                  <a className="p-5 rounded-2xl bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200 transition group flex flex-col items-center" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mt-3">LinkedIn Profile</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">elga-alfareza</p>
                    <span className="text-xs font-semibold text-indigo-700 mt-2">Terhubung di LinkedIn →</span>
                  </a>

                </div>

                {/* Download CV Banner */}
                <div className="mt-8 text-center">
                  <a 
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-900 hover:to-indigo-900 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5" 
                    href={`mailto:${EMAIL_ADDRESS}?subject=Permintaan%20Curriculum%20Vitae%20-%20Elga%20Alfareza`}
                  >
                    <i className="fa-solid fa-download"></i>
                    <span>Request / Download Curriculum Vitae</span>
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════
             BEGIN: MainFooter
          ═════════════════════════════════════════════════════════════ */}
          <footer className="bg-slate-900 text-slate-300 py-12 border-t border-purple-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex items-center gap-3">
                  <div className="bg-purple-700 text-white font-display text-lg px-3 py-1 rounded-lg">
                    elga&apos;s PORTFOLIO
                  </div>
                  <span className="text-xs text-slate-400">
                    © 2026 Elga Alfareza, S.Kom. • Universitas Bumigora • Mataram, NTB
                  </span>
                </div>

                <div className="font-handwritten text-purple-300 text-xl font-bold tracking-wide">
                  ✨ Dream it • Code it • Innovate it ✨
                </div>

                <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-purple-700 text-purple-300 hover:text-white flex items-center justify-center transition border border-slate-700" href="#hero">
                  <i className="fa-solid fa-arrow-up text-xs"></i>
                </a>

              </div>
            </div>
          </footer>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
         STUDIO PHOTO MODAL
      ───────────────────────────────────────────────────────────── */}
      {showStudioModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowStudioModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowStudioModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup popup"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-xl overflow-hidden border-2 border-stone-300 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/elga-graduation-studio.jpg"
                  alt="Elga Alfareza, S.Kom. - Wisudawan Universitas Bumigora"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E2DAF5] text-[#341B66] font-mono text-xs font-bold w-fit mb-2">
                  🎓 Cum Laude (IPK 3.76)
                </div>
                <h3 className="font-sans text-xl font-black text-stone-900">
                  Elga Alfareza, S.Kom.
                </h3>
                <p className="font-mono text-xs text-[#583FA2] font-bold mt-0.5">
                  FULL STACK DEVELOPER • MULTIMEDIA &amp; AI SPECIALIST
                </p>

                <div className="flex flex-col gap-2 mt-4 font-sans text-xs text-stone-700">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pendidikan Resmi:</p>
                    <p>S1 Teknik Informatika — Universitas Bumigora (2024)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Publikasi Ilmiah:</p>
                    <p>Jurnal SINTA 4: Convolutional Neural Network Aksara Sasak (94.6%)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                    <p className="font-bold text-stone-900">Pengalaman Kunci:</p>
                    <p>CV Rajawali (Simbank 99.9%), CV Sinar Mutiara Bali (QC), IPHI, Kampus Mengajar 7</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#5B2C91] hover:bg-[#4C2882] text-white font-sans text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Buka Arsip Ijazah &amp; Riset
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         FAVORITE BOOK NOTES MODAL
      ───────────────────────────────────────────────────────────── */}
      {selectedBook && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-10"
              aria-label="Tutup catatan buku"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Book Cover */}
              <div className="sm:col-span-4 flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden bg-white p-3 border-2 border-stone-300 shadow-lg w-full max-w-[180px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-auto object-contain drop-shadow-md rounded"
                  />
                </div>
                <span className={`mt-3 text-xs font-bold font-mono px-3 py-1 rounded-full border shadow-xs ${selectedBook.badgeClass}`}>
                  {selectedBook.pillar}
                </span>
              </div>

              {/* Book Info & Takeaways */}
              <div className="sm:col-span-8 flex flex-col">
                <span className="font-handwritten text-purple-700 text-lg font-bold">Catatan Pembelajaran</span>
                <h3 className="font-display text-2xl font-black text-stone-900 leading-tight">
                  {selectedBook.title}
                </h3>
                <p className="font-sans text-xs text-purple-900 font-bold mt-0.5">
                  {selectedBook.author} {selectedBook.coAuthor && `• ${selectedBook.coAuthor}`}
                </p>
                <p className="font-sans text-xs text-stone-500 italic mt-0.5">
                  {selectedBook.subtitle}
                </p>

                {/* Quote Box */}
                <div className="mt-4 bg-[#fef08a] p-3 rounded-xl border border-yellow-300 shadow-xs">
                  <p className="font-handwritten text-slate-800 text-sm font-semibold leading-relaxed">
                    &ldquo;{selectedBook.quote}&rdquo;
                  </p>
                </div>

                {/* Personal Impact */}
                <div className="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-slate-700">
                  <strong className="text-purple-900 block mb-1">Dampak dalam Rekayasa &amp; Operasional:</strong>
                  <p className="leading-relaxed">{selectedBook.personalImpact}</p>
                </div>

                {/* 3 Core Takeaways */}
                <div className="mt-4 space-y-2">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                    3 Inti Pembelajaran:
                  </span>
                  {selectedBook.coreTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                      <p className="font-bold text-stone-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                        {takeaway.label}
                      </p>
                      <p className="text-stone-600 text-[11px] mt-0.5 pl-3">{takeaway.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         ACTIVITY PHOTO LIGHTBOX MODAL
      ───────────────────────────────────────────────────────────── */}
      {activePhoto !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FAF7F2] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-stone-300 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-base transition-colors cursor-pointer z-20"
              aria-label="Tutup lightbox"
            >
              ✕
            </button>

            {/* Header info */}
            <div className="flex items-center justify-between pr-10 mb-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                Dokumentasi Kegiatan #{String(activePhoto + 1).padStart(2, '0')} dari {ACTIVITY_PHOTOS.length}
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm ${ACTIVITY_PHOTOS[activePhoto].tagColor}`}>
                {ACTIVITY_PHOTOS[activePhoto].tag}
              </span>
            </div>

            {/* Main Image Frame with Polaroid Styling */}
            <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center border-2 border-stone-300 shadow-xl max-h-[55vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ACTIVITY_PHOTOS[activePhoto].url}
                alt={ACTIVITY_PHOTOS[activePhoto].title}
                className="w-full h-auto max-h-[55vh] object-contain"
              />

              {/* Prev / Next navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePhoto((activePhoto - 1 + ACTIVITY_PHOTOS.length) % ACTIVITY_PHOTOS.length)
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Foto sebelumnya"
              >
                ◀
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePhoto((activePhoto + 1) % ACTIVITY_PHOTOS.length)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer text-sm"
                aria-label="Foto berikutnya"
              >
                ▶
              </button>
            </div>

            {/* Caption & Context Card */}
            <div className="mt-4 bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                <h3 className="font-display font-extrabold text-slate-900 text-lg">
                  {ACTIVITY_PHOTOS[activePhoto].title}
                </h3>
                <span className="text-xs font-semibold text-purple-900">
                  {ACTIVITY_PHOTOS[activePhoto].category}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ACTIVITY_PHOTOS[activePhoto].description}
              </p>
            </div>

            {/* Quick Thumbnail Strip */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
              {ACTIVITY_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhoto(idx)
                  }}
                  className={`w-14 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhoto === idx ? 'border-purple-600 ring-2 ring-purple-300 scale-105' : 'border-stone-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
         PROJECT UI SHOWCASE & SCREENSHOT LIGHTBOX MODAL
      ───────────────────────────────────────────────────────────── */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            setSelectedProject(null)
            setActiveProjectScreenshotIdx(0)
            setModalActiveTab('overview')
          }}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#FAF7F2] text-stone-900 rounded-3xl p-4 sm:p-7 shadow-2xl border-2 border-stone-300 max-h-[94vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null)
                setActiveProjectScreenshotIdx(0)
                setModalActiveTab('overview')
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center font-bold text-base transition-colors cursor-pointer z-20 shadow-sm"
              aria-label="Tutup showcase proyek"
            >
              ✕
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 pr-10 mb-2">
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${selectedProject.badgeColor}`}>
                {selectedProject.badge}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                {selectedProject.category}
              </span>
              {selectedProject.prd && (
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                  <i className="fa-solid fa-shield-halved text-[11px] text-emerald-700"></i>
                  <span>Enterprise K3 Verified</span>
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-900 font-semibold mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Quick Action Link Pills */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-purple-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-xs"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                  <span>GitHub</span>
                </a>
                {selectedProject.prdUrl && (
                  <a
                    href={selectedProject.prdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300 text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-xs"
                  >
                    <i className="fa-solid fa-file-lines text-xs text-purple-700"></i>
                    <span>PRD.md</span>
                  </a>
                )}
                {selectedProject.archUrl && (
                  <a
                    href={selectedProject.archUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl transition shadow-xs"
                  >
                    <i className="fa-solid fa-sitemap text-xs text-amber-700"></i>
                    <span>Arsitektur</span>
                  </a>
                )}
              </div>
            </div>

            {/* Screenshot Display Frame */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="space-y-3 mb-5">
                {/* Screenshot Tab Selector */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {selectedProject.screenshots.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveProjectScreenshotIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                        activeProjectScreenshotIdx === idx
                          ? 'bg-purple-700 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-purple-50 border border-stone-200'
                      }`}
                    >
                      <i className={s.type === 'mobile' ? 'fa-solid fa-mobile-screen' : 'fa-solid fa-display'}></i>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>

                {/* Main Screenshot Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border-2 border-stone-300 shadow-xl max-h-[55vh] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProject.screenshots[activeProjectScreenshotIdx]?.url || selectedProject.previewImage}
                    alt={selectedProject.screenshots[activeProjectScreenshotIdx]?.label || selectedProject.title}
                    className="w-full h-auto max-h-[55vh] object-contain"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs text-white text-[11px] px-3 py-1.5 rounded-lg flex items-center justify-between">
                    <span className="font-medium truncate mr-2">
                      {selectedProject.screenshots[activeProjectScreenshotIdx]?.desc}
                    </span>
                    <span className="font-mono text-[10px] text-purple-300 shrink-0">
                      {activeProjectScreenshotIdx + 1} / {selectedProject.screenshots.length}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Tabs Bar for Rich Showcase */}
            {selectedProject.prd ? (
              <div className="mb-4">
                <div className="flex items-center gap-1 sm:gap-2 p-1 bg-stone-200/80 rounded-2xl overflow-x-auto border border-stone-300">
                  <button
                    onClick={() => setModalActiveTab('overview')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      modalActiveTab === 'overview'
                        ? 'bg-purple-700 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <i className="fa-solid fa-list-check"></i>
                    <span>Ringkasan &amp; Modul Fitur</span>
                  </button>
                  <button
                    onClick={() => setModalActiveTab('prd')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      modalActiveTab === 'prd'
                        ? 'bg-purple-700 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <i className="fa-solid fa-bullseye"></i>
                    <span>PRD &amp; Filosofi K3</span>
                  </button>
                  <button
                    onClick={() => setModalActiveTab('workflow')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      modalActiveTab === 'workflow'
                        ? 'bg-purple-700 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <i className="fa-solid fa-network-wired"></i>
                    <span>Cara Kerja &amp; Alur</span>
                  </button>
                  <button
                    onClick={() => setModalActiveTab('tech')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      modalActiveTab === 'tech'
                        ? 'bg-purple-700 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <i className="fa-solid fa-code"></i>
                    <span>Bahasa &amp; Tech Stack</span>
                  </button>
                </div>
              </div>
            ) : null}

            {/* TAB CONTENT: TAB 1 (OVERVIEW & FULL FEATURES) */}
            {(!selectedProject.prd || modalActiveTab === 'overview') && (
              <div className="space-y-4">
                {/* Executive Overview Box */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-sm sm:text-base">
                        <i className="fa-solid fa-circle-info text-purple-600"></i> Deskripsi Sistem &amp; Latar Belakang
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div className="md:w-72 shrink-0 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                      <h5 className="font-bold text-slate-900 mb-2 text-xs flex items-center gap-1.5">
                        <i className="fa-solid fa-layer-group text-purple-600"></i> Stack Inti:
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="bg-white text-purple-900 border border-purple-200 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* If fullFeatures array exists (MineGate), render 4 detailed module cards */}
                {selectedProject.fullFeatures ? (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                        <i className="fa-solid fa-cubes text-amber-500"></i> Modul &amp; Fitur Operasional Lengkap
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500">
                        {selectedProject.fullFeatures.length} Modul Terintegrasi
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.fullFeatures.map((m, idx) => (
                        <div key={idx} className="bg-white p-4.5 rounded-2xl border border-stone-200 shadow-xs hover:border-purple-300 transition-colors">
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <h5 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                              <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center text-xs shrink-0">
                                <i className={m.icon}></i>
                              </span>
                              <span className="truncate">{m.module}</span>
                            </h5>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${m.badgeColor}`}>
                              {m.badge}
                            </span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {m.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <i className="fa-solid fa-circle-check text-emerald-600 text-[11px] mt-0.5 shrink-0"></i>
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard highlights for other projects */
                  <div className="bg-white p-5 rounded-2xl border border-stone-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-sm">
                      <i className="fa-solid fa-star text-amber-500"></i> Fitur Utama &amp; Keunggulan
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-emerald-600 text-xs mt-0.5 shrink-0"></i>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: TAB 2 (PRD & FILOSOFI K3) */}
            {selectedProject.prd && modalActiveTab === 'prd' && (
              <div className="space-y-4">
                {/* Philosophy & Background Banner */}
                <div className="bg-gradient-to-br from-amber-50 via-white to-purple-50 p-5 rounded-2xl border-2 border-amber-300/80 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-200/60">
                    <h4 className="font-black text-amber-950 text-sm sm:text-base flex items-center gap-2">
                      <i className="fa-solid fa-compass-drafting text-amber-600"></i> Latar Belakang &amp; Filosofi Sistem
                    </h4>
                    <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-mono text-xs font-extrabold px-3 py-1 rounded-full shadow-2xs">
                      <i className="fa-solid fa-bolt text-[11px]"></i> {selectedProject.prd.targetSLA}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    “{selectedProject.prd.philosophy}”
                  </p>
                </div>

                {/* 3 Problem Statements Grid */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-triangle-exclamation text-rose-600"></i> Problem Statements &amp; Tantangan Utama
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProject.prd.problemStatements.map((prob, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-sm shrink-0">
                              <i className={prob.icon}></i>
                            </span>
                            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-stone-200">
                              {prob.badge}
                            </span>
                          </div>
                          <h5 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight mb-1.5">
                            {prob.title}
                          </h5>
                          <p className="text-slate-600 text-xs leading-relaxed">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 User Personas / Roles */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-users text-purple-600"></i> Aktor &amp; Peran Pengguna (User Roles)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProject.prd.userRoles.map((role, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                        <div className="mb-2.5">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${role.badgeColor}`}>
                            {role.badge}
                          </span>
                          <h5 className="font-bold text-slate-900 text-xs sm:text-sm mt-1">
                            {role.role}
                          </h5>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {role.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <i className="fa-solid fa-caret-right text-purple-600 text-xs mt-0.5 shrink-0"></i>
                              <span className="leading-snug">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: TAB 3 (CARA KERJA & ALUR OPERASIONAL) */}
            {selectedProject.workflow && modalActiveTab === 'workflow' && (
              <div className="space-y-4">
                {/* Primary Workflow Sequence */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md ${selectedProject.workflow.primaryColor || 'bg-emerald-600'} text-white flex items-center justify-center text-xs`}>
                        <i className={selectedProject.workflow.primaryIcon || 'fa-solid fa-right-to-bracket'}></i>
                      </span>
                      <span>{selectedProject.workflow.primaryTitle || 'Alur Operasional Utama'}</span>
                    </h4>
                    <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {selectedProject.workflow.primaryBadge || 'Core Pipeline'}
                    </span>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 ${(selectedProject.workflow.primarySteps || selectedProject.workflow.checkInSteps || []).length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-2.5`}>
                    {(selectedProject.workflow.primarySteps || selectedProject.workflow.checkInSteps || []).map((s, idx, arr) => (
                      <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-mono text-xs font-black px-1.5 py-0.5 rounded ${selectedProject.workflow.primaryStepColor || 'text-emerald-700 bg-emerald-100'}`}>
                              {s.step}
                            </span>
                            {idx < arr.length - 1 && <i className="fa-solid fa-arrow-right text-[10px] text-stone-400 hidden lg:block"></i>}
                          </div>
                          <h6 className="font-bold text-slate-900 text-xs mb-1 leading-tight">
                            {s.name}
                          </h6>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Workflow Sequence */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md ${selectedProject.workflow.secondaryColor || 'bg-purple-600'} text-white flex items-center justify-center text-xs`}>
                        <i className={selectedProject.workflow.secondaryIcon || 'fa-solid fa-right-from-bracket'}></i>
                      </span>
                      <span>{selectedProject.workflow.secondaryTitle || 'Alur Pemrosesan Lanjutan'}</span>
                    </h4>
                    <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-md">
                      {selectedProject.workflow.secondaryBadge || 'Execution Pipeline'}
                    </span>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 ${(selectedProject.workflow.secondarySteps || selectedProject.workflow.checkOutSteps || []).length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-2.5`}>
                    {(selectedProject.workflow.secondarySteps || selectedProject.workflow.checkOutSteps || []).map((s, idx, arr) => (
                      <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-mono text-xs font-black px-1.5 py-0.5 rounded ${selectedProject.workflow.secondaryStepColor || 'text-purple-700 bg-purple-100'}`}>
                              {s.step}
                            </span>
                            {idx < arr.length - 1 && <i className="fa-solid fa-arrow-right text-[10px] text-stone-400 hidden lg:block"></i>}
                          </div>
                          <h6 className="font-bold text-slate-900 text-xs mb-1 leading-tight">
                            {s.name}
                          </h6>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Layered Backend Architecture */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-cubes-stacked text-purple-600"></i> Arsitektur Sistem Terlapis (Layered Resilience)
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.workflow.backendArchitecture.map((arch, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h6 className="font-bold text-slate-900 text-xs sm:text-sm">
                            {arch.layer}
                          </h6>
                          <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                            {arch.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: TAB 4 (BAHASA & TECH STACK DETAILS) */}
            {selectedProject.techStackDetails && modalActiveTab === 'tech' && (
              <div className="space-y-4">
                {/* 5 Stack Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.techStackDetails.map((cat, idx) => (
                    <div key={idx} className="bg-white p-4.5 rounded-2xl border border-stone-200 shadow-xs">
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-2.5 flex items-center gap-2">
                        <i className={`${cat.icon} ${cat.color}`}></i>
                        <span>{cat.category}</span>
                      </h5>
                      <div className="space-y-2">
                        {cat.items.map((it, i) => (
                          <div key={i} className="text-xs border-b border-stone-100 pb-1.5 last:border-b-0 last:pb-0">
                            <span className="font-mono font-bold text-slate-900 text-[11px] bg-stone-100 px-1.5 py-0.5 rounded mr-1.5">
                              {it.name}
                            </span>
                            <span className="text-slate-600 text-[11px] leading-relaxed">
                              — {it.role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Database / Persistence / State Store Spec */}
                {selectedProject.databaseSchema && (
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                        <i className="fa-solid fa-table-cells text-emerald-600"></i> {selectedProject.databaseSchema.title}
                      </h5>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                        {selectedProject.databaseSchema.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {selectedProject.databaseSchema.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {selectedProject.databaseSchema.tables.map((t, idx) => (
                        <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <span className="font-mono font-bold text-purple-900 block mb-1">
                            {t.name}
                          </span>
                          <p className="text-[11px] font-mono text-slate-600">
                            {t.fields}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Modal Footer with Direct Repositories & Docs Links */}
            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-purple-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                  <span>Buka Repositori GitHub</span>
                </a>
                {selectedProject.prdUrl && (
                  <a
                    href={selectedProject.prdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 font-bold text-xs px-3.5 py-2.5 rounded-xl transition shadow-2xs"
                  >
                    <i className="fa-solid fa-file-lines text-purple-700"></i>
                    <span>Baca Dokumen PRD</span>
                  </a>
                )}
                {selectedProject.archUrl && (
                  <a
                    href={selectedProject.archUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 font-bold text-xs px-3.5 py-2.5 rounded-xl transition shadow-2xs"
                  >
                    <i className="fa-solid fa-sitemap text-amber-600"></i>
                    <span>Arsitektur Sistem</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null)
                  setActiveProjectScreenshotIdx(0)
                  setModalActiveTab('overview')
                }}
                className="bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer"
              >
                Tutup Modal
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
