import React from "react";
import Layout from "../../components/layout/layout";
import PostHeader from "../../components/postHeader/postHeader";
import { graphql } from "gatsby";

export default class PostTemplate extends React.Component {

  render() {
    const {data} = this.props;
    const post = data.markdownRemark;
    return (
      <Layout>
        <PostHeader post={post} />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
      }
    }
  }
`