import React from "react";
import * as style from "./style.module.css";
import { sobel } from '../sobel.js';

export default class SobelTool extends React.Component {
  
  constructor(props){
    super(props);
    this.canvas = React.createRef();
    this.fileInput = React.createRef();
    this.maxImageSize = 600;
  }

  state = {
    imageSelected: false,
    transformApplied: false,
    saturation: 1
  }
  
  render(){
    return (
    <div>
      <canvas width="0" height="0" ref={this.canvas}></canvas>
      <button onClick={this.selectImageButtonClickHandler}>Select an Image</button>
      <input 
        accept="image/*"
        className={style.displayHidden}
        type="file"
        ref={this.fileInput}
        onChange={this.selectImageChangeHandler}/>
      {this.state.imageSelected && (
        <div>
          <div className={style.saturation}>
          <label>Saturation:</label>
          <input 
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue={this.state.saturation}
            onChange={this.saturationChangeHandler}/>
          <span>{this.state.saturation}</span>
          </div>
          <button onClick={this.applyClickHandler}>
            {this.state.transformApplied ? "Reload" : "Apply"}
          </button>
        </div>
      )}
    </div>
    )
  }

  selectImageButtonClickHandler = () => {
    this.fileInput.current.click();
  }

  selectImageChangeHandler = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        this.image = new Image();
        this.image.onload = () => {
          this.drawImageToScale(this.image, this.maxImageSize, this.canvas.current);
        }
        this.image.src = event.target.result;
    }
    const file  = e.target.files[0];
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }
  }

  saturationChangeHandler = (e) => {
    this.setState({saturation: e.target.value});
  }

  applyClickHandler = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");
    if(!this.state.transformApplied){
      var id = sobel(canvas, this.state.saturation);
      ctx.putImageData(id, 0, 0);
      this.setState({transformApplied: true});
    }
    else{
      this.drawImageToScale(this.image, this.maxImageSize, canvas);
      this.setState({transformApplied: false});
    }
  }

  drawImageToScale(image, maxSize, canvas){
    let scale = 1;
    if(maxSize < image.width || maxSize < image.height){
      scale = Math.min(maxSize / image.width, maxSize / image.height);
    }
    canvas.width = image.width * scale;
    canvas.height = image.height * scale;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    this.setState({imageSelected: true});
  }
}