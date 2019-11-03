import React, { useLayoutEffect, useRef } from "react";
import Logo from "../../../../static/logo.inline.svg";
import * as style from "./style.module.css";

export default () => {
  const animations = useRef();
  useLayoutEffect(() => {
    animations.current = createAnimations();
    runAnimations(animations.current);
  });

  return (
    <Logo
      className={style.logoDrawself}
      onClick={() => runAnimations(animations.current)}
    />
  );
};

function createAnimations() {
  const svg = document.querySelector(`.${style.logoDrawself}`);
  const lines = Array.from(svg.querySelectorAll(".line"));
  const shade = Array.from(svg.querySelectorAll(".shade"));
  const paths = [...lines, ...shade];
  return paths.map(function(path) {
    const pathLength = path.getTotalLength();
    const duration = Math.pow(pathLength, 0.5) * 0.03;
    return { path, pathLength, duration };
  });
}

function runAnimations(animations) {
  // Initial conditions
  animations.forEach(function(animation) {
    animation.path.style.transition = "none";
    animation.path.style.strokeDasharray = `${animation.pathLength} ${animation.pathLength}`;
    animation.path.style.strokeDashoffset = animation.pathLength;
    animation.path.style.fillOpacity = "0";
    animation.path.getBoundingClientRect();
  });

  // Triggering a reflow so we animate from first path
  animations[0].path.getBoundingClientRect();

  // Run line animations
  let begin = 0;
  animations.forEach(function(animation) {
    animation.path.style.transition = `stroke-dashoffset ${animation.duration}s ${begin}s ease-in-out, fill-opacity ${animation.duration}s ${begin}s ease-in-out`;
    animation.path.style.strokeDashoffset = "0";
    animation.path.style.fillOpacity = "1.0";
    begin += animation.duration + 0.1;
  });
}
