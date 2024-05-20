import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { BLOCKS } from "@contentful/rich-text-types"
//import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            images {
              gatsbyImageData(width: 900)
            }
            description {
              description
            }
          }
        }
      }
    }
  `)
  //   const richTextConfig = {
  //     renderNode: {
  //       [BLOCKS]: (node, children) => <p>{children}</p>,
  //       [BLOCKS.HEADING_1]: (node, children) => (
  //         <h1 className="hero-title">{children}</h1>
  //       ),
  //     },
  //   }

  data.allContentfulGallery.edges.forEach(edge => {
    console.log(edge.node.images[0].gatsbyImageData.images.fallback.src)
  })

  data.allContentfulGallery.edges.forEach(edge => {
    console.log(edge.node.images[0].gatsbyImageData.images.fallback.src)
  })
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>Creativity</title>
      </Helmet>
      <div className="gradient-bg">
        {/* <div className="app-page-wrapper">
          <div className="app-container">
            <div className="about-hero-container">
              <div className="about-hero-item-1">
                <div className="about-presentation">
                  <h3>Gallery</h3>
                  <div>
                    <h1 className="hero-title">Mixed Bag</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          {data.allContentfulGallery.edges.map((edge, index) => {
            return (
              <div key={index} className="gallery-container">
                {edge.node.images.map((image, imageIndex) => {
                  const imageData = getImage(image)
                  console.log(imageData)
                  return (
                    <div key={imageIndex} className="gallery-image">
                      <GatsbyImage image={imageData} alt="" />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="app-page-wrapper">
          <div className="app-container">
            <div className="illustrations-page-bottom-container">
              <p>Check out the rest.</p>
              <Link to="/projects" className="link-button">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
