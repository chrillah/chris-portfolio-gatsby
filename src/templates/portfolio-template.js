import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PortfolioItem from "../components/portfolioItem"
import usePortfolioInformation from "../hooks/use-portfolioInformation"

const PortfolioTemplate = () => {
  const portfolioInformation = usePortfolioInformation()
  return (
    <Layout>
      <div className="gradient-container">
        <div className="app-page-container">
          <div className="app-container">
            <div className="portfolio-hero-container">
              <h1 className="hero-title">Index</h1>
              <ul className="project-list">
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
          </div>
        </div>
        <ul className="portfolio-item-container">
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
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Portfolio" />

export default PortfolioTemplate
