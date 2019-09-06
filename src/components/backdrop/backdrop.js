import React from "react";
import * as style from './style.module.css';

export default class Backdrop extends React.Component {

  render() {
    return (
      <div className={style.backdrop} />
    )
  }
}