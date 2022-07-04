import React from "react";
import * as style from "./style.module.css";

 const Backdrop = ({ backdropClickHandler }) => {
  return <div
    className={style.backdrop}
    onClick={backdropClickHandler}
    onKeyDown={backdropClickHandler}
    role="menuitem"
    aria-label="menu item"
    tabIndex="0" />;
};
export default Backdrop;