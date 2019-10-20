import React from "react";
import flower from "../../../../../static/flower.png";
import * as style from './style.module.css';
import { sobel, greyscale } from '../sobel.js';

export default class FlowerSobel extends React.Component {
  
  constructor(props){
    super(props);
    this.canvas = React.createRef();
    this.image = React.createRef();
  }

  state = {
    defaultFlowerImageHidden: false,
    transformApplied: false
  }
  
  render(){
    return (
    <div>
      <div className={style.container}>
        <canvas className={
          this.state.defaultFlowerImageHidden ?
          style.displayBlock :
          style.displayHidden}
          ref={this.canvas}>
        </canvas>
        <img 
            ref={this.image}
            className={
            this.state.defaultFlowerImageHidden ? 
            style.displayHidden :
            style.displayBlock}
            src={flower}
            alt="flower"
        />
      </div>
      <div className={style.controls}>
        <button onClick={this.applyClickHandler}>
          {this.state.transformApplied ? "Reload" : "Apply"}
        </button>
      </div>
    </div>
    )
  }

  applyClickHandler = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");
    const image = this.image.current;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    if(!this.state.transformApplied){
      const transformedImageData = this.applyTransform(canvas);
      ctx.putImageData(transformedImageData, 0, 0);
      this.setState({defaultFlowerImageHidden: true, transformApplied: true});
    }
    else{
      this.setState({transformApplied: false});
    }
  }

  applyTransform = (canvas) => {
    switch(this.props.transformType){
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
  }
}