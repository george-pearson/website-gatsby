import React from "react";
import HexagonalLatticeExampleSvg from "../../../../../static/hexagonalLatticeExample.inline.svg";
import * as style from './style.module.css';

export default class HexagonalLatticeExample extends React.Component {

  componentDidMount() {
    const svg = document.querySelector(`.${style.hexagonalLatticeExample}`);
    this.groups = svg.querySelectorAll("g");
  }

  onClickHandler = () => {
    this.groups.forEach((group) => {
      group.style.animationPlayState = group.style.animationPlayState === 'running' ? 'paused' : 'running';
    });
  }

  render() {
    return (
      <HexagonalLatticeExampleSvg className={style.hexagonalLatticeExample} onClick={this.onClickHandler} />
    )
  }
}