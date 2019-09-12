import React from "react";
import Cupcake from "../../../../../static/cupcake.inline.svg";
import * as style from './style.module.css';

export default class CupcakeDrawselfFade extends React.Component {

  componentDidMount() {
    this.animations = this.createAnimations();
  }

  onClickHandler = () => {
    this.runAnimations();
  }

  render() {
    return (
      <Cupcake className={style.cupcakeDrawselfFade} onClick={this.onClickHandler} />
    )
  }

  createAnimations() {
    const svg = document.querySelector(`.${style.cupcakeDrawselfFade}`);
    const lines = Array.from(svg.querySelectorAll(".line"));
    const shades = Array.from(svg.querySelectorAll(".shade"));
    var paths = [...lines, ...shades];
    return paths.map(function(path){
        var pathLength = path.getTotalLength();
        var duration = Math.pow(pathLength, 0.5) * 0.03;
        return {path, pathLength, duration};
    });
  }

  runAnimations() {
    // Initial conditions
    this.animations.forEach(function(animation){
        animation.path.style.transition = "none"; // Clear previous transition => fast removal
        animation.path.style.strokeDasharray = `${animation.pathLength} ${animation.pathLength}`;
        animation.path.style.strokeDashoffset = animation.pathLength;
        animation.path.style.fillOpacity = "0";
        animation.path.getBoundingClientRect(); // Trigger reflow of each path
    });

    // Triggering a reflow on first path so we animate from here
    this.animations[0].path.getBoundingClientRect();

    // Run line animations
    var begin = 0;
    this.animations.forEach(function(animation) {
        animation.path.style.transition = `stroke-dashoffset ${animation.duration}s ${begin}s ease-in-out, fill-opacity ${animation.duration}s ${begin}s ease-in-out`;
        animation.path.style.strokeDashoffset = "0";
        animation.path.style.fillOpacity = "1.0";
        begin += animation.duration + 0.1; // Slight 0.1s delay for drawing effect
    });
  }
}