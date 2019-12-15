import React, { useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import * as style from "./style.module.css";
import UKAndIrelandSmall from "../../../../static/UKAndIrelandSmall.png";

export default () => {
  const n = 800; // n is the maximum number of circles
  const canvas = useRef();
  const image = useRef();
  const [colour1, setColour1] = useState("#993300");
  const [colour2, setColour2] = useState("#a5c916");
  const [colour3, setColour3] = useState("#00AA66");
  const [colour4, setColour4] = useState("#FF9900");
  const [rmin, setRmin] = useState(2);
  const [rmax, setRmax] = useState(8);
  const [defaultImageHidden, setDefaultImageHidden] = useState(false);

  function reloadClickHandler() {
    const LX = Math.round(image.current.naturalWidth);
    const LY = Math.round(image.current.naturalHeight);
    canvas.current.width = LX;
    canvas.current.height = LY;
    const ctx = canvas.current.getContext("2d");
    ctx.drawImage(image.current, 0, 0, LX, LY);
    const imageData = ctx.getImageData(0, 0, LX, LY).data;
    const circleColours = [colour1, colour2, colour3, colour4];
    const circles = makeCircles(
      imageData,
      circleColours,
      rmin,
      rmax,
      n,
      LX,
      LY
    );
    const svg = createReactSVG(circles, LX, LY);
    const svgString = ReactDOMServer.renderToString(svg);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      canvas.current.width = LX;
      canvas.current.height = LY;
      const ctx = canvas.current.getContext("2d");
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      setDefaultImageHidden(true);
    };
    img.src = url;
  }

  function colour1ChangeHandler(e) {
    setColour1(e.target.value);
  }

  function colour2ChangeHandler(e) {
    setColour2(e.target.value);
  }

  function colour3ChangeHandler(e) {
    setColour3(e.target.value);
  }

  function colour4ChangeHandler(e) {
    setColour4(e.target.value);
  }

  function rminChangeHandler(e) {
    setRmin(parseFloat(e.target.value));
  }

  function rmaxChangeHandler(e) {
    setRmax(parseFloat(e.target.value));
  }

  return (
    <div>
      <img
        className={defaultImageHidden ? style.displayNone : style.displayBlock}
        ref={image}
        src={UKAndIrelandSmall}
        alt="UK and Ireland"
      />
      <canvas
        className={defaultImageHidden ? style.displayBlock : style.displayNone}
        ref={canvas}
      />
      <div>
        <div className={style.controlGroup}>
          <input
            className={style.control}
            type="color"
            value={colour1}
            onChange={colour1ChangeHandler}
          />
          <input
            className={style.control}
            type="color"
            value={colour2}
            onChange={colour2ChangeHandler}
          />
          <input
            className={style.control}
            type="color"
            value={colour3}
            onChange={colour3ChangeHandler}
          />
          <input
            className={style.control}
            type="color"
            value={colour4}
            onChange={colour4ChangeHandler}
          />
        </div>
        <div className={style.controlGroup}>
          <label htmlFor="minRadius">Min radius:</label>
          <input
            id="minRadius"
            className={style.control}
            type="range"
            step="0.25"
            min="2"
            max="5"
            value={rmin}
            onChange={rminChangeHandler}
          />
          <span className={style.control}>{rmin}</span>
        </div>
        <div className={style.controlGroup}>
          <label htmlFor="maxRadius">Max radius:</label>
          <input
            id="maxRadius"
            className={style.control}
            type="range"
            step="0.25"
            min="5"
            max="8"
            value={rmax}
            onChange={rmaxChangeHandler}
          />
          <span className={style.control}>{rmax}</span>
        </div>
        <button onClick={reloadClickHandler}>Run</button>
      </div>
    </div>
  );
};

function createReactSVG(circles, LX, LY) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const circleElements = circles.map(circle => {
    return React.createElement("circle", {
      xmlns: svgNamespace,
      cx: circle.cx,
      cy: circle.cy,
      r: circle.r,
      fill: circle.colour,
    });
  });
  return React.createElement(
    "svg",
    {
      xmlns: svgNamespace,
      width: LX,
      height: LY,
    },
    ...circleElements
  );
}

function makeCircles(imageData, circleColours, rmin, rmax, n, LX, LY) {
  const circles = [];
  const radii = [];
  // First choose a set of n random radii and sort them. We use
  // Math.random()*Math.random() to favour small circles.
  for (let i = 0; i < n; i++) {
    const radius = rmin + (rmax - rmin) * (Math.random() * Math.random());
    radii.push(radius);
  }
  radii.sort().reverse();
  // Do our best to place the circles, larger ones first.
  for (let i = 0; i < n; i++) {
    placeCircle(circles, radii[i], imageData, circleColours, LX, LY);
  }
  return circles;
}

function placeCircle(circles, radius, imageData, circleColours, LX, LY) {
  //The guard number: if we don't place a circle within this number of trials, we give up.
  let guard = 500;
  while (guard > 0) {
    // Pick a random position on the image.
    const cx = randomIntFromInterval(0, LX - 1);
    const cy = randomIntFromInterval(0, LY - 1);
    const index = (cx + cy * LX) * 4;
    const red = imageData[index + 0];
    const green = imageData[index + 1];
    const blue = imageData[index + 2];
    const average = (red + green + blue) / 3;
    const overlaps = circles.some(existingCircle =>
      overlapWith(
        cx,
        cy,
        radius,
        existingCircle.cx,
        existingCircle.cy,
        existingCircle.r
      )
    );
    // The circle doesn't overlap with any other circles and its in the dark image area.
    if (!overlaps && average < 255 / 2) {
      const circle = {
        cx: cx,
        cy: cy,
        r: radius,
        colour: circleColours[randomIntFromInterval(0, 3)],
      };
      circles.push(circle);
      return;
    }
    guard -= 1;
  }
  //console.log("Guard reached");
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function overlapWith(cx1, cy1, r1, cx2, cy2, r2) {
  const d = Math.sqrt((cx1 - cx2) * (cx1 - cx2) + (cy1 - cy2) * (cy1 - cy2));
  return d < r1 + r2;
}
