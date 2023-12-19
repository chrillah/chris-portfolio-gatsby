const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Hämta data från Contentful
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

  // Skapa sidor baserat på slugs från Contentful
  result.data.allContentfulPortfolioItem.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio/${node.slug}`, // Anpassa sökvägen efter behov
      component: path.resolve("./src/templates/portfolioItemTemplate.js"), // Använd din egna template-fil
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
