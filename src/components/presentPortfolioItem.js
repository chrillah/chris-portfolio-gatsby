import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PresentPortfolioItem = ({ item, lengthOfItems, indexOfItem }) => {
  const image = getImage(item.portfolioHeroImage)

  if (item) {
    return (
      <Link to={`/portfolio/${item.slug}`} className="present-portfolio-item">
        <div className="item-top-container">
          <p>{item.timePeriod}</p>
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
        </div>
        <div className="item-button-container">
          <div className="to-button">
            <svg
              className="arrow"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <polyline
                className="arrow-detail"
                points="14.95 29.44 29.39 15 14.95 .56"
              />
              <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
            </svg>
            <p>A taste</p>
          </div>
        </div>
        <div className="item-bottom-container">
          <h3>
            {indexOfItem} of {lengthOfItems}
          </h3>
        </div>
      </Link>
    )
  } else {
    return <div className="present-portfolio-item"></div>
  }
}

export default PresentPortfolioItem
