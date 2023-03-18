import { Link } from "react-router-dom";
import classes from "./Forgotpass.module.css";
import Footer from "./../Footer";

function Forgotpass() {
  return (
    <div>
      <div className={classes.forgot}>
        <div className={classes.forgotall}>
          <h2>Forgot password</h2>
          <p className={classes.forgotp}>
            Enter a valid email address to receive instructions on how to reset
            your password.
          </p>
          <form className={classes.forgotform}>
            <input
              type="email"
              placeholder="Email address"
              className={classes.forgotinput}
            />
            <button className={classes.forgotbtn}>Submit</button>
          </form>
          <Link to="/signin" className={classes.forgotlink}>
            Back to sign in
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Forgotpass;
