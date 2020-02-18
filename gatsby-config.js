/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby-test",
    description: "This is the description of our website",
    keywords: "gatsby test, gatsby wordpress",
    image: "./static/Gatsby.jpg",
    url: "https://www.gatsbyjs.org",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "codingsrc.com",
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
      },
    },
  ],
}
