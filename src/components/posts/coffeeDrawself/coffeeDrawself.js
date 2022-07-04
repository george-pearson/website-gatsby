import React, { useState } from "react";
import Coffee from "../../../../static/coffee.inline.svg";
import * as style from "./style.module.css";

const CofeeDrawSelf = () => {
  const [running, setRunning] = useState(false);
  return (
    <Coffee
      className={running ? style.coffeeDrawselfOn : style.coffeeDrawselfOff}
      onClick={() => setRunning(prevRunning => !prevRunning)}
    />
  );
};

export default CofeeDrawSelf;