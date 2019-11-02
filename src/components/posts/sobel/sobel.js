function sobel(canvas, saturation) {
  const px = greyscale(canvas);
  const vertical = convolute(px,
      [-1,-2,-1,
      0, 0, 0,
      1, 2, 1]);
  const horizontal = convolute(px,
      [-1,0,1,
      -2,0,2,
      -1,0,1]);
  const magnitude = new Float32Array(px.width*px.height*4);
  const orientation =  new Float32Array(px.width*px.height*4);
  let maxMagnitude = -1;
  for (let i = 0; i < px.data.length; i += 4) {
      const dy = vertical.data[i];
      const dx = horizontal.data[i];
      magnitude[i] = Math.sqrt(dx*dx + dy*dy);
      if(magnitude[i] > maxMagnitude){
      maxMagnitude = magnitude[i];
      }
      orientation[i] = Math.atan2(dy, dx) + Math.PI;
  }
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let j = 0; j < imageData.data.length; j += 4) {
      const rgb = HSVtoRGB(orientation[j]/(2*Math.PI), saturation, magnitude[j]/maxMagnitude);
      imageData.data[j] = rgb.r;
      imageData.data[j + 1] = rgb.g;
      imageData.data[j + 2] = rgb.b;
      imageData.data[j + 3] = 255;
  }
  return imageData;
}

function greyscale(canvas) {
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imageData.data;
  for (var i=0; i<d.length; i+=4) {
      const r = d[i];
      const g = d[i+1];
      const b = d[i+2];
      const v = 0.2126*r + 0.7152*g + 0.0722*b;
      d[i] = d[i+1] = d[i+2] = v
  }
  return imageData;
};

function convolute(pixels, weights) {
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side/2);
  const src = pixels.data;
  const sw = pixels.width;
  const sh = pixels.height;
  const output = {
      width: sw, height: sh, data: new Float32Array(sw*sh*4)
  };
  const dst = output.data;
  
  for (let y=0; y<sh; y++) {
      for (let x=0; x<sw; x++) {
      const sy = y;
      const sx = x;
      const dstOff = (y*sw+x)*4;
      let r=0, g=0, b=0, a=0;
      for (var cy=0; cy<side; cy++) {
          for (var cx=0; cx<side; cx++) {
          const scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
          const scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
          const srcOff = (scy*sw+scx)*4;
          const wt = weights[cy*side+cx];
          r += src[srcOff] * wt;
          g += src[srcOff+1] * wt;
          b += src[srcOff+2] * wt;
          a += src[srcOff+3] * wt;
          }
      }
      dst[dstOff] = r;
      dst[dstOff+1] = g;
      dst[dstOff+2] = b;
      dst[dstOff+3] = a;
      }
  }
  return output;
};

function HSVtoRGB(h, s, v) {
  let r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
      s = h.s
      v = h.v
      h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: 
      r = v;
      g = t;
      b = p;
      break;
      case 1:
      r = q;
      g = v;
      b = p;
      break;
      case 2:
      r = p;
      g = v;
      b = t;
      break;
      case 3:
      r = p;
      g = q;
      b = v;
      break;
      case 4: 
      r = t;
      g = p;
      b = v;
      break;
      case 5:
      r = v;
      g = p;
      b = q;
      break;
      default:
          break;
  }
  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
}

export {sobel, greyscale};