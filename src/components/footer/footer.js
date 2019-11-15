import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import * as style from "./style.module.css";

export default () => {
  const { twitterUsername } = useSiteMetadata();
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <a
          aria-label="GitHub"
          className={style.socialIconLink}
          href="https://github.com/george-pearson"
        >
          <FontAwesomeIcon
            icon={faGithubAlt}
            className={style.socialIcon}
            size="3x"
          />
        </a>
        <a
          aria-label="Linkedin"
          className={style.socialIconLink}
          href="https://linkedin.com/in/george-pearson-27244a30"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={style.socialIcon}
            size="3x"
          />
        </a>
        <a
          aria-label="Twitter"
          className={style.socialIconLink}
          href={`https://twitter.com/${twitterUsername}`}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={style.socialIcon}
            size="3x"
          />
        </a>
        <a
          aria-label="Email"
          className={style.socialIconLink}
          href="mailto:george-pearson.business@outlook.com"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={style.socialIcon}
            size="3x"
          />
        </a>
      </div>
      <p>&copy; George Pearson {new Date().getFullYear()}</p>
    </footer>
  );
};
