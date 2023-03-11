import Logo from "../img/logo.png";
import Twiiter from "../img/twitter.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import Linkedin from "../img/linkedin.png";
import Mail from "../img/mail.png";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.halffooter}>
        <div className={classes.footerLogos}>
          <img src={Logo} alt="" />
          <div className={classes.socials}>
            <img src={Twiiter} alt="" className={classes.footerImage} />
            <img src={Instagram} alt="" className={classes.footerImage} />
            <img src={Facebook} alt="" className={classes.footerImage} />
            <img src={Linkedin} alt="" className={classes.footerImage} />
            <img src={Mail} alt="" className={classes.footerImage} />
          </div>
        </div>
        <div className={classes.who}>
          <h4>Who we are</h4>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Our Team</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className={classes.support}>
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/">Get Started</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={classes.subscribe}>
          <h4>
            Stay in the <span className={classes.loop}>LOOP</span>
          </h4>
          <p>
            Join our mailing list to stay in the loop with our newest features
            releases, tips and tricks
          </p>
          <form className={classes.subForm}>
            <input
              type="text"
              placeholder="Enter email address"
              className={classes.inputSub}
            />
            <button className={classes.btnIN}>I'm IN</button>
          </form>
        </div>
      </div>
      <div className={classes.reserve}>
        <span className={classes.footerline}></span>
        <p>&copy; 2023 Steetchack | All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
