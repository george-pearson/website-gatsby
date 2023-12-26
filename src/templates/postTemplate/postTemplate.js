import React from "react";
import Layout from "../../components/layout/layout";
import PostHeader from "../../components/postHeader/postHeader";
import CodeBlock from "../../components/codeBlock/codeBlock";
import InlineCode from "../../components/inlineCode/inlineCode";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import * as style from "./style.module.css";

function PostTemplate({ data: { mdx }, children }) {
  const components = {
    code: CodeBlock,
    inlineCode: InlineCode,
  };
  const post = mdx;
  return (
    <Layout page="Post" post={post}>
      <div className={style.postContainer}>
        <div className={style.post}>
          <PostHeader post={post} />
          <MDXProvider components={components}>
            {children}
          </MDXProvider>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        image
      }
    }
  }
`;

export default PostTemplate;