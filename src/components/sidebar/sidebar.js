import React from "react";
import * as style from "./style.module.css";
import Logo from "../../../static/logo.inline.svg";
import { Link } from "gatsby";
import ColourThemeToggler from "../colourThemeToggler/colourThemeToggler";

const SideBar = ({ show, theme, toggleTheme}) => {
  return (
    <div className={show ? style.sidebarOpen : style.sidebar}>
      <Logo className={style.logo} />
      <nav className={style.sidebarNav}>
        <Link to="/" className={style.sidebarNavItem}>
          Home
        </Link>
        <Link to="/about" className={style.sidebarNavItem}>
          About
        </Link>
        <Link to="/photos" className={style.sidebarNavItem}>
          Photos
        </Link>
      </nav>
      <div className={style.sideBarColourThemeToggler}>
        <ColourThemeToggler theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </div>
  );
};

export default SideBar;