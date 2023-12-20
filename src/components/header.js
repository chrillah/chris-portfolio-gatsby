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
              className="logo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <path
                className="logo-detail"
                d="m29,1v28H1V1h28M30,0H0v30h30V0h0Z"
              />
              <line
                className="logo-detail"
                x1="30"
                y1="15"
                x2="14.34"
                y2="15"
              />
              <line
                className="logo-detail"
                x1="14.34"
                y1="22.83"
                x2="14.34"
                y2="7.17"
              />
            </svg>
          </Link>

          <div
            onClick={() => {
              closeMenu()
            }}
            className={isMenuOpen ? "close-button" : "close-button no-visible"}
          >
            <svg
              className="cross"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <line
                className="cross-detail"
                x1="29.62"
                y1="29.62"
                x2=".38"
                y2=".38"
              />
              <line
                className="cross-detail"
                x1="29.62"
                y1=".38"
                x2=".38"
                y2="29.62"
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
              viewBox="0 0 30 30"
            >
              <line className="burger-detail" x1="30" y1="15" y2="15" />
              <line className="burger-detail" x1="30" y1="5" y2="5" />
              <line className="burger-detail" x1="30" y1="25" y2="25" />
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
          <Link
            onClick={() => {
              closeMenu()
            }}
            className="nav-button"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              closeMenu()
            }}
            className="nav-button"
            to="/home"
          >
            My home
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
