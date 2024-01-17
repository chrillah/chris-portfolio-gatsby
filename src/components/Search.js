import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Index } from "elasticlunr"

const Search = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [searchIndex, setSearchIndex] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allSiteSearchIndex {
        edges {
          node {
            index
          }
        }
      }
      allContentfulPortfolioItem {
        edges {
          node {
            slug
            portfolioTitle
          }
        }
      }
    }
  `)

  useEffect(() => {
    setSearchIndex(Index.load(data.allSiteSearchIndex.edges[0].node.index))
  }, [data.allSiteSearchIndex.edges])

  useEffect(() => {
    const search = () => {
      if (searchIndex) {
        const searchResults = searchIndex
          .search(query, {})
          .map(({ ref }) => searchIndex.documentStore.getDoc(ref))

        setResults(searchResults)
      }
    }

    if (query.trim() !== "") {
      search()
    }
  }, [query, searchIndex])

  return (
    <div className="search-test">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul className="search-result">
        {results.map(page => (
          <li key={page.id}>
            {page.slug ? (
              <Link to={`/portfolio/${page.slug}`}>
                {page.title}
              </Link>
            ) : (
              <span>{page.portfolioTitle}</span>
            )}
          </li>
        ))}
      </ul>

      {query && <p>Search query: {query}</p>}
    </div>
  )
}

export default Search
