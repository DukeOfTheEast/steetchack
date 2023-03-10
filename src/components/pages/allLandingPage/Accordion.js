import React from "react";
import { useState } from "react";
import classes from "./FAQ.module.css";

const Accordion = ({ title, content, key }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.item} key={key}>
      <div className={classes.title} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className={classes.plus}>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={classes.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
