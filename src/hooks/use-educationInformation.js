import { useStaticQuery, graphql } from "gatsby"

const useEducationInformation = () => {
  const { allContentfulEducation } = useStaticQuery(graphql`
    query {
      allContentfulEducation {
        edges {
          node {
            educationName
            knowledge {
              knowledge
            }
            schoolName
          }
        }
      }
    }
  `)
  return allContentfulEducation.edges
}

export default useEducationInformation
