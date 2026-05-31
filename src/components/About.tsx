import { aboutParagraphs, stats } from '../data';

export default function About(): React.ReactElement {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-label">About</div>
        <div className="divider"></div>
        <div className="about-grid">
          <div className="about-text">
            {aboutParagraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-card fade-in" key={stat.label}>
                <div className="num">{stat.num}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
