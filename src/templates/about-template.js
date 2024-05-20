import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useEducationInformation from "../hooks/use-educationInformation"
import EducationItem from "../components/educationItem"
import { Helmet } from "react-helmet"

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
      //   [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      //     let url = children[0].toLowerCase()

      //     console.log(url)
      //     return (
      //       <a className="link-button" href={`/${url}`} rel="noopener noreferrer">
      //         {children}
      //       </a>
      //     )
      //   },
    },
  }

  return (
    <Layout>
      <Helmet>
        <title>About Ch</title>
      </Helmet>
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
            </div>
            <div className="about-me-container">
              <div className="about-me-item-1">
                <GatsbyImage image={image} alt={contentfulPage.title} />
              </div>
              <div className="about-me-item-2">
                <div className="about-me-presentation">
                  <h1>{contentfulPage.aboutDescription.aboutDescription}</h1>
                  {renderRichText(contentfulPage.about, richTextConfig)}
                </div>
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
                <a
                  className="link-button"
                  href="/projects"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
                <a
                  className="link-button"
                  href="/gallery"
                  rel="noopener noreferrer"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTemplate
