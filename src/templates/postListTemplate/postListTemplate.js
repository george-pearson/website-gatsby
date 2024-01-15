import React from "react";
import Seo from "../../components/seo/seo";
import Layout from "../../components/layout/layout";
import Intro from "../../components/intro/intro";
import Paginator from "../../components/paginator/paginator";
import PostListItem from "../../components/postListItem/postListItem";
import { graphql } from "gatsby";

const PostListTemplate = ({ data, pageContext}) => {
  const posts = data.allMdx.edges.map(edge => edge.node);
  const { currentPage, numPages } = pageContext;
  return (
    <Layout>
      <Intro />
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
      <Paginator currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export const Head = () => <Seo page="Home" />;

export const pageQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
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
`;

export default PostListTemplate;