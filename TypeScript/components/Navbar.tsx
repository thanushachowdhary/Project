import {NavLink} from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar(){
  return(
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <span>MyWebsite</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/"end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;