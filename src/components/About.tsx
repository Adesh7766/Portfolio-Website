import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile, stats } from '../data/portfolio';
import { MapPinIcon } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <SectionHeading
          index="01"
          title="About"
          accent="me"
          kicker="The short version: I make the invisible parts work."
        />

        <div className="about__grid">
          <Reveal className="about__story">
            <p className="lede">
              I like the part of the job most people avoid: the{' '}
              <span className="highlight">backend</span>.
            </p>
            <p>
              APIs, database schemas, deployment pipelines &mdash; the plumbing
              that makes a product feel effortless. I&apos;m a software engineer
              based in {profile.location}, currently building and shipping
              ASP.NET Core services at Riddhsoft.
            </p>
            <p>
              My day is spent designing endpoints, shaping relational data, and
              connecting it to React and Next.js interfaces. Before that I worked
              with Blazor, Windows Services, and webhooks at Codebee Nepal, and
              started out writing ASP.NET MVC modules at Giga Infosoft.
            </p>
            <p>
              Outside of work I build things to learn: a football analytics
              platform, a task manager, a notes app, a few browser games. I care
              about clean contracts, honest data, and interfaces that respect the
              person using them.
            </p>

            <div className="about__meta">
              <span>
                <MapPinIcon /> {profile.location}
              </span>
              <span>Nepali / English</span>
              <span>Open to remote</span>
            </div>
          </Reveal>

          <div className="about__side">
            <Reveal delay={0.08}>
              <div className="currently">
                <div className="currently__top">
                  <span className="currently__label">Currently</span>
                  <span className="dot-pulse" aria-hidden="true" />
                </div>
                <h3 className="currently__role">Software Engineer</h3>
                <p className="currently__company">Riddhsoft</p>
                <p className="currently__meta">Kathmandu, Nepal</p>
                <span className="badge badge--dark">Jun 2026 &mdash; Present</span>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="stats">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <span className="stat__value">{stat.value}</span>
                    <span className="stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
