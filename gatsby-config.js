
module.exports = {
  siteMetadata: {
    title: `George Pearsons' Blog`,
    author: `George Pearson`,
    description: `A blog about software development, science, and other musings by George Pearson.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /\.inline\.svg$/
          }
      }
    },
    `gatsby-plugin-mdx`,
  ],
}
