
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
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
