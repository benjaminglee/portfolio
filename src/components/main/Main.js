import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import slides from '../slider/slides';
import Slider from '../slider/Slider';
import ParticlesBackground from '../particles/ParticlesBackground';
import Contact from '../contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from '../projects/Projects';

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
      <section className="about" id="about">
        <h2>A Little About Me...</h2>
        <div className="about-main">
          <h3 className="question-left">Who am I?</h3>
          <div className="answer" data-aos="fade-up">
            <p>
              {' '}
              I'm a <span>software engineer</span> based in{' '}
              <span>Chicago, IL</span>.
            </p>
          </div>
          <h3 className="question-right">What do I do?</h3>
          <div className="answer-right">
            <p>
              I'm a trained <span>artist</span>, an avid chess player, and an
              enthusiastic hiker. I love working alongside{' '}
              <span>positive and productive</span> people. I'm a big{' '}
              <span>team player</span>, a bigger <span>problem solver</span>,
              and the biggest nerd.
            </p>
          </div>
          <h3 className="question-left">
            But like, what do I{' '}
            <span>
              <em>do</em>
            </span>{' '}
            do?
          </h3>
          <div className="answer">
            <p>
              I'm well-versed in <span>javascript development</span>, meaning
              I'm just as happy <span>designing databases</span> as I am keying
              out <span>complex animations</span>. My current stack includes{' '}
              <span>React</span>, <span>Redux</span>,{' '}
              <span>Styled-Components</span>, <span>LESS</span>,{' '}
              <span>Node</span>, <span>Express</span>, <span>Sequelize</span>,
              and <span>PostgreSQL</span>. I'm currently learning{' '}
              <span>GraphQL</span> at work, and I'm studying <span>Java</span>{' '}
              on my own.
            </p>
          </div>
        </div>
      </section>
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Main;
