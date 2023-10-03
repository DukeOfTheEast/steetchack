import AlertTop from "./AlertTop";
import classes from "../allDashboard/Catalogue.module.css";
import Plus from "../../../img/plus.png";
import Style from "../../../img/style.png";
import Fabric from "../../../img/fabric.png";

function Catalogue() {
  return (
    <div className={classes.cat}>
      <AlertTop />
      <div className={classes.mainCat}>
        <div className={classes.catup}>
          <h3>Catalogue</h3>
          <button className={classes.catBtn}>
            <img src={Plus} alt="" />
            <h4>Upload photo</h4>
          </button>
        </div>
        <p className={classes.select}>Select a folder</p>
        <div className={classes.catImg}>
          <div>
            <img src={Style} className={classes.catImgs} alt="" />
            <h4 className={classes.imgTheme}>Styles</h4>
          </div>
          <div>
            <img src={Fabric} className={classes.catImgs} alt="" />
            <h4 className={classes.imgTheme}>Fabric Materials</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
