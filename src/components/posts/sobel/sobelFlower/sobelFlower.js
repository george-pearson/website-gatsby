import React, { useState, useRef } from "react";
import flower from "../../../../../static/flower.png";
import * as style from "./style.module.css";
import { sobel, greyscale } from "../sobel.js";

const SobelFlower = ({ transformType }) => {
  const canvas = useRef();
  const image = useRef();

  const [defaultImageHidden, setDefaultImageHidden] = useState(false);
  const [transformApplied, setTransformApplied] = useState(false);

  const applyClickHandler = () => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = image.current.width;
    canvas.current.height = image.current.height;
    ctx.drawImage(image.current, 0, 0);
    if (!transformApplied) {
      const transformedImageData = applyTransform(canvas.current);
      ctx.putImageData(transformedImageData, 0, 0);
      setDefaultImageHidden(true);
      setTransformApplied(true);
    } else {
      setTransformApplied(false);
    }
  };

  const applyTransform = canvas => {
    switch (transformType) {
      case "greyscale":
        return greyscale(canvas);
      case "sobel":
        return sobel(canvas, 0);
      case "sobelColour":
        return sobel(canvas, 1);
      default:
        const ctx = canvas.getContext("2d");
        return ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div>
      <div className={style.container}>
        <canvas
          ref={canvas}
          className={
            defaultImageHidden ? style.displayBlock : style.displayHidden
          }
        />
        <img
          ref={image}
          className={
            defaultImageHidden ? style.displayHidden : style.displayBlock
          }
          src={flower}
          alt="flower"
        />
      </div>
      <div className={style.controls}>
        <button onClick={applyClickHandler}>
          {transformApplied ? "Reload" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default SobelFlower;