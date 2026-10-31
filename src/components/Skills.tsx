import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolio';
import { CodeIcon } from './Icons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <SectionHeading
          index="02"
          title="Skills"
          accent="& tools"
          kicker="A toolbox earned through shipping, not a list of logos."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.06}
              className="skill-card"
            >
              <div
                className="skill-card__head"
                style={{ background: group.accent }}
              >
                <CodeIcon />
                <h3>{group.title}</h3>
                <span className="skill-card__count">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <div className="skill-card__body">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="skills__languages">
            <span className="skills__languages-label">Languages</span>
            <span className="chip chip--lg">Nepali</span>
            <span className="chip chip--lg">English</span>
            <span className="skills__languages-note">
              Comfortable in remote, async teams.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
