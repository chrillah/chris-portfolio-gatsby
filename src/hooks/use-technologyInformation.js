import { graphql, useStaticQuery } from "gatsby"

const useTechnologyInformation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTechnic {
        edges {
          node {
            category
            title
            description {
              description
            }
            logo {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
    }
  `)
  return data.allContentfulTechnic.edges
}

export default useTechnologyInformation
