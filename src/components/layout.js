import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //   query SiteTitleQuery {
    //     site {
    //       siteMetadata {
    //         title
    //       }
    //     }
    //   }
    // `)

  return (
    <>
    {/* <Helmet>
        <meta name=></meta>
    </Helmet> */}
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
