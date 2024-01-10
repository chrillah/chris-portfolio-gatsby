import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import useNavigation from "../hooks/use-navigation"

const Header = () => {
  const navigation = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            onKeyDown={event => {
              if (event.key === "Enter") {
                closeMenu()
              }
            }}
            role="button"
            tabIndex={0}
          >
            <svg
              id="Layer_1"
              className="logo-alt"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 68.94 30"
            >
              <g>
                <polygon
                  className="logo-alt-detail"
                  points="12.17 17.06 12.17 7.89 23.78 7.89 23.78 .4 4.47 .4 4.47 24.54 23.78 24.54 23.78 17.06 12.17 17.06"
                />
                <polygon
                  className="logo-alt-detail"
                  points="35.16 7.89 35.16 .4 28.85 .4 28.85 24.54 35.16 24.54 35.16 14.15 44.33 14.15 44.33 24.54 50.23 24.54 50.23 7.89 35.16 7.89"
                />
                <rect
                  className="logo-alt-detail"
                  x="55.31"
                  y="16.59"
                  width="9.17"
                  height="7.96"
                />
              </g>
              <polygon
                className="logo-alt-detail"
                points=".48 5.46 4.47 .4 4.47 24.54 .48 29.6 .48 5.46"
              />
              <polygon
                className="logo-alt-detail"
                points=".48 29.6 19.78 29.6 23.78 24.54 4.47 24.54 .48 29.6"
              />
              <polygon
                className="logo-alt-detail"
                points="23.78 7.89 19.78 12.94 12.17 12.94 12.17 7.89 23.78 7.89"
              />
              <polygon
                className="logo-alt-detail"
                points="28.85 .4 24.85 5.46 24.85 29.6 28.85 24.54 28.85 .4"
              />
              <polygon
                className="logo-alt-detail"
                points="28.85 .4 24.85 5.46 24.85 29.6 28.85 24.54 28.85 .4"
              />
              <polygon
                className="logo-alt-detail"
                points="35.16 24.54 31.16 29.6 24.85 29.6 28.85 24.54 35.16 24.54"
              />
              <polygon
                className="logo-alt-detail"
                points="44.33 24.54 40.34 29.6 40.34 19.21 44.33 14.15 44.33 24.54"
              />
              <polygon
                className="logo-alt-detail"
                points="40.34 19.21 35.16 19.21 35.16 14.15 44.33 14.15 40.34 19.21"
              />
              <polygon
                className="logo-alt-detail"
                points="50.23 24.54 46.24 29.6 40.34 29.6 44.33 24.54 50.23 24.54"
              />
              <polygon
                className="logo-alt-detail"
                points="55.31 16.59 51.31 21.64 51.31 29.6 55.31 24.54 55.31 16.59"
              />
              <polygon
                className="logo-alt-detail"
                points="64.48 24.54 60.48 29.6 51.31 29.6 55.31 24.54 64.48 24.54"
              />
            </svg>
          </Link>

          <div
            onClick={() => {
              closeMenu()
            }}
            onKeyDown={event => {
              if (event.key === "Enter") {
                closeMenu()
              }
            }}
            role="button"
            tabIndex={0}
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
            onKeyDown={event => {
              if (event.key === "Enter") {
                openMenu()
              }
            }}
            role="button"
            tabIndex={0}
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
            isMenuOpen ? "nav-container menu-open" : "nav-container menu-close"
          }
        >
          <div className="nav-buttons-container">
            {navigation.map(({ node }, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => {
                    closeMenu()
                  }}
                  className="nav-button"
                  to={node.url}
                >
                  {node.title}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
