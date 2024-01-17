import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import useNavigation from "../hooks/use-navigation"
import Search from "./Search"

const Header = () => {
  const navigation = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const openSearch = () => {
    setIsSearchOpen(true)
  }

  //   Funktion som ändrar tillståndet på isMenuOpen till false
  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }

  //   funktion som ändrar tillståndet på isMenuOpen till true
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
              className="logo-alt"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.83 30"
            >
              <metadata></metadata>

              <polygon
                className="logo-alt-detail"
                points="12.19 17.06 12.19 7.89 23.79 7.89 23.79 .4 4.49 .4 4.49 24.54 23.79 24.54 23.79 17.06 12.19 17.06"
              />
              <polygon
                className="logo-alt-detail"
                points=".49 5.46 4.49 .4 4.49 24.54 .49 29.6 .49 5.46"
              />
              <polygon
                className="logo-alt-detail"
                points=".49 29.6 19.8 29.6 23.79 24.54 4.49 24.54 .49 29.6"
              />
              <polygon
                className="logo-alt-detail"
                points="23.79 7.89 19.8 12.94 12.19 12.94 12.19 7.89 23.79 7.89"
              />
              <polygon
                className="logo-alt-detail"
                points="34.1 7.89 34.1 .4 27.79 .4 27.79 24.54 34.1 24.54 34.1 14.15 43.27 14.15 43.27 24.54 49.17 24.54 49.17 7.89 34.1 7.89"
              />
              <polygon
                className="logo-alt-detail"
                points="27.79 .4 23.79 5.46 23.79 29.6 27.79 24.54 27.79 .4"
              />
              <polygon
                className="logo-alt-detail"
                points="34.1 24.54 30.1 29.6 23.79 29.6 27.79 24.54 34.1 24.54"
              />
              <polygon
                className="logo-alt-detail"
                points="43.27 24.54 39.28 29.6 39.28 19.21 43.27 14.15 43.27 24.54"
              />
              <polygon
                className="logo-alt-detail"
                points="39.28 19.21 34.1 19.21 34.1 14.15 43.27 14.15 39.28 19.21"
              />
              <polygon
                className="logo-alt-detail"
                points="49.17 24.54 45.18 29.6 39.28 29.6 43.27 24.54 49.17 24.54"
              />
              <rect
                className="logo-alt-detail"
                x="53.17"
                y="16.59"
                width="9.17"
                height="7.96"
              />
              <polygon
                className="logo-alt-detail"
                points="53.17 16.59 49.17 21.64 49.17 29.6 53.17 24.54 53.17 16.59"
              />
              <polygon
                className="logo-alt-detail"
                points="62.34 24.54 58.35 29.6 49.17 29.6 53.17 24.54 62.34 24.54"
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
            {/* SEARCH BUTTON */}

            {isSearchOpen ? (
              <></>
            ) : (
              <div
                onClick={() => {
                  openSearch()
                }}
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    openSearch()
                  }
                }}
                tabIndex={0}
                role="button"
                className="nav-button"
              >
                <svg
                  className="search-icon"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <line
                    className="search-icon-detail"
                    x1="29.04"
                    y1="29.32"
                    x2="19.68"
                    y2="19.96"
                  />
                  <circle
                    className="search-icon-detail"
                    cx="11.43"
                    cy="11.43"
                    r="10.43"
                  />
                  <path
                    className="search-icon-detail"
                    d="M11.43,19.48c4.45,0,8.05-3.6,8.05-8.05S15.88,3.38,11.43,3.38"
                  />
                </svg>
              </div>
            )}

            {!isSearchOpen ? (
              <>
                {navigation.map(({ node }, index) => {
                  if (node.title === "404") {
                    return null
                  } else {
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
                  }
                })}
              </>
            ) : (
              <Search />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
