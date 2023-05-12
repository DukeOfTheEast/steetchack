import React from "react";
import Taiwo from "../../../img/taiwo.png";
import Bell from "../../../img/bellDash.png";
import classes from "../../pages/allDashboard/AlertTop.module.css";

const AlertTop = () => {
  return (
    <div>
      <div className={classes.headDash}>
        <input
          type="text"
          placeholder="Search Dashboard"
          className={classes.headInput}
        />
        <div className={classes.topJ}>
          <img src={Bell} alt="" className={classes.bell} />
          <img src={Taiwo} alt="" className={classes.taiwo} />
          <div>
            <h4>J & J Fashion House</h4>
            <p className={classes.shop}>Shop No 01</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertTop;
