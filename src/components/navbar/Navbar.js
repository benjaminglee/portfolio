import { Link, NavLink } from 'react-router-dom';
import RightNav from './RightNav';
import Burger from './Burger';
import NavbarLayout from './Navbar.layout';

const Navbar = () => (
  <NavbarLayout>
    <div className="navbar-main">
      <Burger />
    </div>
  </NavbarLayout>
);

export default Navbar;
