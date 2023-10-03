import { Link, useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
import classes from "./Signin.module.css";
import SigninImage from "../../img/signinImage.png";
import Facebook from "../../img/facebook.png";
import Google from "../../img/google.png";
import Instagram from "../../img/instagram.png";
import Footer from "../Footer";
// import Dashboard from "./Dashboard";
import Navbar from "../Navbar";

import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

function Signin() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/dashboard");
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div>
      <Navbar />
      <div className={classes.mainSignin}>
        <div className={classes.signinImgContainer}>
          <img src={SigninImage} alt="" className={classes.thread} />
          <div className={classes.signinImgText}>
            <p className={classes.mywork}>
              “My work comes to life when the thread goes on top of the fabric.”
            </p>
            <p>-Lucy Silliman</p>
            <p>Fashion designer</p>
          </div>
        </div>
        <div className={classes.signinReal}>
          <h3 className={classes.hello}>Hello ! Welcome back.</h3>
          <p className={classes.welp}>
            Welcome back! Please enter your data that you entered when you
            registered.
          </p>
          <form className={classes.signinForm}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </form>
          <div className={classes.remAndfor}>
            <div className={classes.rem}>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <Link to="/forgot" className={classes.forgot}>
                Forgot password
              </Link>
            </div>
          </div>
          <button className={classes.signinSubmit} onClick={handleSubmit}>
            Sign in
          </button>
          <div className={classes.orSignin}>
            <span className={classes.orlineSignin}></span>
            <p>Or Login with</p>
            <span className={classes.orlineSignin}></span>
          </div>
          <div className={classes.imgRouters}>
            <img src={Facebook} alt="" className={classes.imgRouter} />
            <img
              src={Google}
              alt=""
              className={classes.imgRouter}
              onClick={signInWithGoogle}
            />
            <img src={Instagram} alt="" className={classes.imgRouter} />
          </div>
          <p className={classes.already}>
            Don't have an account yet?{" "}
            <span>
              <Link to="/signup" className={classes.tosignin}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
