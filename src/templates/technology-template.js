import Layout from "../components/layout"
import React, { useState } from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useTechnologyInformation from "../hooks/use-technologyInformation"

const TechnologyTemplate = contentfulPage => {
  // Konfiguration för att anpassa renderingen av richtext
  const richTextConfig = {
    renderNode: {
      [BLOCKS]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="hero-title">{children}</h1>
      ),
    },
  }
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
      <div className="gradient-bg">
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="technology-hero-container">
              <div className="technology-hero-item-1">
                <div className="technology-presentation">
                  <h3>{contentfulPage.title}</h3>
                  <div>
                    {renderRichText(contentfulPage.body, richTextConfig)}
                  </div>
                </div>
                {renderRichText(contentfulPage.content, richTextConfig)}
              </div>

              <div className="technology-hero-item-2">
                <h3>Select category</h3>
                <div>
                  <div className="technology-select-container">
                    <select
                      className="technology-select"
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                    >
                      {cateroryList.map((category, index) => {
                        return (
                          <option
                            className="technology-option"
                            key={index}
                            value={category}
                          >
                            {category}
                          </option>
                        )
                      })}
                    </select>
                    <span className="focus"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="technology-container">
          {technologyInformation.map((technology, index) => {
            if (
              technology.node.category === selectedCategory ||
              selectedCategory === "All"
            ) {
              const logo = getImage(technology.node.logo)
              return (
                <li
                  key={index}
                  className={
                    technology.node.title === "PHP"
                      ? "technology-item color-set-1"
                      : technology.node.title === "GatsbyJS"
                      ? "technology-item color-set-2"
                      : technology.node.title === "Contentful"
                      ? "technology-item color-set-3"
                      : "technology-item"
                  }
                >
                  <div className="technology-item-top">
                    <p className="technology-category">
                      {technology.node.category}
                    </p>
                    <div className="technology-logo-container">
                      <GatsbyImage
                        image={logo}
                        alt="image"
                        className="technology-logo"
                      />
                    </div>
                  </div>
                  <div className="technology-item-bottom">
                    <h3 className="technology-header">
                      {technology.node.title}
                    </h3>
                    <p className="technology-description">
                      {technology.node.description.description}
                    </p>
                  </div>
                </li>
              )
            }
            return null
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default TechnologyTemplate
