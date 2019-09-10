import React from "react";

export default class PostHeader extends React.Component {
  
  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div>{post.frontmatter.date}</div>
      </div>
    )
  }
}