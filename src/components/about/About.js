import AboutLayout from './About.layout';

const About = ({ mode }) => {
  return (
    <AboutLayout mode={mode}>
      <a class="anchor" id="aboutMe"></a>
      <div className="about" id="about">
        <h2 className="aboutHeader" data-aos="fade-up" data-aos-duration="800">
          A Little About Me...
        </h2>
        <div className="about-main">
          <h3
            className="question-left"
            data-aos="fade-right"
            easing="ease-out"
            data-aos-duration="800"
          >
            Who am I?
          </h3>
          <div
            className="answer"
            data-aos="zoom-in-right"
            easing="ease-out"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <p>
              {' '}
              I'm a <span>software engineer</span> based in{' '}
              <span>Chicago, IL</span>.
            </p>
          </div>
          <h3
            className="question-right"
            data-aos="fade-left"
            easing="ease-out"
            data-aos-duration="800"
          >
            What do I do?
          </h3>
          <div
            className="answer-right"
            data-aos="zoom-in-left"
            data-aos-delay="200"
            easing="ease-out"
            data-aos-duration="800"
          >
            <p>
              I'm a trained <span>artist</span>, an avid chess player, and an
              enthusiastic hiker. I love working alongside{' '}
              <span>positive and productive</span> people. I'm a big{' '}
              <span>team player</span>, a bigger <span>problem solver</span>,
              and the biggest nerd.
            </p>
          </div>
          <h3
            className="question-left"
            data-aos="fade-right"
            easing="ease-out"
            data-aos-duration="800"
          >
            But like, what do I{' '}
            <span>
              <em>do</em>
            </span>{' '}
            do?
          </h3>
          <div
            className="answer"
            data-aos="zoom-in-right"
            data-aos-delay="200"
            easing="ease-out"
            data-aos-duration="800"
          >
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
      </div>
    </AboutLayout>
  );
};

export default About;
