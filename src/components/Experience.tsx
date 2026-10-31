import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';
import { MapPinIcon } from './Icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <SectionHeading
          index="03"
          title="Experience"
          accent="so far"
          kicker="Three teams, one throughline: backend systems that hold up."
        />

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08}>
              <article
                className={`timeline__item ${job.current ? 'is-current' : ''}`}
              >
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">
                    <MapPinIcon />
                    {job.location}
                  </span>
                  {job.current ? (
                    <span className="badge badge--live">
                      <span className="dot-pulse" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </div>

                <div className="timeline__marker" aria-hidden="true">
                  <span />
                </div>

                <div className="timeline__card">
                  <header className="timeline__head">
                    <div>
                      <h3 className="timeline__role">{job.role}</h3>
                      <p className="timeline__company">{job.company}</p>
                    </div>
                    <span className="timeline__index">
                      {String(experience.length - index).padStart(2, '0')}
                    </span>
                  </header>

                  <p className="timeline__summary">{job.summary}</p>

                  <ul className="timeline__list">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="timeline__tags">
                    {job.tags.map((tag) => (
                      <span className="chip chip--sm" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
