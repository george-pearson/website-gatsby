const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(
    `./src/templates/postTemplate/postTemplate.js`
  );
  const postListTemplate = path.resolve(
    `./src/templates/postListTemplate/postListTemplate.js`
  );

  const result = await graphql(
    `
    {
      allMdx(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Create blog post list pages
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}`,
      component: postListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
