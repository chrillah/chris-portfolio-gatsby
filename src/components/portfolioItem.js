import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PortfolioItem = ({ item, lengthOfItems, indexOfItem }) => {
  const image = getImage(item.portfolioHeroImage)
  return (
    <li
      className={
        item.portfolioSubject === "React"
          ? "portfolio-item"
          : item.portfolioSubject === "Vue"
          ? "portfolio-item color-set-2"
          : "portfolio-item color-set-1"
      }
    >
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
        {/* <p>{item.portfolioDescription.portfolioDescription}</p> */}
      </div>
      <div className="item-button-container">
        <Link className="to-button" to={`/portfolio/${item.slug}`}>
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
          <p>Check it out</p>
        </Link>
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
