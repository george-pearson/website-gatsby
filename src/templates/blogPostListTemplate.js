import React from "react";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import PostListItem from "../components/postListItem/postListItem";
import Paginator from "../components/paginator/paginator";
import { graphql } from "gatsby";

export default class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node);
    const { currentPage, numPages } = this.props.pageContext;
    const postList = posts.map((post) => <PostListItem key={post.id} post={post} />);
    return (
      <Layout>
        <Intro />
        {postList}
        <Paginator currentPage={currentPage} numPages={numPages}/>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`