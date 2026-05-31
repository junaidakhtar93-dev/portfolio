export default function Hero(): React.ReactElement {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-tag">Available for Opportunities</div>
        <h1>
          Hi, I'm <span>Junaid Akhtar</span>
        </h1>
        <p className="hero-sub">
          Computer Science graduate turned systems & web developer — building at the intersection of
          data, design, and human experience.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
