import React, { useState } from "react";
import Coffee from "../../../../static/coffee.inline.svg";
import * as style from "./style.module.css";

const CofeeDashed = () => {
  const [running, setRunning] = useState(false);
  return (
    <Coffee
      className={running ? style.coffeeDashedOn : style.coffeeDashedOff}
      onClick={() => setRunning(prevRunning => !prevRunning)}
    />
  );
};

export default CofeeDashed;