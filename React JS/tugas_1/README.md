# LUMINA Studio — Tugas 1 Pemrograman React JS

Aplikasi web modern berstandar agensi digital kreatif yang dibangun menggunakan **React 19**, **Vite 8**, dan **Bootstrap 5** dengan konsep estetika *Dark Glassmorphism*.

Proyek ini disusun untuk memenuhi **Tugas 1** pada mata kuliah **Pemrograman React JS** (Program Studi Independen Bersertifikat / MSIB 2026).

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS
- **Lokasi Folder Proyek** : `React JS/tugas_1` (Folder tunggal resmi)

---

## Konsep Desain & Tema Website
Website ini mengusung tema **Lumina Creative & Technology Studio** — studio digital visioner yang merancang arsitektur web modern, antarmuka imersif, dan sistem cerdas:
- **Dark Glassmorphism Aesthetic**: Latar belakang deep obsidian (`#090d16`) berpadu dengan aksen radiant gradient (Electric Violet `#8b5cf6`, Cyan `#06b6d4`, Indigo `#6366f1`, dan Rose `#ec4899`).
- **Komponen Modular & Reusable Props**: Komponen `Navbar`, `Footer`, `FeatureCard`, dan `TeamCard` dirancang terpisah dan modular memanfaatkan alur props React.
- **Tipografi & Micro-Interactions**: Menggunakan font modern *Plus Jakarta Sans*, kartu dengan efek hover lift & glow, dan tombol gradient bercahaya.

---

## Halaman Utama

1. **Halaman Home (`#home`)**
   - **Navbar Glassmorphism**: Brand logo Lumina dengan badge studio, tautan navigasi responsif, dan CTA "Let's Collaborate".
   - **Hero Section**: Judul inspiratif *"We Architect Digital Futures & Immersive Realities"*, deskripsi studio, CTA ganda, dan ilustrasi vektor SVG studio canvas kustom.
   - **Core Capabilities (3 Feature Cards)**: Next-Gen Web Architecture, Immersive UI/UX & Glassmorphism, serta AI Workflows & Cloud Innovation.
   - **Studio Live Metrics**: 120+ Product Launches, 99.8% CSAT, 42ms Render Speed, dan 18+ Design Awards.
   - **Call To Action Banner**: Banner bercahaya dengan ajakan kolaborasi proyek.

2. **Halaman Team (`#team`)**
   - **The Visionaries**: Menampilkan profil 4 kreator studio menggunakan komponen `TeamCard` dan Bootstrap Grid (`row g-4`, `col-lg-3 col-md-6`).
   - **Anggota Tim**:
     1. **Riez Rafa Roro** — Founder & Head of Engineering (Mahasiswa Penanggung Jawab &bull; NIM: 0110224034)
     2. **Elena Vance** — Principal Art Director & UI/UX (Motion & Glassmorphism Specialist)
     3. **Marcus Chen** — Chief Technology Officer (Frontend & Performance Engineering)
     4. **Nabila Safira** — Head of Product Strategy & Quality Assurance
   - **Transparansi Akademik**: Alert informasi yang secara jujur menerangkan profil pertama merupakan mahasiswa penanggung jawab tugas, sementara profil lainnya adalah data percontohan (sample data) simulasi agensi profesional.

3. **Halaman Contact (`#contact`)**
   - **Studio Headquarters (Kiri)**: Alamat studio lab di STT Terpadu Nurul Fikri Jakarta Selatan, email resmi (`riezrafaroro@gmail.com`), saluran telepon, jam operasional, dan garansi SLA respon &lt; 24 jam.
   - **Interactive Consultation Form (Kanan)**: Input Nama Lengkap, Email Bisnis, Kategori Layanan (dropdown), Detail Kebutuhan Proyek (textarea), serta tombol Submit dan Reset.
   - **Validasi State React**: Pengecekan nama min. 3 huruf, regex email valid, pilihan kategori layanan, dan pesan min. 10 huruf.
   - **Umpan Balik Simulasi Pengiriman**: Banner konfirmasi sukses berwarna hijau dengan ringkasan pesan terkirim dan timestamp (disimulasikan pada frontend client-side).

4. **Navigasi SPA (Single Page Application)**
   - Pergantian halaman instan berbasis state React tersinkronisasi dengan URL hash (`#home`, `#team`, `#contact`).

---

## Panduan Menjalankan Project

### 1. Masuk ke folder proyek
```bash
cd "React JS/tugas_1"
```

### 2. Instalasi dependensi
```bash
npm install
```

### 3. Menjalankan server pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser pada `http://localhost:5173`.

### 4. Build produksi
```bash
npm run build
```

### 5. Menjalankan linting kode
```bash
npm run lint
```

---

## Dokumentasi & Bukti Pengerjaan
- **Laporan PDF Resmi (Format Standar Akademik 3 Halaman A4)**:
  - Berkas PDF Utama: [`TUGAS PERTEMUAN 1.pdf`](TUGAS PERTEMUAN 1.pdf) (dan [`docs/TUGAS PERTEMUAN 1.pdf`](docs/TUGAS PERTEMUAN 1.pdf))
  - Salinan Alternatif: [`Laporan_Tugas_React_JS.pdf`](Laporan_Tugas_React_JS.pdf)
- **Tangkapan Layar Browser Asli**:
  - Home : [`docs/screenshots/home.png`](docs/screenshots/home.png)
  - Team : [`docs/screenshots/team.png`](docs/screenshots/team.png)
  - Contact : [`docs/screenshots/contact.png`](docs/screenshots/contact.png)

---

## Petunjuk Undangan Kolaborasi Mentor (GitHub)
1. Kunjungi repositori GitHub: [https://github.com/rifaro06/MSIB](https://github.com/rifaro06/MSIB).
2. Buka menu **Settings** > pilih **Collaborators** > klik **Add people**.
3. Ketikkan username GitHub mentor dan kirimkan invitation.
