import React from "react";
import CirclesExampleSvg from "../../../../../static/circlesExample.inline.svg";
import * as style from './style.module.css';

export default class CirclesExample extends React.Component {

  componentDidMount() {
    const svg = document.querySelector(`.${style.circlesExample}`);
    this.groups = svg.querySelectorAll("g");
  }

  onClickHandler = () => {
    this.groups.forEach((group) => {
      group.style.animationPlayState = group.style.animationPlayState === 'running' ? 'paused' : 'running';
    });
  }

  render() {
    return (
      <CirclesExampleSvg className={style.circlesExample} onClick={this.onClickHandler} />
    )
  }
}