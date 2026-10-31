import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { profile, socials } from '../data/portfolio';
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  SparkIcon,
} from './Icons';

const iconFor = (icon: string) => {
  switch (icon) {
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'instagram':
      return <InstagramIcon />;
    default:
      return <MailIcon />;
  }
};

const RotatingRole: React.FC = () => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % profile.roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  if (reduceMotion) {
    return <span className="hero__role-text">{profile.roles[0]}</span>;
  }

  return (
    <span className="hero__role-text hero__role-text--rotating">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Photo: React.FC = () => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="polaroid">
      <span className="polaroid__tape polaroid__tape--left" aria-hidden="true" />
      <span className="polaroid__tape polaroid__tape--right" aria-hidden="true" />
      <div className="polaroid__frame">
        {failed ? (
          <div className="polaroid__placeholder">
            <span className="polaroid__initials">AP</span>
            <span className="polaroid__hint">Add photo at /public/photo.jpg</span>
          </div>
        ) : (
          <img
            src={profile.photoUrl}
            alt="Portrait of Adesh Pandey"
            width={800}
            height={1000}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="polaroid__caption">
        <span>Kathmandu, Nepal</span>
        <span className="polaroid__caption-year">2026</span>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <SparkIcon className="hero__spark hero__spark--one" />
        <SparkIcon className="hero__spark hero__spark--two" />
        <span className="hero__ring" />
        <span className="hero__squiggle" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            Available for collaboration
            <span className="eyebrow__sep" />
            <MapPinIcon className="eyebrow__pin" />
            {profile.location}
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">Adesh</span>
            <span className="hero__title-line hero__title-line--outline">
              Pandey
            </span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-label">Currently a</span>
            <RotatingRole />
          </p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View projects
              <ArrowUpRightIcon />
            </a>
            <a className="btn" href={profile.resumeUrl} download>
              Download CV
              <DownloadIcon />
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__socials-label">Find me</span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="icon-link"
                title={`${social.label} — ${social.handle}`}
              >
                {iconFor(social.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <span className="sticker sticker--hero" aria-hidden="true">
            Open to
            <br />
            collab
          </span>
          <Photo />
          <div className="hero__badge" aria-hidden="true">
            <SparkIcon />
            <span>
              Backend
              <br />
              heavy
            </span>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
