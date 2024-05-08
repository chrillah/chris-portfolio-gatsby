import React from "react"
import { Link } from "gatsby"

const DisplayAboutSection = ({ aboutLink, aboutHeader, aboutDescription }) => {
  if (!aboutLink && !aboutHeader && !aboutDescription) {
    return null
  } else {
    return (
      <Link to={`/${aboutLink}`} className="about-section">
        <h1>{aboutHeader}</h1>
        <div className="home-big-logo-wrapper">
          <svg
            className="logo-alt-2"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62.83 30"
          >
            <polygon
              className="logo-alt-detail-2"
              points="12.19 17.06 12.19 7.89 23.79 7.89 23.79 .4 4.49 .4 4.49 24.54 23.79 24.54 23.79 17.06 12.19 17.06"
            />
            <polygon
              className="logo-alt-detail-2"
              points=".49 5.46 4.49 .4 4.49 24.54 .49 29.6 .49 5.46"
            />
            <polygon
              className="logo-alt-detail-2"
              points=".49 29.6 19.8 29.6 23.79 24.54 4.49 24.54 .49 29.6"
            />
            <polygon
              className="logo-alt-detail-2"
              points="23.79 7.89 19.8 12.94 12.19 12.94 12.19 7.89 23.79 7.89"
            />
            <polygon
              className="logo-alt-detail-2"
              points="34.1 7.89 34.1 .4 27.79 .4 27.79 24.54 34.1 24.54 34.1 14.15 43.27 14.15 43.27 24.54 49.17 24.54 49.17 7.89 34.1 7.89"
            />
            <polygon
              className="logo-alt-detail-2"
              points="27.79 .4 23.79 5.46 23.79 29.6 27.79 24.54 27.79 .4"
            />
            <polygon
              className="logo-alt-detail-2"
              points="34.1 24.54 30.1 29.6 23.79 29.6 27.79 24.54 34.1 24.54"
            />
            <polygon
              className="logo-alt-detail-2"
              points="43.27 24.54 39.28 29.6 39.28 19.21 43.27 14.15 43.27 24.54"
            />
            <polygon
              className="logo-alt-detail-2"
              points="39.28 19.21 34.1 19.21 34.1 14.15 43.27 14.15 39.28 19.21"
            />
            <polygon
              className="logo-alt-detail-2"
              points="49.17 24.54 45.18 29.6 39.28 29.6 43.27 24.54 49.17 24.54"
            />
            <rect
              className="logo-alt-detail-2"
              x="53.17"
              y="16.59"
              width="9.17"
              height="7.96"
            />
            <polygon
              className="logo-alt-detail-2"
              points="53.17 16.59 49.17 21.64 49.17 29.6 53.17 24.54 53.17 16.59"
            />
            <polygon
              className="logo-alt-detail-2"
              points="62.34 24.54 58.35 29.6 49.17 29.6 53.17 24.54 62.34 24.54"
            />
          </svg>
        </div>
        <div>
          <p>{aboutDescription}</p>
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
            <p>About me</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default DisplayAboutSection
