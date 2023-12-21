import * as React from "react"
import Layout from "../components/layout"

const AboutTemplate = contentfulPage => {
  return (
    <Layout>
      <h1>{contentfulPage.title}</h1>
    </Layout>
  )
}

export default AboutTemplate
