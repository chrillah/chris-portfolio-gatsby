import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const CreativityTemplate = contentfulPage => {
  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
    },
  }
  return (
    <Layout>
      <Helmet>
        <title>Creativity</title>
      </Helmet>
      <div className="gradient-bg">
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="about-hero-container">
              <div className="about-hero-item-1">
                <div className="about-presentation">
                  <h3>{contentfulPage.title}</h3>
                  <div>
                    {renderRichText(contentfulPage.about, richTextConfig)}
                  </div>
                </div>
                {renderRichText(contentfulPage.body, richTextConfig)}
              </div>
            </div>

            {/* <AppHero
              title={renderRichText(contentfulPage.body, richTextConfig)}
              topLeft={contentfulPage.title}
              topRight={renderRichText(contentfulPage.about, richTextConfig)}
            /> */}
            {/* <div className="illustrations-hero-container">
              <div className="illustrations-hero-item-1">
                <div className="illustrations-presentation">
                  <h3>{contentfulPage.title}</h3>
                  <div>
                    {renderRichText(contentfulPage.about, richTextConfig)}
                  </div>
                </div>
                {renderRichText(contentfulPage.body, richTextConfig)}
              </div>
              <div className="illustrations-hero-item-2">
                {renderRichText(contentfulPage.content, richTextConfig)}
              </div>
            </div> */}
          </div>
        </div>
        <div className="gallery-container">
          {contentfulPage.gallery.map((image, index) => {
            const imageData = getImage(image)

            console.log(imageData)
            return (
              <div key={index} className="gallery-image">
                <GatsbyImage image={imageData} alt="" />
              </div>
            )
          })}
        </div>
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="illustrations-page-bottom-container">
              <p>Check out the rest.</p>
              <Link to="/projects" className="link-button">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreativityTemplate
