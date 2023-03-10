import classes from "./Howitworks.module.css";
import Twistdown from "../../../img/twistDown.png";
import Twistup from "../../../img/twistUp.png";
import Addcustomer from "../../../img/addCustomer.png";
import Dashboard from "../../../img/dashboard.png";
import Manage from "../../../img/manageCustomer.png";
import Signup from "../../../img/signup.png";

function Howitworks() {
  return (
    <div className={classes.howitworks}>
      <h3>How it works</h3>
      <div className={classes.twists}>
        <img src={Twistdown} alt="" className={classes.one} />
        <img src={Twistup} alt="" className={classes.two} />
        <img src={Twistdown} alt="" className={classes.three} />
      </div>
      <div className={classes.how}>
        <div className={classes.howeach}>
          <img src={Signup} alt="" className={classes.howImage} />
          <h4>Sign up</h4>
          <p>
            To get started sign up with your business name, name password and
            email.{" "}
          </p>
        </div>
        <div className={(classes.howeach, classes.dashboard)}>
          <img src={Dashboard} alt="" className={classes.howImage} />
          <h4>Dashboard</h4>
          <p>
            After you sign up, you can access your dashboard and see the
            features on it.
          </p>
        </div>
        <div className={classes.howeach}>
          <img src={Addcustomer} alt="" className={classes.howImage} />
          <h4>Add Customer</h4>
          <p>
            On your dashboard you will see the add customer then you click on it
            to add a new customer.
          </p>
        </div>
        <div className={(classes.howeach, classes.manage)}>
          <img src={Manage} alt="" className={classes.howImage} />
          <h4>Manage Customer</h4>
          <p>
            You can manage your customer’s folder, record payment, measurements,
            manage orders and styles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
