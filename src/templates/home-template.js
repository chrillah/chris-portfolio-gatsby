import * as React from "react"
import Layout from "../components/layout"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

// Add later?
// import Seo from "../components/seo"

// Not using, remove?
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeTemplate = contentfulPage => {
  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    },
  }

  const image = getImage(contentfulPage.image)

  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div>{renderRichText(contentfulPage.content, richTextConfig)}</div>
            <GatsbyImage
              image={image}
              alt="image"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default HomeTemplate
