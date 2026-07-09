import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { keralaProjects, otherProjects } from '../../assets/data.js';

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-img-wrap">
      <img src={project.image} alt={project.name} className="project-img" />
      
      <div className="project-img-overlay" />
    </div>
    <div className="project-info">
      <span className="project-number">Project {String(project.id).padStart(2,'0')}</span>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-location">
        <span className="project-meta-icon"><LocationIcon /></span>
        {project.location} — {project.region}
      </p>
      {!project.direct && project.partner && (
        <p className="project-partner">In association with {project.partner}</p>
      )}
      <p className="project-client">
        <span className="project-client-label">Client: </span>{project.client}
      </p>
      {project.year !== '—' && (
        <span className="project-year-badge">{project.year}</span>
      )}
    </div>
  </div>
);

const CategoryRow = ({ title, region, projects, onViewAll }) => (
  <div className="proj-category">
    <div className="proj-cat-header">
      <div className="proj-cat-label">
        <span className="proj-cat-flag">{region === 'Kerala' ? '🌴' : '🗺️'}</span>
        <h3 className="proj-cat-title">{title}</h3>
        <span className="proj-cat-count">{projects.length} Projects</span>
      </div>
      <button className="proj-view-all-btn" onClick={onViewAll}>
        View All
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
    <div className="projects-grid">
      {projects.slice(0, 3).map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  </div>
);

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-badge">Our Portfolio</span>
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-subtext">
            Landmark fountain installations delivered across Kerala and multiple states of India —
            for government bodies, tourism authorities, and private clients.
          </p>
        </div>
        <CategoryRow
          title="Kerala Projects"
          region="Kerala"
          projects={keralaProjects}
          onViewAll={() => navigate('/projects/kerala')}
        />
        <CategoryRow
          title="Projects Across India"
          region="Other"
          projects={otherProjects}
          onViewAll={() => navigate('/projects/other-states')}
        />
      </div>
    </section>
  );
};

export default Projects;
