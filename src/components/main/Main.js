import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import ParticlesBackground from '../particles/ParticlesBackground';
import ParticlesBackgroundDay from '../particles/ParticlesDay';
import About from '../about/About';
import Contact from '../contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from '../projects/Projects';
import Landscape from '../landscape/Landscape';
import ParallaxDiv from '../parallax/ParallaxDiv';

const Main = ({ mode }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  console.log('rerendering');
  return (
    <MainLayout mode={mode} theme={theme} id="mainwrapper">
      <div className="navPad"></div>
      <section className="hero" id="hero">
        {mode ? <ParticlesBackground /> : <ParticlesBackgroundDay />}
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
          <ParallaxDiv className="moon" speedX={0} speedY={-0.29}>
            <img
              src={mode ? 'images//moon.png' : 'images//sun.png'}
              alt="moon/sun"
            />
          </ParallaxDiv>
        </div>
      </section>
      <ParallaxDiv className="cloud2" speedX={0} speedY={0.9}>
        <img
          src={mode ? 'images//cloud2.png' : 'images//dayCloud2.png'}
          alt="passing cloud"
        />
      </ParallaxDiv>
      <About mode={mode} />
      <ParallaxDiv className="cloud1" speedX={0} speedY={0.9}>
        <img
          src={mode ? 'images//cloud1.png' : 'images//dayCloud1.png'}
          alt="passing cloud"
        />
      </ParallaxDiv>
      <Projects mode={mode} />
      <ParallaxDiv className="cloud2" id="cloud3" speedX={0} speedY={0.9}>
        <img
          src={mode ? 'images//cloud3.png' : 'images//dayCloud3.png'}
          alt="passing cloud"
        />
      </ParallaxDiv>
      <ParallaxDiv className="cloud1" id="cloud4" speedX={0} speedY={0.9}>
        <img
          src={mode ? 'images//cloud4.png' : 'images//dayCloud4.png'}
          alt="passing cloud"
        />
      </ParallaxDiv>

      <Contact mode={mode} />
      <div className="navPad"></div>
      <Landscape mode={mode} />
    </MainLayout>
  );
};

export default Main;
