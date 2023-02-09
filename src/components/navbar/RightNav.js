import RightNavLayout from './RightNav.layout';

const RightNav = ({ open, setOpen }) => {
  return (
    <RightNavLayout open={open}>
      <nav className="navbar-right">
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#aboutMe">./About</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#myprojects">./Projects</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#contactme">./Contact</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/benjamin-g-lee/"
            target="_blank"
          >
            ./LinkedIn
          </a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a
            rel="noreferrer"
            href="https://github.com/benjaminglee"
            target="_blank"
          >
            ./Github
          </a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a
            href="../../Benjamin_Lee_Resume.pdf"
            download="Benjamin_Lee_Resume"
          >
            ./Resume
          </a>
        </div>
      </nav>
    </RightNavLayout>
  );
};

export default RightNav;
