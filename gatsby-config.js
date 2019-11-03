
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
        name: `Home | George Pearson`,
        short_name: `Home`,
        start_url: `/`,
        background_color: `transparent`,
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
