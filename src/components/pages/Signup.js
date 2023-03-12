import { Link } from "react-router-dom";
import SignupImage from "../../img/signupImage.png";
import Instagram from "../../img/instagram.png";
import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import classes from "./Signup.module.css";
import Footer from "../Footer";

function Signup() {
  return (
    <div>
      <div className={classes.mainSignup}>
        <div className={classes.signupImgContainer}>
          <img src={SignupImage} alt="" className={classes.sewingMachine} />
          <div className={classes.signupImgText}>
            <p className={classes.dress}>
              “Dress shabbily and they remember the dress; dress impeccably and
              they remember the woman.”
            </p>
            <p>Coco Chanel</p>
            <p>Fashion designer</p>
          </div>
        </div>
        <div className={classes.signupReal}>
          <h3 className={classes.welcome}>Welcome to Steetchack</h3>
          <p className={classes.you}>
            You are one step closer to start creating your customers folder.
          </p>
          <form className={classes.signupForm}>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Business name" />
            <input type="text" placeholder="Password" />
            <button type="submit" className={classes.signupSubmit}>
              Sign up
            </button>
          </form>
          <div className={classes.or}>
            <span className={classes.orline}></span>
            <p>Or sign up with</p>
            <span className={classes.orline}></span>
          </div>
          <div className={classes.imgroute}>
            <img src={Facebook} alt="" className={classes.route} />
            <img src={Google} alt="" className={classes.route} />
            <img src={Instagram} alt="" className={classes.route} />
          </div>
          <p className={classes.already}>
            Already have an account?
            <Link to="/signin" className={classes.tosignin}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
