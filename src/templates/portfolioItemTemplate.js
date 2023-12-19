import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const PortfolioItemTemplate = ({ data }) => {
  const { portfolioTitle, portfolioDescription, portfolioSubject } =
    data.contentfulPortfolioItem

  return (
    <Layout>
      <Link className="to-button" to="/portfolio">
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
      <h1>{portfolioTitle}</h1>
      <p>{portfolioDescription.portfolioDescription}</p>
      {/* Rendera resten av datan här */}
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      portfolioTitle
      portfolioHeroImage {
        gatsbyImageData(width: 1000)
      }
      portfolioDescription {
        portfolioDescription
      }
      timePeriod
      portfolioSubject
      slug
    }
  }
`

export default PortfolioItemTemplate
