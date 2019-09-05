import React from "react";
import logo from "./logo.svg";
import * as style from './style.module.scss';
import { Link } from 'gatsby';

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <nav className={style.navBar}>
          <div className={style.navBarBrand}>
            <img src={logo} class={style.logo} alt="logo" />
            <div className={style.navBarBurger}>
              <div className={style.navBarBurgerItem} />
              <div className={style.navBarBurgerItem} />
              <div className={style.navBarBurgerItem} />
            </div>
          </div>
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