import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as style from "./style.module.css";
import UKAndIrelandSmall from "../../../../../static/UKAndIrelandSmall.png";
import WebWorker from "../../../../components/webWorker/webWorker";
import worker from "./worker.js";

export default class CirclesMapTool extends React.Component {
  
  constructor(props){
    super(props);
    this.n = 800; // n is the maximum number of circles
    this.canvas = React.createRef();
    this.image = React.createRef();
  }

  componentDidMount() {
    this.worker = new WebWorker(worker);
    this.worker.addEventListener('message', event => {
        const circles = event.data[0];
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
          width: this.LX,
          height: this.LY
        },
        ...circleElements);
        const svgString = ReactDOMServer.renderToString(svg);
        const blob = new Blob([svgString], {type:"image/svg+xml"});
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
            const canvas = this.canvas.current;
            canvas.width = this.LX;
            canvas.height = this.LY;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
            this.setState({working: false});
        }
        img.src = url;
    });
  }
  
  state = {
    colour1: "#993300",
    colour2: "#a5c916",
    colour3: "#00AA66",
    colour4: "#FF9900",
    rmin: 2,
    rmax: 8,
    defaultImageHidden: false,
    working: false
  }

  render(){
    return (
    <div>
        <img className={this.state.defaultImageHidden ? style.hidden : style.inline} ref={this.image} src={UKAndIrelandSmall} alt="UK and Ireland"/>
        <canvas height="0" width="0" ref={this.canvas}></canvas>
        <div>
            <input type="color" value={this.state.colour1} onChange={this.colour1ChangeHandler} disabled={this.state.working}/>
            <input type="color" value={this.state.colour2} onChange={this.colour2ChangeHandler} disabled={this.state.working}/>
            <input type="color" value={this.state.colour3} onChange={this.colour3ChangeHandler} disabled={this.state.working}/>
            <input type="color" value={this.state.colour4} onChange={this.colour4ChangeHandler} disabled={this.state.working}/>
            <div>
              <label>Min radius:</label>
              <input type="range" step="0.25" min="2" max="5" value={this.state.rmin} onChange={this.rminChangeHandler} disabled={this.state.working}/>
              <span>{this.state.rmin}</span>
            </div>
            <div>
                <label>Max radius:</label>
                <input type="range" step="0.25" min="5" max="8" value={this.state.rmax} onChange={this.rmaxChangeHandler} disabled={this.state.working}/>
                <span>{this.state.rmax}</span>
            </div>
            <button onClick={this.reloadClickHandler} disabled={this.state.working}>{this.state.working ? "Working on it..." : "Run"}</button>
        </div>
    </div>
    )
  }

  reloadClickHandler = () => {
    this.LX = Math.round(this.image.current.naturalWidth);
    this.LY = Math.round(this.image.current.naturalHeight);
    this.canvas.current.width = this.LX;
    this.canvas.current.height = this.LY;
    const ctx = this.canvas.current.getContext("2d");
    ctx.drawImage(this.image.current, 0, 0, this.LX, this.LY);
    const imageData = (ctx.getImageData(0, 0, this.LX, this.LY)).data;
    const params = {
      'imageData': imageData, 
      'circleColours': [this.state.colour1, this.state.colour2, this.state.colour3, this.state.colour4],
      'rmin': this.state.rmin, 
      'rmax': this.state.rmax,
      'n': this.n,
      'LX': this.LX,
      'LY': this.LY
    }
    this.worker.postMessage([params]);
    this.setState({defaultImageHidden: true, working: true});
  }

  colour1ChangeHandler = (e) => {
    this.setState({colour1: e.target.value});
  }

  colour2ChangeHandler = (e) => {
    this.setState({colour2: e.target.value});
  }

  colour3ChangeHandler = (e) => {
    this.setState({colour3: e.target.value});
  }

  colour4ChangeHandler = (e) => {
    this.setState({colour4: e.target.value});
  }

  rminChangeHandler = (e) => {
    this.setState({rmin: parseFloat(e.target.value)});
  }

  rmaxChangeHandler = (e) => {
    this.setState({rmax: parseFloat(e.target.value)});
  }
}