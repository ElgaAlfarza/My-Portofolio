# Panduan Setup Google Cloud Console & Google Drive API

> Panduan ini ditulis untuk pemula. Ikuti langkah per langkah, jangan skip bagian mana pun.
> Estimasi waktu: **15–25 menit**.

---

## Daftar Isi

1. [Buat Project Baru di Google Cloud](#1-buat-project-baru)
2. [Aktifkan Google Drive API](#2-aktifkan-google-drive-api)
3. [Buat Service Account & Download JSON Key](#3-buat-service-account)
4. [Buat Folder di Google Drive & Share ke Service Account](#4-setup-folder-drive)
5. [Ambil Folder ID dari URL Drive](#5-ambil-folder-id)
6. [Daftar Environment Variable untuk Vercel](#6-environment-variables)

---

## 1. Buat Project Baru

1. Buka [https://console.cloud.google.com](https://console.cloud.google.com)
2. Login dengan akun Google kamu.
3. Di pojok kiri atas, klik dropdown nama project (biasanya tertulis **"My First Project"** atau nama lain).
4. Klik tombol **"New Project"** di pojok kanan atas popup.
5. Isi:
   - **Project name**: `portfolio-backend` (atau nama apapun, hanya label)
   - **Location**: biarkan default (*No organization*)
6. Klik **"Create"**.
7. Tunggu beberapa detik. Setelah siap, pastikan dropdown di kiri atas sudah menampilkan nama project baru kamu.

> ⚠️ **Sering salah**: Orang lupa ganti ke project yang baru dibuat sebelum lanjut. Selalu cek dropdown project di kiri atas sebelum setiap langkah.

---

## 2. Aktifkan Google Drive API

1. Di sidebar kiri, klik **"APIs & Services"** → **"Library"**.
2. Di kotak pencarian, ketik **"Google Drive API"**.
3. Klik hasil **"Google Drive API"** (logo Drive berwarna).
4. Klik tombol biru **"Enable"**.
5. Tunggu hingga halaman pindah ke dashboard API tersebut — artinya sudah aktif.

> ⚠️ **Sering salah**: Mengaktifkan "Google Drive" yang lain (misalnya Google Workspace API). Pastikan nama persis **"Google Drive API"**.

---

## 3. Buat Service Account & Download JSON Key

Service Account adalah "akun robot" yang akan mewakili aplikasi kamu mengakses Drive — tanpa perlu login manual.

### 3a. Buat Service Account

1. Di sidebar, klik **"APIs & Services"** → **"Credentials"**.
2. Klik **"+ Create Credentials"** → pilih **"Service account"**.
3. Isi:
   - **Service account name**: `portfolio-drive-access`
   - **Service account ID**: otomatis terisi, biarkan saja
4. Klik **"Create and Continue"**.
5. Di bagian **"Grant this service account access to project"**:
   - Klik dropdown **"Select a role"**
   - Cari dan pilih **"Editor"** (di bawah kategori Basic)
6. Klik **"Continue"** → klik **"Done"**.

### 3b. Generate JSON Key

1. Kamu akan melihat service account baru di daftar. Klik **email** service account tersebut (terlihat seperti: `portfolio-drive-access@project-name.iam.gserviceaccount.com`).
2. Klik tab **"Keys"**.
3. Klik **"Add Key"** → **"Create new key"**.
4. Pilih format **JSON** → klik **"Create"**.
5. File JSON akan otomatis ter-download ke komputermu. **Simpan baik-baik, file ini tidak bisa di-download ulang!**

> ⚠️ **PERINGATAN KEAMANAN**: File JSON ini berisi private key yang bisa mengakses Drive-mu. **Jangan pernah**:
> - Commit file ini ke GitHub
> - Paste isinya di chat/forum
> - Taruh di folder public project
>
> Simpan di tempat aman (misalnya password manager). Kita hanya akan mengambil 2 nilai dari dalamnya untuk dimasukkan ke Vercel.

---

## 4. Buat Folder di Google Drive & Share ke Service Account

### 4a. Buat Folder

1. Buka [https://drive.google.com](https://drive.google.com).
2. Klik **"+ New"** → **"New folder"**.
3. Beri nama: `portfolio-assets` (atau nama apapun — ini nama folder di Drive).
4. Klik **"Create"**.

### 4b. Share Folder ke Service Account

1. **Klik kanan** folder `portfolio-assets` → pilih **"Share"**.
2. Di kolom "Add people and groups", paste **email service account** kamu.
   - Email service account terlihat di Google Cloud Console, formatnya: `nama@nama-project.iam.gserviceaccount.com`
   - Juga ada di file JSON yang kamu download, di field `"client_email"`
3. Pastikan role-nya **"Editor"** (bukan Viewer).
4. **Hapus centang** "Notify people" (service account tidak punya inbox email).
5. Klik **"Share"**.

> ⚠️ **Sering salah #1**: Mengatur role sebagai "Viewer" — service account tidak bisa upload/hapus file.
>
> ⚠️ **Sering salah #2**: Share ke email Google pribadi kamu, bukan ke email service account. Email service account **pasti berakhiran `.iam.gserviceaccount.com`**.

---

## 5. Ambil Folder ID dari URL Google Drive

1. Buka folder `portfolio-assets` yang baru kamu buat (double-click untuk masuk ke dalam folder).
2. Lihat URL di browser. Formatnya seperti ini:
   ```
   https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ
   ```
3. Bagian setelah `/folders/` adalah **Folder ID** kamu.
   - Contoh di atas: `1aBcDeFgHiJkLmNoPqRsTuVwXyZ`
4. Copy nilai ini — akan dipakai sebagai `GOOGLE_DRIVE_FOLDER_ID`.

---

## 6. Environment Variables untuk Vercel

Buka file JSON key yang kamu download tadi dengan text editor (Notepad / VS Code). Kamu akan butuh nilai dari beberapa field di dalamnya.

Berikut daftar **semua environment variable** yang harus kamu tambahkan di Vercel dashboard (**Settings → Environment Variables**):

---

### `GOOGLE_SERVICE_ACCOUNT_EMAIL`
**Ambil dari**: field `"client_email"` di file JSON

**Format**:
```
portfolio-drive-access@nama-project-kamu.iam.gserviceaccount.com
```

---

### `GOOGLE_PRIVATE_KEY`
**Ambil dari**: field `"private_key"` di file JSON

**Format** (perhatikan format dengan seksama):
```
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA1234....(banyak karakter)....5678
-----END RSA PRIVATE KEY-----
```

> ⚠️ **INI BAGIAN YANG PALING SERING SALAH:**
>
> Di dalam file JSON, private key terlihat seperti ini (dengan karakter `\n` literal):
> ```json
> "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEow...\n-----END RSA PRIVATE KEY-----\n"
> ```
>
> Ketika kamu paste ke Vercel environment variable:
> - **JANGAN** paste karakter `\n` secara literal
> - **PASTE persis seperti yang ada di JSON**, termasuk karakter `\n` — Vercel akan otomatis mengubahnya jadi baris baru
> - Alternatif lebih aman: buka file JSON, copy nilai `private_key` **termasuk tanda kutip** luar, lalu paste ke Vercel
>
> Kode kita akan handle konversi `\n` → newline otomatis di `lib/googleDrive.js`.

---

### `GOOGLE_DRIVE_FOLDER_ID`
**Ambil dari**: URL folder Drive (lihat langkah 5)

**Format** (hanya ID-nya saja, tanpa URL):
```
1aBcDeFgHiJkLmNoPqRsTuVwXyZ
```

---

### `ADMIN_PASSWORD`
**Dibuat sendiri oleh kamu** — password untuk login ke halaman admin portfolio.

**Syarat**:
- Minimal 12 karakter
- Kombinasi huruf, angka, simbol
- **Jangan gunakan password yang sama dengan akun lain**

**Format**:
```
P@ssw0rd-portofolioKu-2024!
```

---

### `SESSION_SECRET`
**Dibuat sendiri** — kunci rahasia untuk enkripsi session cookie admin.

**Cara generate** (jalankan di terminal):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Format** (string hex 64 karakter):
```
a1b2c3d4e5f6....(64 karakter acak)
```

> ⚠️ **Jangan gunakan string pendek atau mudah ditebak.** Session secret yang lemah membuat session cookie bisa dipalsukan.

---

### Ringkasan Semua Variable

| Nama Variable | Sumber | Contoh Format |
|---|---|---|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | File JSON → `client_email` | `xxx@project.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | File JSON → `private_key` | `-----BEGIN RSA PRIVATE KEY-----\n...` |
| `GOOGLE_DRIVE_FOLDER_ID` | URL Google Drive | `1aBcDeFgHiJkLmNoPqRsTuVwXyZ` |
| `ADMIN_PASSWORD` | Buat sendiri | `P@ssw0rd-Ku-2024!` |
| `SESSION_SECRET` | Generate dengan node crypto | `a1b2c3...` (64 char hex) |

---

## Checklist Sebelum Lanjut Coding

- [ ] Project Google Cloud sudah dibuat dan aktif
- [ ] Google Drive API sudah di-enable di project tersebut
- [ ] Service Account sudah dibuat dengan role Editor
- [ ] File JSON key sudah di-download dan disimpan aman
- [ ] Folder `portfolio-assets` sudah dibuat di Google Drive
- [ ] Folder sudah di-share ke email service account dengan role **Editor**
- [ ] Folder ID sudah dicopy dari URL Drive
- [ ] Semua 5 environment variable sudah siap nilainya (belum perlu di-input ke Vercel dulu)
- [ ] File JSON key **tidak** ada di dalam folder project

---

*Lanjut ke langkah coding setelah semua checklist di atas selesai.*
