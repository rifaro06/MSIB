# Book Sales — Aplikasi Terpadu MSIB React JS (Tugas 1–3)

Aplikasi web toko buku online modern yang dibangun menggunakan **React 19**, **Vite 8**, **Bootstrap 5**, dan **React Router 7**, menyatukan pemenuhan instruksi **Tugas 1 (Komponen &amp; Halaman Bootstrap)**, **Tugas 2 (Declarative Routing &amp; Styling Navigasi)**, dan **Tugas 3 (Dataset books.js, Rendering Array.map(), &amp; React Hooks useState)** ke dalam satu aplikasi terpadu dengan arsitektur bersih, satu `package.json`, satu konfigurasi Vite, dan satu entry point utama.

Proyek ini disusun untuk memenuhi rangkaian tugas mata kuliah **Pemrograman React JS** pada program **Studi Independen Bersertifikat (MSIB 2026)**.

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS
- **Lokasi Folder Proyek** : `React JS/` (Aplikasi Terpadu)
- **Branch Target** : `booksales`
- **Tautan Repositori** : [https://github.com/rifaro06/MSIB/tree/booksales](https://github.com/rifaro06/MSIB/tree/booksales)

---

## Ringkasan Integrasi Fitur Tugas 1, 2, dan 3

| Tugas | Fokus Instruksi Resmi | Status Implementasi | Rincian Berkas &amp; Fitur |
|:---|:---|:---:|:---|
| **Tugas 1** | Merapikan Home, melengkapi Team dan Contact dengan template Bootstrap | **Selesai 100%** | Hero section toko buku, keunggulan layanan, profil tim pengelola/kurator di `src/pages/Team.jsx`, dan formulir pemesanan dengan validasi state di `src/pages/Contact.jsx`. |
| **Tugas 2** | Declarative Routing React Router, styling navigasi (Nilai Tambah) | **Selesai 100%** | Membagi rute deklaratif di `src/App.jsx` (`RootLayout`, index `/`, child `/books`, `/team`, `/contact`, wildcard `*`). Navigasi aktif menggunakan `<NavLink>` dengan efek neon pill and glowing underline bar di `src/index.css`. |
| **Tugas 3** | Dataset `books.js` minimal 9 data, render `.map()`, tombol Hooks (Nilai Tambah) | **Selesai 100%** | Dataset 10 buku di `src/Utils/books.js`, render modular via `.map()` di Home dan Books (`src/pages/Books.jsx`), serta modal penambahan buku berbasis React Hooks (`useState`) di `src/components/AddBookModal.jsx`. |

---

## Arsitektur Rute Aplikasi (Declarative Routing)

Struktur deklaratif diimplementasikan pada [`src/App.jsx`](src/App.jsx) dan [`src/layouts/RootLayout.jsx`](src/layouts/RootLayout.jsx):

```jsx
<Routes>
  {/* 1. Layout Route: Menyediakan Navbar, Outlet, Modal Hooks, dan Footer */}
  <Route element={<RootLayout />}>
    {/* 2. Index Route: Beranda toko buku */}
    <Route index element={<Home />} />

    {/* 3. Child Routes: Rute katalog, tim kurator, dan kontak pemesanan */}
    <Route path="books" element={<Books />} />
    <Route path="book" element={<Books />} />
    <Route path="team" element={<Team />} />
    <Route path="contact" element={<Contact />} />

    {/* 4. Wildcard Catch-All Route: Penanganan 404 Not Found */}
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

### Daftar Rute Aktif:
1. `/` — **Halaman Home (Beranda)**: Hero showcase, metrik toko, kartu keunggulan layanan, dan preview koleksi buku teratas.
2. `/books` (atau `/book`) — **Halaman Book (Katalog Buku)**: Katalog lengkap data buku dari `books.js`, filter kategori, live search, dan tombol modal penambahan buku.
3. `/team` — **Halaman Team (Tim Kurasi)**: Profil 4 pengelola toko buku (Founder &amp; kurator) dengan Bootstrap Grid responsif dan catatan transparansi data.
4. `/contact` — **Halaman Contact (Kontak Toko)**: Informasi kantor pusat/hotline dan formulir interaktif pertanyaan/pemesanan buku dengan validasi state.
5. `*` — **Halaman NotFound (404)**: Rute penampung URL tidak terdaftar dengan tombol kembali ke Beranda.

---

## Teknologi yang Digunakan

- **Core & Runtime** : React 19 (`react` & `react-dom` v19.2.8)
- **Build Tool & Bundler** : Vite 8 (`vite` v8.3.4, `@vitejs/plugin-react` v6.1.1)
- **Routing Engine** : React Router 7 (`react-router` & `react-router-dom` v7.18.4)
- **CSS Framework** : Bootstrap 5 (`bootstrap` v5.3.8) & Bootstrap Icons (`bootstrap-icons` v1.13.2)
- **Custom Design System** : Vanilla CSS (*Dark Glassmorphism*, HSL tailoring, neon glow accents, micro-animations)
- **Linter & Code Quality** : ESLint 10 dengan konfigurasi resmi React Hooks

---

## Panduan Menjalankan Proyek

### 1. Masuk ke direktori aplikasi
```bash
cd "React JS"
```

### 2. Instalasi dependensi
```bash
npm install
```

### 3. Menjalankan server pengembangan (Dev Server)
```bash
npm run dev
```
Akses aplikasi melalui browser pada alamat: `http://localhost:5173`.

### 4. Build produksi (Production Build)
```bash
npm run build
```
Hasil kompilasi produksi akan tersimpan pada folder `dist/` secara optimal.

### 5. Menjalankan pemeriksaan kualitas kode (Linting)
```bash
npm run lint
```

---

## Lokasi Dokumen Laporan PDF Resmi

Sesuai instruksi tugas, laporan disusun ke dalam **tiga berkas PDF terpisah** berformat standar akademik 3 halaman A4 dan disimpan pada folder `React JS/laporan/`:

1. **Laporan Tugas 1 (Pages & Bootstrap)**:
   - Berkas: [`laporan/Laporan_Tugas_1.pdf`](laporan/Laporan_Tugas_1.pdf)
   - Bukti: Tangkapan layar Home, Team, dan Contact beserta ringkasan implementasi Bootstrap dan SPA state.
2. **Laporan Tugas 2 (Declarative Routing)**:
   - Berkas: [`laporan/Laporan_Tugas_2.pdf`](laporan/Laporan_Tugas_2.pdf)
   - Bukti: Tangkapan layar navigasi aktif dinamis, struktur rute `App.jsx`, dan layout bersama `RootLayout`.
3. **Laporan Tugas 3 (Dataset & React Hooks)**:
   - Berkas: [`laporan/Laporan_Tugas_3.pdf`](laporan/Laporan_Tugas_3.pdf)
   - Bukti: Tangkapan layar katalog buku `.map()`, dataset `books.js`, dan modal penambahan buku berbasis `useState`.

Tangkapan layar asli dari aplikasi yang berjalan tersimpan pada direktori [`docs/screenshots/`](docs/screenshots/):
- `home.png` — Tampilan halaman Home
- `books.png` — Tampilan halaman Book Catalog
- `team.png` — Tampilan halaman Team
- `contact.png` — Tampilan halaman Contact
- `modal.png` — Tampilan modal tambah buku (Hooks)

---

## Tautan Repositori & Branch GitHub

- **Repositori Utama** : [https://github.com/rifaro06/MSIB](https://github.com/rifaro06/MSIB)
- **Branch Khusus Pengerjaan Book Sales** : [https://github.com/rifaro06/MSIB/tree/booksales](https://github.com/rifaro06/MSIB/tree/booksales)
- **Direktori Aplikasi Terpadu** : [https://github.com/rifaro06/MSIB/tree/booksales/React%20JS](https://github.com/rifaro06/MSIB/tree/booksales/React%20JS)
