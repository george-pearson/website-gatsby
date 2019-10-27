import React from "react";
import Layout from "../../components/layout/layout";
import Intro from "../../components/intro/intro";
import Paginator from "../../components/paginator/paginator";
import PostListItem from "../../components/postListItem/postListItem";
import { graphql } from "gatsby";

export default class PostListTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges.map(edge => edge.node);
    const { currentPage, numPages } = this.props.pageContext;
    return (
      <Layout page="Home">
        <Intro />
        {posts.map(
            (post) => <PostListItem key={post.id} post={post} />
        )}
        <Paginator currentPage={currentPage} numPages={numPages}/>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            image
          }
        }
      }
    }
  }
`