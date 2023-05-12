import AlertTop from "./AlertTop";
import classes from "../../pages/allDashboard/Dashboard.module.css";
import CustomerHead from "../../../img/customerHead.png";
import Payment from "../../../img/payment.png";
import ViewCustomer from "../../../img/viewCustomer.png";
import ArrowDown from "../../../img/arrowDown.png";
import Carbon from "../../../img/carbonMenu.png";

function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <AlertTop />
      <div className={classes.mainDash}>
        <div>
          <div className={classes.explore}>
            <p>Explore</p>
            <div className={classes.exploreCards}>
              <div className={classes.exploreCard}>
                <img src={CustomerHead} alt="" className={classes.exploreImg} />
                <p>Add Customer</p>
              </div>
              <div className={classes.exploreCard}>
                <img src={ViewCustomer} alt="" className={classes.exploreImg} />
                <p>View Customer</p>
              </div>
              <div className={classes.exploreCard}>
                <img src={Payment} alt="" className={classes.exploreImg} />
                <p>Payment</p>
              </div>
            </div>
          </div>
          <div className={classes.ongoingMain}>
            <div className={classes.ongoingHead}>
              <p>Ongoing orders</p>
              <h5>View All</h5>
            </div>
            <div className={classes.ongoing}>
              <div className={classes.ongoingName}>
                <div>
                  <h4>John Doe</h4>
                  <p className={classes.p_due}>
                    <span className={classes.due}>Due Date</span> 30-3-2023
                  </p>
                </div>
                <img src={ArrowDown} alt="" className={classes.ongoingArrow} />
              </div>
              <div className={classes.ongoingName}>
                <div>
                  <h4>Jane Niyi</h4>
                  <p className={classes.p_due}>
                    <span className={classes.due}>Due Date</span> 24-3-2023
                  </p>
                </div>
                <img src={ArrowDown} alt="" className={classes.ongoingArrow} />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.today}>
              <p>Today's Tasks</p>
              <img src={Carbon} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Today's Performance</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
