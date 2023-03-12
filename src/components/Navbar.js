import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import Logo from "../img/logo.png";

function Navbar() {
  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <img src={Logo} alt="" className={classes.logo} />
        <ul className={classes.navUl}>
          <li>
            <Link to="/landing" className={classes.navlink}>
              Home
            </Link>
          </li>
          <li>
            <a href="/" className={classes.navlink}>
              About Us
            </a>
          </li>
          <li>
            <Link to="" className={classes.navlink}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="" className={classes.navlink}>
              Contact US
            </Link>
          </li>
        </ul>
        <Link to="/signup" className={classes.signup}>
          Sign Up
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
