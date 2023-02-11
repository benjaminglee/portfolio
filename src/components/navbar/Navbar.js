import Burger from './Burger';
import NavbarLayout from './Navbar.layout';
import { FaLinkedin, FaGithub, FaEnvelope, FaAngleUp } from 'react-icons/fa';
import Toggle from '../toggle/Toggle';

const Navbar = ({ mode, setMode }) => (
  <NavbarLayout mode={mode}>
    <div className="navbar-main">
      <Toggle mode={mode} setMode={setMode} />
      <div className="arrow-top" onClick={() => window.scrollTo(0, 0)}>
        <div className="arrow-inner">
          <div className="arrow-face">
            <FaAngleUp size="25px" />
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="linkwrapper">
          <a href="#aboutMe">About</a>
        </div>
        <div className="linkwrapper">
          <a href="#myprojects">Projects</a>
        </div>
        <div className="linkwrapper">
          <a href="#contactme">Contact</a>
        </div>
        <div className="linkwrapper">
          <a
            href="../../Benjamin_Lee_Resume.pdf"
            download="Benjamin_Lee_Resume"
          >
            Resume
          </a>
        </div>
        <div className="linkwrapper">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/benjamin-g-lee/"
            target="_blank"
          >
            <FaLinkedin size="2rem" />
          </a>
        </div>
        <div className="linkwrapper">
          <a rel="noreferrer" href="mailto: benjaminlee0727@gmail.com">
            <FaEnvelope size="2rem" />
          </a>
        </div>
        <div className="linkwrapper">
          <a
            rel="noreferrer"
            href="https://github.com/benjaminglee"
            target="_blank"
          >
            <FaGithub size="2rem" />
          </a>
        </div>
      </nav>
      <Burger mode={mode} />
    </div>
  </NavbarLayout>
);

export default Navbar;
