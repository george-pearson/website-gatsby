import React, {useRef, useState} from "react";
import ReactDOMServer from 'react-dom/server';
import * as style from "./style.module.css";
import UKAndIrelandSmall from "../../../../static/UKAndIrelandSmall.png";
import WebWorker from "../../webWorker/webWorker";
import workerjs from "./worker.js";

export default () => {
  
  const n = 800; // n is the maximum number of circles
  const canvas = useRef();
  const image = useRef();
  const worker = new WebWorker(workerjs);
  worker.addEventListener('message', onWorkerMessage);
  const [colour1, setColour1] = useState("#993300");
  const [colour2, setColour2] = useState("#a5c916");
  const [colour3, setColour3] = useState("#00AA66");
  const [colour4, setColour4] = useState("#FF9900");
  const [rmin, setRmin] = useState(2);
  const [rmax, setRmax] = useState(8);
  const [defaultImageHidden, setDefaultImageHidden] = useState(false);
  const [working, setWorking] = useState(false);

  function reloadClickHandler() {
    const LX = Math.round(image.current.naturalWidth);
    const LY = Math.round(image.current.naturalHeight);
    canvas.current.width = LX;
    canvas.current.height = LY;
    const ctx = canvas.current.getContext("2d");
    ctx.drawImage(image.current, 0, 0, LX, LY);
    const imageData = (ctx.getImageData(0, 0, LX, LY)).data;
    const params = {
      'imageData': imageData, 
      'circleColours': [colour1, colour2, colour3, colour4],
      'rmin': rmin, 
      'rmax': rmax,
      'n': n,
      'LX': LX,
      'LY': LY
    }
    worker.postMessage([params]);
    setDefaultImageHidden(true);
    setWorking(true);
  }

  function onWorkerMessage(event) {
    var properties = event.data[0];
    const circles = properties['circles'];
    const LX = properties['LX'];
    const LY = properties['LY'];
    const svgNamespace = "http://www.w3.org/2000/svg"; 
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
      width: LX,
      height: LY
    },
    ...circleElements);
    const svgString = ReactDOMServer.renderToString(svg);
    const blob = new Blob([svgString], {type:"image/svg+xml"});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
        canvas.current.width = LX;
        canvas.current.height = LY;
        const ctx = canvas.current.getContext("2d");
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        setWorking(false);
    }
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
        alt="UK and Ireland"/>
      <canvas
        className={defaultImageHidden ? style.displayBlock : style.displayNone}
        ref={canvas}>
      </canvas>
      <div>
        <div className={style.controlGroup}>
          <input
            className={style.control}
            type="color"
            value={colour1}
            onChange={colour1ChangeHandler}
            disabled={working}/>
          <input className={style.control}
            type="color"
            value={colour2}
            onChange={colour2ChangeHandler}
            disabled={working}/>
          <input
            className={style.control}
            type="color" value={colour3}
            onChange={colour3ChangeHandler}
            disabled={working}/>
          <input
            className={style.control}
            type="color"
            value={colour4}
            onChange={colour4ChangeHandler}
            disabled={working}/>
        </div>
        <div className={style.controlGroup}>
          <label>Min radius:</label>
          <input
            className={style.control}
            type="range"
            step="0.25"
            min="2"
            max="5"
            value={rmin}
            onChange={rminChangeHandler}
            disabled={working}/>
          <span className={style.control}>{rmin}</span>
        </div>
        <div className={style.controlGroup}>
            <label>Max radius:</label>
            <input
              className={style.control}
              type="range"
              step="0.25"
              min="5"
              max="8"
              value={rmax}
              onChange={rmaxChangeHandler}
              disabled={working}/>
            <span className={style.control}>{rmax}</span>
        </div>
        <button
          onClick={reloadClickHandler}
          disabled={working}>
          {working ? "Working on it..." : "Run"}
        </button>
      </div>
  </div>
  );
};