import React, { useMemo, useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TicTacToe from './TicTacToe';
import { miniProjects, projectFilters, projects } from '../data/portfolio';
import type { ProjectCategory } from '../data/portfolio';
import { ArrowUpRightIcon, CodeIcon } from './Icons';

const initials = (title: string) =>
  title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <SectionHeading
          index="05"
          title="Projects"
          accent="& experiments"
          kicker="Things I built to solve a problem — or to understand one."
        />

        <div className="project-filters" aria-label="Project filters">
          {projectFilters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              className={`project-filters__btn ${
                filter === item ? 'is-active' : ''
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
              <span className="project-filters__count">
                {item === 'All'
                  ? projects.length
                  : projects.filter((project) => project.category === item).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              delay={Math.min(index * 0.05, 0.25)}
              className={`project ${project.featured ? 'project--featured' : ''}`}
            >
              <article
                className="project__card"
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                <div className="project__cover">
                  <span className="project__initials" aria-hidden="true">
                    {initials(project.title)}
                  </span>
                  <span className="project__number">
                    {String(projects.indexOf(project) + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`badge project__status status--${project.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {project.status}
                  </span>
                  <span className="project__category">{project.category}</span>
                </div>

                <div className="project__body">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__tagline">{project.tagline}</p>
                  <p className="project__description">{project.description}</p>

                  <div className="project__tags">
                    {project.tech.map((tech) => (
                      <span className="chip chip--sm" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <footer className="project__footer">
                  <span className="project__year">{project.year}</span>
                  <div className="project__links">
                    {project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.label}
                          className="text-link"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <ArrowUpRightIcon />
                        </a>
                      ))
                    ) : (
                      <span className="project__no-link">
                        No public repository
                      </span>
                    )}
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="playground" className="playground">
          <Reveal>
            <div className="playground__head">
              <div>
                <span className="playground__label">
                  <CodeIcon /> Playground
                </span>
                <h3 className="playground__title">
                  Small builds, <em className="serif">big curiosity</em>
                </h3>
                <p className="playground__intro">
                  Older mini-projects that taught me the fundamentals. One of them
                  is playable right here.
                </p>
              </div>
              <span className="sticker sticker--playground" aria-hidden="true">
                Press
                <br />
                start
              </span>
            </div>
          </Reveal>

          <div className="playground__grid">
            <Reveal className="playground__game">
              <TicTacToe />
            </Reveal>

            <div className="playground__list">
              {miniProjects.map((mini, index) => (
                <Reveal key={mini.title} delay={index * 0.05}>
                  <a
                    className="mini"
                    href={mini.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mini__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="mini__text">
                      <span className="mini__title">{mini.title}</span>
                      <span className="mini__desc">{mini.description}</span>
                    </span>
                    <span className="mini__lang">{mini.language}</span>
                    <ArrowUpRightIcon className="mini__arrow" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
