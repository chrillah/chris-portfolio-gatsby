import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const samplePageLinks = [
    // {
    //   text: "Home",
    //   url: "/",
    //   badge: false,
    //   description:
    //     "A simple example of linking to another page within a Gatsby site",
    // },
    {
      text: "Illustrations",
      url: "page-2",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    {
      text: "Portfolio",
      url: "portfolio",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
  ]

  return (
    <header>
      <nav>
        <Link to="/">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 109.14 109.14"
            className="logo"
          >
            <g>
              <polygon
                class="cls-2"
                points="29.24 53.92 29.24 41.23 45.29 41.23 45.29 30.87 18.58 30.87 18.58 64.28 45.29 64.28 45.29 53.92 29.24 53.92"
              />
              <polygon
                class="cls-2"
                points="61.04 41.23 61.04 30.87 52.31 30.87 52.31 64.28 61.04 64.28 61.04 49.9 73.73 49.9 73.73 64.28 81.9 64.28 81.9 41.23 61.04 41.23"
              />
              <rect
                class="cls-2"
                x="88.91"
                y="53.27"
                width="12.69"
                height="11.01"
              />
            </g>
            <rect class="cls-1" x=".5" y=".5" width="108.14" height="108.14" />
            <polygon
              class="cls-2"
              points="13.06 37.87 18.58 30.87 18.58 64.28 13.06 71.27 13.06 37.87"
            />
            <polygon
              class="cls-2"
              points="13.06 71.27 39.77 71.27 45.29 64.28 18.58 64.28 13.06 71.27"
            />
            <polygon
              class="cls-2"
              points="45.29 41.23 39.77 48.22 29.24 48.22 29.24 41.23 45.29 41.23"
            />
            <polygon
              class="cls-2"
              points="52.31 30.87 46.78 37.87 46.78 71.27 52.31 64.28 52.31 30.87"
            />
            <polygon
              class="cls-2"
              points="61.04 64.28 55.51 71.27 46.78 71.27 52.31 64.28 61.04 64.28"
            />
            <polygon
              class="cls-2"
              points="73.73 64.28 68.2 71.27 68.2 56.9 73.73 49.9 73.73 64.28"
            />
            <polygon
              class="cls-2"
              points="68.2 56.9 61.04 56.9 61.04 49.9 73.73 49.9 68.2 56.9"
            />
            <polygon
              class="cls-2"
              points="81.9 64.28 76.37 71.27 68.2 71.27 73.73 64.28 81.9 64.28"
            />
            <polygon
              class="cls-2"
              points="88.91 53.27 83.39 60.26 83.39 71.27 88.91 64.28 88.91 53.27"
            />
            <polygon
              class="cls-2"
              points="101.6 64.28 96.08 71.27 83.39 71.27 88.91 64.28 101.6 64.28"
            />
          </svg>
        </Link>
        <div className="nav-buttons-container">
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link className="nav-buttons" to={link.url}>
                {link.text}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
