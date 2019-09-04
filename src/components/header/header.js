import React from "react";
import logo from "./logo.svg";
import * as style from './style.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <img src={logo} class={style.logo} alt="logo" />
      </header>
    )
  }
}