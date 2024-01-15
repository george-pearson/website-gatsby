import React from "react";
import Seo from "../../components/seo/seo";
import Layout from "../../components/layout/layout";
import PostHeader from "../../components/postHeader/postHeader";
import CodeBlock from "../../components/codeBlock/codeBlock";
import InlineCode from "../../components/inlineCode/inlineCode";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import * as style from "./style.module.css";

const PostTemplate = ({ data: { mdx }, children }) => {
  const components = {
    code: CodeBlock,
    inlineCode: InlineCode,
  };
  const post = mdx;
  return (
    <Layout>
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
};

export const Head = ({ data: { mdx }}) => {
  const post = mdx;
  return (
    <Seo page="Post" post={post} />
  );
};

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