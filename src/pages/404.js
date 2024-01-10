import * as React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="gradient-container">
      <div className="app-page-container">
        <div className="app-container">
          <div className="notfound-hero-container">
            <div>
              <h1 className="hero-title">404</h1>
              <p>Oh snap! Nothing here...</p>
            </div>
            <Link className="link-button" to="/">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

// export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
