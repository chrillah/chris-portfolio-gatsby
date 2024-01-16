import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

function DisplayIllustrations() {
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

  let numberOfImages

  if (data) {
    data.allContentfulGallery.edges.forEach(edge => {
      if (edge) {
        numberOfImages = edge.node.images.length;
      }
    });
  }

  const randomNumber = Math.floor(Math.random() * numberOfImages) + 1

  return (
    <Link to="/illustrations" className="illustration-section">
      {data ?
              <>
              {data.allContentfulGallery.edges.map((edge, index) => {
                return (
                  <div key={index} className="gallery">
                    {edge.node.images.map((image, imageIndex) => {
                      const imageData = getImage(image)
                      if (imageIndex === randomNumber) {
                        return (
                          <GatsbyImage
                            key={imageIndex}
                            image={imageData}
                            alt="Some of my illustrations"
                            placeholder="blurred"
                          />
                        )
                      }
                      return null
                    })}
                  </div>
                )
              })}
            </> : <>No</>}
      <div className="to-button">
        <svg
          className="arrow"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <polyline
            className="arrow-detail"
            points="14.95 29.44 29.39 15 14.95 .56"
          />
          <line className="arrow-detail" x1="29.39" y1="15" y2="15" />
        </svg>
        <p>My illustrations</p>
      </div>
    </Link>
  )
}

export default DisplayIllustrations
