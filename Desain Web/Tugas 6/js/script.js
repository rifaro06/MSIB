// Script Interaktif untuk Tugas 6 RWD

document.addEventListener("DOMContentLoaded", function () {
    // 1. Menangani Navigasi Aktif saat Menu Diklik
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Hapus kelas 'active' dari semua menu
            navLinks.forEach(item => item.classList.remove('active'));
            // Tambahkan kelas 'active' ke menu yang baru saja diklik
            this.classList.add('active');
        });
    });

    // 2. Mengatur Otomatis Tinggi Iframe Sesuai Ukuran Layar
    const mainIframe = document.querySelector('iframe[name="main-frame"]');
    
    function adjustIframeHeight() {
        if (mainIframe) {
            if (window.innerWidth < 768) {
                mainIframe.style.height = '480px';
            } else {
                mainIframe.style.height = '540px';
            }
        }
    }

    // Jalankan saat pertama kali dimuat & saat ukuran window diubah
    adjustIframeHeight();
    window.addEventListener('resize', adjustIframeHeight);
});