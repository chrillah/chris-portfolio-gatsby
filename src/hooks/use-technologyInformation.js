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
          }
        }
      }
    }
  `)
  return data.allContentfulTechnic.edges;
}

export default useTechnologyInformation