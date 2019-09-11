import React from "react";
import Layout from "../../components/layout/layout";
import PostHeader from "../../components/postHeader/postHeader";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default class PostTemplate extends React.Component {

  render() {
    const {data} = this.props;
    const post = data.mdx;
    return (
      <Layout>
        <PostHeader post={post} />
        <MDXRenderer>{post.body}</MDXRenderer>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
      }
    }
  }
`