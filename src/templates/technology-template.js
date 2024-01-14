import Layout from "../components/layout"
import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useTechnologyInformation from "../hooks/use-technologyInformation"

const TechnologyTemplate = contentfulPage => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const technologyInformation = useTechnologyInformation()

  const cateroryList = [
    "All",
    ...new Set(
      technologyInformation.map(technology => technology.node.category)
    ),
  ]
  return (
    <Layout>
      <div className="app-page-wrapper">
        <div className="app-container">
          <div className="technology-hero-container">
            <h1 className="hero-title">{contentfulPage.title}</h1>
          </div>

          <select
          className="technology-select"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {cateroryList.map((category, index) => {
              return (
                <option className="technology-option" key={index} value={category}>
                  {category}
                </option>
              )
            })}
          </select>

          {/* <div className="link-button-container">
            {cateroryList.map((category, index) => {
              return (
                <option key={index} className="link-button" onChange={e => setSelectedCategory(e.target.value)}>
                  {category}
                </option>
              )
            })}
          </div> */}

          <ul className="technology-container">
            {technologyInformation.map((technology, index) => {
              if (
                technology.node.category === selectedCategory ||
                selectedCategory === "All"
              ) {
                const logo = getImage(technology.node.logo)
                return (
                  <li key={index} className="technology-item">
                    <p class="technology-category">
                      {technology.node.category}
                    </p>
                    <div className="technology-logo-container">
                      <GatsbyImage
                        image={logo}
                        alt="image"
                        className="technology-logo"
                      />
                    </div>
                    <h3 className="technology-header">
                      {technology.node.title}
                    </h3>
                    <p className="technology-description">
                      {technology.node.description.description}
                    </p>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default TechnologyTemplate
