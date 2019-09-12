import React from "react";
import Coffee from "../../../../../static/coffee.inline.svg";
import * as style from './style.module.css';

export default class CoffeeDashed extends React.Component {

  onClickHandler = () => {
    this.setState((prevState) => {
      return { running: !prevState.running }
    });
  }

  state = {
    running: false
  }

  render() {
    const coffeeClass = this.state.running ? style.coffeeDashedOn : style.coffeeDashedOff;
    return (
      <Coffee className={coffeeClass} onClick={this.onClickHandler} />
    )
  }
}