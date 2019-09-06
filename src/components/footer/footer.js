import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import * as style from './style.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.socialIcons}>
          <Link className={style.socialIconLink} to="/">
            <FontAwesomeIcon icon={faGithubAlt} className={style.socialIcon} size="3x"/>
          </Link>
          <Link className={style.socialIconLink} to="/">
            <FontAwesomeIcon icon={faLinkedinIn} className={style.socialIcon} size="3x"/>
          </Link>
          <Link className={style.socialIconLink} to="/">
            <FontAwesomeIcon icon={faTwitter} className={style.socialIcon} size="3x"/>
          </Link>
          <Link className={style.socialIconLink} to="/">
            <FontAwesomeIcon icon={faEnvelope} className={style.socialIcon} size="3x"/>
          </Link>
        </div>
        <p>&copy; George Pearson {(new Date()).getFullYear()}</p>
      </footer>
    )
  }
}