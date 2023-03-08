import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          <li>
            <a href="/" className={classes.navlink}>
              Home
            </a>
          </li>
          <li>
            <a href="/" className={classes.navlink}>
              About Us
            </a>
          </li>
          <li>
            <a href="/" className={classes.navlink}>
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className={classes.navlink}>
              Contact US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
