import React, { useState, useRef } from "react";
import cloudImage from "../../../../static/cloudImage.jpg";
import * as style from "./style.module.css";

const DSATool = () => {
  const canvas = useRef();
  const [color1, setColor1] = useState("#3c69ff");
  const [color2, setColor2] = useState("#ffffff");
  const [defaultImageHidden, setDefaultImageHidden] = useState(false);
  const n = 9;
  const N = Math.pow(2, n) + 1;

  const reloadClickHandler = event => {
    const arr = runDSA(N);
    printToCanvas(arr, canvas, color1, color2);
    setDefaultImageHidden(true);
    event.preventDefault();
  };

  return (
    <div className={style.container}>
      <canvas
        ref={canvas}
        className={
          defaultImageHidden ? style.displayBlock : style.displayHidden
        }
      />
      <img
        className={
          defaultImageHidden ? style.displayHidden : style.displayBlock
        }
        src={cloudImage}
        alt="cloud"
      />
      <div className={style.controls}>
        <input
          className={style.inputControl}
          type="color"
          value={color1}
          onChange={e => setColor1(e.target.value)}
        />
        <input
          className={style.inputControl}
          type="color"
          value={color2}
          onChange={e => setColor2(e.target.value)}
        />
        <button onClick={reloadClickHandler}>Reload</button>
      </div>
    </div>
  );
};

function runDSA(N) {
  // Initialise the array with random numbers at its corners
  const arr = create2Darray(N, N, 0);
  arr[0][0] = 2 * Math.random() - 1;
  arr[0][N - 1] = 2 * Math.random() - 1;
  arr[N - 1][0] = 2 * Math.random() - 1;
  arr[N - 1][N - 1] = 2 * Math.random() - 1;

  let side = N - 1;
  let nSq = 1; // Number of Squares.
  let f = 1.0; // f scales the random numbers at each stage of the algorithm
  while (side > 1) {
    const sideo2 = Math.round(side / 2);
    let xc, yc;
    // Diamond step:
    diamondStep(xc, yc, arr, nSq, side, sideo2, f);
    //Square step:
    squareStep(xc, yc, arr, nSq, side, sideo2, f, N);
    side = sideo2;
    nSq = nSq * 2;
    f = f / 2;
  }

  // Scale range to 0 to +1 and cut off outliers.
  for (let ix = 0; ix < N; ix++) {
    for (let iy = 0; iy < N; iy++) {
      arr[ix][iy] = (arr[ix][iy] + 1.0) / 2.0;
      if (arr[ix][iy] < 0.0) {
        arr[ix][iy] = 0;
      }
      if (arr[ix][iy] > 1.0) {
        arr[ix][iy] = 1.0;
      }
    }
  }
  return arr;
}

function diamondStep(xc, yc, arr, nSq, side, sideo2, f) {
  for (let ix = 0; ix < nSq; ix++) {
    for (let iy = 0; iy < nSq; iy++) {
      const x0 = ix * side;
      const x1 = (ix + 1) * side;
      const y0 = iy * side;
      const y1 = (iy + 1) * side;
      xc = x0 + sideo2;
      yc = y0 + sideo2;
      // Set this pixel to the mean of its "diamond" neighbours plus
      // a random offset.
      arr[xc][yc] = (arr[y0][x0] + arr[y0][x1] + arr[y1][x0] + arr[y1][x1]) / 4;
      arr[xc][yc] += f * (2 * Math.random() - 1);
    }
  }
}

function squareStep(xc, yc, arr, nSq, side, sideo2, f, N) {
  const diff = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let ix = 0; ix < 2 * nSq + 1; ix++) {
    xc = sideo2 * ix;
    for (let iy = 0; iy < 2 * nSq + 1; iy++) {
      yc = side * iy + sideo2 * (1 - (ix % 2));
      if (!(xc < N && xc > 0 && yc < N && yc > 0)) {
        continue;
      }
      let tot = 0.0;
      let ntot = 0;
      // Set this pixel to the mean of its "square" neighbours plus
      // a random offset. At the edges, it has only three neighbours.
      for (let ii = 0; ii < diff.length; ii++) {
        const dx = diff[ii][0];
        const dy = diff[ii][1];
        const xs = xc + dx * sideo2;
        const ys = yc + dy * sideo2;
        if (!(xs < N && xs > 0 && ys < N && ys > 0)) {
          continue;
        } else {
          tot += arr[xs][ys];
          ntot += 1;
        }
      }
      arr[xc][yc] += tot / ntot + f * (2 * Math.random() - 1);
    }
  }
}

// Creates a 2D array, initialised to value
function create2Darray(w, h, value) {
  const arr = [];
  for (let x = 0; x < w; x++) {
    arr[x] = [];
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      arr[x][y] = value;
    }
  }
  return arr;
}

//Print array to screen:
function printToCanvas(arr, canvas, color1, color2) {
  canvas.current.width = arr.length;
  canvas.current.height = arr.length;
  const ctx = canvas.current.getContext("2d");

  const myImageData = ctx.getImageData(0, 0, arr.length, arr.length);
  const rgb = hexToRgb(color1);
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      const index = (x + y * arr.length) * 4;
      myImageData.data[index + 0] = rgb.r * arr[x][y]; //r
      myImageData.data[index + 1] = rgb.g * arr[x][y]; // g
      myImageData.data[index + 2] = rgb.b * arr[x][y]; //b
      myImageData.data[index + 3] = 255 * arr[x][y]; //a
    }
  }

  ctx.fillStyle = color2;
  ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
  ctx.globalCompositeOperation = "source-atop";
  createImageBitmap(myImageData).then(function(imgBitmap) {
    ctx.drawImage(imgBitmap, 0, 0);
  });
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export default DSATool;