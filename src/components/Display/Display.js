import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div>
      <h2>this is display component</h2>
      <p>name:{props.name}</p>
      <p>
        I went <b>{props.steps}</b> steps
      </p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
