import * as React from "react"
import Layout from "../components/layout"
import PortfolioItem from "../components/portfolioItem"
import { graphql, useStaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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

  const items = data.length

  const randomNumber = Math.floor(Math.random() * 10) + 1

  const image = getImage(contentfulPage.image)

  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div className="home-hero-container">
              <div className="hero-item-1">
                <div className="scrolling-text"></div>

                <div className="hero-title-container">
                {renderRichText(contentfulPage.content, richTextConfig)}
                {/* {renderRichText(contentfulPage.content, richTextConfig)}
                {renderRichText(contentfulPage.content, richTextConfig)} */}
                </div>
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
              {data.allContentfulPortfolioItem.edges.map((edge, index) => {
                if (index === randomNumber) {
                  return (
                    <PortfolioItem
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
