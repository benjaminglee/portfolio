import RightNav from './RightNav';
import Burger from './Burger';
import NavbarLayout from './Navbar.layout';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { theme } from '../../styles/constants';

const Navbar = () => (
  <NavbarLayout theme={theme}>
    <div className="navbar-main">
      <div className="logo">
        <a href="#hero">BenLee</a>
      </div>
      <nav className="navbar">
        <div className="linkwrapper">
          <a href="#about">About</a>
        </div>
        <div className="linkwrapper">
          <a href="#project">Projects</a>
        </div>
        <div className="linkwrapper">
          <a href="#contact">Contact</a>
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
          <a
            rel="noreferrer"
            href="https://github.com/benjaminglee"
            target="_blank"
          >
            <FaGithub size="2rem" />
          </a>
        </div>
      </nav>
      <Burger />
    </div>
  </NavbarLayout>
);

export default Navbar;
