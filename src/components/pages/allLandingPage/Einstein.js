import classes from "./Einstein.module.css";

function Einstein() {
  return (
    <div className={classes.einstein}>
      <p className={classes.p}>
        "If you are out to describe the truth, leave elegance to the tailor."
      </p>
      <div className={classes.alb}>
        <div></div>
        <p className={classes.albert}>____ Albert Einstein</p>
      </div>
    </div>
  );
}

export default Einstein;
