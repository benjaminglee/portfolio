import RightNavLayout from './RightNav.layout';

const RightNav = ({ open, setOpen }) => {
  return (
    <RightNavLayout open={open}>
      <nav className="navbar-right">
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#about">./About</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#project">./Projects</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#contact">./Contact</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#contact">./LinkedIn</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#contact">./Github</a>
        </div>
        <div className="rightNavLink" onClick={() => setOpen(false)}>
          <a href="#contact">./Resume</a>
        </div>
      </nav>
    </RightNavLayout>
  );
};

export default RightNav;
