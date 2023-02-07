import Navbar from '../navbar/Navbar';
import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import slides from '../slider/slides';
import Slider from '../slider/Slider';
import ParticlesBackground from '../particles/ParticlesBackground';
const Main = () => {
  return (
    <MainLayout theme={theme}>
      <ParticlesBackground />
      <Navbar />
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
        <h3>Who am I?</h3>
        <div>
          I'm a software engineer based in Chicago, IL.
          <h3>What do you do?</h3>
          <div>
            I'm a trained artist, an avid chess player, and an enthusiastic
            hiker. I love working alongside positive and productive people. I'm
            a big team player, a bigger problem solver, and the biggest nerd.
          </div>
          <h3>But like, what do you do do?</h3>
          <div>
            I'm well-versed in javascript development, meaning I'm just as happy
            designing databases as I am keying out complex animations. My
            current stack includes React, Redux, Styled-Components/LESS, Node,
            Express, Sequelize, PostgreSQL/MySQL. I'm currently learning GraphQL
            at work and I'm studying Java on my own.
          </div>
        </div>
        <div></div>
      </section>

      <section className="project" id="project">
        <h2>Projects</h2>
        <h3>BluePrint</h3>
        <Slider slides={slides[0]} />
        <div className="project-info">
          <p>
            A toolkit website that allows developers to share and create sample
            buttons, forms, and other web elements. Users can like and save
            components, and compete for a total score on BluePrint's
            leaderboards.
          </p>
          <p className="skills">
            <span>Technologies:</span> React, Redux, Node, PostgreSQL, Firebase,
            Sequelize
          </p>
          <div className="button-container">
            <a
              href="https://fsa-blueprint.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Open</button>
            </a>
            <a
              href="https://github.com/2208-blueprint/BluePrint"
              target="_blank"
              rel="noreferrer"
            >
              <button>Repo</button>
            </a>
          </div>
        </div>
        <h3>Tickit</h3>
        <Slider slides={slides[1]} />
        <div className="project-info">
          <p>
            An E-commerce website designed around events. Users can search and
            sort by keyword, location, and date, purchase specific seats, add to
            their cart, and checkout using Stripe.
          </p>
          <p className="skills">
            <span>Technologies:</span> React, Redux, Node, PostgreSQL, Sequelize
          </p>
          <div className="button-container">
            <a
              href="https://tickit-shopper.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Open</button>
            </a>
            <a
              href="https://github.com/FSA-2208-Eddy/grace-shopper"
              target="_blank"
              rel="noreferrer"
            >
              <button>Repo</button>
            </a>
          </div>
        </div>
        <h3>Picky!</h3>
        <Slider slides={slides[2]} />
        <div className="project-info">
          <p>
            A fun project completed over 3 days during Fullstack Academy's
            Hackathon. Users can save interactable recipe cards generated
            randomly by a recipe API and download them in a convenient PDF
            format.
          </p>
          <p className="skills">
            <span>Technologies:</span> React, Redux, Axios, Framer Motion
          </p>
          <div className="button-container">
            <a
              href="https://youtu.be/czcKf8JNAhY"
              target="_blank"
              rel="noreferrer"
            >
              <button>Demo</button>
            </a>
            <a
              href="https://github.com/benjaminglee/Picky"
              target="_blank"
              rel="noreferrer"
            >
              <button>Repo</button>
            </a>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div></div>
      </section>
    </MainLayout>
  );
};

export default Main;
