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
      component: path.resolve("./src/templates/portfolioItemTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  // Lägg till den tidigare koden här för att skapa en statisk sida
  //   createPage({
  //     path: "/using-dsg",
  //     component: require.resolve("./src/templates/using-dsg.js"),
  //     context: {},
  //     defer: true,
  //   })
}
