import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import logoImage from "../../../static/logo.png";

export default (props) => {
    const { page, post } = props;
    const { author, siteDescription, siteUrl, twitterUsername } = useSiteMetadata();
    const pageTitle = post ? post.frontmatter.title : page;
    const description = post ? post.frontmatter.subtitle : siteDescription;
    const title = `${pageTitle} | ${author}`;
    const pageImage = post && post.frontmatter.image ? post.frontmatter.image : logoImage;
    return (
        <Helmet 
        title={title}
        meta={[
          { name: "description", content: description },
          { property: "og:url", content: siteUrl },
          { property: "og:site_name", content: siteUrl },
          { property: "og:description", content: description },
          { property: "og:title", content: title },
          { property: "og:image", content: pageImage },
          { name: "twitter:title", content: title },
          { name: "twitter:creator", content: twitterUsername },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: pageImage },
        ]}/>
    )
}