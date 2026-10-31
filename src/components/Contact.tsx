import React, { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile, socials } from '../data/portfolio';
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
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

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || 'a visitor'}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <SectionHeading
          index="06"
          title="Contact"
          accent="me"
          kicker="Have a role, a project, or a stubborn bug? My inbox is open."
        />

        <div className="contact__grid">
          <Reveal className="contact__form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <p className="contact-form__lead">
                Tell me a little about it. The form opens your email client with
                everything filled in.
              </p>

              <div className="contact-form__row">
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What are you building?"
                  required
                />
              </label>

              <div className="contact-form__actions">
                <button type="submit" className="btn btn--primary">
                  Send message
                  <ArrowUpRightIcon />
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={copyEmail}
                  aria-live="polite"
                >
                  {copied ? 'Email copied' : 'Copy email'}
                </button>
              </div>
            </form>
          </Reveal>

          <div className="contact__side">
            <Reveal delay={0.08}>
              <div className="contact__direct">
                <span className="contact__label">Direct line</span>
                <a className="contact__email" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <p className="contact__note">
                  Based in {profile.location}. Happy to work across time zones.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="contact__socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className="social-card"
                    href={social.url}
                    target={social.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <span className="social-card__icon">
                      {iconFor(social.icon)}
                    </span>
                    <span className="social-card__text">
                      <span className="social-card__label">{social.label}</span>
                      <span className="social-card__handle">{social.handle}</span>
                    </span>
                    <ArrowUpRightIcon className="social-card__arrow" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a className="contact__resume" href={profile.resumeUrl} download>
                <DownloadIcon />
                <span>
                  Download my CV
                  <small>PDF &middot; updated 2026</small>
                </span>
                <ArrowUpRightIcon className="social-card__arrow" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
