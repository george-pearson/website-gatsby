import React from "react";
import PostListItem from "../postListItem/postListItem";

export default class PostList extends React.Component {
  
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => <PostListItem key={post.id} post={post} />);
    return (
      <div>
        {postList}
      </div>
    )
  }
}