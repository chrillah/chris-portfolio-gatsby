import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const samplePageLinks = [
    {
      text: "Home",
      url: "/",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
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
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link className="nav-buttons" to={link.url}>
              {link.text}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </header>
  )
}

export default Header
