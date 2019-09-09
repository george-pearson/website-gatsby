import React from "react";
import { Link } from "gatsby";

export default class PostListItem extends React.Component {
  
  render() {
    const { post } = this.props;
    return (
      <div>
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          ({post.frontmatter.date})
      </div>
    )
  }
}