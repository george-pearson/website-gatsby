import React, { useLayoutEffect, useRef } from "react";
import LinesExampleSvg from "../../../../static/linesExample.inline.svg";
import * as style from "./style.module.css";

const LinesExample = () => {
  const groups = useRef();
  useLayoutEffect(() => {
    const svg = document.querySelector(`.${style.linesExample}`);
    groups.current = svg.querySelectorAll("g");
  });

  function onClickHandler() {
    groups.current.forEach(group => {
      group.style.animationPlayState =
        group.style.animationPlayState === "running" ? "paused" : "running";
    });
  }

  return (
    <div className={style.container}>
      <LinesExampleSvg className={style.linesExample} onClick={onClickHandler} />
    </div>
  );
};

export default LinesExample;