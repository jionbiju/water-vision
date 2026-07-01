import './Projects.css';
import img1 from '../../assets/projects/1.jpeg';
import img2 from '../../assets/projects/2.jpeg';
import img3 from '../../assets/projects/3.jpeg';
import img4 from '../../assets/projects/4.jpeg';
import img5 from '../../assets/projects/5.jpeg';

const projects = [
  {
    id: 1,
    image: img1,
    name: 'Musical Dancing Fountain',
    location: 'Punchiripadam, Manissery',
    region: 'Ottapalam, Kerala',
    tag: 'Musical Fountain',
  },
  {
    id: 2,
    image: img2,
    name: 'Government Botanical Garden',
    location: 'Munnar',
    region: 'Kerala',
    tag: 'Botanical Garden',
  },
  {
    id: 3,
    image: img3,
    name: 'Kaginele Musical Fountain',
    location: 'Kaginele Park, Haveri',
    region: 'Karnataka',
    tag: 'Musical Fountain',
  },
  {
    id: 4,
    image: img4,
    name: 'Elephant Camp Fountain',
    location: 'Thekkady, Idukki',
    region: 'Kerala',
    tag: 'Eco Tourism',
  },
  {
    id: 5,
    image: img5,
    name: 'St. George Orthodox Church',
    location: 'Puthuppally, Kottayam',
    region: 'Kerala',
    tag: 'Religious Site',
  },
];

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <span className="projects-badge">Our Portfolio</span>
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-subtext">
            From government gardens to cultural landmarks — a selection of water feature
            installations we've proudly delivered across India.
          </p>
        </div>

        {/* Cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img-wrap">
                <img src={project.image} alt={project.name} className="project-img" />
                <span className="project-tag">{project.tag}</span>
                <div className="project-img-overlay" />
              </div>

              <div className="project-info">
                <span className="project-number">0{project.id}</span>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-location">
                  <span className="project-loc-icon"><LocationIcon /></span>
                  {project.location} &mdash; {project.region}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
