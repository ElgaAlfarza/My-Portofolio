# Checklist Final Sebelum Deploy ke Vercel

Dokumen ini berisi panduan verifikasi akhir sebelum kamu menghubungkan repository GitHub ke Vercel untuk deployment produksi.

---

## 1. Daftar Environment Variables di Vercel Dashboard

Buka dashboard project kamu di **Vercel** → **Settings** → **Environment Variables**, lalu tambahkan variable berikut (pilih target environment: **Production**, **Preview**, dan **Development**):

| Nama Environment Variable | Deskripsi & Format | Contoh Format Dummy |
|---|---|---|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Email Service Account dari Google Cloud Console IAM | `portfolio-bot@my-project-12345.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | Private Key RSA dari file JSON service account key (paste persis termasuk `\n` dan header/footer) | `"-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA0...\n-----END RSA PRIVATE KEY-----\n"` |
| `GOOGLE_DRIVE_FOLDER_ID` | ID folder Google Drive tempat foto disimpan (dari URL folder) | `1aBcDeFgHiJkLmNoPqRsTuVwXyZ12345` |
| `ADMIN_PASSWORD` | Password rahasia kamu untuk login ke halaman `/admin/login` | `KombinasiKuat@2025#Portfolio!` |
| `SESSION_SECRET` | Kunci enkripsi cookie sesi (string acak minimal 32 karakter) | `e4b2c9a8f1034d6789bcefa1234567890123456789abcdef0123456789abcdef` |

> ⚠️ **Catatan Khusus `GOOGLE_PRIVATE_KEY`:**  
> Jika kamu meng-copy nilai `private_key` dari file JSON, pastikan tanda kutip ganda `"` disertakan atau karakter newline `\n` tidak terhapus. Kode backend di `src/lib/googleDrive.js` sudah dilengkapi auto-replace `.replace(/\\n/g, '\n')` untuk menjaga format key tetap valid di Vercel.

---

## 2. Verifikasi Keamanan Credential (.gitignore)

Pastikan file credential lokal tidak pernah masuk ke repository git:

- [x] `.env` terdaftar di `.gitignore`
- [x] `.env.local` terdaftar di `.gitignore`
- [x] `.env.production` terdaftar di `.gitignore`
- [x] File JSON Service Account (`*.json`) **TIDAK** diletakkan di dalam folder project (simpan di luar folder atau password manager).

Cek status git lokal sebelum commit:
```bash
git status
```
*Pastikan tidak ada file berakhiran `.env` atau `.json` kredensial yang muncul di daftar untracked files.*

---

## 3. Cek Keamanan Endpoint Privat (Auth Guard)

Semua endpoint privat dilindungi oleh 2 lapisan: **Next.js Middleware** (`src/middleware.js`) dan **Server-side Session Check** di dalam route handler.

- [x] **Halaman `/admin/upload` & `/admin/manage`**: Jika pengunjung belum login, otomatis di-redirect ke `/admin/login`.
- [x] **API `POST /api/admin/upload`**: Ditolak dengan status HTTP `401 Unauthorized` jika tidak ada cookie session admin yang valid.
- [x] **API `DELETE /api/admin/photos/[fileId]`**: Ditolak dengan status HTTP `401 Unauthorized` jika tidak ada cookie session admin yang valid.
- [x] **Password Protection**: Password diverifikasi di server menggunakan perbandingan `crypto.timingSafeEqual` untuk mencegah *timing attacks*.

---

## 4. Keamanan & Privasi Link Google Drive Publik

- [x] **Tidak ada link mentah Google Drive yang di-expose ke frontend.**
- [x] Endpoint publik `GET /api/photos` hanya mengembalikan:
  ```json
  [
    {
      "id": "1aBcDeFgHiJk...",
      "url": "/api/photos/1aBcDeFgHiJk...",
      "alt": "nama-foto"
    }
  ]
  ```
- [x] Gambar di-stream langsung melalui proxy internal `GET /api/photos/[fileId]`.
- [x] Dilengkapi HTTP caching header (`s-maxage=604800`) agar Vercel Edge Network menyimpan cache gambar dan tidak membebani kuota API Google Drive.

---

## 5. Skenario Pengujian Alur Lengkap (End-to-End Test)

Jalankan pengujian ini di lokal (`npm run dev`) atau di preview deployment Vercel:

1. **Test Proteksi Akses:**
   - Buka browser (mode incognito) ke `http://localhost:3000/admin/upload`.
   - Pastikan kamu langsung dialihkan ke `/admin/login`.
2. **Test Login:**
   - Masukkan password salah → pastikan muncul peringatan error "Password salah".
   - Masukkan password yang benar (sesuai `ADMIN_PASSWORD`) → berhasil masuk ke `/admin/upload`.
3. **Test Upload Foto:**
   - Drag & drop atau pilih 1–3 foto (JPG/PNG/WebP, < 5MB).
   - Pastikan thumbnail preview muncul sebelum upload.
   - Klik tombol upload → progress bar berjalan → muncul pesan sukses.
4. **Test Galeri Publik:**
   - Buka halaman utama website `http://localhost:3000`.
   - Scroll ke section "About Me" → Galeri Foto.
   - Foto yang baru kamu upload harus tampil di galeri dengan animasi drag/swipe halus.
   - Buka DevTools Network tab: perhatikan request gambar mengarah ke `/api/photos/[id]`, bukan URL googleapis.com.
5. **Test Hapus Foto:**
   - Kembali ke dashboard admin `/admin/manage`.
   - Klik ikon tong sampah pada salah satu foto → modal konfirmasi muncul.
   - Konfirmasi hapus → foto terhapus dari grid secara otomatis.
   - Refresh halaman utama website → foto tersebut sudah tidak ada lagi di galeri.
6. **Test Logout:**
   - Klik tombol "Logout" di header admin → sesi berakhir dan kamu kembali ke halaman login.
