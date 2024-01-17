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
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for some portfolio stuff, why not"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul className="search-result">
        {/* <div className="no-search-result">
          {results.length === 0 && query.trim() !== "" && (
            <li>
              <span>No results found for "{query}"</span>
            </li>
          )}
        </div> */}

        {/* {results.length === 0 && query.trim() !== "" ? <>no</>:<>yes</>} */}
        <div className="search-link-container">
          {results.map(page => (
            <li key={page.id}>
              {page.slug ? (
                <Link className="link-button" to={`/portfolio/${page.slug}`}>
                  {page.title}
                </Link>
              ) : (
                <span>{page.portfolioTitle}</span>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Search
