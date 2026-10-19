// src/Utils/books.js
// Sumber data buku awal (minimal 9 data buku berbeda)
const books = [
  {
    id: 1,
    title: "Belajar JavaScript Dasar",
    author: "Andi Prasetyo",
    year: 2021,
    category: "Web Development",
    price: "Rp 95.000",
    rating: 4.8,
    description: "Panduan lengkap untuk pemula yang ingin belajar JavaScript dari nol hingga mahir memanipulasi DOM dan konsep async.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "React untuk Pemula",
    author: "Dina Sari",
    year: 2022,
    category: "Frontend Framework",
    price: "Rp 115.000",
    rating: 4.9,
    description: "Mengenal konsep dasar dan praktik terbaik membuat aplikasi React modern berbasis komponen, props, dan declarative UI.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Arsitektur Antarmuka UI/UX Modern",
    author: "Riez Rafa Roro",
    year: 2024,
    category: "Design & UX",
    price: "Rp 135.000",
    rating: 5.0,
    description: "Panduan komprehensif merancang antarmuka dark glassmorphism, interaksi mikro, tipografi proporsional, dan desain responsif.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Mastering React Hooks & State Management",
    author: "Elena Vance",
    year: 2023,
    category: "Frontend Framework",
    price: "Rp 128.000",
    rating: 4.9,
    description: "Eksplorasi mendalam useState, useEffect, useContext, useReducer, dan custom hooks untuk pengelolaan state aplikasi skala enterprise.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Fullstack Web dengan Node.js & Express",
    author: "Budi Wicaksono",
    year: 2023,
    category: "Backend Development",
    price: "Rp 120.000",
    rating: 4.7,
    description: "Membangun RESTful API performa tinggi, autentikasi JWT, middleware keamanan, dan integrasi database relational maupun document.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "TypeScript Mastery untuk Developer Modern",
    author: "Siti Nurhaliza",
    year: 2024,
    category: "Web Development",
    price: "Rp 125.000",
    rating: 4.9,
    description: "Meningkatkan kualitas kode JavaScript dengan static typing, generics, interfaces, type narrowing, dan integrasi kuat pada React.",
    image: "https://images.unsplash.com/photo-1516116211227-bbc03a27f918?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Clean Code & Refactoring Praktis",
    author: "Robert Hendrawan",
    year: 2022,
    category: "Software Engineering",
    price: "Rp 110.000",
    rating: 4.8,
    description: "Prinsip menulis kode yang mudah dibaca, diuji, dan dipelihara berdasarkan kaidah SOLID, DRY, serta arsitektur perangkat lunak bersih.",
    image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Database Modern: PostgreSQL & MongoDB",
    author: "Marcus Chen",
    year: 2024,
    category: "Database & Cloud",
    price: "Rp 130.000",
    rating: 4.8,
    description: "Perancangan skema relasional, optimasi query indexing, transaksi ACID, hingga arsitektur NoSQL untuk big data dan analitik.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    title: "DevOps & Cloud Native Architecture",
    author: "Nabila Safira",
    year: 2024,
    category: "DevOps & Infrastructure",
    price: "Rp 140.000",
    rating: 4.9,
    description: "Implementasi pipeline CI/CD otomatis, containerization dengan Docker, orkestrasi Kubernetes, serta monitoring observabilitas cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Python untuk Data Science & AI",
    author: "Farhan Ramadhan",
    year: 2023,
    category: "Data Science & AI",
    price: "Rp 135.000",
    rating: 4.8,
    description: "Panduan praktis analisis data eksploratif menggunakan Pandas, NumPy, visualisasi data, hingga dasar-dasar machine learning praktis.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  }
];

export default books;
