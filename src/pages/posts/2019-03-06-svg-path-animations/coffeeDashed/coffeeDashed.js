import React from "react";
import Coffee from "../../../../../static/coffee.inline.svg";
import * as style from './style.module.css';

export default class CoffeeDashed extends React.Component {

  onClickHandler = () => {
    const svg = document.querySelector(`.${style.coffeeDashed}`);
    const path = svg.querySelector("path");
    this.toggleAnimationPlayState(path);
  }

  render() {
    return (
      <Coffee className={style.coffeeDashed} onClick={this.onClickHandler} />
    )
  }

  toggleAnimationPlayState(element){
    if (element.style.animationPlayState === 'running') {
      element.style.animationPlayState = 'paused';
    } else {
        element.style.animationPlayState = 'running';
    }
  }
}