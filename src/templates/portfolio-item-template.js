import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PortfolioItemTemplate = ({ data }) => {
  const {
    portfolioTitle,
    portfolioSubject,
    portfolioDescription,
    timePeriod,
    portfolioImages,
    githubLink,
    webpageLink,
  } = data.contentfulPortfolioItem

  const richTextConfig = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a
            className="link-button"
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <div
        className={
          portfolioSubject === "React"
            ? "portfolio-page"
            : portfolioSubject === "Vue"
            ? "portfolio-page color-set-2"
            : "portfolio-page color-set-1"
        }
      >
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="portfolio-top-wrapper">
              <div className="portfolio-page-top">
                <Link className="back-button" to="/projects">
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
                  <p>Projects</p>
                </Link>
                <div>
                  <h3>{portfolioSubject}</h3>
                  <p>{timePeriod}</p>
                </div>
              </div>
              <h1 className="hero-title">{portfolioTitle}</h1>
            </div>
            <div className="gallery-container">
              {portfolioImages.map((image, index) => {
                const imageData = getImage(image)
                return (
                  <div key={index}>
                    <GatsbyImage
                      className="gallery-image"
                      image={imageData}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                )
              })}
            </div>

            <div className="portfolio-middle-wrapper">
              <h3 className="grid-header">Description</h3>
              <p>{portfolioDescription.portfolioDescription}</p>
            </div>

            <div className="portfolio-bottom-wrapper">
              <h3 className="grid-header">Links</h3>
              <div className="link-button-container">
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      portfolioTitle
      portfolioImages {
        gatsbyImage(width: 1600)
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
