import React from "react";
import Logo from "../../../static/logo.inline.svg";
import * as style from "./style.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ColourThemeToggler from "../colourThemeToggler/colourThemeToggler";

const Header = ({ navButtonClickHandler, show, theme, toggleTheme}) => {
  const headerClass = show ? style.header : style.headerClosed;
  return (
    <header className={headerClass}>
      <nav className={style.navBar}>
        <Link to="/">
          <Logo aria-label="home" className={style.logo} />
        </Link>
        <button aria-label="navigation button" className={style.navButton} onClick={navButtonClickHandler}>
          <FontAwesomeIcon
            className={style.navButtonIcon}
            icon={faBars}
            size="2x"
          />
        </button>
        <div className={style.navBarMenu}>
          <Link to="/" className={style.navBarItem}>
            Home
          </Link>
          <Link to="/blog" className={style.navBarItem}>
            Blog
          </Link>
          <Link to="/photos" className={style.navBarItem}>
            Photos
          </Link>
        </div>
        <div className={style.sideBarColourThemeToggler}>
          <ColourThemeToggler theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;