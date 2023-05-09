import Navbar from "../Navbar";
import Footer from "../Footer";
import classes from "./Resetpass.module.css";

function Resetpass() {
  return (
    <div>
      <Navbar />
      <div className={classes.mainReset}>
        <h1 className={classes.resetH}>Reset password</h1>
        <p className={classes.resetP}>
          Enter the verification code that was sent to your email and enter your
          new password
        </p>
        <form className={classes.resetForm}>
          <input
            type="text"
            placeholder="Verification code"
            className={classes.resetInput}
          />
          <input
            type="text"
            placeholder="New password"
            className={classes.resetInput}
          />
          <input
            type="text"
            placeholder="Confirm new password"
            className={classes.resetInput}
          />
          <button className={classes.resetBtn}>Reset password</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpass;
