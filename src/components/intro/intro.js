import React from "react";
import * as style from './style.module.css';
import logoBrackets from "../../../static/logoBrackets.svg";
import { Link } from "gatsby";

export default class Intro extends React.Component {
  
  render() {
    return (
      <section className={style.intro}>
        <img className={style.logoBrackets} src={logoBrackets} alt="logoBrackets"/>
        <p className={style.introText}>
          This is a blog about software development, science, and other musings
          by <Link className="blueLink" to="/about">George Pearson</Link>
        </p>
      </section>
    )
  }
}