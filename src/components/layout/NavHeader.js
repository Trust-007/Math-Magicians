import { NavLink } from 'react-router-dom';
import './NavHeader.css';

const NavHeader = () => (
  <>
    <nav>
      <div>Math Magicians</div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={(data) => (data.isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={(data) => (data.isActive ? 'active' : '')}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            className={(data) => (data.isActive ? 'active' : '')}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default NavHeader;
