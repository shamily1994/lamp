import React, { useState } from "react";
import "./Light.css";

const Light = (props) => {
  const [bulb, setBulb] = useState(false);
  const bulbID = "bulb" + props.num;
  const btnID = "btn" + props.num;
  console.log(props);
  let switchChanged = (e) => {
    setBulb(!bulb);
    let chgBulb = "#" + bulbID;
    if (document.getElementById(btnID).innerText === "ON") {
      props.switchClick(e.target, "OFF");
      document.querySelector(chgBulb).style.backgroundColor = "Grey";
    } else {
      props.switchClick(e.target, "ON");
      document.querySelector(chgBulb).style.backgroundColor = "Orange";
    }
  };
  return (
    <div className="wrapper">
      <div id={bulbID} className="bulb"></div>
      <button
        id={btnID}
        type="button"
        className="switch"
        onClick={switchChanged}
      >
        OFF
      </button>
    </div>
  );
};

export default Light;