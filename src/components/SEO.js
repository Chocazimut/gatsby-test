import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ title, description, keywords, image }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : url + defaultImage}`,
        keywords: keywords || defaultKeywords,
      }
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="robot" content="index,follow" />
        </Helmet>
      )
    }}
  />
)

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
        defaultKeywords: keywords
      }
    }
  }
`
