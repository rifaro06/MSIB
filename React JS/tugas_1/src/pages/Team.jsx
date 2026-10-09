import avatar1 from '../assets/avatar-1.svg'
import avatar2 from '../assets/avatar-2.svg'
import avatar3 from '../assets/avatar-3.svg'
import avatar4 from '../assets/avatar-4.svg'

function Team({ onNavigate }) {
  const teamMembers = [
    {
      name: 'Riez Rafa Roro',
      role: 'Lead Frontend Developer',
      type: 'Mahasiswa (Penanggung Jawab)',
      typeBadge: 'bg-primary text-white',
      avatar: avatar1,
      bio: 'Mahasiswa STT Terpadu Nurul Fikri (NIM: 0110224034). Bertanggung jawab atas inisialisasi arsitektur komponen React, routing dasar, dan styling Bootstrap.',
      skills: ['React JS', 'Bootstrap 5', 'JavaScript ES6+', 'Vite'],
      github: 'https://github.com/rifaro06',
    },
    {
      name: 'Sarah Amalia',
      role: 'UI/UX Designer',
      type: 'Data Contoh (Sample Data)',
      typeBadge: 'bg-light text-secondary border',
      avatar: avatar2,
      bio: 'Fokus pada perancangan wireframe, pemilihan hierarki tipografi, konsistensi warna antarmuka, dan kenyamanan interaksi pengguna (user experience).',
      skills: ['Figma', 'Design System', 'Wireframing', 'Responsive Design'],
      github: 'https://github.com',
    },
    {
      name: 'Dimas Pratama',
      role: 'Frontend Specialist',
      type: 'Data Contoh (Sample Data)',
      typeBadge: 'bg-light text-secondary border',
      avatar: avatar3,
      bio: 'Mengembangkan komponen interaktif, penanganan state lokal React, serta optimalisasi integrasi komponen grid dan formulir Bootstrap.',
      skills: ['React Hooks', 'JSX Syntax', 'Bootstrap Grid', 'HTML5 Validation'],
      github: 'https://github.com',
    },
    {
      name: 'Nabila Putri',
      role: 'QA & Technical Writer',
      type: 'Data Contoh (Sample Data)',
      typeBadge: 'bg-light text-secondary border',
      avatar: avatar4,
      bio: 'Memastikan kualitas kode bebas error linting, verifikasi kesesuaian tampilan pada berbagai perangkat, serta penyusunan laporan dokumentasi tugas.',
      skills: ['Testing UI', 'Documentation', 'Git Workflow', 'PDF Reporting'],
      github: 'https://github.com',
    },
  ]

  return (
    <div className="team-page py-5 animate-fade-in">
      <div className="container py-lg-3">
        {/* Page Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill bg-primary-subtle text-primary border border-primary-subtle small fw-semibold">
            <i className="bi bi-people-fill"></i>
            <span>Meet Our Team</span>
          </div>
          <h1 className="display-5 fw-bold text-dark mt-1">Tim Pengembang &amp; Kolaborasi</h1>
          <p className="lead text-secondary">
            Mengenal profil peran anggota tim dalam merancang, mengembangkan, dan menguji aplikasi web berbasis React JS.
          </p>
        </div>

        {/* Informative Note / Disclaimer */}
        <div className="alert alert-info border-info-subtle shadow-sm rounded-3 mb-5 d-flex align-items-start gap-3">
          <i className="bi bi-info-circle-fill fs-4 text-info mt-1"></i>
          <div>
            <h6 className="alert-heading fw-bold mb-1">Catatan Data Anggota Tim</h6>
            <p className="mb-0 small text-body-secondary">
              Profil pertama diisi oleh identitas mahasiswa penanggung jawab tugas (Riez Rafa Roro).
              Profil selanjutnya merupakan data percontohan (<em>sample data</em>) yang dirancang untuk
              mensimulasikan pembagian peran kerja tim pengembang perangkat lunak secara profesional.
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="card h-100 team-card shadow-sm border-0 d-flex flex-column">
                <div className="team-avatar-wrapper text-center position-relative">
                  <span
                    className={`position-absolute top-0 end-0 m-3 badge rounded-pill ${member.typeBadge} small`}
                    style={{ fontSize: '0.7rem' }}
                  >
                    {index === 0 ? 'Mahasiswa' : 'Contoh'}
                  </span>
                  <img
                    src={member.avatar}
                    alt={`Avatar ${member.name}`}
                    className="team-avatar shadow-sm"
                  />
                </div>

                <div className="card-body p-4 text-center d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold text-dark mb-1">{member.name}</h5>
                  <div className="text-primary fw-semibold small mb-2">{member.role}</div>

                  <p className="card-text text-secondary small mb-3 flex-grow-1">
                    {member.bio}
                  </p>

                  {/* Skills badges */}
                  <div className="d-flex flex-wrap justify-content-center gap-1 mb-3">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="badge bg-light text-dark border small"
                        style={{ fontSize: '0.72rem' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-auto pt-2 border-top">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-pill w-100 d-inline-flex align-items-center justify-content-center gap-1"
                    >
                      <i className="bi bi-github"></i>
                      <span>Profil GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-5 text-center p-4 bg-light rounded-4 border">
          <h5 className="fw-bold mb-2">Punya pertanyaan untuk anggota tim kami?</h5>
          <p className="text-secondary small mb-3">
            Jangan ragu untuk mengirimkan pesan atau diskusi melalui formulir pada halaman Contact.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-sm px-4 rounded-pill"
            onClick={() => onNavigate('contact')}
          >
            Buka Halaman Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default Team
