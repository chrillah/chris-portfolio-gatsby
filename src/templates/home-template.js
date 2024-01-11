import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import DisplayImageFromIllustrations from "../components/displayImageFromIllustrations"
import DisplayPortfolioItems from "../components/displayPortfolioItems"

// Add later?
// import Seo from "../components/seo"

const HomeTemplate = contentfulPage => {
  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        let url = children[0].toLowerCase()
        return (
          <a className="link-button" href={`/${url}`} rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  const image = getImage(contentfulPage.image)

  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div className="home-hero-container">
              <div className="hero-item-1">
                {renderRichText(contentfulPage.content, richTextConfig)}
                <div>
                  <div className="link-button-container">
                    {renderRichText(contentfulPage.links, richTextConfig)}
                  </div>
                </div>
              </div>
              <div className="hero-item-2">
                <div className="hero-image-container">
                  <GatsbyImage
                    className="hero-image"
                    image={image}
                    alt="image"
                  />
                  {renderRichText(contentfulPage.body, richTextConfig)}
                </div>
              </div>
            </div>
            <div className="home-item-container">
              <DisplayPortfolioItems />
              <Link to="/about" className="about-section">
                <h1>What is Ch-projects?</h1>
                <svg
                  id="Layer_1"
                  className="logo-alt-2"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 68.94 30"
                >
                  <g>
                    <polygon
                      className="logo-alt-detail"
                      points="12.17 17.06 12.17 7.89 23.78 7.89 23.78 .4 4.47 .4 4.47 24.54 23.78 24.54 23.78 17.06 12.17 17.06"
                    />
                    <polygon
                      className="logo-alt-detail"
                      points="35.16 7.89 35.16 .4 28.85 .4 28.85 24.54 35.16 24.54 35.16 14.15 44.33 14.15 44.33 24.54 50.23 24.54 50.23 7.89 35.16 7.89"
                    />
                    <rect
                      className="logo-alt-detail"
                      x="55.31"
                      y="16.59"
                      width="9.17"
                      height="7.96"
                    />
                  </g>
                  <polygon
                    className="logo-alt-detail"
                    points=".48 5.46 4.47 .4 4.47 24.54 .48 29.6 .48 5.46"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points=".48 29.6 19.78 29.6 23.78 24.54 4.47 24.54 .48 29.6"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="23.78 7.89 19.78 12.94 12.17 12.94 12.17 7.89 23.78 7.89"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="28.85 .4 24.85 5.46 24.85 29.6 28.85 24.54 28.85 .4"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="28.85 .4 24.85 5.46 24.85 29.6 28.85 24.54 28.85 .4"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="35.16 24.54 31.16 29.6 24.85 29.6 28.85 24.54 35.16 24.54"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="44.33 24.54 40.34 29.6 40.34 19.21 44.33 14.15 44.33 24.54"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="40.34 19.21 35.16 19.21 35.16 14.15 44.33 14.15 40.34 19.21"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="50.23 24.54 46.24 29.6 40.34 29.6 44.33 24.54 50.23 24.54"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="55.31 16.59 51.31 21.64 51.31 29.6 55.31 24.54 55.31 16.59"
                  />
                  <polygon
                    className="logo-alt-detail"
                    points="64.48 24.54 60.48 29.6 51.31 29.6 55.31 24.54 64.48 24.54"
                  />
                </svg>
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
              <DisplayImageFromIllustrations />
            </div>
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
