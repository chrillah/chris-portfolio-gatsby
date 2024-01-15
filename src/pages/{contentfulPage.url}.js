import React from "react"
import { graphql } from "gatsby"
import HomeTemplate from "../templates/home-template"
import AboutTemplate from "../templates/about-template"
import PortfolioTemplate from "../templates/portfolio-template"
import IllustrationsTemplate from "../templates/illustrations-template"
import TechnologyTemplate from "../templates/technology-template"
import ContactTemplate from "../templates/contact-template"
import NotFoundTemplate from "../templates/notfound-template"

const Page = ({ data }) => {
  const { contentfulPage } = data

  const getTemplate = () => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />

      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />

      case "illustrations":
        return <IllustrationsTemplate {...contentfulPage} />

      case "technology":
        return <TechnologyTemplate {...contentfulPage} />

      case "contact":
        return <ContactTemplate {...contentfulPage} />

      case "404":
        return <NotFoundTemplate {...contentfulPage} />

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
      gallery {
        title
        gatsbyImageData(height: 800)
      }
      links {
        raw
      }
      about {
        raw
      }
      aboutDescription {
        aboutDescription
      }
      aboutHeader
    }
  }
`

export default Page
