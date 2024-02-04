import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleBtn = styled.button`
  background: black;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <StyleBtn>Button</StyleBtn>
        <h4>MixMaster</h4>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
