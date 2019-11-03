import React from "react";
import * as style from "./style.module.css";

export default ({ post }) => {
  return (
    <div className={style.postHeader}>
      <h1 className={style.postTitle}>{post.frontmatter.title}</h1>
      <div className={style.postDate}>{post.frontmatter.date}</div>
    </div>
  );
};
