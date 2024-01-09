import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutTemplate = contentfulPage => {
  const image = getImage(contentfulPage.image)
  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <p>{children}</p>,
    },
  }

  return (
    <Layout>
      <div className="app-page-container">
        <div className="app-container">
          <div className="about-hero-container">
            <div>
              <h1 className="hero-title">{contentfulPage.title}</h1>
            </div>
            <GatsbyImage image={image} alt={contentfulPage.title} />
          </div>

          <div className="about-description">
          {renderRichText(contentfulPage.content, richTextConfig)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTemplate
