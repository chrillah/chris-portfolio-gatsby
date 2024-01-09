import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {Link, graphql, useStaticQuery } from 'gatsby';

function DisplayIllustrations() {
//   const data = useStaticQuery(graphql`
//     query {
//       contentfulIllustrations {
//         gallery {
//           gatsbyImageData(width: 1000)
//           title
//         }
//       }
//     }
//   `);

  return (
    <Link to="/illustrations" className='illustration-section'>
        <h1>Illustrations</h1>
      {/* {data.contentfulIllustrations.gallery.map((imageData, index) => {
        const image = getImage(imageData);
        return (
          <div key={index}>
            <GatsbyImage image={image} alt={imageData.title} />
          </div>
        );
      })} */}
    </Link>
  );
}

export default DisplayIllustrations;
