import React from "react";
import Coffee from "../../../../../static/coffee.inline.svg";
import * as style from './style.module.css';

export default class CoffeeDrawself extends React.Component {

  onClickHandler = () => {
    this.setState((prevState) => {
      return { running: !prevState.running }
    });
  }

  state = {
    running: false
  }

  render() {
    const coffeeClass = this.state.running ? style.coffeeDrawselfOn : style.coffeeDrawselfOff;
    return (
      <Coffee className={coffeeClass} onClick={this.onClickHandler} />
    )
  }
}