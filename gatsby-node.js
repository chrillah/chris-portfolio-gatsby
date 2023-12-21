const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulPortfolioItem.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: path.resolve("./src/templates/portfolio-item-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
