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
            portfolioSubject
            timePeriod
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Link className="back-button" to="/">
        <div className="caret"></div>
        <p>Back</p>
      </Link>
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
      {/* <ul>
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
      </ul> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default Portfolio
