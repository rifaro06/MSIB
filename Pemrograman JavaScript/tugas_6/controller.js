// controller.js
// Impor data dari data.js
import users from "./data.js";

/**
 * A. Fungsi untuk melihat seluruh data pengguna menggunakan method map()
 */
const tampilkanData = () => {
  console.log("================================================================================");
  console.log("                              DAFTAR DATA PENGGUNA                              ");
  console.log("================================================================================");
  users.map((user, index) => {
    console.log(
      `${index + 1}. Nama: ${user.nama} | Umur: ${user.umur} tahun | Alamat: ${user.alamat} | Email: ${user.email}`
    );
  });
  console.log("================================================================================");
  console.log(`Total data: ${users.length} pengguna\n`);
};

/**
 * B. Fungsi untuk menambah data pengguna menggunakan method push()
 * Menambahkan minimal 2 data baru sekaligus
 */
const tambahData = (...dataBaru) => {
  users.push(...dataBaru);
  console.log(`[BERHASIL] Sebanyak ${dataBaru.length} data baru berhasil ditambahkan.`);
  dataBaru.forEach((item) => {
    console.log(`+ Ditambahkan: ${item.nama} (${item.email})`);
  });
  console.log("");
};

/**
 * C. Fungsi untuk menghapus data pengguna berdasarkan nama
 * Menampilkan pesan jika data berhasil dihapus atau tidak ditemukan
 */
const hapusData = (nama) => {
  const index = users.findIndex(
    (user) => user.nama.toLowerCase() === nama.toLowerCase()
  );

  if (index !== -1) {
    const dataDihapus = users.splice(index, 1)[0];
    console.log(`[BERHASIL] Data dengan nama "${dataDihapus.nama}" berhasil dihapus.\n`);
  } else {
    console.log(`[GAGAL] Data dengan nama "${nama}" tidak ditemukan.\n`);
  }
};

// ==============================================================================
// URUTAN EKSEKUSI PROGRAM
// ==============================================================================

// 1. Tampilkan 10 data awal
console.log(">>> 1. MENAMPILKAN 10 DATA AWAL <<<");
tampilkanData();

// 2. Tambahkan minimal 2 data menggunakan push()
console.log(">>> 2. MENAMBAHKAN MINIMAL 2 DATA MENGGUNAKAN push() <<<");
const userBaru1 = {
  nama: "Kevin Sanjaya",
  umur: 27,
  alamat: "Jl. Asia Afrika No. 10, Jakarta",
  email: "kevin.sanjaya@gmail.com",
};

const userBaru2 = {
  nama: "Larasati Dewi",
  umur: 22,
  alamat: "Jl. Pajajaran No. 25, Bogor",
  email: "larasati.dewi@gmail.com",
};

tambahData(userBaru1, userBaru2);

// 3. Tampilkan data setelah penambahan
console.log(">>> 3. MENAMPILKAN DATA SETELAH PENAMBAHAN <<<");
tampilkanData();

// 4. Hapus satu data berdasarkan nama
console.log(">>> 4. MENGHAPUS SATU DATA BERDASARKAN NAMA <<<");
hapusData("Gilang Pratama");

// 5. Tampilkan data akhir setelah penghapusan
console.log(">>> 5. MENAMPILKAN DATA AKHIR SETELAH PENGHAPUSAN <<<");
tampilkanData();

// Ekspor fungsi agar dapat digunakan kembali jika diperlukan
export { tampilkanData, tambahData, hapusData };
