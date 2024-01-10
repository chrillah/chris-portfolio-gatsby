import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useEducationInformation from "../hooks/use-educationInformation"
import EducationItem from "../components/educationItem"

const AboutTemplate = contentfulPage => {
  const educationInformation = useEducationInformation()
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
              <div className="about-description">
                {renderRichText(contentfulPage.content, richTextConfig)}
              </div>
            </div>
            <GatsbyImage image={image} alt={contentfulPage.title} />
          </div>
        </div>
      </div>
      {educationInformation ? (
        <>
          <div className="gradient-container">
            <div className="app-page-container">
              <div className="app-container">
                <div className="education-container">
                  <div className="education-item">
                    <h1 className="hero-title">Education</h1>
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
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export default AboutTemplate
