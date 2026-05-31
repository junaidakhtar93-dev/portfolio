import { projects } from '../data';

export default function Projects(): React.ReactElement {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label">Projects</div>
        <div className="divider"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className={`project-card fade-in${project.featured ? ' featured' : ''}`}
              key={project.title}
            >
              {project.featured && <div className="featured-badge">⭐ Featured</div>}
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span className="tech" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
