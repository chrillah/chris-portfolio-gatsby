import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useEducationInformation from "../hooks/use-educationInformation"
import EducationItem from "../components/educationItem"
import { Link } from "gatsby"

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
      <div className="gradient-container">
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
            {educationInformation ? (
              <>
                <div className="education-container">
                  <div className="education-item">
                    <h1 className="hero-title">Education</h1>
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
              <h3>Check out the rest.</h3>
              <div>
                <div>
                  <Link to="/projects" className="link-button">
                    Projects
                  </Link>
                </div>
                <div>
                  <Link to="/illustrations" className="link-button">
                    Illustrations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTemplate
