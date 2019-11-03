import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import logoImage from "../../../static/logo.png";

export default ({ page, post }) => {
  const {
    author,
    siteDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();
  const pageTitle = post ? post.frontmatter.title : page;
  const description = post ? post.frontmatter.subtitle : siteDescription;
  const title = `${pageTitle} | ${author}`;
  const pageImage =
    post && post.frontmatter.image ? post.frontmatter.image : logoImage;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />
      {process.env === "production" && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134616286-1"
        />
      )}
      {process.env === "production" && (
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-134616286-1');
        `}
        </script>
      )}
    </Helmet>
  );
};
