import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            siteDescription
            siteUrl
            twitterUsername
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
