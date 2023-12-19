import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const samplePageLinks = [
    {
      text: "Home",
      url: "/",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    {
      text: "Page 2",
      url: "page-2/",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    {
      text: "Portfolio",
      url: "portfolio/",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  return (
    <header>
      <nav>
        <div className="header-buttons-container">
          <Link
            to="/"
            onClick={() => {
              closeMenu()
            }}
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 109.14 109.14"
              className="logo"
            >
              <g>
                <polygon
                  className="logo-rect"
                  points="29.24 53.92 29.24 41.23 45.29 41.23 45.29 30.87 18.58 30.87 18.58 64.28 45.29 64.28 45.29 53.92 29.24 53.92"
                />
                <polygon
                  className="logo-rect"
                  points="61.04 41.23 61.04 30.87 52.31 30.87 52.31 64.28 61.04 64.28 61.04 49.9 73.73 49.9 73.73 64.28 81.9 64.28 81.9 41.23 61.04 41.23"
                />
                <rect
                  className="logo-rect"
                  x="88.91"
                  y="53.27"
                  width="12.69"
                  height="11.01"
                />
              </g>
              <rect
                className="logo-rect-1"
                x=".5"
                y=".5"
                width="108.14"
                height="108.14"
              />
              <polygon
                className="logo-rect"
                points="13.06 37.87 18.58 30.87 18.58 64.28 13.06 71.27 13.06 37.87"
              />
              <polygon
                className="logo-rect"
                points="13.06 71.27 39.77 71.27 45.29 64.28 18.58 64.28 13.06 71.27"
              />
              <polygon
                className="logo-rect"
                points="45.29 41.23 39.77 48.22 29.24 48.22 29.24 41.23 45.29 41.23"
              />
              <polygon
                className="logo-rect"
                points="52.31 30.87 46.78 37.87 46.78 71.27 52.31 64.28 52.31 30.87"
              />
              <polygon
                className="logo-rect"
                points="61.04 64.28 55.51 71.27 46.78 71.27 52.31 64.28 61.04 64.28"
              />
              <polygon
                className="logo-rect"
                points="73.73 64.28 68.2 71.27 68.2 56.9 73.73 49.9 73.73 64.28"
              />
              <polygon
                className="logo-rect"
                points="68.2 56.9 61.04 56.9 61.04 49.9 73.73 49.9 68.2 56.9"
              />
              <polygon
                className="logo-rect"
                points="81.9 64.28 76.37 71.27 68.2 71.27 73.73 64.28 81.9 64.28"
              />
              <polygon
                className="logo-rect"
                points="88.91 53.27 83.39 60.26 83.39 71.27 88.91 64.28 88.91 53.27"
              />
              <polygon
                className="logo-rect"
                points="101.6 64.28 96.08 71.27 83.39 71.27 88.91 64.28 101.6 64.28"
              />
            </svg>
          </Link>

          <div
            className={isMenuOpen ? "close-button" : "close-button no-visible"}
          >
            <svg
              onClick={() => {
                closeMenu()
              }}
              className="cross"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 109.14 109.14"
            >
              <rect
                className="cross-rect"
                x=".5"
                y=".5"
                width="108.14"
                height="108.14"
              />
              <line
                className="cross-rect"
                x1=".5"
                y1=".5"
                x2="108.64"
                y2="108.64"
              />
              <line
                className="cross-rect"
                x1="108.64"
                y1=".5"
                x2=".5"
                y2="108.64"
              />
            </svg>
          </div>

          <div
            onClick={() => {
              openMenu()
            }}
            className={isMenuOpen ? "open-button no-visible" : "open-button"}
          >
            <svg
              className="burger"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 109.14 109.14"
            >
              <rect
                className="burger-rect"
                x=".5"
                y=".5"
                width="108.14"
                height="108.14"
              />
              <line
                className="burger-rect"
                x1=".5"
                y1="73.09"
                x2="108.64"
                y2="73.09"
              />
              <line
                className="burger-rect"
                x1="108.64"
                y1="36.05"
                x2=".5"
                y2="36.05"
              />
            </svg>
          </div>
        </div>
        <div
          className={
            isMenuOpen
              ? "nav-buttons-container menu-open"
              : "nav-buttons-container menu-close"
          }
        >
          <Link
            onClick={() => {
              closeMenu()
            }}
            className="nav-button"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              closeMenu()
            }}
            className="nav-button"
            to="/portfolio/"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => {
              closeMenu()
            }}
            className="nav-button"
            to="/page-2/"
          >
            Page 2
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
