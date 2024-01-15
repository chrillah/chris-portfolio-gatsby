import * as React from "react"

//import { Link } from "gatsby"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundTemplate = contentfulPage => {
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
            <div className="notfound-hero-container">
              <div>
                <h1 className="hero-title">{contentfulPage.title}</h1>
                {renderRichText(contentfulPage.content, richTextConfig)}
              </div>
              {renderRichText(contentfulPage.links, richTextConfig)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundTemplate
