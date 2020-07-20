import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul>
      {data.allWordpressPost.edges.map((post) => (
        <Link
          to={`/post/${post.node.slug}`}
          key={post.node.id}
        >
          <li className="content" key={post.node.id} >
            <h3>{post.node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
          </li>
        </Link>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
  allWordpressPost {
    edges {
      node {
        id
        slug
        content
        title
      }
    }
  }
}
`