import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import useNavigation from "../hooks/use-navigation"
import "../css/style.css"
// import "./layout.css"

const Layout = ({ children }) => {
    const navigation = useNavigation();
  //   const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
