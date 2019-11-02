import React, {useLayoutEffect, useRef} from "react";
import CirclesExampleSvg from "../../../../static/circlesExample.inline.svg";
import * as style from './style.module.css';

export default () => {

  const groups = useRef();
  useLayoutEffect(() => {
    const svg = document.querySelector(`.${style.circlesExample}`);
    groups.current = svg.querySelectorAll("g");
  });

  function onClickHandler() {
    groups.current.forEach((group) => {
      group.style.animationPlayState = group.style.animationPlayState === 'running' ? 'paused' : 'running';
    });
  }

  return (
    <CirclesExampleSvg className={style.circlesExample} onClick={onClickHandler} />
  );
};