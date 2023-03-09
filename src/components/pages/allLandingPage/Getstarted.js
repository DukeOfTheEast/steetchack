import classes from "./Getstarted.module.css";
import Armani from "../../../img/armani.png";
import Chanel from "../../../img/chanel.png";
import Fendi from "../../../img/fendi.png";
import Gucci from "../../../img/gucci.png";
import Woman from "../../../img/landingimage1.png";

function Getstarted() {
  return (
    <div className={classes.getstart}>
      <div className={classes.content}>
        <div className={classes.contentText}>
          <h1>Let us assist you in stress-free customer management</h1>
          <p>
            We will assist you in keeping track of your customer's measurements,
            details and styles so that you can readily access them from any
            location at any time.
          </p>
          <div className={classes.btn}>
            <button>Get Started</button>
          </div>
        </div>
        <div className={classes.brands}>
          <img src={Armani} alt="" />
          <img src={Chanel} alt="" />
          <img src={Fendi} alt="" />
          <img src={Gucci} alt="" />
        </div>
      </div>
      <img src={Woman} alt="" className={classes.woman} />
    </div>
  );
}

export default Getstarted;
