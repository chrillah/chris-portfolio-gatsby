import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IllustrationsTemplate = contentfulPage => {
  return (
    <Layout>
      <div className="app-page-container">
        <div className="app-container">
        <Link className="back-button" to="/">
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
          <h1 className="app-header">{contentfulPage.title}</h1>
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
        </div>
      </div>
    </Layout>
  )
}

export default IllustrationsTemplate
