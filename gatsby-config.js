module.exports = {
  siteMetadata: {
    author: `George Pearson`,
    siteDescription: `A personal website and blog about software development, science, and other musings by George Pearson.`,
    siteUrl: `https://georgepearson.co.uk`,
    twitterUsername: `@georgepearson_`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Pearson's Blog`,
        short_name: `George's Blog`,
        description: `A personal website and blog about software development, science, and other musings by George Pearson.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ebebe0`,
        theme_color: `#ebebe0`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    },
  ],
};
