import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SparkIcon } from './components/Icons';

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />

        <Marquee
          className="marquee--red"
          items={[
            'Open to collaborate',
            '.NET & full-stack',
            'Kathmandu, Nepal',
            'APIs that behave',
            'Say hello',
          ]}
          separator={<SparkIcon />}
          speed={32}
        />

        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />

        <Marquee
          className="marquee--yellow"
          items={[
            'Let’s build something',
            'Backend heavy',
            'Full-stack curious',
            'Always shipping',
          ]}
          separator={<SparkIcon />}
          speed={38}
          reverse
        />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
