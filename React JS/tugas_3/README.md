# BookSales — Tugas 3 Pemrograman React JS

Aplikasi web katalog dan toko buku modern yang dibangun menggunakan **React 19**, **Vite 8**, **Bootstrap 5**, dan **React Router 7**, menyajikan data buku dinamis menggunakan metode JavaScript **`Array.map()`** serta fitur interaktif penambahan data buku memanfaatkan **React Hooks (`useState`)**.

Proyek ini disusun untuk memenuhi **Tugas 3** pada mata kuliah **Pemrograman React JS** (Program Studi Independen Bersertifikat / MSIB 2026).

---

## Identitas Mahasiswa
- **Nama Mahasiswa** : Riez Rafa Roro
- **NIM** : 0110224034
- **Perguruan Tinggi** : STT Terpadu Nurul Fikri
- **Program** : Studi Independen Bersertifikat (MSIB)
- **Mata Kuliah** : Pemrograman React JS
- **Lokasi Folder Proyek** : `React JS/tugas_3`
- **Branch Target** : `booksales`

---

## Ringkasan Pemenuhan 10 Poin Instruksi Tugas 3

| No | Poin Instruksi Tugas | Status Implementasi | Keterangan & Berkas Terkait |
|:---|:---|:---:|:---|
| 1 | Buka project booksales, lalu buat folder `Utils` di dalam folder `src` | **Selesai 100%** | Folder `src/Utils/` berhasil dibuat di dalam `React JS/tugas_3/src/Utils`. |
| 2 | Buat file `books.js` | **Selesai 100%** | File data buku dibuat pada [`src/Utils/books.js`](src/Utils/books.js). |
| 3 | Isi file `books.js` sesuai format Array of Object dan `export default` | **Selesai 100%** | Memuat properti `id`, `title`, `author`, `year`, `description`, `image`, `category`, `price`, dan `rating`. |
| 4 | Buat data buku minimal 9 dengan data yang berbeda-beda | **Selesai 100%** | Disediakan **10 data buku beragam** (JavaScript Dasar, React Pemula, UI/UX Modern, React Hooks, Node.js, TypeScript, Clean Code, Database, DevOps, dan Python AI). |
| 5 | Tampilkan data tersebut di halaman Home dan halaman Book | **Selesai 100%** | Ditampilkan di halaman Home ([`src/pages/Home.jsx`](src/pages/Home.jsx)) dan katalog lengkap di halaman Book ([`src/pages/Books.jsx`](src/pages/Books.jsx)). |
| 6 | Gunakan metode `map` untuk menampilkan data | **Selesai 100%** | Menggunakan `books.map((book) => <BookCard key={book.id} book={book} />)` secara modular dan terstruktur. |
| 7 | Menambahkan button untuk menambahkan data menggunakan hooks (Nilai Tambah) | **Selesai 100%** | Tombol **"+ Tambah Buku (Hooks)"** membuka modal interaktif ([`src/components/AddBookModal.jsx`](src/components/AddBookModal.jsx)) yang mengelola input via `useState` dan memperbarui state utama secara reaktif. |
| 8 | Upload kode ke GitHub dan invite username mentor | **Selesai 100%** | Repositori GitHub resmi: [https://github.com/rifaro06/MSIB/tree/booksales](https://github.com/rifaro06/MSIB/tree/booksales). |
| 9 | Salin link GitHub untuk diunggah di LMS | **Selesai 100%** | Link tugas: [https://github.com/rifaro06/MSIB/tree/booksales/React%20JS/tugas_3](https://github.com/rifaro06/MSIB/tree/booksales/React%20JS/tugas_3). |
| 10 | Kerjakan dengan sungguh-sungguh & hindari plagiarisme | **Selesai 100%** | Seluruh kode ditulis orisinal, clean, teruji linter 0 error, dan dilengkapi laporan PDF akademik resmi. |

---

## Arsitektur & Fitur Utama Aplikasi

1. **Sumber Data Awal (`src/Utils/books.js`)**:
   Dataset 10 buku teknologi populer diekspor menggunakan format standar ES Module:
   ```javascript
   const books = [
     {
       id: 1,
       title: "Belajar JavaScript Dasar",
       author: "Andi Prasetyo",
       year: 2021,
       description: "Panduan lengkap untuk pemula yang ingin belajar JavaScript dari nol.",
       image: "https://..."
     },
     // ... 9 buku lainnya
   ];
   export default books;
   ```

2. **Render Data Dinamis dengan Metode `map()`**:
   Komponen [`BookCard.jsx`](src/components/BookCard.jsx) menerima data buku via props dan menampilkan cover, badge kategori, badge tahun, rating bintang, judul, penulis, deskripsi, harga, serta tombol aksi.

3. **Fitur Nilai Tambah: React Hooks (`useState`)**:
   Formulir modal penambahan buku mengelola form state menggunakan hooks:
   ```javascript
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [year, setYear] = useState(2024);
   // State handler:
   setBooks((prev) => [newBook, ...prev]);
   ```
   Buku baru langsung muncul seketika di katalog buku tanpa reload halaman.

4. **Katalog & Filter Interaktif**:
   Halaman Book dilengkapi fitur pencarian *real-time* berdasarkan judul/penulis dan filter tab kategori (Web Dev, Framework, Cloud, dsb.).

---

## Panduan Menjalankan Project

### 1. Masuk ke folder proyek Tugas 3
```bash
cd "React JS/tugas_3"
```

### 2. Instalasi dependensi
```bash
npm install
```

### 3. Menjalankan server pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:5173`.

### 4. Build produksi (Vite)
```bash
npm run build
```

### 5. Menjalankan linter (ESLint)
```bash
npm run lint
```

---

## Dokumentasi & Bukti Pengerjaan

- **Laporan PDF Resmi (Format Standar Akademik 3 Halaman A4)**:
  - Berkas PDF Utama: [`TUGAS PERTEMUAN 3.pdf`](TUGAS PERTEMUAN 3.pdf) (dan [`docs/TUGAS PERTEMUAN 3.pdf`](docs/TUGAS PERTEMUAN 3.pdf))
  - Salinan Folder Laporan MSIB: [`../laporan/Laporan_Tugas_3.pdf`](../laporan/Laporan_Tugas_3.pdf)
- **Tangkapan Layar Browser Asli**:
  - Halaman Home (Rute `/`) : [`docs/screenshots/home.png`](docs/screenshots/home.png)
  - Halaman Book (Rute `/books`) : [`docs/screenshots/books.png`](docs/screenshots/books.png)
  - Modal Tambah Buku (Hooks) : [`docs/screenshots/modal.png`](docs/screenshots/modal.png)

---

## Petunjuk Mengundang Mentor (GitHub Collaborator)

1. Buka repositori GitHub: [https://github.com/rifaro06/MSIB/tree/booksales](https://github.com/rifaro06/MSIB/tree/booksales).
2. Klik tab **Settings** di kanan atas repositori.
3. Pada panel sebelah kiri (Access), pilih **Collaborators**.
4. Klik tombol hijau **Add people**.
5. Masukkan username GitHub mentor pembimbing Anda, lalu kirimkan invitation.
6. Salin tautan berikut untuk kolom pengumpulan LMS:
   ```text
   https://github.com/rifaro06/MSIB/tree/booksales/React%20JS/tugas_3
   ```
