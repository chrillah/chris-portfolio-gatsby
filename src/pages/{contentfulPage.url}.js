import React from "react"
import { graphql } from "gatsby"
import HomeTemplate from "../templates/home-template"
import AboutTemplate from "../templates/about-template"
import PortfolioTemplate from "../templates/portfolio-template"

const Page = ({ data }) => {
  const { contentfulPage } = data

  const getTemplate = () => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />

      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />

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
      template
      title
      url
    }
  }
`

export default Page
