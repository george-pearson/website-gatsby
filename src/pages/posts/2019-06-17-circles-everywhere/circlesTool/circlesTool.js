import React, {useRef, useState} from "react";
import ReactDOMServer from 'react-dom/server';
import * as style from "./style.module.css";
import SmallCircles from "../../../../../static/circlesInCircleSmall.inline.svg";

const svgWidth = 300;
const svgHeight = 300;
const R = 125; // R is the radius of the large circle within which the small circles are to fit.
const n = 1000; // n is the maximum number of circles to pack inside the large circle.
const rho_min = 0.01; // rho_min is rmin/R, where rmin is the minimum packing circle radius.
const rho_max = 0.05; // rho_max is rmax/R, where rmax is the maximum packing circle radius.

export default () => {
  const canvas = useRef();
  const [colour1, setColour1] = useState("#993300");
  const [colour2, setColour2] = useState("#a5c916");
  const [colour3, setColour3] = useState("#00AA66");
  const [colour4, setColour4] = useState("#FF9900");
  const [defaultImageHidden, setDefaultImageHidden] = useState(false);

  const reloadClickHandler = () => {
    const svgNamespace = "http://www.w3.org/2000/svg"; 
    const rmin = R * rho_min; // The minimum packing circle radius.
    const rmax = R * rho_max; // The maximum packing circle radius.
    const CX = svgWidth / 2; // The x-coordinate of centre of the large circle.
    const CY = svgHeight / 2; // The y-coordinate of centre of the large circle.
    const circleColours = [colour1, colour2, colour3, colour4];
    const circles = makeCircles(n, R, rmin, rmax, CX, CY, circleColours);
    const circleElements = circles.map((circle) => {
        return React.createElement("circle", 
        {
            xmlns: svgNamespace,
            cx: circle.cx,
            cy: circle.cy,
            r: circle.r,
            fill: circle.colour
        });
    });
    const svg = React.createElement("svg",
    {
      xmlns: svgNamespace,
      width: svgWidth,
      height: svgHeight
    },
    ...circleElements);
    const svgString = ReactDOMServer.renderToString(svg);
    const blob = new Blob([svgString], {type:"image/svg+xml"});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
        canvas.current.width = svgWidth;
        canvas.current.height = svgHeight;
        const ctx = canvas.current.getContext("2d");
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        setDefaultImageHidden(true);
    }
    img.src = url;
  };

  const colour1ChangeHandler = (e) => {
    setColour1(e.target.value);
  };

  const colour2ChangeHandler = (e) => {
    setColour2(e.target.value);
  };

  const colour3ChangeHandler = (e) => {
    setColour3(e.target.value);
  };

  const colour4ChangeHandler = (e) => {
    setColour4(e.target.value);
  };

  return (
  <div>
      {!defaultImageHidden && (<SmallCircles className={style.staticCircles}/>)}
      <canvas height="0" width="0" ref={canvas}></canvas>
      <div>
          <input
            className={style.control}
            type="color"
            value={colour1}
            onChange={colour1ChangeHandler}/>
          <input
            className={style.control}
            type="color"
            value={colour2}
            onChange={colour2ChangeHandler} />
          <input
            className={style.control}
            type="color"
            value={colour3}
            onChange={colour3ChangeHandler}/>
          <input
            className={style.control}
            type="color"
            value={colour4}
            onChange={colour4ChangeHandler}/>
          <button
            className={style.control}
            onClick={reloadClickHandler}>Reload</button>
      </div>
  </div>
  )
}

function makeCircles(n, R, rmin, rmax, CX, CY, circleColours) {
  const circles = [];
  const radii = [];
  // First choose a set of n random radii and sort them. We use
  // Math.random()*Math.random() to favour small circles.
  for(let i = 0; i < n; i++){
      const r = rmin + (rmax - rmin)*(Math.random()*Math.random())
      radii.push(r);
  }
  radii.sort().reverse();
  // Do our best to place the circles, larger ones first.
  for(let i = 0; i < n; i++){
      placeCircle(circles, radii[i], R, CX, CY, circleColours);
  }
  return circles;
}

function placeCircle(circles, r, R, CX, CY, circleColours) {
  //The guard number: if we don't place a circle within this number of trials, we give up.
  let guard = 500;
  while(guard > 0){
    // Pick a random position, uniformly on the larger circle's interior.
    const cr = R * Math.sqrt(Math.random());
    const cphi = 2 * Math.PI * Math.random();
    const cx = cr * Math.cos(cphi);
    const cy = cr * Math.sin(cphi);
  
    if(cr + r < R){
      // The circle fits inside the larger circle.
      if(!circles.some((existingCircle) => overlapWith(CX + cx, CY + cy, r, existingCircle.cx, existingCircle.cy, existingCircle.r))){
        const circle = {'cx':CX + cx,'cy':CY + cy, 'r':r, 'colour':circleColours[randomIntFromInterval(0,3)]};
        circles.push(circle);
        return;
      }
    }
    guard -= 1;
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function overlapWith(cx1, cy1, r1, cx2, cy2, r2) {
  const d = Math.sqrt((cx1-cx2)*(cx1-cx2) + (cy1-cy2)*(cy1-cy2));
  return d < r1 + r2;
}