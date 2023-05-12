import Addtask from "../img/addtask.png";
import Customerfolder from "../img/customerfolder.png";
import Catalogue from "../img/dashcatalogue.png";
import Orders from "../img/orders.png";
import Settings from "../img/settings.png";
import Logo from "../img/logo.png";
import Logout from "../img/logoutDash.png";
import classes from "../components/Sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const GotoSignin = (e) => {
    e.preventDefault();

    navigate("/signin");
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.top_section}>
          <img src={Logo} alt="" />
        </div>
        <ul className={classes.sideUl}>
          <li className={classes.sidelist}>
            <img src={Catalogue} alt="" />
            <Link to="/dashboard" className={classes.navlink}>
              Dashboard
            </Link>
          </li>
          <li className={classes.sidelist}>
            <img src={Customerfolder} alt="" />
            <Link to="/dashboard/customer-folder" className={classes.navlink}>
              Customer Folder
            </Link>
          </li>
          <li className={classes.sidelist}>
            <img src={Orders} alt="" />
            <Link to="/dashboard/orders" className={classes.navlink}>
              Orders
            </Link>
          </li>
          <li className={classes.sidelist}>
            <img src={Addtask} alt="" />
            <Link to="/dashboard/add-task" className={classes.navlink}>
              Add Tasks
            </Link>
          </li>
          <li className={classes.sidelist}>
            <img src={Catalogue} alt="" />
            <Link to="/dashboard/catalogue" className={classes.navlink}>
              Catalogue
            </Link>
          </li>
          <li className={classes.sidelist}>
            <img src={Settings} alt="" />
            <Link to="/dashboard/settings" className={classes.navlink}>
              Settings
            </Link>
          </li>
        </ul>
        <div>
          <Link to="" onClick={GotoSignin} className={classes.logout}>
            <img src={Logout} className={classes.logoutImg} alt="" />
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
