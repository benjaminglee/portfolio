import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import ParticlesBackground from '../particles/ParticlesBackground';
import About from '../about/About';
import Contact from '../contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Projects from '../projects/Projects';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const elem = document.getElementById('mainwrapper');
    console.log(elem.style);
    console.log(elem);
    const onScroll = () => {
      setOffset(window.pageYOffset);
      console.log(offset);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MainLayout theme={theme} id="mainwrapper">
      <div className="navPad"></div>
      <section className="hero" id="hero">
        <ParticlesBackground />
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
          <div
            className="moon"
            style={{
              transform: `translateY(${offset * 0.29}px)`,
              //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
            }}
          >
            adas
          </div>
        </div>
      </section>
      <div
        className="cloud2"
        style={{
          transform: `translateY(${offset * -1}px)`,
          //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
        }}
      >
        <img src="../cloud2.png" />
      </div>
      <About />
      <div
        className="cloud1"
        style={{
          transform: `translateY(${offset * -1}px)`,
          //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
        }}
      >
        <img src="../cloud1.png" />
      </div>
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Main;
