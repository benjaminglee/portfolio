import FooterLayout from './FooterLayout';
import { FaLinkedin, FaGithub, FaRegListAlt, FaEnvelope } from 'react-icons/fa';

const Footer = ({ mode }) => {
  return (
    <FooterLayout mode={mode}>
      <div className="footer-icons">
        <div className="footer-icon-wrapper">
          <a
            href="../../Benjamin_Lee_Resume.pdf"
            download="Benjamin_Lee_Resume"
          >
            <FaRegListAlt size="40px" />
          </a>
        </div>
        <div className="footer-icon-wrapper">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/benjamin-g-lee/"
            target="_blank"
          >
            <FaLinkedin size="40px" />
          </a>
        </div>
        <div className="footer-icon-wrapper">
          <a
            rel="noreferrer"
            href="https://github.com/benjaminglee"
            target="_blank"
          >
            <FaGithub size="40px" />
          </a>
        </div>
        <div className="footer-icon-wrapper">
          <a
            rel="noreferrer"
            href="mailto: benjaminlee0727@gmail.com"
            target="_blank"
          >
            <FaEnvelope size="40px" />
          </a>
        </div>
      </div>
      <div className="credit">© Ben Lee 2023</div>
    </FooterLayout>
  );
};

export default Footer;
