/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Ch`,
    description: `A collection of my work`,
    author: `Christopher Rönnberg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/projects/*`],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon-alt.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `contentfulPortfolioItem`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: `forward`,
        },
        // query skapas för varje contentType som man vill göra sökbar
        query: `
            {
             allContentfulPortfolioItem {
                nodes {
                    id
                    portfolioTitle
                    slug
                    portfolioHeroImage {
                        gatsbyImageData
                        }
                    }

                }
            }
        `,
        ref: `id`,
        index: [`portfolioTitle`],
        store: [`id`, `slug`, `portfolioTitle`, `portfolioHeroImage`],
        normalizer: ({ data }) =>
          data.allContentfulPortfolioItem.nodes.map(node => ({
            id: node.id,
            slug: node.slug,
            portfolioTitle: node.portfolioTitle,
            portfolioHeroImage: node.portfolioHeroImage.gatsbyImageData,
          })),
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["title", "slug"],
        resolvers: {
          ContentfulPortfolioItem: {
            title: node => node.portfolioTitle,
            slug: node => node.slug,
          },
        },
      },
    },
  ],
}
