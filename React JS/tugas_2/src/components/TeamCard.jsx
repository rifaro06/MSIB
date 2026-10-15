/**
 * Component TeamCard.
 * Menampilkan kartu profil anggota tim studio menggunakan React Props.
 *
 * @param {Object} props
 * @param {string} props.name - Nama lengkap anggota
 * @param {string} props.role - Peran/posisi dalam tim
 * @param {string} props.type - Tipe anggota (Founder / Studio Lead)
 * @param {string} props.badgeGradient - Style background badge peran
 * @param {string} props.avatar - Path file gambar/SVG avatar
 * @param {string} props.bio - Deskripsi singkat peran anggota
 * @param {string[]} props.skills - Daftar keahlian teknis
 * @param {string} props.github - URL profil GitHub
 * @param {boolean} props.isLeader - Penanda apakah anggota adalah penanggung jawab utama
 */
function TeamCard({
  name,
  role,
  type,
  badgeGradient,
  avatar,
  bio,
  skills,
  github,
  isLeader = false,
}) {
  return (
    <div className="glass-card team-card-lumina">
      <div className="team-avatar-box">
        <span
          className="position-absolute top-0 end-0 m-3 badge rounded-pill"
          style={{
            background: badgeGradient || 'rgba(99,102,241,0.2)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: '0.68rem',
            letterSpacing: '0.5px',
          }}
        >
          {isLeader ? 'Mahasiswa / Founder' : type}
        </span>
        <img
          src={avatar}
          alt={`Avatar ${name}`}
          className="team-avatar-img"
        />
      </div>

      <div className="card-body p-4 text-center d-flex flex-column flex-grow-1">
        <h5 className="fw-bold text-white mb-1" style={{ letterSpacing: '-0.3px' }}>
          {name}
        </h5>
        <div className="team-role-badge text-gradient-primary">
          {role}
        </div>

        <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
          {bio}
        </p>

        {/* Skills badges */}
        <div className="d-flex flex-wrap justify-content-center gap-1 mb-4">
          {skills &&
            skills.map((skill, sIdx) => (
              <span key={sIdx} className="skill-pill">
                {skill}
              </span>
            ))}
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-lumina-glass btn-sm w-100 justify-content-center"
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-github"></i>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
