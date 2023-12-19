import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PortfolioItem from "../components/portfolioItem"

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
            timePeriod
            portfolioSubject
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="app-page">
        <Link className="back-button" to="/">
          <svg
            className="arrow rev"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 109.14 109.14"
          >
            <polyline
              className="arrow-detail"
              points="55.07 .5 109.14 54.57 55.07 108.64"
            />
            <line
              className="arrow-detail"
              x1="0"
              y1="54.57"
              x2="109.14"
              y2="54.57"
            />
          </svg>
          <p>Back</p>
        </Link>
      </div>
      <ul className="portfolio-item-container">
        {data.allContentfulPortfolioItem.edges.map((edge, index) => {
          return (
            <PortfolioItem
              key={edge.node.portfolioTitle}
              item={edge.node}
              lengthOfItems={data.allContentfulPortfolioItem.edges.length}
              indexOfItem={index + 1}
            />
          )
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default Portfolio
