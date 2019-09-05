import React from "react";
import logo from "./logo.svg";
import * as style from './style.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navIconActive: false
    }
  }

  toggleNavIcon = () => {
    this.setState({
      navIconActive: !this.state.navIconActive
    });
  }

  render() {
    const navIcon = this.state.navIconActive ? faTimes : faBars;
    return (
      <header className={style.header}>
        <nav className={style.navBar}>
          <div className={style.navBarBrand}>
            <img src={logo} className={style.logo} alt="logo" />
            <div className={style.navIconDiv} onClick={this.toggleNavIcon}>
              <FontAwesomeIcon className={style.navIcon} icon={navIcon} size="2x"/>
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