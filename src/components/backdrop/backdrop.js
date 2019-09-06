import React from "react";
import * as style from './style.module.css';

export default class Backdrop extends React.Component {

  render() {
    const { backdropClickHandler } = this.props;
    return (
      <div className={style.backdrop} onClick={backdropClickHandler} />
    )
  }
}