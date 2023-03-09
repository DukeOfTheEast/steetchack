import classes from "./Services.module.css";
import Measure from "../../../img/measurement.png";
import Catalogue from "../../../img/catalogue.png";
import Upload from "../../../img/upload.png";
import Folder from "../../../img/folder.png";

function Services() {
  return (
    <div className={classes.services}>
      <h3>Services you will enjoy</h3>
      <div className={classes.mainServices}>
        <div className={classes.measure}>
          <img src={Measure} alt="" className={classes.img} />
          <h4>Measurement</h4>
          <p>Store your customers measurements and style</p>
        </div>
        <div className={classes.measure}>
          <img src={Catalogue} alt="" className={classes.img} />
          <h4>Catalogue</h4>
          <p>Have a style catalogue for your customers</p>
        </div>
        <div className={classes.measure}>
          <img src={Upload} alt="" className={classes.img} />
          <h4>Upload</h4>
          <p>Upload inspiration and customers styles</p>
        </div>
        <div className={classes.measure}>
          <img src={Folder} alt="" className={classes.img} />
          <h4>Customer folder</h4>
          <p>Manage customers folder without stress</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
