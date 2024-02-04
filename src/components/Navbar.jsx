import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
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
}
export default Navbar