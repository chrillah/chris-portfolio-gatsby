import React from "react"
import PresentPortfolioItem from "../components/presentPortfolioItem"
import usePortfolioInformation from "../hooks/use-portfolioInformation"

function DisplayPortfolioItems() {
  const portfolioInformation = usePortfolioInformation()
  const randomNumber =
    Math.floor(Math.random() * portfolioInformation.length) + 1
  return (
    <>
      {portfolioInformation ? (
        <>
          {portfolioInformation.map((edge, index) => {
            if (index === randomNumber) {
              return (
                <PresentPortfolioItem
                  key={edge.node.portfolioTitle}
                  item={edge.node}
                  lengthOfItems={portfolioInformation.length}
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
