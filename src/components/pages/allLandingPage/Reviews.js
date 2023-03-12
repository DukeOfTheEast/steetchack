import classes from "./Reviews.module.css";
import Taiwo from "../../../img/taiwo.png";
import Chisom from "../../../img/chisom.png";
import Alisha from "../../../img/alisha.png";
import Arrup from "../../../img/arrUp.png";
// import Navbar from "../../Navbar";

function Reviews() {
  // function scrollTo() {
  //   ( <Navbar /> ).scrollIntoView({ behavior: "smooth" }));
  // }
  return (
    <div className={classes.reviews}>
      <h3>Reviews</h3>
      <div className={classes.reviewcards}>
        <div className={classes.reviewcard}>
          <img src={Taiwo} alt="" />
          <h4>Taiwo Ibraheem</h4>
          <p className={classes.deed}>Ready to wear</p>
          <p>“Steechack is an amazing platform for tailors”</p>
        </div>
        <div className={classes.reviewcard}>
          <img src={Chisom} alt="" />
          <h4>Chisom David</h4>
          <p className={classes.deed}>Fashion illustrator</p>
          <p>
            “Steechack has really helped me manage my time and customers record,
            i recommend it”
          </p>
        </div>
        <div className={classes.reviewcard}>
          <img src={Alisha} alt="" />
          <h4>Alisha Freeman</h4>
          <p className={classes.deed}>Fashion designer</p>
          <p>“i love this site and would totally recommend”</p>
        </div>
      </div>
      <div className={classes.scroll}>
        <div></div>
        <div className={classes.mainscroll}>
          <button className={classes.scrollbtn}>Scroll to top</button>
          <img src={Arrup} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
