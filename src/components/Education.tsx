import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { credentials, education } from '../data/portfolio';
import { ArrowUpRightIcon, MapPinIcon, SparkIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="section section--education">
      <div className="container">
        <SectionHeading
          index="04"
          title="Education"
          accent="& credentials"
          kicker="The formal part, plus the things I did for the love of it."
        />

        <div className="edu__grid">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="edu-card">
                <span className="edu-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="edu-card__title">{item.title}</h3>
                <p className="edu-card__school">{item.school}</p>
                <p className="edu-card__location">
                  <MapPinIcon />
                  {item.location}
                </p>
                {item.url ? (
                  <a
                    className="text-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit institution
                    <ArrowUpRightIcon />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="creds">
          <Reveal>
            <h3 className="creds__title">
              <SparkIcon /> Training &amp; community
            </h3>
          </Reveal>
          <div className="creds__grid">
            {credentials.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="cred">
                  <div className="cred__top">
                    <span className="cred__kind">{item.kind}</span>
                    <span className="cred__year">{item.year}</span>
                  </div>
                  <h4 className="cred__title">{item.title}</h4>
                  <p className="cred__issuer">{item.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
