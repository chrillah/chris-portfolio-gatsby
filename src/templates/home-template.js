import * as React from "react"
import Layout from "../components/layout"

// Add later?
// import Seo from "../components/seo"

// Not using, remove?
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeTemplate = contentfulPage => {
  return (
    <Layout>
      <div className="app-page-container">
        <div className="app-container">
          <div className="hero-wrapper">
            <h1>{contentfulPage.title}</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default HomeTemplate
