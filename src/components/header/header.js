import React from "react";
import logo from "./logo.svg";
import * as style from "./style.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {

  render() {
    return (
      <header className={style.header}>
        <nav className={style.navBar}>
          <Link to="/">
            <img src={logo} className={style.logo} alt="logo" />
          </Link>
          <button className={style.navButton} onClick={this.toggleNavIcon}>
            <FontAwesomeIcon className={style.navButtonIcon} icon={faBars} size="2x"/>
          </button>
          <div className={style.navBarMenu}>
            <Link to="/" className={style.navBarItem}>Home</Link>
            <Link to="/" className={style.navBarItem}>About</Link>
            <Link to="/" className={style.navBarItem}>Photos</Link>
          </div>
        </nav>
      </header>
    )
  }
}