import { contactLinks } from '../data';

export default function Contact(): React.ReactElement {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-box">
          <h2>Let's Connect</h2>
          <p>
            Currently open to new opportunities and collaborations in web development, media
            informatics, and interactive design.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`btn btn-${link.variant}`}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
