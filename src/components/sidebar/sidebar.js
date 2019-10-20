import React from "react";
import * as style from './style.module.css';
import Logo from "../../../static/logo.inline.svg";
import { Link } from 'gatsby';

export default class Sidebar extends React.Component {

  render() {
    const sidebarClass = this.props.show ? style.sidebarOpen : style.sidebar;
    return (
      <nav className={sidebarClass}>
        <Logo className={style.logo} />
        <Link to="/" className={style.sidebarItem}>Home</Link>
        <Link to="/about" className={style.sidebarItem}>About</Link>
        <Link to="/photos" className={style.sidebarItem}>Photos</Link>
      </nav>
    )
  }
}