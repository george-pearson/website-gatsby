
module.exports = {
  siteMetadata: {
    author: `George Pearson`,
    siteDescription: `A blog about software development, science, and other musings by George Pearson.`,
    siteUrl: `https://georgepearson.co.uk`,
    twitterUsername: `@georgepearson_`,
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
    `gatsby-plugin-react-helmet`
  ],
}
