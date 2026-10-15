import avatar1 from '../assets/avatar-1.svg'
import avatar2 from '../assets/avatar-2.svg'
import avatar3 from '../assets/avatar-3.svg'
import avatar4 from '../assets/avatar-4.svg'
import TeamCard from '../components/TeamCard'

function Team({ onNavigate }) {
  const teamMembers = [
    {
      name: 'Riez Rafa Roro',
      role: 'Founder & Head of Engineering',
      type: 'Mahasiswa (Penanggung Jawab)',
      badgeGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      avatar: avatar1,
      bio: 'Mahasiswa STT Terpadu Nurul Fikri (NIM: 0110224034). Bertanggung jawab atas perancangan arsitektur sistem React 19, navigasi modular, dan implementasi UI studio.',
      skills: ['React 19', 'Vite', 'Bootstrap 5', 'Architecture'],
      github: 'https://github.com/rifaro06',
      isLeader: true,
    },
    {
      name: 'Elena Vance',
      role: 'Principal Art Director & UI/UX',
      type: 'Studio Co-Lead (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      avatar: avatar2,
      bio: 'Memimpin visi estetika Lumina Studio, perancangan design tokens, hierarki tipografi modern, serta sistem glassmorphism bernuansa futuristik.',
      skills: ['Figma', 'Glassmorphism', 'Design Systems', 'Micro-Motion'],
      github: 'https://github.com',
      isLeader: false,
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology Officer',
      type: 'Studio Co-Lead (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      avatar: avatar3,
      bio: 'Mengoptimalkan pipeline bundling Vite, performa rendering DOM di bawah 50ms, dan penanganan state dinamis berbasis standar enterprise.',
      skills: ['React Hooks', 'JSX Architecture', 'Performance', 'CI/CD'],
      github: 'https://github.com',
      isLeader: false,
    },
    {
      name: 'Nabila Safira',
      role: 'Head of Product QA & Strategy',
      type: 'Studio Co-Lead (Data Contoh)',
      badgeGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      avatar: avatar4,
      bio: 'Menjamin kualitas kode bebas linting error, verifikasi kompatibilitas responsive lintas perangkat, serta penyusunan dokumentasi teknis formal.',
      skills: ['Quality Assurance', 'Docs System', 'UX Auditing', 'Git Flow'],
      github: 'https://github.com',
      isLeader: false,
    },
  ]

  return (
    <div className="team-page py-5 animate-fade-in">
      <div className="container py-lg-4">
        {/* Page Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '720px' }}>
          <div className="hero-pill">
            <i className="bi bi-people-fill text-info"></i>
            <span>THE VISIONARIES &bull; LUMINA COLLECTIVE</span>
          </div>
          <h1 className="display-5 fw-extrabold text-white mt-1" style={{ letterSpacing: '-0.5px' }}>
            Para Kreator di Balik <span className="text-gradient">Inovasi Digital</span>
          </h1>
          <p className="text-secondary small mt-2" style={{ lineHeight: '1.6' }}>
            Kolaborasi para pemikir desain, arsitek perangkat lunak frontend, dan spesialis produk digital
            yang mendedikasikan keahlian mereka untuk melahirkan karya berstandar industri.
          </p>
        </div>

        {/* Informative Note / Academic Disclaimer */}
        <div
          className="p-3 rounded-4 mb-5 d-flex align-items-start gap-3"
          style={{
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center p-2 text-primary"
            style={{ background: 'rgba(99, 102, 241, 0.2)', width: '38px', height: '38px', flexShrink: 0 }}
          >
            <i className="bi bi-info-circle-fill fs-5"></i>
          </div>
          <div>
            <h6 className="fw-bold text-white mb-1 small">Transparansi Data Anggota Tim Lumina</h6>
            <p className="mb-0 small text-secondary" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
              Profil pertama diisi oleh identitas mahasiswa penanggung jawab tugas (<strong>Riez Rafa Roro &bull; 0110224034 &bull; STT Terpadu Nurul Fikri</strong>).
              Profil berikutnya adalah data percontohan (<em>sample data</em>) yang dirancang untuk mensimulasikan
              struktur agensi kreatif dan pembagian peran profesional dalam pengembangan produk web.
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <TeamCard
                name={member.name}
                role={member.role}
                type={member.type}
                badgeGradient={member.badgeGradient}
                avatar={member.avatar}
                bio={member.bio}
                skills={member.skills}
                github={member.github}
                isLeader={member.isLeader}
              />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-5 p-4 rounded-4 text-center glass-panel"
          style={{ maxWidth: '820px', margin: '0 auto' }}
        >
          <h5 className="fw-bold text-white mb-2">Ingin Berdiskusi Langsung dengan Tim Lumina?</h5>
          <p className="text-secondary small mb-3">
            Kirimkan brief proyek Anda atau ajukan pertanyaan melalui formulir pada halaman Contact.
          </p>
          <button
            type="button"
            className="btn btn-lumina-primary btn-sm px-4"
            onClick={() => onNavigate('contact')}
          >
            <span>Buka Formulir Kontak</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Team
