import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IllustrationsTemplate = contentfulPage => {
  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
    },
  }
  return (
    <Layout>
      <div className="app-page-wrapper">
        <div className="app-container">
          <div className="illustrations-hero-container">
            <div className="illustrations-hero-item-1">
              <h1 className="hero-title">{contentfulPage.title}</h1>
            </div>
            <div className="illustrations-hero-item-2">
              {renderRichText(contentfulPage.content, richTextConfig)}
            </div>
          </div>
          <div className="gallery-container">
            {contentfulPage.gallery.map((image, index) => {
              const imageData = getImage(image)
              return (
                <div key={index} className="gallery-image">
                  <GatsbyImage image={imageData} alt={image.title} />
                </div>
              )
            })}
          </div>
          <div className="illustrations-page-bottom-container">
            <p>Do you like what you see? Check out the rest.</p>
            <Link to="/projects" className="link-button">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IllustrationsTemplate
