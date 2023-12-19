import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  return (
    <Layout>
      <Link className="back-button" to="/">
        <div className="caret"></div>
        <p>Back</p>
      </Link>
      <h1>UNDER CONSTRUCTIONS</h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default SecondPage
