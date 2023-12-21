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
      <div className="app-page-container">
        <div className="app-container">
          <Link className="back-button" to="/">
            <svg
              className="arrow rev"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <polyline
                className="arrow-detail"
                points="14.95 29.44 29.39 15 14.95 .56"
              />
              <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
            </svg>
            <p>Back</p>
          </Link>
        </div>
      </div>
      <div className="app-hero-container">
          <h1>Index</h1>
          <ul className="project-list">
            {data.allContentfulPortfolioItem.edges.map((edge, index) => {
              return (
                <li key={index}>
                  <Link to={`/portfolio/${edge.node.slug}`}>
                    <h3>{edge.node.portfolioTitle}</h3>
                    <p>{edge.node.portfolioSubject}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
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
