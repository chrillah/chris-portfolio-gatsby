import { graphql, useStaticQuery } from "gatsby"

const usePortfolioInformation = () => {
  const { allContentfulPortfolioItem } = useStaticQuery(graphql`
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

  return allContentfulPortfolioItem.edges
}

export default usePortfolioInformation
