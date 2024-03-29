import React from "react"
import Layout from "../components/layout"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactTemplate = contentfulPage => {
  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a
            className="link-button"
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <div className="contact-hero-container">
              <div className="contact-hero-item-1">
                <div className="contact-presentation">
                  <h3>{contentfulPage.title}</h3>

                  <div>
                    {renderRichText(contentfulPage.body, richTextConfig)}
                  </div>
                </div>
                <div>
                  {renderRichText(contentfulPage.content, richTextConfig)}
                </div>
              </div>
              <div className="contact-hero-item-2">
                {renderRichText(contentfulPage.links, richTextConfig)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactTemplate
