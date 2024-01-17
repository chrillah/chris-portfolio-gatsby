import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/style.css"
import HeaderSearch from "./headerSearch"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta
          name="author"
          title={data.site.siteMetadata.title}
          author={data.site.siteMetadata.author}
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      <HeaderSearch />
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
