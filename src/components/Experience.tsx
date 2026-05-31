import { education, timeline } from '../data';

export default function Experience(): React.ReactElement {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label">Experience & Education</div>
        <div className="divider"></div>
        <div className="timeline">
          {timeline.map((entry) => (
            <div className="timeline-item fade-in" key={entry.role}>
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <span className="timeline-role">{entry.role}</span>
                <span className="timeline-company">{entry.company}</span>
                <span className="timeline-date">{entry.date}</span>
              </div>
              <ul className="timeline-list">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px' }}>
          <div className="edu-card fade-in">
            <div className="edu-icon">{education.icon}</div>
            <div className="edu-body">
              <h3>{education.degree}</h3>
              <div className="inst">{education.institution}</div>
              <div className="meta">{education.meta}</div>
              <div className="courses">
                {education.courses.map((course) => (
                  <span className="tag" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
