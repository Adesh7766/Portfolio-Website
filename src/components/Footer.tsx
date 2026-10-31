import React from 'react';
import { profile, socials } from '../data/portfolio';
import {
  ArrowUpRightIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
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

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__cta">
            <span className="footer__kicker">
              <SparkIcon /> Next chapter
            </span>
            <p className="footer__big">
              Let&apos;s build something
              <br />
              <em className="serif">worth remembering.</em>
            </p>
            <a className="btn btn--light" href={`mailto:${profile.email}`}>
              Start a conversation
              <ArrowUpRightIcon />
            </a>
          </div>

          <div className="footer__side">
            <div className="footer__block">
              <span className="footer__label">Elsewhere</span>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {iconFor(social.icon)}
                  {social.label}
                </a>
              ))}
            </div>

            <div className="footer__block">
              <span className="footer__label">Say hello</span>
              <a className="footer__link" href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
              </a>
              <span className="footer__link footer__link--muted">
                Kathmandu, Nepal
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} Adesh Pandey. Built from scratch.
          </span>
          <span className="footer__mono">
            React / TypeScript / Framer Motion
          </span>
          <a className="footer__back" href="#home">
            Back to top
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
