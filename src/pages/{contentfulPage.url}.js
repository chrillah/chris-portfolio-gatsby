import React from "react"
import { graphql } from "gatsby"
import HomeTemplate from "../templates/home-template"
import AboutTemplate from "../templates/about-template"
import PortfolioTemplate from "../templates/portfolio-template"
import TechnologyTemplate from "../templates/technology-template"
import ContactTemplate from "../templates/contact-template"
import NotFoundTemplate from "../templates/notfound-template"
//import CreativityTemplate from "../templates/creativity-template"

const Page = ({ data }) => {
  const { contentfulPage } = data

  const getTemplate = () => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />

      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />

      //   case "creativity":
      //     return <CreativityTemplate {...contentfulPage} />

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
