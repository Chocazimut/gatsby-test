import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import PrimaryLayout from "../layout/PrimaryLayout"

export default ({ data }) => (
  <PrimaryLayout column="col-xs-6">
    {data.allWordpressPost.nodes.map((node, index) => (
      <Post
        key={index}
        image={node.featured_media.source_url}
        title={node.title}
        content={node.excerpt}
        readMore={node.slug}
      />
    ))}
  </PrimaryLayout>
)

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
