
module.exports = {
  pathPrefix: "/website-gatsby",
  siteMetadata: {
    author: `George Pearson`,
    siteDescription: `A blog about software development, science, and other musings by George Pearson.`,
    siteUrl: `https://georgepearson.co.uk`,
    twitterUsername: `@georgepearson_`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Pearson's Blog`,
        short_name: `George's Blog`,
        description: `A blog about software development, science, and other musings by George Pearson.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ebebe0`,
        theme_color: `#ebebe0`,
        display: `standalone`,
        icon: `static/icon.png`
      },
    },
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
