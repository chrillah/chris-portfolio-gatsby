import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IllustrationsTemplate = contentfulPage => {
  return (
    <Layout>
      <div className="app-page-container">
        <div className="app-container">
          <h1>{contentfulPage.title}</h1>
          <div className="gallery-container">
            {contentfulPage.gallery.map((image, index) => {
              const imageData = getImage(image)
              return (
                <div                     key={index} className="gallery-image">
                  <GatsbyImage
                    image={imageData}
                    alt={image.title}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IllustrationsTemplate
