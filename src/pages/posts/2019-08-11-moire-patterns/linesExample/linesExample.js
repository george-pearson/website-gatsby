import React from "react";
import LinesExampleSvg from "../../../../../static/linesExample.inline.svg";
import * as style from './style.module.css';

export default class LinesExample extends React.Component {

  componentDidMount() {
    const svg = document.querySelector(`.${style.linesExample}`);
    this.groups = svg.querySelectorAll("g");
  }

  onClickHandler = () => {
    this.groups.forEach((group) => {
      group.style.animationPlayState = group.style.animationPlayState === 'running' ? 'paused' : 'running';
    });
  }

  render() {
    return (
      <LinesExampleSvg className={style.linesExample} onClick={this.onClickHandler} />
    )
  }
}