import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as style from "./style.module.css";
import SmallCircles from "../../../../../static/circlesInCircleSmall.inline.svg";

export default class CirclesTool extends React.Component {
  
  constructor(props){
    super(props);
    this.svgWidth = 300;
    this.svgHeight = 300;
    this.R = 125; // R is the radius of the large circle within which the small circles are to fit.
    this.n = 1000; // n is the maximum number of circles to pack inside the large circle.
    this.rho_min = 0.01; // rho_min is rmin/R, where rmin is the minimum packing circle radius.
    this.rho_max = 0.05; // rho_max is rmax/R, where rmax is the maximum packing circle radius.
    this.canvas = React.createRef();
  }
  
  state = {
    colour1: "#993300",
    colour2: "#a5c916",
    colour3: "#00AA66",
    colour4: "#FF9900",
    defaultImageHidden: false
  }

  render(){
    return (
    <div>
        {!this.state.defaultImageHidden && (<SmallCircles className={style.staticCircles}/>)}
        <canvas height="0" width="0" ref={this.canvas}></canvas>
        <div>
            <input type="color" value={this.state.colour1} onChange={this.colour1ChangeHandler}/>
            <input type="color" value={this.state.colour2} onChange={this.colour2ChangeHandler} />
            <input type="color" value={this.state.colour3} onChange={this.colour3ChangeHandler}/>
            <input type="color" value={this.state.colour4} onChange={this.colour4ChangeHandler}/>
            <button onClick={this.reloadClickHandler}>Reload</button>
        </div>
    </div>
    )
  }

  reloadClickHandler = () => {
    const svgNamespace = "http://www.w3.org/2000/svg"; 
    const rmin = this.R * this.rho_min; // The minimum packing circle radius.
    const rmax = this.R * this.rho_max; // The maximum packing circle radius.
    const CX = this.svgWidth / 2; // The x-coordinate of centre of the large circle.
    const CY = this.svgHeight / 2; // The y-coordinate of centre of the large circle.
    const circleColours = [this.state.colour1, this.state.colour2, this.state.colour3, this.state.colour4];
    const circles = this.makeCircles(this.n, this.R, rmin, rmax, CX, CY, circleColours);
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
      width: this.svgWidth,
      height: this.svgHeight
    },
    ...circleElements);
    const svgString = ReactDOMServer.renderToString(svg);
    const blob = new Blob([svgString], {type:"image/svg+xml"});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
        const canvas = this.canvas.current;
        canvas.width = this.svgWidth;
        canvas.height = this.svgHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        this.setState({defaultImageHidden: true});
    }
    img.src = url;
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

  makeCircles = (n, R, rmin, rmax, CX, CY, circleColours) => {
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
        this.placeCircle(circles, radii[i], R, CX, CY, circleColours);
    }
    return circles;
  }

  placeCircle = (circles, r, R, CX, CY, circleColours) => {
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
        if(!circles.some((existingCircle) => this.overlapWith(CX + cx, CY + cy, r, existingCircle.cx, existingCircle.cy, existingCircle.r))){
          const circle = {'cx':CX + cx,'cy':CY + cy, 'r':r, 'colour':circleColours[this.randomIntFromInterval(0,3)]};
          circles.push(circle);
          return;
        }
      }
      guard -= 1;
    }
  }

  randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  overlapWith = (cx1, cy1, r1, cx2, cy2, r2) => {
    const d = Math.sqrt((cx1-cx2)*(cx1-cx2) + (cy1-cy2)*(cy1-cy2));
    return d < r1 + r2;
  }
}