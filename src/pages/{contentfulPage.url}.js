import React from "react"
import { graphql } from "gatsby"
import HomeTemplate from "../templates/homeTemplate"
import Layout from "../components/layout"
import AboutTemplate from "../templates/aboutTemplate"

const Page = ({ data }) => {
  const { contentfulPage } = data

  const getTemplate = () => {
    switch (contentfulPage.templateTest) {
      case "about":
        return <AboutTemplate {...contentfulPage} />

      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }

  return <>{getTemplate()}</>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      image {
        gatsbyImageData(width: 1000)
      }
      body {
        raw
      }
      content {
        raw
      }
      templateTest
      title
      url
    }
  }
`

export default Page
