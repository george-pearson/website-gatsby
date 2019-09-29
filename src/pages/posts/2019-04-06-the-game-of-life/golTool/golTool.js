import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import * as style from './style.module.css';

export default class GOLTool extends React.Component {

  constructor(props){
    super(props);
    this.ALIVE = 1;
    this.DEAD = 0;
    this.N = 200;
    this.cellSize = 3;
    this.neighbourhood = [[1, 0],[1, 1],[0, 1],[-1, 1],[-1, 0],[-1, -1],[0, -1],[1, -1]];
    this.arr = this.create2Darray(this.N, this.N, this.DEAD);
    this.canvas = React.createRef();
  }

  componentDidMount(){
    const canvas = this.canvas.current;
    canvas.width = this.arr.length*this.cellSize;
    canvas.height = this.arr[0].length*this.cellSize;
    this.initialiseAcorn(this.arr);
    this.printToCanvas(this.arr, this.cellSize, canvas);
  }

  state = {
    color1: "#00ff00",
    color2: "#000000",
    running: false
  }

  color1ChangeHandler = (e) => {
    this.setState({color1: e.target.value});
  }

  color2ChangeHandler = (e) => {
    this.setState({color2: e.target.value});
  }

  startClickHandler = () => {
    if (!this.state.running) {
      this.setState({running: true});
      this.requestId = window.requestAnimationFrame(this.gameLoop);
    }
    else {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
      this.setState({running: false});
    }
  }

  render() {
    return (
      <div className={style.container}>
        <canvas width="0" height="0" ref={this.canvas}></canvas>
        <div className={style.controls}>
          <input className={style.control} type="color" value={this.state.color1} onChange={this.color1ChangeHandler}/>
          <input className={style.control} type="color" value={this.state.color2} onChange={this.color2ChangeHandler}/>
          <button className={style.control} onClick={this.startClickHandler}>
            {this.state.running ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
          </button>
          <button className={style.control} onClick={this.crossClickHandler}>Cross</button>
          <button className={style.control} onClick={this.acornClickHandler}>Acorn</button>
        </div>
      </div>
    )
  }

  gameLoop = () => {
    this.arr = this.iterate(this.arr);
    this.printToCanvas(this.arr, this.cellSize, this.canvas.current);
    this.requestId = window.requestAnimationFrame(this.gameLoop);
  }

  iterate(oldArray){
    const newArray = this.clone2Darray(oldArray);
    for(let x = 0; x < oldArray.length; x++){
      for(let y = 0; y < oldArray[0].length; y++){
        const aliveNeighbourCount = this.getneighcount(oldArray, x, y);
        if(oldArray[x][y] === this.ALIVE){
          if (aliveNeighbourCount < 2){
            newArray[x][y] = this.DEAD; // Underpopulation kills cell.
          }
          else if (aliveNeighbourCount === 2 || aliveNeighbourCount === 3){
            newArray[x][y] = this.ALIVE; // Surivies!
          }
          else if (aliveNeighbourCount > 3){
            newArray[x][y] = this.DEAD; // Overpopulation kills cell.
          }
        }
        else if(oldArray[x][y] === this.DEAD && aliveNeighbourCount === 3){
          newArray[x][y] = this.ALIVE; // Reproduction.
        }
      }
    }
    return newArray;
  }

    // Get number of ALIVE neighbours for point (x,y)
    getneighcount(arr, x, y){
      let nc = 0;
      for (let nn = 0; nn < this.neighbourhood.length; nn++){
        const dx = this.neighbourhood[nn][0];
        const dy = this.neighbourhood[nn][1];
        if (arr[this.pbcz(x + dx, arr.length)][this.pbcz(y + dy, arr[x].length)] === this.ALIVE){
          nc++;
        }
      }
      return nc;
    }
  
    // Periodic boundary conditions in z-direction:
    pbcz(iz, Lz){
      if (iz >= Lz){
        iz = iz - Lz;
      }
      if (iz < 0){
        iz = iz + Lz;
      }
      return iz;
    }

  // Scales and prints the input array to canvas.
  printToCanvas(arr, cellSize, canvas){
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const rgb1 = this.hexToRgb(this.state.color1);
    const rgb2 = this.hexToRgb(this.state.color2);

    for(let x=0; x < arr.length; x++){
      for(let y=0; y < arr[0].length; y++){
        const isAlive = arr[x][y] === this.ALIVE;
        for(let i = 0; i < cellSize; i++) {
          for(let j = 0; j < cellSize; j++) {
            const row = x * cellSize + i;
            const col = y * cellSize + j;
            const index = (row + col*arr.length*cellSize)*4
            data[index + 0] = isAlive ? rgb1.r : rgb2.r;
            data[index + 1] = isAlive ? rgb1.g : rgb2.g;
            data[index + 2] = isAlive ? rgb1.b : rgb2.b;
            data[index + 3] = 255;
          }
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }
  
  // Converts a hex color string to rgb.
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  acornClickHandler = () => {
    this.arr = this.create2Darray(this.N, this.N, this.DEAD);
    this.initialiseAcorn(this.arr);
    this.printToCanvas(this.arr, this.cellSize, this.canvas.current);
  }

  initialiseAcorn(arr){
    const cx = Math.round(arr.length / 2);
    const cy = Math.round(arr[0].length / 2);
    const acorn = [[0, 0],[-3, -1],[-2, -1],[-2, 1],[1, -1],[2, -1],[3, -1]];
    for (let i = 0; i < acorn.length; i++){
      const dx = acorn[i][0];
      const dy = acorn[i][1];
      arr[cx + dx][cy + dy] = this.ALIVE;
    }
  }

  crossClickHandler = () => {
    this.arr = this.create2Darray(this.N, this.N, this.DEAD);
    this.initialiseCross(this.arr);
    this.printToCanvas(this.arr, this.cellSize, this.canvas.current);
  }

  initialiseCross(arr){
    const Lx = arr.length;
    const Ly = arr[0].length;
    for (let x = 0; x < Lx; x++) {
      const y = x;
      if (y >= 0 && y < Ly) {
        arr[x][y] = this.ALIVE;
      }
    }
    for (let x = Lx - 1; x >= 0; x--) {
      const y = Ly - (x + 1);
      if (y >= 0 && y < Ly) {
        arr[x][y] = this.ALIVE;
      }
    }
  }

  clone2Darray(oldArray){
    const newArray = oldArray.map((i) => {
      return i.slice(0);
    });
    return newArray;
  }

  // Creates a 2D array, initialised to value
  create2Darray(w, h, value){
    const arr = []
    for(let x = 0; x < w; x++){
      arr[x] = [];
    }
    for(let x = 0; x < w; x++){
      for(let y = 0; y<h; y++){
        arr[x][y] = value;
      }
    }
    return arr;
  }
}