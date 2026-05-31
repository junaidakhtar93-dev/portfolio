import { navLinks } from '../data';
import { useActiveSection } from '../hooks/useScrollEffects';

export default function Nav(): React.ReactElement {
  const active = useActiveSection();

  return (
    <nav>
      <div className="nav-logo">JA.</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{ color: link.href === `#${active}` ? 'var(--accent)' : undefined }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
