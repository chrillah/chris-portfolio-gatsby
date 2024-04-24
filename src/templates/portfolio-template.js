import * as React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PortfolioItem from "../components/portfolioItem"
import usePortfolioInformation from "../hooks/use-portfolioInformation"
import { AppButton } from "../components/buttons/AppButton"

const PortfolioTemplate = contentfulPage => {
  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        let url = children[0].toLowerCase()
        return (
          <>
            {/* <AppButton to={`/${url}`} title={children} /> */}
            <a
              className="link-button"
              href={`/${url}`}
              rel="noopener noreferrer"
            >
              {children}
            </a>
          </>
        )
      },
    },
  }
  const portfolioInformation = usePortfolioInformation()
  return (
    <Layout>
      <div className="gradient-bg">
        <div className="app-page-wrapper">
          {/* <div className="app-container">
            <div className="portfolio-hero-container">
              <div className="portfolio-hero-item-1">
                <div className="portfolio-presentation">
                  <h3>{contentfulPage.title}</h3>
                  <div>
                    {renderRichText(contentfulPage.body, richTextConfig)}
                  </div>
                </div>

                <div>
                  {renderRichText(contentfulPage.content, richTextConfig)}
                </div>
              </div>

              <ul className="portfolio-hero-item-2">
                <h3 className="grid-header">Index</h3>
                {portfolioInformation.map((edge, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/portfolio/${edge.node.slug}`}>
                        <h3>{edge.node.portfolioTitle}</h3>
                        <p>{edge.node.portfolioSubject}</p>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div> */}
        </div>
        <div className="portfolio-item-container">
          {portfolioInformation.map((edge, index) => {
            return (
              <PortfolioItem
                key={edge.node.portfolioTitle}
                item={edge.node}
                lengthOfItems={portfolioInformation.length}
                indexOfItem={index + 1}
              />
            )
          })}
        </div>
        {/* <div className="portfolio-item-container">
          {portfolioInformation.map((edge, index) => {
            return (
              <PortfolioItem
                key={edge.node.portfolioTitle}
                item={edge.node}
                lengthOfItems={portfolioInformation.length}
                indexOfItem={index + 1}
              />
            )
          })}
        </div> */}

        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="projects-page-bottom-container">
              <p>Do you like what you see? Check out the rest.</p>
              <div>{renderRichText(contentfulPage.links, richTextConfig)}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioTemplate
