import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// den här returnerar det som vi söker efter, just nu söker vi bara efter portfolioItems
const query = graphql`
  {
    localSearchContentfulPortfolioItem {
      publicStoreURL
      publicIndexURL
    }
  }
`

const SearchInput = () => {
  const data = useStaticQuery(query)

  const {
    publicStoreURL: portfolioItemStoreUrl,
    publicIndexURL: portfolioItemIndexUrl,
  } = data.localSearchContentfulPortfolioItem

  return (
    <form>
      <label htmlFor="search-input">Search</label>
      <input type="text" id="search-input" />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchInput
