import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import ParticlesBackground from '../particles/ParticlesBackground';
import About from '../about/About';
import Contact from '../contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from '../projects/Projects';

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MainLayout theme={theme}>
      <ParticlesBackground />

      <section className="hero" id="hero">
        <div className="desc-background">
          <div className="name">
            Hi there! I'm{' '}
            <span>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/benjamin-g-lee/"
                target="_blank"
              >
                Benjamin Lee
              </a>
              <span>.</span>
            </span>
          </div>
          <div className="desc">
            I'm a{' '}
            <span>
              {' '}
              <a
                rel="noreferrer"
                href="https://github.com/benjaminglee"
                target="_blank"
              >
                full-stack developer{' '}
              </a>
            </span>{' '}
            currently working at{' '}
            <span>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/company/grub-runner/mycompany/"
                target="_blank"
              >
                Text2Order
              </a>
            </span>
            .
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Main;
