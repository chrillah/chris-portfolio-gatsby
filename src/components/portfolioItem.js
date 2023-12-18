import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioItem = ({ item, lengthOfItems, indexOfItem }) => {
  const image = getImage(item.portfolioHeroImage)
  return (
    <li className="portfolio-item">
      <div className="item-top-container">
        <h3>{item.timePeriod}</h3>
        <h3>{item.portfolioSubject}</h3>
      </div>
      <div className="item-image-container">
        <GatsbyImage
          className="item-image"
          image={image}
          alt={item.portfolioTitle}
        />
      </div>
      <div className="item-middle-container">
        <h1>{item.portfolioTitle}</h1>
        <p>{item.portfolioDescription.portfolioDescription}</p>
      </div>
      <div className="item-bottom-container">
        <h3>
          {indexOfItem} of {lengthOfItems}
        </h3>
      </div>
    </li>
  )
}

export default PortfolioItem
