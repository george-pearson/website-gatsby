import React, { useLayoutEffect, useRef } from "react";
import Cupcake from "../../../../static/cupcake.inline.svg";
import * as style from "./style.module.css";

const CupcakeDrawSelf = () => {
  const animations = useRef();
  useLayoutEffect(() => {
    animations.current = createAnimations();
  });

  return (
    <Cupcake
      id="cupcakeDrawSelf"
      className={style.cupcakeDrawself}
      onClick={() => runAnimations(animations.current)}
    />
  );
};

function createAnimations() {
  const svg = document.querySelector(`#cupcakeDrawSelf`);
  const paths = Array.from(svg.querySelectorAll(".line"));
  return paths.map(function(path) {
    const pathLength = path.getTotalLength();
    const duration = Math.pow(pathLength, 0.5) * 0.03;
    return { path, pathLength, duration };
  });
}

function runAnimations(animations) {
  // Initial conditions
  animations.forEach(function(animation) {
    animation.path.style.transition = "none"; // Clear previous transition => fast removal
    animation.path.style.strokeDasharray = `${animation.pathLength} ${animation.pathLength}`;
    animation.path.style.strokeDashoffset = animation.pathLength;
    animation.path.getBoundingClientRect(); // Trigger reflow of each path
  });

  // Triggering a reflow on first path so we animate from here
  animations[0].path.getBoundingClientRect();

  // Run line animations
  let begin = 0;
  animations.forEach(function(animation) {
    animation.path.style.transition = `stroke-dashoffset ${animation.duration}s ${begin}s ease-in-out`;
    animation.path.style.strokeDashoffset = "0";
    begin += animation.duration + 0.1; // Slight 0.1s delay for drawing effect
  });
}

export default CupcakeDrawSelf;