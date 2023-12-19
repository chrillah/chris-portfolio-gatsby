import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="app-page">
      <h1>Enter</h1>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
