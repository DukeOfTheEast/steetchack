// import Addtask from "../img/addtask.png";
// import Customerfolder from "../img/customerfolder.png";
// import Catalogue from "../img/dashcatalogue.png";
// import Orders from "../img/orders.png";
// import Settings from "../img/settings.png";
import Logo from "../img/logo.png";
import classes from "../components/Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.top_section}>
          <img src={Logo} alt="" />
        </div>
        <ul className={classes.sideUl}>
          <li>
            <Link to="/dashboard" className={classes.navlink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/customer-folder" className={classes.navlink}>
              Customer Folder
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" className={classes.navlink}>
              Orders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-task" className={classes.navlink}>
              Add Tasks
            </Link>
          </li>
          <li>
            <Link to="/dashboard/catalogue" className={classes.navlink}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className={classes.navlink}>
              Settings
            </Link>
          </li>
        </ul>
        <div>
          <Link to="" className={classes.logout}>
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
