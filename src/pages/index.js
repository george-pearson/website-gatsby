import React from "react";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import PostList from "../components/postList/postList";
import { graphql } from "gatsby";

export default class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node);
    return (
      <Layout>
        <Intro />
        <PostList posts={posts} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title,
            subtitle,
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`