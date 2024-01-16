import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useEducationInformation from "../hooks/use-educationInformation"
import EducationItem from "../components/educationItem"

const AboutTemplate = contentfulPage => {
  const educationInformation = useEducationInformation()

  // Konfiguration för att anpassa renderingen av richtext.
  const image = getImage(contentfulPage.image)
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
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

  return (
    <Layout>
      <div className="gradient-bg">
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="about-hero-container">
              <div className="about-hero-item-1">
                <div className="about-presentation">
                  <h3>{contentfulPage.title}</h3>
                  <div>
                    {renderRichText(contentfulPage.content, richTextConfig)}
                  </div>
                </div>
                {renderRichText(contentfulPage.body, richTextConfig)}
              </div>
              <GatsbyImage image={image} alt={contentfulPage.title} />
            </div>
            <div className="about-me-container">
              <div className="about-me-item-1">
                <h1>{contentfulPage.aboutDescription.aboutDescription}</h1>
              </div>
              <div className="about-me-item-2">
                {renderRichText(contentfulPage.about, richTextConfig)}
              </div>
            </div>
            {educationInformation ? (
              <>
                <div className="education-container">
                  <div className="education-item">
                    <h1 className="hero-title">Education</h1>
                    {/* <div>
                      {renderRichText(contentfulPage.about, richTextConfig)}
                    </div> */}
                  </div>
                  {educationInformation.map((edge, index) => {
                    return (
                      <EducationItem
                        key={index}
                        educationName={edge.node.educationName}
                        schoolName={edge.node.schoolName}
                        knowledge={edge.node.knowledge.knowledge}
                      />
                    )
                  })}
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="about-page-bottom-container">
              <h3 className="grid-header">Check out the rest.</h3>
              <div className="link-button-container">
                {renderRichText(contentfulPage.links, richTextConfig)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTemplate
