import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/style.css"
// import HeaderSearch from "./headerSearch"
import { SearchModalProvider } from "./SearchModalContext"

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
      <SearchModalProvider>
        <Helmet>
          <meta
            name="author"
            title={data.site.siteMetadata.title}
            author={data.site.siteMetadata.author}
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <Header />
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </SearchModalProvider>
    </>
  )
}

export default Layout
