import React from "react";

const Dial = (props) => {
  return (
    <div>
      <h3>this is dial component</h3>
      <p>
        I went <b>{props.steps}</b> steps
      </p>
    </div>
  );
};

export default Dial;
