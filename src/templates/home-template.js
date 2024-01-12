import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import DisplayImageFromIllustrations from "../components/displayImageFromIllustrations"
import DisplayPortfolioItems from "../components/displayPortfolioItems"
import DisplayAboutSection from "../components/displayAboutSection"

import Seo from "../components/seo"

const HomeTemplate = contentfulPage => {
  let aboutLink
  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        let url = children[0].toLowerCase()
        if (url === "about") {
          aboutLink = url
          return aboutLink
        }
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
              <DisplayAboutSection
                aboutLink={contentfulPage.about}
                aboutHeader={contentfulPage.aboutHeader}
                aboutDescription={
                  contentfulPage.aboutDescription.aboutDescription
                }
              />
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

export const Head = () => <Seo title="Home" />

export default HomeTemplate
