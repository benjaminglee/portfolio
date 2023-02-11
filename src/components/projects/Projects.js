import ProjectsLayout from './Projects.layout';
import slides from '../slider/slides';
import Slider from '../slider/Slider';

const Projects = ({ mode }) => {
  return (
    <ProjectsLayout mode={mode}>
      <a className="anchor" id="myprojects"></a>
      <div className="projects" id="project">
        <h2
          className="projectHeader"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Projects
        </h2>
        <div
          className="singleProject"
          data-aos="fade-left"
          easing="ease-out"
          data-aos-duration="800"
        >
          <Slider slides={slides[0]} mode={mode} />
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
        <div
          className="singleProject"
          easing="ease-out"
          data-aos-duration="800"
          data-aos="fade-right"
        >
          <Slider mode={mode} slides={slides[1]} />
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
        <div
          className="singleProject"
          id="picky"
          easing="ease-out"
          data-aos-duration="800"
          data-aos="fade-left"
        >
          <Slider mode={mode} slides={slides[2]} />
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
      </div>
    </ProjectsLayout>
  );
};

export default Projects;
