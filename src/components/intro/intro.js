import React from "react";
import * as style from "./style.module.css";
import LogoBrackets from "../../../static/logoBrackets.inline.svg";
import { Link } from "gatsby";

export default () => {
  return (
    <section className={style.intro}>
      <LogoBrackets className={style.logoBrackets} />
      <p className={style.introText}>
        This is a blog about software development, science, and other musings
        by <Link className="blueLink" to="/about">George Pearson</Link>.
      </p>
    </section>
  );
};
