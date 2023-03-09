import Smilinggirl from "../../../img/smilinggirl.png";
import Arrow from "../../../img/arrowright.png";
import classes from "./Aboutus.module.css";

function Aboutus() {
  return (
    <div className={classes.about}>
      <img src={Smilinggirl} alt="" className={classes.image} />
      <div className={classes.content}>
        <h2>About us</h2>
        <p>
          Steetchack is a top web application developed to give tailors a more
          reliable way to stay organized and increase productivity in a simple
          yet efficient way
        </p>
        <p>
          What we are offering is efficiency with convenience. Tailors will be
          able to securely store customers records.
        </p>
        <a href="/" className={classes.link}>
          <p>Click here to read more</p>
          <img src={Arrow} alt="" className={classes.arrow} />
        </a>
      </div>
    </div>
  );
}

export default Aboutus;
