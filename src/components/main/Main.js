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
      <section className="about" id="about"></section>
      <section className="project" id="project">
        <Slider slides={slides} />
        {/* <div className="projectWrapper" id="project1">
          <img src="../../project1.png" />
          <div className="projectDesc">
            <h3>BluePrint</h3>
            <p>
              A toolkit website that allows developers to share and create
              sample buttons, forms, and other web elements. Users can like and
              save components, and compete for a total score on BluePrint's
              leaderboards.
            </p>
            <p>
              Technologies used: React JS, Redux, Express, PostgreSQL, Sequelize
            </p>
          </div>
        </div>
        <div className="projectWrapper" id="project2">
          <div className="projectDesc">
            <h3>Tickit</h3>
            <p>
              An E-commerce website designed around events. Users can search and
              sort by keyword, location, and date, purchase specific seats, add
              to their cart, and checkout using Stripe.
            </p>
            <p>
              Technologies used: React JS, Redux, Express, PostgreSQL, Sequelize
            </p>
          </div>
          <img src="../../project2.png" />
        </div>
        <div className="projectWrapper" id="project3">
          <img src="../../project3.png" />
          <div className="projectDesc">
            <h3>Picky!</h3>
            <p>
              A fun project completed over 4 days during Fullstack Academy's
              Hackathon. Users can save interactable recipe cards generated
              randomly by a recipe API and download them in a convenient PDF
              format.
            </p>
            <p>Technologies used: React JS, Redux, Framer Motion</p>
          </div>
        </div> */}
      </section>
      <section className="contact" id="contact">
        <div></div>
      </section>
    </MainLayout>
  );
};

export default Main;
