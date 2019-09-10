
module.exports = {
  siteMetadata: {
    title: `George Pearsons' Blog`,
    author: `George Pearson`,
    description: `A blog about software development, science, and other musings by George Pearson`,
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
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
