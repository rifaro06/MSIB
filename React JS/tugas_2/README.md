# LUMINA Studio — Tugas 2 Pemrograman React JS (Declarative Routing)

Aplikasi web modern berstandar agensi digital kreatif yang dibangun menggunakan **React 19**, **Vite 8**, **Bootstrap 5**, dan **React Router 7** dengan implementasi *Declarative Routing* sesuai dokumentasi resmi ([https://reactrouter.com/start/declarative/routing](https://reactrouter.com/start/declarative/routing)).

Proyek ini disusun untuk memenuhi **Tugas 2** pada mata kuliah **Pemrograman React JS** (Program Studi Independen Bersertifikat / MSIB 2026).

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS
- **Lokasi Folder Proyek** : `React JS/tugas_2`

---

## Ringkasan Pemenuhan Tugas 2

| No | Poin Instruksi Tugas | Status Implementasi | Keterangan & Lokasi Berkas |
|:---|:---|:---:|:---|
| 1 | Menambahkan routing untuk halaman Team dan Contact menggunakan React Router | **Selesai 100%** | Menggunakan `react-router` dan `react-router-dom` v7 di `src/App.jsx` dan `src/main.jsx`. |
| 2 | Merapikan routing sesuai kategori elemen ([Panduan Declarative Routing](https://reactrouter.com/start/declarative/routing)) | **Selesai 100%** | Membagi rute menjadi Layout Route (`RootLayout`), Index Route (`Home`), Child Routes (`Team`, `Contact`), dan Wildcard 404 Route (`NotFound`). |
| 3 | Menambahkan styling pada navigasi (Nilai Tambahan / Extra Credit) | **Selesai 100%** | Komponen `<NavLink>` dengan fungsi `({ isActive })` dinamis: efek neon gradient pill, glow box-shadow, dan animated neon underline bar indicator di `src/index.css`. |
| 4 | Push ke GitHub dan invite mentor | **Selesai 100%** | Repositori: [https://github.com/rifaro06/MSIB](https://github.com/rifaro06/MSIB), panduan invite mentor tercantum di bawah. |
| 5 | Mencantumkan link GitHub untuk pengumpulan LMS | **Selesai 100%** | Link tugas: [https://github.com/rifaro06/MSIB/tree/main/React%20JS/tugas_2](https://github.com/rifaro06/MSIB/tree/main/React%20JS/tugas_2). |

---

## Arsitektur & Kategori Elemen Routing (Declarative Routing)

Struktur deklaratif diimplementasikan secara bersih dan terstruktur pada [`src/App.jsx`](src/App.jsx) dan [`src/layouts/RootLayout.jsx`](src/layouts/RootLayout.jsx):

```jsx
<Routes>
  {/* 1. Layout Route: Menyediakan kerangka umum (Navbar, Footer, ScrollToTop) */}
  <Route element={<RootLayout />}>
    {/* 2. Index Route: Halaman utama beranda saat path adalah "/" */}
    <Route index element={<Home />} />

    {/* 3. Child Routes: Rute anak halaman konten spesifik */}
    <Route path="team" element={<Team />} />
    <Route path="contact" element={<Contact />} />

    {/* 4. Wildcard Catch-All Route: Penanganan URL 404 Not Found */}
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

### Penjelasan Kategori Elemen:
1. **Layout Route (`<RootLayout />`)**: Komponen pembungkus yang menyatukan `<Navbar />`, `<Outlet />`, `<Footer />`, dan `<ScrollToTop />`. Memungkinkan tata letak antarmuka tetap konsisten dan tidak perlu diulang-ulang di setiap halaman.
2. **Index Route (`<Home />`)**: Rute dasar yang ter-render di dalam `<Outlet />` ketika pengguna membuka URL root (`/`).
3. **Child Routes (`<Team />` & `<Contact />`)**: Rute turunan yang diakses melalui URL `/team` dan `/contact` tanpa melakukan *full page reload* (SPA).
4. **Wildcard Route (`<NotFound />`)**: Rute penampung (`path="*"`) untuk menangani alamat URL yang tidak terdaftar, dilengkapi tombol navigasi kembali ke Beranda.

---

## Styling Navigasi (Nilai Tambahan / Extra Credit)

Navigasi pada [`src/components/Navbar.jsx`](src/components/Navbar.jsx) memanfaatkan komponen `<NavLink>` dari React Router dengan styling kustom pada [`src/index.css`](src/index.css):

```jsx
<NavLink
  to="/team"
  className={({ isActive }) =>
    `nav-link lumina-nav-link ${isActive ? 'active' : ''}`
  }
>
  <i className="bi bi-people me-1"></i> Team
</NavLink>
```

**Fitur Visual Navigasi:**
- **Active Neon Pill**: Latar belakang translucent ungu `rgba(139, 92, 246, 0.16)` dengan border halus `rgba(139, 92, 246, 0.35)`.
- **Underline Glow Bar**: Indikator garis neon menyala di bagian bawah teks tautan aktif menggunakan pseudo-element `::after` (`linear-gradient(90deg, #8b5cf6, #06b6d4)`).
- **Smooth Transition**: Efek transisi warna dan transformasi saat hover pada desktop maupun tampilan responsif *mobile dropdown*.

---

## Panduan Menjalankan Project

### 1. Masuk ke folder proyek Tugas 2
```bash
cd "React JS/tugas_2"
```

### 2. Instalasi dependensi
```bash
npm install
```

### 3. Menjalankan server pengembangan (Dev Server)
```bash
npm run dev
```
Aplikasi dapat diakses pada `http://localhost:5173`.

### 4. Build produksi (Vite)
```bash
npm run build
```

### 5. Menjalankan linter (ESLint)
```bash
npm run lint
```

---

## Hasil Pengujian & Dokumen Laporan

- **Hasil Build**: Sukses 100% tanpa error (`built in ~0.66s`, output di folder `dist/`).
- **Hasil Lint**: `0 warnings` dan `0 errors`.
- **Laporan PDF Resmi (Format Standar Akademik 3 Halaman A4)**:
  - Berkas PDF Utama: [`TUGAS PERTEMUAN 2.pdf`](TUGAS PERTEMUAN 2.pdf) (dan [`docs/TUGAS PERTEMUAN 2.pdf`](docs/TUGAS PERTEMUAN 2.pdf))
  - Salinan Alternatif: [`Laporan_Tugas_2_React_Router.pdf`](Laporan_Tugas_2_React_Router.pdf)
- **Tangkapan Layar Browser Asli**:
  - Halaman Home (Rute `/`) : [`docs/screenshots/home.png`](docs/screenshots/home.png)
  - Halaman Team (Rute `/team`) : [`docs/screenshots/team.png`](docs/screenshots/team.png)
  - Halaman Contact (Rute `/contact`) : [`docs/screenshots/contact.png`](docs/screenshots/contact.png)

---

## Petunjuk Mengundang Mentor (GitHub Collaborator)

1. Buka repositori GitHub: [https://github.com/rifaro06/MSIB](https://github.com/rifaro06/MSIB).
2. Klik tab **Settings** pada bagian kanan atas repositori.
3. Pada panel sebelah kiri (Access), pilih **Collaborators**.
4. Klik tombol hijau **Add people**.
5. Masukkan username GitHub mentor pembimbing Anda, lalu klik **Add &lt;username&gt; to this repository**.
6. Salin tautan proyek berikut untuk diserahkan ke kolom pengumpulan LMS:
   ```
   https://github.com/rifaro06/MSIB/tree/main/React%20JS/tugas_2
   ```
