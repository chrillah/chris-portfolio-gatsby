import * as React from "react"
import Layout from "../components/layout"

const AboutTemplate = contentfulPage => {
  return (
    <Layout>
      <div className="app-page-container">
        <div className="app-container">
          <h1>{contentfulPage.title}</h1>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTemplate
