import React from "react";
import Layout from "../../components/layout/layout";
import Profile from "../../../static/profile.png";
import * as style from "./style.module.css";

export default class About extends React.Component {
  render() {
    return (
      <Layout page="About">
        <div className={style.about}>
            <img className={style.profile} src={Profile} alt="Me"/>
            <p className={style.aboutText}>
                Hi I'm George. I’m a Software Engineer working in the UK. I graduated
                from the University of Oxford in Chemistry in 2016, but quickly switched
                from science to software after that. I mostly use C#, SQL, JavaScript
                and a bit of Python at work. I'm always interested in learning
                new things so don't hesitate to <a className="blueLink" href="mailto:george-pearson.business@outlook.com">reach out!</a> 😊
            </p>
        </div>
      </Layout>
    )
  }
}