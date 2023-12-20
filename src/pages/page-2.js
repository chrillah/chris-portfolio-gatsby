import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  return (
    <Layout>
      <div className="app-page">
        <Link className="back-button" to="/">
          <svg
            className="arrow rev"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <polyline
              className="arrow-detail"
              points="14.95 29.44 29.39 15 14.95 .56"
            />
            <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
          </svg>
          <p>Back</p>
        </Link>
        <h1>UNDER CONSTRUCTIONS</h1>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Page 2" />

export default SecondPage
