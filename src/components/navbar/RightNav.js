import { NavLink } from 'react-router-dom';
import RightNavLayout from './RightNav.layout';

const RightNav = ({ open }) => {
  return (
    <RightNavLayout open={open}>
      <nav className="navbar">
        <div className="linkwrapper">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="linkwrapper">
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="linkwrapper">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </RightNavLayout>
  );
};

export default RightNav;
