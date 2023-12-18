import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioItem = ({ item, lengthOfItems, indexOfItem }) => {
  return (
    <>
      <h3>{indexOfItem} of {lengthOfItems}</h3>
      <GatsbyImage
        image={getImage(item.portfolioHeroImage)}
        alt={item.portfolioTitle}
      />
      <h1>{item.portfolioTitle}</h1>
      <p>{item.portfolioDescription.portfolioDescription}</p>
    </>
  )
}

export default PortfolioItem
