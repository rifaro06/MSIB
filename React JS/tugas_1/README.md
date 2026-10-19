# Book Sales — Tugas 1 Pemrograman React JS

Aplikasi web toko buku online modern yang dibangun menggunakan **React 19**, **Vite 8**, dan **Bootstrap 5** dengan konsep estetika *Dark Glassmorphism*.

Proyek ini disusun untuk memenuhi **Tugas 1** pada mata kuliah **Pemrograman React JS** (Program Studi Independen Bersertifikat / MSIB 2026).

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS
- **Lokasi Folder Proyek** : `React JS/tugas_1`
- **Branch Target** : `booksales`

---

## Konsep Desain & Tema Website
Website ini mengusung tema **Book Sales — Toko Buku Teknologi Online**:
- **Dark Glassmorphism Aesthetic**: Latar belakang deep obsidian (`#090d16`) berpadu dengan aksen radiant gradient (Electric Violet `#8b5cf6`, Cyan `#06b6d4`, Indigo `#6366f1`).
- **Komponen Modular & Reusable Props**: Komponen `Navbar`, `Footer`, `FeatureCard`, dan `TeamCard` dirancang terpisah dan modular memanfaatkan alur props React.
- **Navigasi Berbasis State**: Mengimplementasikan Single Page Application (SPA) state-based switching (`#home`, `#team`, `#contact`) tanpa reload halaman.
- **Bootstrap 5**: Tata letak grid responsif, kartu, dan validasi form.

---

## Halaman Utama

1. **Halaman Home (`#home`)**
   - **Navbar Glassmorphism**: Brand logo Book Sales, tautan navigasi responsif, dan tombol aksi "Hubungi Toko".
   - **Hero Section**: Judul *"Pusat Belanja & Eksplorasi Buku Pemrograman Terlengkap"*, deskripsi toko buku, CTA ke halaman Tim dan Kontak, serta trust badges.
   - **Rekomendasi Buku Pilihan**: Kartu preview buku best seller (JavaScript Dasar, React untuk Pemula, UI/UX Modern).
   - **Keunggulan Layanan**: Kurasi Resmi, 100% Original, dan Komunitas Bedah Buku.
   - **Metrik Toko**: 10.000+ Buku Terjual, 99.8% Kepuasan Pelanggan, 4.9/5 Rating Toko.

2. **Halaman Team (`#team`)**
   - **Tim Pengelola & Kurator**: Menampilkan profil 4 pengelola toko buku Book Sales menggunakan `TeamCard` dan Bootstrap Grid (`row g-4`, `col-lg-3 col-md-6`).
   - **Anggota Tim**:
     1. **Riez Rafa Roro** — Founder & Head of Book Sales (Mahasiswa Penanggung Jawab &bull; NIM: 0110224034)
     2. **Elena Vance** — Head of Editorial & Book Cover Design
     3. **Marcus Chen** — Chief Technology & Inventory Officer
     4. **Nabila Safira** — Head of Customer Care & Community
   - **Transparansi Akademik**: Keterangan bahwa profil pertama adalah mahasiswa penanggung jawab tugas dan profil lainnya adalah data percontohan simulasi toko buku profesional.

3. **Halaman Contact (`#contact`)**
   - **Toko Pusat (Kiri)**: Alamat toko di STT Terpadu Nurul Fikri Jakarta Selatan, email resmi (`riezrafaroro@gmail.com`), hotline, dan jam operasional.
   - **Formulir Pertanyaan & Pemesanan (Kanan)**: Input Nama Lengkap, Email, Kategori Pertanyaan (Pemesanan, Stok, Rekomendasi), Detail Pesan, serta tombol Kirim dan Reset.
   - **Validasi State React**: Pengecekan nama min. 3 huruf, regex email valid, pilihan kategori pertanyaan, dan pesan min. 10 huruf.
   - **Umpan Balik Simulasi Pengiriman**: Banner konfirmasi sukses dengan ringkasan pesan terkirim pada state lokal frontend.

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
- **Laporan PDF Resmi**:
  - Berkas Utama: [`TUGAS PERTEMUAN 1.pdf`](TUGAS PERTEMUAN 1.pdf)
  - Salinan Folder Laporan MSIB: [`../laporan/Laporan_Tugas_1.pdf`](../laporan/Laporan_Tugas_1.pdf)
- **Tangkapan Layar Browser Asli**:
  - Home : [`docs/screenshots/home.png`](docs/screenshots/home.png)
  - Team : [`docs/screenshots/team.png`](docs/screenshots/team.png)
  - Contact : [`docs/screenshots/contact.png`](docs/screenshots/contact.png)

---

## Petunjuk Undangan Kolaborasi Mentor (GitHub)
1. Kunjungi repositori GitHub: [https://github.com/rifaro06/MSIB/tree/booksales](https://github.com/rifaro06/MSIB/tree/booksales).
2. Buka menu **Settings** > pilih **Collaborators** > klik **Add people**.
3. Ketikkan username GitHub mentor dan kirimkan invitation.
