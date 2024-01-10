import React from "react"
import PresentPortfolioItem from "../components/presentPortfolioItem"
import {graphql, useStaticQuery } from "gatsby"

function DisplayPortfolioItems() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            portfolioTitle
            portfolioHeroImage {
              gatsbyImage(width: 1000)
            }
            portfolioDescription {
              portfolioDescription
            }
            timePeriod
            portfolioSubject
            slug
          }
        }
      }
    }
  `)
  const randomNumber =
    Math.floor(Math.random() * data.allContentfulPortfolioItem.edges.length) + 1
  return (
    <>
      {data ? (
        <>
          {data.allContentfulPortfolioItem.edges.map((edge, index) => {
            if (index === randomNumber) {
              return (
                <PresentPortfolioItem
                  key={edge.node.portfolioTitle}
                  item={edge.node}
                  lengthOfItems={data.allContentfulPortfolioItem.edges.length}
                  indexOfItem={index + 1}
                />
              )
            }
            return null
          })}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default DisplayPortfolioItems
