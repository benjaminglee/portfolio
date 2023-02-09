import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import ParticlesBackground from '../particles/ParticlesBackground';
import ParticlesBackgroundDay from '../particles/ParticlesDay';
import About from '../about/About';
import Contact from '../contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Projects from '../projects/Projects';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Main = ({ mode }) => {
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
          <div
            className="moon"
            style={{
              transform: `translateY(${offset * 0.29}px)`,
              //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
            }}
          >
            <img src={mode ? '../moon.png' : '../sun.png'} alt="moon/sun" />
          </div>
        </div>
      </section>
      <div
        className="cloud2"
        style={{
          transform: `translateY(${offset * -0.9}px)`,
          //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
        }}
      >
        <img
          src={mode ? '../cloud2.png' : '../dayCloud2.png'}
          alt="passing cloud"
        />
      </div>
      <About mode={mode} />
      <div
        className="cloud1"
        style={{
          transform: `translateY(${offset * -0.9}px)`,
          //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
        }}
      >
        <img
          src={mode ? '../cloud1.png' : '../dayCloud1.png'}
          alt="passing cloud"
        />
      </div>
      <Projects mode={mode} />
      <div
        className="cloud2"
        id="cloud3"
        style={{
          transform: `translateY(${offset * -0.9}px)`,
          //transform: `translate(${offset * 1}px,${offset * -0.4}px)`,
        }}
      >
        <img
          src={mode ? '../cloud3.png' : '../dayCloud3.png'}
          alt="passing cloud"
        />
      </div>
      <Contact mode={mode} />
      <div className="navPad"></div>

      <div className="ground">
        <div className="campfire">
          <img
            src={mode ? '../campfireNight.png' : 'campfireDay.png'}
            className={mode ? 'fire' : null}
          />
        </div>
        <div className="ground-layer1"></div>
        <div className="ground-layer2"></div>
        <div className="ground-layer3"></div>
        {mode ? null : <img className="bones" src="../bones.png" />}
        {mode ? null : <img className="rocks" src="../rocks.png" />}
      </div>
    </MainLayout>
  );
};

export default Main;
