// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  useEffect(() => {}, [steps]);
  const increseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  return (
    <div>
      <h1>this is watch component</h1>
      <p>I went <b>{steps}</b>  steps</p>
      <button onClick={increseSteps}>Increase</button>
      <Display name='apple' steps={steps}></Display>
    </div>
  );
};

export default Watch;
