import Navbar from '../navbar/Navbar';
import MainLayout from './Main.layout';
import { theme } from '../../styles/constants';
import slides from '../slider/slides';
import Slider from '../slider/Slider';
import ParticlesBackground from '../particles/ParticlesBackground';
import { ContactUs } from './Contact';
import Footer from './Footer';
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
        <div className="about-main">
          <h3 className="question-left">Who am I?</h3>
          <div className="answer">
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

      <section className="projects" id="project">
        <h2>Projects</h2>
        <div className="singleProject">
          <Slider slides={slides[0]} />
          <div className="project-info">
            <h3 className="projectTitle">BluePrint</h3>
            <p>
              A toolkit website that allows developers to share and create
              sample buttons, forms, and other web elements. Users can like and
              save components, and compete for a total score on BluePrint's
              leaderboards.
            </p>
            <p className="skills">
              <span>Technologies:</span> React, Redux, Node, PostgreSQL,
              Firebase, Sequelize
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
        </div>
        <div className="singleProject">
          <Slider slides={slides[1]} />
          <div className="project-info">
            <h3 className="projectTitle">Tickit</h3>
            <p>
              An E-commerce website designed around events. Users can search and
              sort by keyword, location, and date, purchase specific seats, add
              to their cart, and checkout using Stripe.
            </p>
            <p className="skills">
              <span>Technologies:</span> React, Redux, Node, PostgreSQL,
              Sequelize
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
        </div>
        <div className="singleProject">
          <Slider slides={slides[2]} />
          <div className="project-info">
            <h3 className="projectTitle">Picky!</h3>
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
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 id="contactHeader">Contact Me!</h2>
        <div className="contact-main">
          <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33997.69821304711!2d-87.70018472935685!3d41.90432088687726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2c5d9cb201f%3A0x9c95d9bc940da12f!2sWicker%20Park%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1675744685946!5m2!1sen!2sus"></iframe>
          </div>
          <div className="contact-text">
            <p>
              I'm currently looking for a full-time role, though I'm open to
              other opportunites. Don't hesitate to reach out with any
              questions.
            </p>
            <ContactUs />
          </div>
        </div>
      </section>
      <Footer />
    </MainLayout>
  );
};

export default Main;
