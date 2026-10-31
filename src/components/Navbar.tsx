import React, { useEffect, useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand__mark" aria-hidden="true">
              AP
            </span>
            <span className="brand__text">
              Adesh Pandey
              <span className="brand__sub">Software Engineer</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--small nav__cta" href="#contact">
            Let&apos;s talk
          </a>

          <button
            className="nav__toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="nav__mobile" id="mobile-menu">
          <nav aria-label="Mobile">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__mobile-link ${
                  active === link.id ? 'is-active' : ''
                }`}
                aria-current={active === link.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
            <a
              className="nav__mobile-link"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              <span>07</span>
              Say hello
            </a>
          </nav>
          <p className="nav__mobile-note">
            Kathmandu, Nepal &mdash; open to interesting problems.
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
