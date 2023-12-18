import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            portfolioTitle
            portfolioHeroImage {
              gatsbyImage(width: 1000)
            }
            portfolioDescription {
              portfolioDescription
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ul>
        {data.allContentfulPortfolioItem.edges.map(edge => {
          return (
            <li key={edge.node.portfolioTitle}>
              <h2>{edge.node.portfolioTitle}</h2>
              <GatsbyImage
                image={getImage(edge.node.portfolioHeroImage)}
                alt={edge.node.portfolioTitle}
              />
              <p>{edge.node.portfolioDescription.portfolioDescription}</p>
            </li>
          )
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default Portfolio
