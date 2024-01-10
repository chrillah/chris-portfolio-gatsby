import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet></Helmet>
      <meta name="author" content={data.site.siteMetadata.author} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
