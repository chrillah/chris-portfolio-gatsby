import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import DisplayImageFromIllustrations from "../components/displayImageFromIllustrations"
import DisplayPortfolioItems from "../components/displayPortfolioItems"
import DisplayAboutSection from "../components/displayAboutSection"
import usePortfolioInformation from "../hooks/use-portfolioInformation"
import Seo from "../components/seo"
import { LogoContainer } from "../components/LogoContainer"

const HomeTemplate = contentfulPage => {
  let aboutLink

  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        let url = children[0].toLowerCase()
        if (url === "about") {
          aboutLink = url
        }
        return (
          <a className="link-button" href={`/${url}`} rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  const image = getImage(contentfulPage.image)
  if (contentfulPage.about) {
    renderRichText(contentfulPage.about, richTextConfig)
  }
  const portfolioInformation = usePortfolioInformation()
  return (
    <Layout>
      <div className="gradient-bg">
        <div className="home-item-container">
          <DisplayPortfolioItems />
          {aboutLink ? (
            <DisplayAboutSection
              aboutLink={aboutLink}
              aboutHeader={contentfulPage.aboutHeader}
              aboutDescription={
                contentfulPage.aboutDescription.aboutDescription
              }
            />
          ) : (
            <></>
          )}
          <DisplayImageFromIllustrations />
        </div>

        <div className="app-page-wrapper">
          <div className="app-container">
            <ul className="projects-page-bottom-container-2">
              <h1 className="grid-header">Technic</h1>
              {portfolioInformation.map((edge, index) => {
                return (
                  <li key={index}>
                    {/* <h3 className="technic-header">{edge.node.portfolioSubject}</h3> */}
                    <Link to={`/portfolio/${edge.node.slug}`}>
                      <h3>{edge.node.portfolioTitle}</h3>
                      <p>{edge.node.portfolioSubject}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <LogoContainer />
            {/* <div className="projects-page-bottom-container">
              <p>Do you like what you see? Check out the rest.</p>
              <div>{renderRichText(contentfulPage.links, richTextConfig)}</div>
            </div> */}
          </div>
        </div>
        <div className="app-page-wrapper">
          <div className="app-container">
            {/* <div className="home-hero-container">
              <div className="hero-item-1">
                {renderRichText(contentfulPage.content, richTextConfig)}
                <div className="hero-item-1-text">
                  {renderRichText(contentfulPage.body, richTextConfig)}
                </div>
                <div>
                  <div className="link-button-container">
                    {renderRichText(contentfulPage.links, richTextConfig)}
                  </div>
                </div>
              </div>
              <div className="hero-item-2">
                <div className="hero-image-container">
                  <GatsbyImage
                    className="hero-image"
                    image={image}
                    alt="image"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default HomeTemplate
