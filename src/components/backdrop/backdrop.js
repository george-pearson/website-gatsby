import React from "react";
import * as style from "./style.module.css";

export default ({ backdropClickHandler }) => {
  return <div
    className={style.backdrop}
    onClick={backdropClickHandler}
    onKeyDown={backdropClickHandler}
    role="menuitem" 
    tabIndex="0" />;
};
