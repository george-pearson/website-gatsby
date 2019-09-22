import React from "react";
import Layout from "../../components/layout/layout";
import PostHeader from "../../components/postHeader/postHeader";
import CodeBlock from "../../components/codeBlock/codeBlock";
import InlineCode from "../../components/inlineCode/inlineCode";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";


export default class PostTemplate extends React.Component {

  components = {
    code: CodeBlock,
    inlineCode: InlineCode
  }

  render() {
    const {data} = this.props;
    const post = data.mdx;
    return (
      <Layout>
        <PostHeader post={post} />
        <MDXProvider components={this.components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
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