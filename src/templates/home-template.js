import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import PresentPortfolioItem from "../components/presentPortfolioItem"
import DisplayImageFromIllustrations from "../components/displayImageFromIllustrations"

// Add later?
// import Seo from "../components/seo"

const HomeTemplate = contentfulPage => {
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

  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
    },
  }

  const randomNumber =
    Math.floor(Math.random() * data.allContentfulPortfolioItem.edges.length) + 1

  const image = getImage(contentfulPage.image)

  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div className="home-hero-container">
              <div className="hero-item-1">
              {renderRichText(contentfulPage.content, richTextConfig)}
              </div>
              <div className="hero-item-2">
                <div className="hero-image-container">
                  <GatsbyImage
                    className="hero-image"
                    image={image}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <ul className="home-item-container">
              {data ? (
                <>
                  {data.allContentfulPortfolioItem.edges.map((edge, index) => {
                    if (index === randomNumber) {
                      return (
                        <PresentPortfolioItem
                          key={edge.node.portfolioTitle}
                          item={edge.node}
                          lengthOfItems={
                            data.allContentfulPortfolioItem.edges.length
                          }
                          indexOfItem={index + 1}
                        />
                      )
                    }
                  })}
                </>
              ) : (
                <></>
              )}

              <DisplayImageFromIllustrations />
              <Link to="/about" className="about-section">
                <h1>What is Ch-projects?</h1>

                <div>
                  <p>Who is behind all of this?</p>
                  <div className="to-button">
                    <svg
                      className="arrow"
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                    >
                      <polyline
                        className="arrow-detail"
                        points="14.95 29.44 29.39 15 14.95 .56"
                      />
                      <line
                        className="arrow-detail"
                        x1="29.39"
                        y1="15"
                        y2="15"
                      />
                    </svg>
                    <p>About me</p>
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="app-page-container">
        <div className="app-container"></div>
      </div>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default HomeTemplate
