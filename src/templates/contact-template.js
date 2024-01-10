import React from "react"
import Layout from "../components/layout"
import { INLINES,BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactTemplate = contentfulPage => {
  const richLinkConfig = {
    renderNode: {
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
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => (
        <p>{children}</p>
      ),
    },
  }
  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div className="contact-hero-container">
                
            </div>
            <h1>{contentfulPage.title}</h1>
            <div>{renderRichText(contentfulPage.content, richTextConfig)}</div>
            <div>{renderRichText(contentfulPage.links, richLinkConfig)}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactTemplate
