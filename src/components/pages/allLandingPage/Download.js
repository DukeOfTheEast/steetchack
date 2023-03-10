import classes from "./Download.module.css";
import Television from "../../../img/television.png";

function Download() {
  return (
    <div className={classes.download}>
      <img src={Television} alt="" />
      <p className={classes.para}>
        Do you want to easily access Steetchack? Click on the button below to
        download
      </p>
      <div>
        <button className={classes.btnD}>Download for Desktop</button>
        <button className={classes.btnM}>Download for Mobile</button>
      </div>
    </div>
  );
}

export default Download;
