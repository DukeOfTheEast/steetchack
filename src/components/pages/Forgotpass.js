import { Link, useNavigate } from "react-router-dom";
import classes from "./Forgotpass.module.css";
import Footer from "./../Footer";
import Navbar from "../Navbar";

function Forgotpass() {
  const navigate = useNavigate();

  function gotoReset(e) {
    e.preventDefault();
    navigate("/reset");
  }

  return (
    <div>
      <Navbar />
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
            <button className={classes.forgotbtn} onClick={gotoReset}>
              Submit
            </button>
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
