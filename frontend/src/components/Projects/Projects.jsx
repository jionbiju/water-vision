import './Projects.css';
import img1  from '../../assets/projects/1.jpeg';
import img2  from '../../assets/projects/2.jpeg';
import img3  from '../../assets/projects/3.jpeg';
import img4  from '../../assets/projects/4.jpeg';
import img5  from '../../assets/projects/5.jpeg';
import img6  from '../../assets/projects/6.jpeg';
import img7  from '../../assets/projects/7.jpeg';
import img8  from '../../assets/projects/8.jpeg';
import img9  from '../../assets/projects/9.jpeg';
import img10 from '../../assets/projects/10.jpg';
import img11 from '../../assets/projects/11.jpeg';
import img12 from '../../assets/projects/12.jpeg';

const projects = [
  {
    id: 1,
    image: img1,
    name: 'Punchiri Paadam Musical Dancing Fountain',
    location: 'Punchiri Paadam Park, Manissery, Ottapalam',
    region: 'Kerala',
    client: 'Bangalore Datacom Pvt Ltd',
    type: 'Musical Fountain',
    year: '2018',
  },
  {
    id: 2,
    image: img2,
    name: 'Government Botanical Garden Musical Fountain',
    location: 'Government Botanical Garden, Munnar',
    region: 'Kerala',
    client: 'DTPC Idukki',
    type: 'Botanical Garden',
    year: '2023',
  },
  {
    id: 3,
    image: img3,
    name: 'Elephant Camp Musical Fountain',
    location: 'Elephant Camp, Thekkady',
    region: 'Kerala',
    client: 'Elephant Camp Authority',
    type: 'Eco Tourism',
    year: '2020',
  },
  {
    id: 4,
    image: img4,
    name: 'St. George Orthodox Church Musical Garden',
    location: 'St. George Orthodox Church, Puthuppally, Kottayam',
    region: 'Kerala',
    client: 'St. George Orthodox Church',
    type: 'Religious Site',
    year: '2023',
  },
  {
    id: 5,
    image: img5,
    name: 'Gosree Musical Fountain',
    location: 'Gosree Musical Fountain Park, Kochi',
    region: 'Kerala',
    client: 'GIDA Kochi',
    type: 'Municipal Park',
    year: '2025',
  },
  {
    id: 6,
    image: img6,
    name: 'Vagamon Musical Fountain',
    location: 'Adventure Park, Wagamon',
    region: 'Kerala',
    client: 'DTPC Idukki',
    type: 'Adventure Park',
    year: '2024',
  },
  {
    id: 7,
    image: img7,
    name: 'GH Agro Park Musical Fountain',
    location: 'GH Agro Park, Kakkayam, Kozhikode',
    region: 'Kerala',
    client: 'GH Agro Park Authority',
    type: 'Agro Park',
    year: '2023',
  },
  {
    id: 8,
    image: img8,
    name: 'Akhilaanjali Musical Dancing Fountain',
    location: 'Akhilaanjali Convention Centre, Cherthala, Alappuzha',
    region: 'Kerala',
    client: 'Akhilaanjali Group',
    type: 'Convention Centre',
    year: '2021',
  },
  {
    id: 9,
    image: img9,
    name: 'Kottakkunnu Water Fountain & Multimedia Laser Show',
    location: 'Miracle Garden, Kottakkunnu, Malappuram',
    region: 'Kerala',
    client: 'DTPC Kottakkunnu',
    type: 'Multimedia Fountain',
    year: '2021',
  },
  {
    id: 10,
    image: img10,
    name: 'Kuriakose Elias School Fountain Garden',
    location: 'Kuriakose Elias English Medium School, Mannanam, Kottayam',
    region: 'Kerala',
    client: 'Kuriakose Elias English Medium School',
    type: 'Educational Institution',
    year: '2025',
  },
  {
    id: 11,
    image: img11,
    name: 'Sannidhanam Musical Garden',
    location: 'Sannidhanam House, Mazhuvannoor',
    region: 'Kerala',
    client: 'PV Santhosh',
    type: 'Private Residence',
    year: '2023',
  },
  {
    id: 12,
    image: img12,
    name: 'Carithas Matha Hospital Fountain Garden',
    location: 'Carithas Matha Hospital, Kottayam',
    region: 'Kerala',
    client: 'Carithas Hospital',
    type: 'Healthcare',
    year: '2024',
  },
];

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
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
                <span className="project-tag">{project.type}</span>
                <div className="project-img-overlay" />
              </div>

              <div className="project-info">
                <span className="project-number">Project {String(project.id).padStart(2, '0')}</span>
                <h3 className="project-name">{project.name}</h3>

                <div className="project-meta">
                  <p className="project-location">
                    <span className="project-meta-icon"><LocationIcon /></span>
                    {project.location} — {project.region}
                  </p>
                  <p className="project-year">
                    <span className="project-meta-icon"><CalendarIcon /></span>
                    {project.year}
                  </p>
                </div>

                <p className="project-client">
                  <span className="project-client-label">Client:</span> {project.client}
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
