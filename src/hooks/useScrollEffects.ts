import { useEffect, useState } from 'react';

export function useActiveSection(): string {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const onScroll = (): void => {
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return active;
}

export function useFadeIn(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll<HTMLElement>('.fade-in');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
