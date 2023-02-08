import RightNavLayout from './RightNav.layout';

const RightNav = ({ open }) => {
  return (
    <RightNavLayout open={open}>
      <nav className="navbar-right">
        <div className="rightNavLink">
          <a href="#about">About</a>
        </div>
        <div className="rightNavLink">
          <a href="#project">Projects</a>
        </div>
        <div className="rightNavLink">
          <a href="#contact">Contact</a>
        </div>
        <div className="rightNavLink">
          <a href="#contact">LinkedIn</a>
        </div>
        <div className="rightNavLink">
          <a href="#contact">Github</a>
        </div>
        <div className="rightNavLink">
          <a href="#contact">Resume</a>
        </div>
      </nav>
    </RightNavLayout>
  );
};

export default RightNav;
