import { Link } from 'react-router-dom';
import avatar1 from '../assets/avatar-1.svg';
import avatar2 from '../assets/avatar-2.svg';
import avatar3 from '../assets/avatar-3.svg';
import avatar4 from '../assets/avatar-4.svg';
import TeamCard from '../components/TeamCard';

/**
 * Halaman Team (Tim Toko).
 * Memenuhi kriteria Tugas 1 (Desain Team Bootstrap yang Rapi & Informatif) dan
 * Tugas 2 (Routing Declarative /team tanpa reload halaman).
 */
export default function Team() {
  const teamMembers = [
    {
      name: 'Riez Rafa Roro',
      role: 'Founder & Head of Book Sales',
      type: 'Mahasiswa (Penanggung Jawab)',
      badgeGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      avatar: avatar1,
      bio: 'Mahasiswa STT Terpadu Nurul Fikri (NIM: 0110224034). Bertanggung jawab atas integrasi aplikasi terpadu Book Sales, arsitektur Declarative Routing React Router 7, dataset books.js, dan fitur React Hooks.',
      skills: ['React 19', 'React Router 7', 'Declarative Routing', 'Bootstrap 5', 'React Hooks'],
      github: 'https://github.com/rifaro06',
      isLeader: true,
    },
    {
      name: 'Elena Vance',
      role: 'Head of Editorial & Book Cover Design',
      type: 'Tim Kurasi (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      avatar: avatar2,
      bio: 'Memimpin kurasi visual sampul buku, review kualitas tata letak, dan standar estetika katalog buku teknologi Book Sales.',
      skills: ['Editorial', 'Cover Design', 'Design Systems', 'Typography'],
      github: 'https://github.com',
      isLeader: false,
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology & Inventory Officer',
      type: 'Tim Logistik (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      avatar: avatar3,
      bio: 'Mengoptimalkan performa rendering rute halaman katalog buku, integrasi routing SPA, dan sistem pemantauan ketersediaan buku.',
      skills: ['React Router', 'Inventory System', 'Performance', 'CI/CD'],
      github: 'https://github.com',
      isLeader: false,
    },
    {
      name: 'Nabila Safira',
      role: 'Head of Customer Care & Community',
      type: 'Tim Komunitas (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      avatar: avatar4,
      bio: 'Mengelola hubungan pembaca, program bedah buku pemrograman, dan penanganan pertanyaan seputar pemesanan buku.',
      skills: ['Customer Care', 'Community', 'Quality Assurance', 'Git Flow'],
      github: 'https://github.com',
      isLeader: false,
    },
  ];

  return (
    <div className="team-page py-5 animate-fade-in">
      <div className="container py-lg-4">
        {/* Page Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '720px' }}>
          <div className="hero-pill">
            <i className="bi bi-people-fill text-cyan"></i>
            <span>BOOKSALES &bull; MANAGEMENT &amp; CURATION TEAM</span>
          </div>
          <h1 className="hero-heading">
            Tim di Balik <span className="gradient-text">Book Sales</span>
          </h1>
          <p className="hero-lead">
            Halaman Team ini diakses secara mulus melalui rute deklaratif <code>/team</code> pada React Router 7
            tanpa melakukan refresh halaman browser.
          </p>
        </div>

        {/* Academic Transparency Alert */}
        <div className="alert custom-info-alert mb-5 p-3 rounded-3" role="alert">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-info-circle-fill text-cyan fs-4 flex-shrink-0"></i>
            <div className="small">
              <strong>Transparansi Data Anggota Tim Book Sales:</strong>
              <div className="text-secondary mt-1">
                Profil pertama di bawah adalah mahasiswa penanggung jawab tugas (<strong>Riez Rafa Roro &bull; 0110224034 &bull; STT Terpadu Nurul Fikri</strong>).
                Profil tim lainnya adalah data percontohan (sample data) yang dirancang untuk mensimulasikan manajemen toko buku online profesional.
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="row g-4 mb-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* CTA to Contact via React Router Link */}
        <div className="text-center p-4 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <h4 className="fw-bold text-white mb-2">Ingin Menerbitkan atau Merekomendasikan Buku?</h4>
          <p className="text-secondary small mb-3">
            Hubungi tim kurator Book Sales untuk kolaborasi publikasi atau permintaan pengadaan buku khusus.
          </p>
          <Link
            to="/contact"
            className="btn btn-outline-cyan px-4 py-2"
          >
            <i className="bi bi-envelope me-1"></i> Buka Formulir Kontak (/contact)
          </Link>
        </div>
      </div>
    </div>
  );
}
