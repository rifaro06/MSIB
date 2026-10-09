# Tugas 1 Pemrograman React JS — Home, Team, dan Contact

Repositori pengerjaan Tugas 1 mata kuliah **Pemrograman React JS** (Program MSIB). Proyek ini mengimplementasikan aplikasi web berbasis komponen modular React 19 dengan integrasi framework Bootstrap 5.

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS

---

## Fitur dan Halaman Aplikasi

1. **Halaman Home (`#home`)**
   - **Navbar Responsif**: Navigasi ke Home, Team, dan Contact dengan active indicator dan mobile collapse toggler.
   - **Hero Section**: Heading modern, lead text penjelasan proyek, dua tombol Call to Action (CTA), dan ilustrasi vektor web development.
   - **Fitur Unggulan**: Tiga kartu Bootstrap Grid (Komponen Modular, Desain Responsif, Performa Cepat) dengan icon badge.
   - **Statistik & Footer**: Menampilkan tech stack (React 19, Vite, Bootstrap 5) dan identitas mahasiswa.

2. **Halaman Team (`#team`)**
   - **Meet Our Team**: Header dan deskripsi peran tim pengembang perangkat lunak.
   - **Bootstrap Grid & Card**: 4 kartu anggota tim dengan avatar ilustrasi SVG, nama, peran (Lead Dev, UI/UX, Frontend Specialist, QA), bio, tags keahlian, dan tombol profil GitHub.
   - **Catatan Transparansi**: Alert informasi yang secara jujur menerangkan profil pertama merupakan identitas mahasiswa penanggung jawab tugas, sedangkan profil lainnya adalah data contoh (sample data) untuk simulasi peran tim.

3. **Halaman Contact (`#contact`)**
   - **Informasi Kontak**: Alamat kampus STT Terpadu Nurul Fikri, email mahasiswa, nomor telepon contoh, dan jam layanan operasional.
   - **Formulir Interaktif**: Form input Nama Lengkap, Alamat Email, Subjek Pesan (dropdown), dan Isi Pesan (textarea).
   - **Validasi State React**: Validasi kelengkapan form secara dinamis (nama min. 3 karakter, regex email valid, pemilihan subjek, panjang pesan min. 10 karakter).
   - **Feedback Simulasi**: Alert sukses Bootstrap berwarna hijau beserta ringkasan pesan terkirim dan timestamp pengiriman (disimulasikan pada frontend client-side tanpa backend server).

4. **Navigasi Single Page Application (SPA)**
   - Perpindahan halaman instan berbasis state React yang tersinkronisasi dengan URL Hash (`#home`, `#team`, `#contact`).

---

## Teknologi yang Digunakan
- **React**: `^19.2.8`
- **Vite**: `^8.3.0`
- **Bootstrap**: `^5.3.8`
- **Bootstrap Icons**: `^1.13.1`

---

## Cara Menjalankan Project

### 1. Masuk ke direktori tugas
```bash
cd "React JS/tugas_1"
```

### 2. Instal dependensi
```bash
npm install
```

### 3. Jalankan server pengembangan (Dev Server)
```bash
npm run dev
```
Akses aplikasi melalui browser pada `http://localhost:5173`.

### 4. Build untuk produksi
```bash
npm run build
```

### 5. Menjalankan linter
```bash
npm run lint
```

---

## Dokumentasi & Bukti Pengerjaan
- **Laporan PDF Resmi** : [`docs/Laporan_Tugas_React_JS.pdf`](docs/Laporan_Tugas_React_JS.pdf) (atau file [`Laporan_Tugas_React_JS.pdf`](Laporan_Tugas_React_JS.pdf))
- **Screenshot Desktop Asli**:
  - Home : [`docs/screenshots/home.png`](docs/screenshots/home.png)
  - Team : [`docs/screenshots/team.png`](docs/screenshots/team.png)
  - Contact : [`docs/screenshots/contact.png`](docs/screenshots/contact.png)

---

## Petunjuk Undangan Mentor (GitHub Collaborator)
1. Kunjungi repositori GitHub: [https://github.com/rifaro06/MSIB](https://github.com/rifaro06/MSIB).
2. Masuk ke menu **Settings** > pilih **Collaborators** > klik **Add people**.
3. Masukkan username GitHub mentor dan kirimkan undangan kolaborasi.
