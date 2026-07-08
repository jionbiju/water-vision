import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { keralaProjects, otherProjects } from '../assets/data.js';
import './ProjectsPage.css';

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="pp-card">
    <div className="pp-img-wrap">
      <img src={project.image} alt={project.name} className="pp-img" />
      {!project.direct && <span className="pp-assoc-tag">Associated</span>}
      <div className="pp-img-overlay" />
    </div>
    <div className="pp-info">
      <span className="pp-number">Project {String(project.id).padStart(2,'0')}</span>
      <h3 className="pp-name">{project.name}</h3>
      <p className="pp-location">
        <span className="pp-icon"><LocationIcon /></span>
        {project.location} — {project.region}
      </p>
      {!project.direct && project.partner && (
        <p className="pp-partner">In association with {project.partner}</p>
      )}
      <p className="pp-client"><span className="pp-client-label">Client: </span>{project.client}</p>
      {project.year !== '—' && (
        <div className="pp-year">
          <span className="pp-icon-sm"><CalendarIcon /></span>{project.year}
        </div>
      )}
    </div>
  </div>
);

const ProjectsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0,0); }, []);

  const isKerala = category === 'kerala';
  const projects = isKerala ? keralaProjects : otherProjects;
  const title    = isKerala ? 'Kerala Projects' : 'Projects Across India';
  const subtitle = isKerala
    ? 'All fountain installations delivered across Kerala.'
    : 'Landmark projects executed across Karnataka, Goa, Telangana, Meghalaya, and more.';

  return (
    <div className="pp-page">
      {/* Top bar */}
      <div className="pp-topbar">
        <button className="pp-back-btn" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Back to Home
        </button>
        <div className="pp-topbar-tabs">
          <button className={`pp-tab ${isKerala ? 'active' : ''}`} onClick={() => navigate('/projects/kerala')}>🌴 Kerala</button>
          <button className={`pp-tab ${!isKerala ? 'active' : ''}`} onClick={() => navigate('/projects/other-states')}>🗺️ Other States</button>
        </div>
        <span className="pp-topbar-brand">Water Vision Fountains</span>
      </div>

      {/* Header */}
      <div className="pp-header">
        <span className="pp-badge">Our Portfolio</span>
        <h1 className="pp-heading">{title}</h1>
        <p className="pp-subtext">{subtitle}</p>
        <span className="pp-count">{projects.length} Projects</span>
      </div>

      {/* Grid */}
      <div className="pp-container">
        <div className="pp-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
