import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/style.css"
import "../css/iconsStyle.css"

const Layout = ({ children }) => {

    // denna query hämtar data från gatsby-config.js, visar data i headern, för meta-taggar
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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
