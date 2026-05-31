import { skillGroups } from '../data';

export default function Skills(): React.ReactElement {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">Skills</div>
        <div className="divider"></div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group fade-in" key={group.title}>
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className={group.purple ? 'tag purple' : 'tag'} key={tag}>
                    {tag}
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
