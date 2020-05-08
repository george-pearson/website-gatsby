import React, { useLayoutEffect, useRef } from "react";
import HexagonalLatticeExampleSvg from "../../../../static/hexagonalLatticeExample.inline.svg";
import * as style from "./style.module.css";

export default () => {
  const groups = useRef();
  useLayoutEffect(() => {
    const svg = document.querySelector(`.${style.hexagonalLatticeExample}`);
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
      <HexagonalLatticeExampleSvg
      className={style.hexagonalLatticeExample}
      onClick={onClickHandler}
      />
    </div>
  );
};
