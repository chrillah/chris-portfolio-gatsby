import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PortfolioItemTemplate = ({ data }) => {
  const {
    portfolioTitle,
    portfolioDescription,
    portfolioSubject,
    githubLink,
    webpageLink,
  } = data.contentfulPortfolioItem

  const richTextConfig = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <div className="app-page">
        <div className="app-container">
          <Link className="to-button" to="/portfolio">
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
          <h1>{portfolioTitle}</h1>
          <p>{portfolioDescription.portfolioDescription}</p>
          {githubLink ? (
            <div>{renderRichText(githubLink, richTextConfig)}</div>
          ) : (
            <></>
          )}
          {webpageLink ? (
            <div>{renderRichText(webpageLink, richTextConfig)}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
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
      githubLink {
        raw
      }
      webpageLink {
        raw
      }
    }
  }
`

export default PortfolioItemTemplate
