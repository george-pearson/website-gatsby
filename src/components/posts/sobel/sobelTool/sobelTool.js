import React, { useState, useRef } from "react";
import * as style from "./style.module.css";
import { sobel } from "../sobel.js";

const SobelTool = () => {
  const canvas = useRef();
  const fileInput = useRef();
  const image = useRef();
  const maxImageSize = 600;

  const [imageSelected, setImageSelected] = useState(false);
  const [transformApplied, setTransformApplied] = useState(false);
  const [saturation, setSaturation] = useState(1);

  const selectImageChangeHandler = e => {
    const reader = new FileReader();
    reader.onload = event => {
      image.current = new Image();
      image.current.onload = () => {
        drawImageToScale(image.current, maxImageSize, canvas.current);
      };
      image.current.src = event.target.result;
    };
    const file = e.target.files[0];
    if (file && file.type.match("image.*")) {
      reader.readAsDataURL(file);
    }
  };

  const applyClickHandler = () => {
    const ctx = canvas.current.getContext("2d");
    if (!transformApplied) {
      const id = sobel(canvas.current, saturation);
      ctx.putImageData(id, 0, 0);
      setTransformApplied(true);
    } else {
      drawImageToScale(image.current, maxImageSize, canvas.current);
      setTransformApplied(false);
    }
  };

  const drawImageToScale = (image, maxSize, canvas) => {
    let scale = 1;
    if (maxSize < image.width || maxSize < image.height) {
      scale = Math.min(maxSize / image.width, maxSize / image.height);
    }
    canvas.width = image.width * scale;
    canvas.height = image.height * scale;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    setImageSelected(true);
  };

  return (
    <div>
      <canvas ref={canvas} width="0" height="0" />
      <button onClick={() => fileInput.current.click()}>Select an Image</button>
      <input
        accept="image/*"
        className={style.displayHidden}
        type="file"
        ref={fileInput}
        onChange={selectImageChangeHandler}
      />
      {imageSelected && (
        <div>
          <div className={style.saturation}>
            <label htmlFor="saturation">Saturation:</label>
            <input
              id="saturation"
              type="range"
              step="0.01"
              min="0"
              max="1"
              defaultValue={saturation}
              onChange={e => setSaturation(e.target.value)}
            />
            <span>{saturation}</span>
          </div>
          <button onClick={applyClickHandler}>
            {transformApplied ? "Reload" : "Apply"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SobelTool;