import React from "react";
import * as style from './style.module.css';
import { Link } from 'gatsby';

export default class Sidebar extends React.Component {

  render() {
    const sidebarClass = this.props.show ? style.sidebarOpen : style.sidebar;
    return (
      <nav className={sidebarClass}>
        <Link to="/" className={style.sidebarItem}>Home</Link>
        <Link to="/" className={style.sidebarItem}>About</Link>
        <Link to="/" className={style.sidebarItem}>Photos</Link>
      </nav>
    )
  }
}