import React from "react";
import { Link } from "gatsby";
import * as style from "./style.module.css";

export default ({post}) => {
  const postImage = post.frontmatter.image;
  return (
    <div className={style.postListItem}>
      <Link className={style.postLink} to={post.fields.slug}>
        <h2 className={style.postTitle}>{post.frontmatter.title}</h2>
        <p className={style.postMeta}>Posted on {post.frontmatter.date}</p>
        <p className={style.postSubtitle}>{post.frontmatter.subtitle}</p>
        {postImage && (
          <img className={style.postImage} src={postImage} alt={post.frontmatter.title}/>
        )}
      </Link>
    </div>
  );
};