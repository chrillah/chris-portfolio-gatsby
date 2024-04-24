import React from "react"
import styled from "styled-components"

export const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const IconWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;

  > h3 {
    text-align: center;
    color: blue;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
`
export const IconCarousel = () => {
  return (
    <Carousel>
      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M240.16,90.1c-15.88-15.88-37.25-24.68-59.85-24.68s-43.96,8.79-59.85,24.68l-1.7,1.7c-4.07-.66-7.75-1.04-11.82-1.04-18.91,0-37.25,7.47-50.77,21.27-28.08,28.08-28.08,73.46,0,101.54,13.52,13.52,31.48,20.99,50.77,20.99h75.17c22.31-.38,43.02-9.17,58.53-24.68,32.71-33.19,32.71-86.98-.47-119.79ZM107.13,218.97v.09c-15.22,0-29.12-6.43-39.62-17.3-22.03-22.03-22.03-57.49,0-79.23,10.49-10.49,24.68-16.55,39.62-16.55h.38c3.03,0,5.39.38,8.13.66,3.03.66,5.77,1.04,8.79,1.99,5.39,1.7,10.49,4.44,14.84,7.47,1.99,1.7,4.44,3.03,6.05,5.11l1.7,1.7,22.98,22.98c3.03,3.03,3.03,7.75,0,11.16-1.7,1.7-3.4,2.36-5.39,2.36s-4.07-.66-5.39-2.36l-18.91-18.91-4.07-4.07c-.66-.66-1.32-1.04-1.7-1.7-5.39-4.73-11.82-7.75-18.91-9.17-2.36-.66-5.11-.66-7.47-.66h-1.04c-10.49.38-19.95,4.44-27.42,11.82-15.88,15.88-15.88,41.32,0,57.2,7.75,7.75,17.59,11.82,28.74,11.82h7.09l6.81,6.43c3.4,3.4,6.81,6.81,10.87,9.17h-26.1ZM229.28,198.74h0c-7.09,7.09-15.6,12.48-25.06,15.88-3.03,1.04-5.77,1.7-8.79,2.74-4.44,1.04-9.17,1.7-13.9,1.7h-1.32c-16.26,0-31.48-5.39-43.68-15.6-1.7-1.32-3.4-3.03-5.11-4.44l-32.52-32.52c-3.03-3.03-3.03-7.75,0-11.16,1.7-1.7,3.4-2.36,5.39-2.36s4.07.66,5.39,2.36l32.15,32.15c3.03,3.03,6.43,5.39,9.83,7.75,8.13,5.11,17.59,7.75,27.7,7.75,4.44,0,9.17-.66,13.24-1.7,2.74-.66,5.39-1.7,7.75-2.74,6.05-2.74,11.82-6.43,16.92-11.53,20.61-20.61,20.61-54.46,0-75.17-10.49-10.49-24.02-15.6-37.54-15.6-10.49,0-20.61,3.03-29.78,9.17-4.44-3.4-9.17-6.43-14.56-8.79,12.86-10.49,28.74-15.88,44.34-15.88,17.59,0,35.17,6.81,48.69,19.95,27.61,27.32,27.61,71.01.85,98.05Z" />
        </svg>
      </IconContainer>
      {/* <IconWrapper>
        <h3>Angular</h3>
      </IconWrapper> */}
      <IconContainer>
        <svg x="0px" y="0px" viewBox="0 0 300 300" className="icon-body">
          <g>
            <path
              d="M239.3,195.1l15.5-123.4L144.9,34.3l-107,38.1h0l16.4,141.6l90.6,50.3v0l0,0l0,0l5.6-3.1l86.4-47.8L239.3,195.1z
		 M116.7,175.6L103.3,209l-24.9,0.4l66.7-148.3L215,209.9l-23.8-0.4l-14.7-33.9H116.7z"
            />
            <polygon points="145.2,108.6 125.4,155.7 167.8,155.7 145.2,108.6 	" />
          </g>
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          version="1.1"
          id="layer"
          x="0px"
          y="0px"
          viewBox="0 0 300 300"
          className="icon-body"
        >
          <g>
            <g>
              <path
                d="M45.6,157.3c0.9,0,1.7,0.2,2.4,0.5c-1.7-2.2-2.7-4.8-2.7-7.8c0-3,1-5.6,2.5-7.7c-0.7,0.3-1.4,0.5-2.2,0.5
			c-3.1,0-5.6-2.5-5.6-5.6c0-0.7,0.1-1.5,0.4-2.1c-3.3,4.1-5.4,9.3-5.4,15c0,5.6,2,10.8,5.3,14.8c-0.2-0.6-0.3-1.2-0.3-1.9
			C39.9,159.8,42.5,157.3,45.6,157.3z"
              />
              <path
                d="M51.2,137.1c0,0.9-0.2,1.7-0.5,2.4c2.2-1.7,4.9-2.7,7.8-2.7c3.6,0,6.9,1.5,9.2,3.8c2.1,2.1,5.3,2.1,7.4,0
			c2.1-2.1,2.1-5.3,0-7.4c-4.2-4.1-10.1-6.8-16.6-6.8c-5.6,0-10.7,2-14.7,5.2c0.6-0.2,1.2-0.3,1.8-0.3
			C48.7,131.4,51.2,134,51.2,137.1z"
              />
              <path
                d="M67.7,159.2L67.7,159.2c-2.3,2.5-5.6,3.9-9.2,3.9c-2.9,0-5.6-1-7.8-2.6c0.3,0.7,0.5,1.5,0.5,2.3c0,3.1-2.5,5.6-5.6,5.6
			c-0.7,0-1.4-0.1-2-0.4c4.1,3.3,9.3,5.3,14.9,5.3c6.5,0,12.3-2.6,16.6-6.9c2.1-2.1,2.1-5.3,0-7.4C73,157.4,69.8,157.4,67.7,159.2z"
              />
              <circle cx="45.6" cy="137.1" r="4.6" />
              <circle cx="45.6" cy="162.9" r="4.6" />
            </g>
            <path
              d="M98.2,154.8c1.5-1.2,1.8-0.4,2.9,0.7c0.6,0.6,2.3,1.8,1.2,2.6c-2.3,1.9-4.4,2.8-7.5,2.8c-6.8,0-11.6-5.1-11.3-11.8
		c0.2-3.1,1.3-5.9,3.7-7.8c2.2-1.8,4.8-2.6,7.6-2.5c1.5,0,2.6,0.3,3.9,0.7c0.9,0.3,1.8,0.7,2.5,1.3c1.5,1.2,0.7,1.8-0.3,2.9
		c-0.3,0.3-0.4,0.6-0.7,0.7c-0.6,0.6-1,1-1.8,0.4c-1.5-1-3.5-1.6-5.3-1.2c-5.9,1.5-5.6,11.9,1.6,11.9
		C95.9,156,97.3,155.6,98.2,154.8L98.2,154.8z M261.3,160.6c-1,0-1.8-0.7-1.8-1.8v-23.1c0-1,0.7-1.8,1.8-1.8h1.9
		c1,0,1.8,0.7,1.8,1.8v23.1c0,1-0.7,1.8-1.8,1.8H261.3z M251.2,157.9c-2.1,1.9-4.1,2.9-7.1,2.9c-6,0-8.8-5-8.8-10.4v-9.4
		c0-1,0.7-1.8,1.8-1.8h1.9c1,0,1.8,0.7,1.8,1.8v9.4c0,3.1,1.6,5.4,5,5.4s5.3-2.8,5.3-5.7v-9.1c0-1,0.7-1.8,1.8-1.8h1.9
		c1,0,1.8,0.7,1.8,1.8v17.8c0,1-0.7,1.8-1.8,1.8h-1.6c-1,0-1.6-0.9-1.8-1.8L251.2,157.9L251.2,157.9L251.2,157.9z M228.3,139.4h3.7
		c1,0,1.8,0.9,1.8,1.8v1.2c0,1-0.7,1.8-1.8,1.8h-3.7v14.7c0,1-0.7,1.8-1.8,1.8h-1.9c-1,0-1.8-0.7-1.8-1.8v-20.1
		c0-4.4,2.5-7.9,7.1-8.4h2.8c1,0,1.8,0.9,1.8,1.8v1.2c0,1-0.7,1.8-1.8,1.8h-1.5c-2.2,0-3.1,1.6-3.1,3.7v0.7L228.3,139.4L228.3,139.4
		L228.3,139.4z M214.9,139.4h4.1c1,0,1.8,0.7,1.8,1.8v1.2c0,1-0.7,1.8-1.8,1.8h-4.1v8.9c0,1.8,0.9,2.6,2.6,2.6h0.9
		c1,0,1.8,0.7,1.8,1.8v1.3c0,1-0.7,1.8-1.8,1.8h-2.5c-4.4-0.3-6.3-3.1-6.3-7.5v-17.3c0-1,0.7-1.8,1.8-1.8h1.9c1,0,1.8,0.7,1.8,1.8
		v3.7L214.9,139.4L214.9,139.4z M156,139.4h4.1c1,0,1.8,0.7,1.8,1.8v1.2c0,1-0.7,1.8-1.8,1.8H156v8.9c0,1.8,0.9,2.8,2.6,2.8h0.9
		c1,0,1.8,0.7,1.8,1.8v1.2c0,1-0.7,1.8-1.8,1.8h-1.2c-4.8,0-7.6-2.1-7.6-7.5v-17.3c0-1,0.7-1.8,1.8-1.8h1.9c1,0,1.8,0.7,1.8,1.8v3.7
		L156,139.4L156,139.4z M132.1,141.9c1.9-1.9,4.1-2.9,6.8-2.9c6,0,9.1,4.8,9.1,10.4v9.4c0,1-0.7,1.8-1.8,1.8h-1.9
		c-1,0-1.8-0.7-1.8-1.8v-9.4c0-3.1-1.6-5.4-5-5.4s-5.3,2.6-5.3,5.7v9.1c0,1-0.7,1.8-1.8,1.8h-1.9c-1,0-1.8-0.7-1.8-1.8V141
		c0-1,0.7-1.8,1.8-1.8h1.6c1,0,1.6,0.9,1.8,1.8L132.1,141.9L132.1,141.9z M191.1,141.9c1.9-1.9,4.1-2.9,6.8-2.9
		c6,0,9.1,4.8,9.1,10.4v9.4c0,1-0.7,1.8-1.8,1.8h-1.9c-1,0-1.8-0.7-1.8-1.8v-9.4c0-3.1-1.6-5.4-5-5.4s-5.3,2.6-5.3,5.7v9.1
		c0,1-0.7,1.8-1.8,1.8h-1.9c-1,0-1.8-0.7-1.8-1.8V141c0-1,0.7-1.8,1.8-1.8h1.6c1,0,1.6,0.9,1.8,1.8L191.1,141.9L191.1,141.9z
		 M114,138.8c-6.5,0-11,4.7-11,11.2s4.6,11.2,11,11.2s11.2-4.6,11.2-11.2S120.5,138.8,114,138.8z M167.8,151.9
		c0.4,2.9,3.4,4.3,6.2,4.3c1.3,0,2.8-0.3,3.9-0.9c0.1-0.1,0.4-0.1,0.6-0.3c0.7-0.4,1.3-0.6,1.9,0l1,1l0.9,0.9
		c0.9,1.2,0.3,1.5-0.7,2.1c-2.2,1.5-5,2.2-7.6,2.2c-7.1,0-11.8-4.3-11.8-11.3s4.7-11.2,11.3-11.2s10.7,3.9,10.9,10.9
		c0,1.9,0.1,2.5-1.8,2.5h-14.8L167.8,151.9L167.8,151.9z M114,143.8c3.4,0,5.6,2.9,5.6,6.2s-2.1,6-5.6,6s-5.6-2.6-5.6-6
		S110.6,143.8,114,143.8z M167.9,147.4h11c-0.4-2.8-2.6-3.8-5.3-3.8S168.7,144.9,167.9,147.4z"
            />
          </g>
        </svg>
        {/* <h3>Contentful</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 300 300"
        >
          <g>
            <path
              d="M49.2,35l16.9,206.2v0l84.6,23.8l82.2-23.8l17.8-205.8L49.2,35z M94.5,166.9h24.8l2.1,19.1l27,6.9l29.7-5.8l3.2-33.6H93.4
		l-3.5-24.1l59.6-25.6H88.9L85.5,79h127.7v24.3l-58.6,24.3h53.8l-6.5,77.6l-50.9,16.2l-53.1-14.8L94.5,166.9z"
            />
          </g>
        </svg>
        {/* <h3>CSS</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 300 300"
          className="icon-body"
        >
          <g>
            <path
              d="M75.9,145.8l0.2,0.2l6.4-2.1l-0.2-0.4c-2.5-6-8.1-9.7-14.7-9.7c-4.6,0-8.5,1.5-11.6,4.6c-3.1,3.1-4.6,6.9-4.6,11.4
		s1.5,8.3,4.6,11.4c3.1,3.1,7,4.6,11.6,4.6c6.6,0,12.2-3.7,14.7-9.7l0.2-0.4l-6.4-2.1l-0.2,0.2c-1.3,3.5-4.4,5.4-8.3,5.4
		c-2.7,0-4.8-1-6.6-2.7c-1.7-1.7-2.7-4.1-2.7-6.8s1-5,2.7-7c1.7-1.5,3.9-2.5,6.6-2.5v0C71.3,140.3,74.4,142.3,75.9,145.8z"
            />
            <path
              d="M145.3,138.6c-2.9-3.1-6.6-4.6-10.8-4.6s-7.7,1.5-10.4,4.4v-3.9h-6.8V177h6.8v-15.6c2.7,2.9,6.2,4.4,10.4,4.4
		s7.9-1.5,10.8-4.6c2.9-3.1,4.2-6.8,4.2-11.2S148.2,141.7,145.3,138.6L145.3,138.6z M139.9,156.8c-1.7,1.7-3.9,2.7-6.6,2.7
		c-2.7,0-4.8-1-6.6-2.7c-1.7-1.7-2.7-4.1-2.7-6.8s1-5,2.7-7c1.7-1.7,3.9-2.7,6.6-2.7c2.7,0,4.8,1,6.6,2.7c1.7,1.7,2.5,4.1,2.5,7
		C142.6,152.7,141.6,155,139.9,156.8z"
            />
            <path
              d="M160.5,138.4v-3.7h-6.8v30.5h6.8v-17.2c0-2.7,1.2-4.8,3.3-6.4c2.1-1.4,4.8-1.7,7.9-0.8l0.4,0.2v-6.6
		C167.7,133.4,163.4,134.9,160.5,138.4z"
            />
            <path
              d="M190.1,134.1L190.1,134.1c-4.5,0-8.3,1.6-11.4,4.7c-3.1,2.9-4.6,6.8-4.6,11.2s1.5,8.3,4.6,11.4c3.1,3.1,7,4.6,11.6,4.6
		c6.4,0,11.8-3.3,14.5-8.5l0.2-0.4l-5.8-2.5l-0.2,0.2c-1.7,3.3-4.8,5.2-8.5,5.2c-4.8,0-8.5-2.9-9.5-7.5h24.7v-0.4
		c0.6-5-0.8-9.3-3.9-12.8C199,135.9,194.9,134.1,190.1,134.1z M181.2,146.9c1.2-4.2,4.6-6.8,8.7-6.8s7.7,2.7,8.9,6.8H181.2z"
            />
            <path
              d="M223.9,147.1L223.9,147.1c-3.7-0.8-6.9-1.3-6.9-3.9c0-2.1,2.1-3.5,5.2-3.5c3.5,0,5.4,1.5,5.8,4.4v0.4l6.8-1.4v-0.4
		c-1-5.4-5.8-8.7-12.5-8.7c-3.5,0-6.4,1-8.7,2.7s-3.5,4.1-3.5,6.8c0,4.1,2.5,7,6.8,7.9c1.2,0.2,2.3,0.4,3.5,0.6
		c4.2,0.8,8.1,1.5,8.1,4.2c0,2.1-2.5,3.7-6.2,3.7s-5.8-1.5-6.2-4.4v-0.4l-6.8,1.4v0.4c1,5.4,5.8,8.7,13.1,8.7c3.7,0,6.8-1,9.3-2.7
		s3.9-4.1,3.9-6.8C235.3,149.2,229.1,148.1,223.9,147.1z"
            />
            <path
              d="M253.4,147.1L253.4,147.1c-3.7-0.8-6.9-1.3-6.9-3.9c0-2.1,2.1-3.5,5.2-3.5c3.5,0,5.4,1.5,5.8,4.4v0.4l6.8-1.4v-0.4
		c-1-5.4-5.8-8.7-12.5-8.7c-3.5,0-6.4,1-8.7,2.7s-3.5,4.1-3.5,6.8c0,4.1,2.5,7,6.8,7.9c1.2,0.2,2.3,0.4,3.5,0.6
		c4.2,0.8,8.1,1.5,8.1,4.2c0,2.1-2.5,3.7-6.2,3.7c-3.7,0-5.8-1.5-6.2-4.4v-0.4l-6.8,1.4v0.4c1,5.4,5.8,8.7,13.1,8.7
		c3.7,0,6.8-1,9.3-2.7s3.9-4.1,3.9-6.8C264.8,149.2,258.4,148.1,253.4,147.1z"
            />
            <path d="M81.5,103.6C81.5,103.6,81.5,103.7,81.5,103.6C81.5,103.7,81.5,103.7,81.5,103.6L81.5,103.6z" />
            <path
              d="M117,131.6l5.8-3.1c-8.1-15.3-23.9-24.9-41.3-24.9c-5.8,0-11.5,1.1-16.8,3.1v0c-0.2,0.1-0.4,0.2-0.5,0.2
		c-0.1,0.1-0.3,0.1-0.4,0.2v0C46.5,114.4,35,131.4,35,150c0,3.5,0.4,6.9,1.2,10.2h0c0.2,0.7,0.4,1.4,0.5,2c0,0,0,0.1,0,0.1
		c2.6,9.2,7.9,17.6,15.5,23.8c8.3,6.6,18.5,10.2,29.2,10.2h1.9c3.3-0.2,6.4-2.1,7.5-5.2l2.1-5l-0.2,0l21.1-51.3H107l-8.9,22.8
		l-9.1-22.8h-7.3l12.8,31.1l-8.1,18.9l0,0l-0.2,0.4l-1,2.3l0.1,0l-0.5,1.2c-0.4,0.8-1,1.4-1.7,1.4h-1.5c-18.5,0-35-13.1-39-31.1
		l-0.2,0c-0.7-2.9-1-5.9-1-8.9c0-16.1,10.1-30.7,24.9-36.9l0,0c4.8-2.1,10-3.1,15.3-3.1C96.4,110,110.1,118.3,117,131.6z"
            />
          </g>
        </svg>
        {/* <h3>Cypress</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 300 300"
          className="icon-body"
        >
          <path
            d="M90.6,118.4v48.8l6.3,0V144H112v-6.1H96.9v-13.3h19.7v-6.2C116.6,118.4,90.6,118.4,90.6,118.4z M127.9,128.3
	c2.3,0,4.1-1.8,4.1-4.1s-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1S125.7,128.3,127.9,128.3z M124.7,134.4v32.8h6.3v-32.8H124.7z"
          />
          <path
            class="st0"
            d="M154.3,133.5c-8.4,0-14.2,7.1-14.2,15.4s5.8,15.4,14.2,15.4c3.8,0,7-1.5,9.3-3.9v4.3c0,5.4-4.3,10-9.8,10
	c-2,0-4-0.8-5.6-1.9l-3.2,5.5c2.5,1.6,5.5,2.6,8.7,2.6c8.9,0,16.1-7.2,16.1-16.1v-30.4h-6.2v2.9C161.3,135,158.1,133.5,154.3,133.5
	L154.3,133.5z M146.4,148.9c0-5.2,4-9.3,8.6-9.3s8.6,4.1,8.6,9.3s-4,9.3-8.6,9.3S146.4,154.1,146.4,148.9L146.4,148.9z"
          />
          <path
            d="M192.5,139.6c-3.7,0-6.7,3.2-6.7,6.9v20.7h-6.3v-32.8h6.3v3c1.8-2.4,4.6-3.9,8.1-3.9c4.4,0,7.8,2.2,9.7,5.5
	c2.2-3.2,5.7-5.5,10-5.5c7.2,0,11.6,5.8,11.6,12.9v20.8H219v-20.7c0-3.7-3-6.9-6.7-6.9s-6.7,3.2-6.7,6.9v20.7h-6.3v-20.7
	C199.2,142.8,196.2,139.6,192.5,139.6z"
          />
          <path
            class="st0"
            d="M258.7,138.1c-2.8-2.9-6.6-4.7-11.1-4.7c-9.3,0-16,7.9-16,17.4s6.6,17.4,16,17.4c4.4,0,8.3-1.8,11.1-4.7v3.7
	h6.3v-32.8h-6.3V138.1L258.7,138.1z M238,150.8c0-6.2,4.8-11.2,10.4-11.2s10.4,4.9,10.4,11.2S254,162,248.4,162
	C242.8,162,238,157.1,238,150.8z"
          />
          <g>
            <path
              d="M66.7,139.5c-5.6,0-10.2,4.4-10.5,10v-9.9v0H66.7c5.8,0,10.6-4.7,10.6-10.6c0-5.8-4.7-10.6-10.6-10.6H56.1v0v0H45.6
		c-5.8,0-10.6,4.7-10.6,10.6c0,5.7,4.6,10.4,10.3,10.5C39.6,139.6,35,144.3,35,150c0,5.8,4.6,10.4,10.4,10.5
		c-5.7,0.1-10.4,4.8-10.4,10.5c0,5.8,4.7,10.6,10.6,10.6c5.8,0,10.6-4.7,10.6-10.6v-10.5v0v-9.9c0.3,5.5,4.9,10,10.5,10
		c5.8,0,10.6-4.7,10.6-10.6C77.2,144.2,72.5,139.5,66.7,139.5z"
            />
          </g>
        </svg>
        {/* <h3>Figma</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path
            class="cls-1"
            d="M150,35c-63.52,0-115,51.48-115,115s51.48,115,115,115,115-51.48,115-115-51.48-115-115-115ZM59.71,151.2l89.09,89.09c-48.93-.63-88.46-40.17-89.09-89.09h0ZM170.21,238.03l-108.25-108.25c9.18-40.14,45.11-70.09,88.03-70.09,30,0,56.59,14.64,73.01,37.16l-12.5,11.03c-13.32-19.1-35.46-31.6-60.51-31.6-31.9,0-59.06,20.26-69.33,48.61l94.44,94.43c22.94-8.31,40.57-27.66,46.48-51.64h-39.14v-17.68h57.87c0,42.93-29.96,78.85-70.1,88.03h0Z"
          />
        </svg>
        {/* <h3>Gatsby</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="230"
          height="96.07"
          viewBox="0 0 230 96.07"
        >
          <path d="M137.84,32.7c-5.04,0-8.8,2.48-8.8,8.44,0,4.49,2.48,7.61,8.53,7.61,5.13,0,8.61-3.02,8.61-7.79,0-5.41-3.12-8.25-8.34-8.25h0ZM127.76,74.78c-1.19,1.46-2.38,3.02-2.38,4.86,0,3.66,4.67,4.77,11.09,4.77,5.32,0,12.56-.37,12.56-5.32,0-2.94-3.48-3.12-7.89-3.4l-13.38-.91h0ZM154.89,32.98c1.65,2.11,3.39,5.04,3.39,9.26,0,10.17-7.97,16.13-19.52,16.13-2.94,0-5.59-.37-7.24-.82l-3.03,4.86,8.98.55c15.86,1.01,25.21,1.47,25.21,13.66,0,10.54-9.26,16.5-25.21,16.5s-22.92-4.22-22.92-11.46c0-4.12,1.83-6.32,5.04-9.35-3.03-1.28-4.03-3.57-4.03-6.05,0-2.02,1.01-3.85,2.66-5.59,1.65-1.74,3.48-3.48,5.68-5.5-4.49-2.2-7.88-6.97-7.88-13.75,0-10.54,6.97-17.78,20.99-17.78,3.94,0,6.33.36,8.44.92h17.88v7.79l-8.43.64h0ZM179.45,16.32c-5.23,0-8.25-3.03-8.25-8.25s3.02-8.06,8.25-8.06,8.34,2.84,8.34,8.06-3.02,8.25-8.34,8.25ZM167.63,71.4v-7.24l4.68-.64c1.28-.18,1.47-.46,1.47-1.84v-26.95c0-1.01-.27-1.65-1.19-1.92l-4.95-1.74,1.01-7.42h18.98v38.04c0,1.47.09,1.65,1.47,1.84l4.67.64v7.24h-26.13ZM230,67.85c-3.94,1.92-9.72,3.67-14.94,3.67-10.91,0-15.03-4.4-15.03-14.76v-24.01c0-.55,0-.92-.74-.92h-6.42v-8.16c8.07-.92,11.27-4.95,12.28-14.94h8.71v13.02c0,.64,0,.92.73.92h12.92v9.17h-13.66v21.91c0,5.41,1.28,7.51,6.23,7.51,2.57,0,5.23-.64,7.42-1.47l2.48,8.07" />
          <path d="M94.18,43.8L52.27,1.89c-2.41-2.41-6.33-2.41-8.74,0,0,0,0,0,0,0l-8.7,8.7,11.04,11.04c2.65-.9,5.58-.22,7.55,1.76,1.99,1.99,2.67,4.94,1.74,7.6l10.64,10.64c2.57-.89,5.54-.31,7.6,1.75,2.87,2.87,2.87,7.53,0,10.4,0,0,0,0,0,0-2.87,2.87-7.53,2.88-10.4,0-2.1-2.1-2.73-5.26-1.6-8.01l-9.92-9.92v26.11c.72.36,1.38.83,1.94,1.39,2.87,2.87,2.87,7.53,0,10.4,0,0,0,0,0,0-2.87,2.87-7.53,2.87-10.4,0-2.87-2.87-2.88-7.53,0-10.4.69-.69,1.51-1.24,2.41-1.61v-26.35c-.9-.37-1.72-.91-2.41-1.61-2.18-2.17-2.7-5.37-1.58-8.04l-10.88-10.88L1.81,43.6c-2.41,2.41-2.42,6.33,0,8.75,0,0,0,0,0,0l41.91,41.91c2.41,2.41,6.33,2.41,8.74,0l41.72-41.71c2.41-2.42,2.41-6.33,0-8.75" />
        </svg>
        {/* <h3>Git</h3> */}
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M49.25,35l16.87,206.21,84.64,23.79,82.15-23.79,17.84-205.8-201.51-.41ZM149.1,221.43l-52-14.52-3.46-40.11h25.31l1.52,19.64,28.63,8.3,28.21-7.61,3.45-32.92h-88.1l-7.05-77.17h127.65l-2.35,25.17h-97.5l2.63,26.42h92.52l-7.05,78.28-52.42,14.52Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="230"
          height="230"
          viewBox="0 0 230 230"
        >
          <path d="M0,0v230h230V0H0ZM121.23,196.99c-3.39,6.89-9.86,11.41-17.36,13.6-11.52,2.65-22.54,1.14-30.74-3.78-5.49-3.37-9.77-8.55-12.68-14.52,5.84-3.56,11.65-7.15,17.49-10.71.15.07.61.9,1.22,1.97,2.23,3.74,4.15,6.38,7.94,8.24,3.72,1.27,11.87,2.08,15.02-4.46,1.92-3.32,1.31-14.17,1.31-26,0-18.58.09-37.04.09-55.62h21.51c0,19.79.11,39.51,0,59.23.04,12.09,1.09,23.02-3.8,32.05ZM210.48,190.91c-7.48,25.58-49.17,26.41-65.83,9.51-3.52-3.98-5.73-6.06-7.83-10.65q8.85-5.09,17.47-10.08c4.68,7.19,9.01,11.15,16.79,12.77,10.56,1.29,21.19-2.34,18.8-13.56-2.45-9.16-21.62-11.39-34.67-21.19-13.25-8.9-16.35-30.52-5.47-42.87,3.63-4.57,9.82-7.98,16.31-9.62,2.25-.28,4.53-.59,6.78-.87,13.01-.26,21.14,3.17,27.11,9.84,1.66,1.68,3.02,3.5,5.55,7.43-6.93,4.42-6.91,4.37-16.83,10.8-2.12-4.57-5.64-7.43-9.36-8.68-5.77-1.75-13.05.15-14.56,6.25-.52,1.88-.42,3.63.42,6.73,2.34,5.33,10.19,7.65,17.23,10.89,20.27,8.22,27.11,17.03,28.79,27.53,1.62,9.03-.39,14.89-.7,15.76Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M57.39,148.22c0,3.09.8,6.13,2.34,8.81,2.07,3.62,5.34,6.4,9.24,7.87,1.94.72,4.03,1.12,6.22,1.12.41,0,.82-.02,1.22-.05,5.78-.39,10.81-3.56,13.76-8.17,1.78-2.77,2.81-6.05,2.81-9.58,0-9.81-7.98-17.8-17.8-17.8s-17.8,7.98-17.8,17.8Z" />
          <path d="M228.89,177.35c-14.84,0-27.13-11.1-29.03-25.43-6.11-.22-12.56-.22-18.64,0-1.9,14.33-14.19,25.43-29.03,25.43-1.47,0-2.93-.11-4.38-.33-4.77,7.53-10.58,14.58-17.33,20.95-10.45,9.86-22.23,17.16-35.01,21.72l-2.34.83-2.21-1.14c-16.17-8.31-23.88-25.89-18.98-42.06-2.6-.29-5.14-.93-7.57-1.9-.81,1.69-1.62,3.37-2.44,5.05-4.81,9.89-9.79,20.11-11.63,31.21-1.99,11.98-2.77,33.84,14.28,45.66,23.28,16.13,47.96,3.87,76.54-10.33,14.28-7.09,29.05-14.43,44.3-18.19,5.77-1.42,11.67-2.27,17.38-3.1,10.66-1.54,20.72-2.99,29.12-7.85,9.01-5.22,15.17-13.93,16.9-23.91h0c1.31-7.55.08-15.14-3.21-21.88-4.74,3.3-10.5,5.25-16.7,5.25Z" />
          <path d="M171.65,126.18c4.2,3.74,7.32,8.67,8.83,14.26,6.71-.25,13.42-.25,20.13,0,1.4-5.17,4.19-9.85,8.06-13.55l-18.6-37.94-18.42,37.24Z" />
          <path d="M142.54,163c2.87,1.86,6.22,2.85,9.64,2.85.61,0,1.21-.03,1.8-.09,7.59-.76,13.78-6.31,15.51-13.57.32-1.33.49-2.71.49-4.13,0-2.6-.57-5.17-1.68-7.53-.56-1.2-1.26-2.33-2.08-3.37-3.26-4.19-8.34-6.89-14.04-6.89-.9,0-1.78.07-2.64.2-8.56,1.28-15.15,8.68-15.15,17.6h0c0,6.26,3.25,11.77,8.15,14.94Z" />
          <path d="M214.16,138.1c-.66.97-1.23,2-1.68,3.09-.89,2.11-1.38,4.43-1.38,6.87,0,1.56.2,3.11.61,4.61,2.04,7.58,8.97,13.18,17.19,13.18,3.64,0,7.2-1.12,10.18-3.21,3.28-2.29,5.7-5.62,6.86-9.45.49-1.63.76-3.35.76-5.13h0c0-9.25-7.1-16.87-16.13-17.72-.55-.05-1.1-.08-1.67-.08-6.13,0-11.53,3.12-14.73,7.84Z" />
          <path d="M161.71,120.34l28.4-57.43,28.32,57.78c1.18-.45,2.4-.83,3.63-1.12l28.67-84.56h-121.4l28.58,84.32c1.28.25,2.55.6,3.79,1.02Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M187.9,126.83h40.06v7.39h-15.89v38.9h-7.95v-38.9h-16.22v-7.39ZM122.01,126.83v7.39h-32.11v11.9h25.82v7.39h-25.82v12.22h32.11v7.4h-40.06v-38.9h0v-7.39h40.06ZM142.01,126.85h-10.4l37.25,46.3h10.43l-18.63-23.13,18.6-23.13-10.4.02-13.4,16.65-13.45-16.7ZM152.69,159.92l-5.21-6.48-15.89,19.74h10.43l10.67-13.26h0Z" />
          <path d="M82.23,173.13l-37.3-46.31h-9.93v46.3h7.95v-36.4l29.3,36.42h9.98Z" />
          <path d="M229.75,172.85c-.56,0-1.1-.21-1.49-.6-.41-.4-.62-.89-.61-1.47,0-.56.2-1.04.61-1.45.39-.4.93-.61,1.49-.6.56,0,1.05.2,1.46.6.42.4.63.89.64,1.45,0,.37-.1.73-.3,1.04-.19.31-.45.57-.77.75-.31.19-.67.28-1.03.28ZM243.31,153.34h3.52v13.57c0,1.25-.27,2.31-.8,3.21-.53.9-1.27,1.58-2.22,2.06-.94.48-2.05.72-3.3.72-1.15,0-2.18-.21-3.09-.61-.92-.4-1.64-1.01-2.18-1.8-.54-.8-.8-1.79-.8-2.98h3.53c0,.52.12.97.35,1.35.22.37.55.67.94.86.4.2.87.3,1.39.3.57,0,1.05-.12,1.44-.36.39-.23.69-.58.9-1.05.2-.46.31-1.03.32-1.71v-13.57h0ZM261.32,158.65c-.09-.82-.46-1.46-1.12-1.92-.66-.46-1.52-.69-2.57-.69-.74,0-1.37.11-1.9.33-.53.22-.94.52-1.22.9-.28.38-.42.81-.43,1.29,0,.4.1.75.29,1.04.19.3.44.55.77.75.34.21.7.39,1.08.51.4.14.8.25,1.19.35l1.84.45c.73.17,1.45.4,2.14.69.66.27,1.29.64,1.85,1.09.54.43.98.98,1.29,1.59.32.62.48,1.35.48,2.19,0,1.13-.29,2.12-.88,2.98-.59.85-1.43,1.52-2.54,2.01-1.1.48-2.44.72-4.01.72s-2.84-.23-3.96-.7c-1.12-.46-1.99-1.14-2.62-2.03-.63-.89-.97-1.98-1.02-3.26h3.49c.05.67.26,1.23.63,1.68.37.45.86.77,1.45,1,.6.22,1.26.33,2,.33s1.45-.12,2.03-.34c.58-.23,1.04-.55,1.37-.96.33-.41.5-.89.51-1.44,0-.5-.16-.92-.45-1.25-.3-.33-.71-.6-1.23-.83-.6-.25-1.21-.45-1.84-.6l-2.23-.56c-1.61-.41-2.89-1.03-3.82-1.86-.94-.83-1.4-1.94-1.4-3.32,0-1.13.31-2.13.94-2.99.62-.85,1.48-1.52,2.56-1.99,1.09-.48,2.32-.71,3.68-.71s2.61.23,3.66.71c1.05.47,1.87,1.13,2.47,1.97.6.84.91,1.8.93,2.89h-3.41Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="230"
          height="64.95"
          viewBox="0 0 230 64.95"
        >
          <g>
            <path d="M211.58,23.05c-.56,0-1.1.12-1.59.39l-15.25,8.81c-.99.57-1.59,1.64-1.59,2.78v17.58c0,1.14.6,2.21,1.59,2.78l3.98,2.3c1.93.95,2.65.94,3.53.94,2.86,0,4.5-1.74,4.5-4.76v-17.35c0-.25-.21-.42-.45-.42h-1.91c-.24,0-.45.18-.45.42v17.35c0,1.34-1.39,2.69-3.66,1.55l-4.14-2.43c-.15-.08-.26-.22-.26-.39v-17.58c0-.17.11-.34.26-.42l15.22-8.77c.14-.08.31-.08.45,0l15.22,8.77c.14.09.26.25.26.42v17.58c0,.17-.08.34-.23.42l-15.25,8.77c-.13.08-.31.08-.45,0l-3.92-2.33c-.12-.07-.27-.07-.39,0-1.08.61-1.28.68-2.3,1.04-.25.09-.63.22.13.65l5.12,3.01c.48.28,1.03.42,1.59.42.56,0,1.1-.14,1.59-.42l15.25-8.77c.99-.57,1.59-1.64,1.59-2.78v-17.58c0-1.14-.6-2.21-1.59-2.78l-15.25-8.81c-.48-.27-1.03-.39-1.59-.39h0Z" />
            <path d="M215.66,35.61c-4.34,0-6.93,1.85-6.93,4.92,0,3.33,2.57,4.25,6.73,4.66,4.99.49,5.37,1.22,5.37,2.2,0,1.7-1.36,2.43-4.56,2.43-4.03,0-4.92-1.01-5.21-3.01-.04-.22-.2-.39-.42-.39h-1.97c-.24,0-.45.21-.45.45,0,2.57,1.4,5.6,8.06,5.6,4.83,0,7.61-1.89,7.61-5.21s-2.25-4.17-6.93-4.79c-4.73-.63-5.18-.93-5.18-2.04,0-.91.38-2.14,3.89-2.14,3.13,0,4.29.67,4.76,2.78.04.2.22.36.42.36h1.98c.12,0,.24-.07.32-.16.08-.09.14-.2.13-.32-.31-3.63-2.73-5.34-7.61-5.34h0Z" />
          </g>
          <path d="M121.93,0c-.17,0-.34.04-.49.13-.3.18-.48.5-.49.84v24.77c0,.24-.11.46-.32.58-.21.12-.47.12-.68,0l-4.05-2.33c-.6-.35-1.34-.35-1.94,0l-16.16,9.32c-.6.35-.97,1.02-.97,1.72v18.65c0,.7.37,1.33.97,1.68l16.16,9.32c.6.35,1.34.35,1.94,0l16.16-9.32c.6-.35.97-.99.97-1.68V7.19c0-.71-.38-1.37-1-1.72L122.41.1c-.15-.08-.32-.1-.49-.1h0ZM18,23.28c-.31.01-.6.07-.87.23L.97,32.83C.37,33.18,0,33.82,0,34.51l.03,25.03c0,.35.18.67.49.84.3.18.67.18.97,0l9.58-5.5c.61-.36,1-.99,1-1.68v-11.69c0-.7.37-1.34.97-1.68l4.08-2.36c.29-.17.63-.26.97-.26.33,0,.67.08.97.26l4.08,2.36c.6.35.97.99.97,1.68v11.69c0,.7.4,1.33,1,1.68l9.58,5.5c.3.18.67.18.97,0,.3-.17.49-.49.49-.84l.03-25.03c0-.7-.37-1.34-.97-1.68l-16.16-9.32c-.27-.16-.56-.21-.87-.23h-.19ZM163.18,23.5c-.34,0-.67.09-.97.26l-16.16,9.32c-.6.35-.97.99-.97,1.68v18.65c0,.7.4,1.34,1,1.68l16.03,9.13c.59.34,1.31.36,1.91.03l9.71-5.41c.31-.17.52-.49.52-.84,0-.35-.18-.67-.49-.84l-16.25-9.32c-.3-.17-.52-.53-.52-.87v-5.83c0-.35.22-.67.52-.84l5.05-2.91c.3-.17.67-.17.97,0l5.05,2.91c.3.17.49.49.49.84v4.6c0,.35.18.67.49.84.3.18.67.18.97,0l9.68-5.63c.6-.35.97-.99.97-1.68v-4.5c0-.7-.37-1.33-.97-1.68l-16.06-9.32c-.3-.17-.63-.26-.97-.26h0ZM114.87,37.43c.08,0,.18.02.26.06l5.54,3.21c.15.09.26.25.26.42v6.41c0,.17-.11.33-.26.42l-5.54,3.21c-.15.09-.34.09-.49,0l-5.54-3.21c-.15-.09-.26-.25-.26-.42v-6.41c0-.17.11-.33.26-.42l5.54-3.2c.07-.04.15-.06.23-.06h0s0,0,0,0Z" />
          <path d="M66.53,23.41c-.34,0-.67.09-.97.26l-16.16,9.29c-.6.35-.97,1.02-.97,1.72v18.65c0,.7.37,1.33.97,1.68l16.16,9.32c.6.35,1.34.35,1.94,0l16.16-9.32c.6-.35.97-.99.97-1.68v-18.65c0-.7-.37-1.37-.97-1.72l-16.16-9.29c-.3-.17-.63-.26-.97-.26h0ZM163.14,40.05c-.06,0-.14,0-.19.03l-3.11,1.81c-.12.07-.19.19-.19.32v3.56c0,.13.08.26.19.32l3.11,1.78c.12.07.24.07.36,0l3.11-1.78c.12-.07.19-.19.19-.32v-3.56c0-.13-.08-.26-.19-.32l-3.11-1.81c-.06-.03-.1-.03-.16-.03h0Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="230"
          height="119.73"
          viewBox="0 0 230 119.73"
        >
          <path d="M115,0C51.49,0,0,26.8,0,59.86s51.49,59.86,115,59.86,115-26.8,115-59.86S178.51,0,115,0ZM64.59,78.77h-14.18l-3.15,16.54h-14.97l12.6-63.8h29.14c12.6.79,18.9,7.09,18.9,18.12,0,18.9-14.97,29.93-28.36,29.14ZM123.89,43.32h-11.82l-7.09,35.45h-14.97l12.6-63.8h14.97l-3.15,16.54h14.18c12.6.79,17.33,7.09,15.75,14.97l-5.51,32.29h-15.75l5.51-29.14c.79-3.94.79-6.3-4.73-6.3ZM170.14,78.77h-14.18l-3.15,16.54h-14.97l12.6-63.8h29.14c12.6.79,18.9,7.09,18.9,18.12,0,18.9-14.97,29.93-28.36,29.14Z" />
          <path d="M67.74,43.32h-10.24l-3.94,23.63h0s9.45,0,9.45,0c7.09-.79,13.39-3.15,14.18-16.54,0-4.73-3.94-7.09-9.45-7.09Z" />
          <path d="M173.29,43.32h-10.24l-3.94,23.63h9.45c7.09-.79,13.39-3.15,14.18-16.54,0-4.73-3.94-7.09-9.45-7.09Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M265,150.02c0-15.24-19.08-29.68-48.33-38.63,6.75-29.82,3.75-53.54-9.47-61.13-3.05-1.78-6.61-2.63-10.5-2.63v10.45c2.16,0,3.89.42,5.34,1.22,6.38,3.66,9.14,17.58,6.99,35.49-.52,4.41-1.36,9.05-2.39,13.78-9.19-2.25-19.22-3.98-29.77-5.11-6.33-8.67-12.89-16.55-19.5-23.44,15.28-14.21,29.63-21.99,39.38-21.99v-10.45c-12.89,0-29.77,9.19-46.83,25.13-17.06-15.85-33.94-24.94-46.83-24.94v10.45c9.7,0,24.1,7.74,39.38,21.85-6.56,6.89-13.13,14.72-19.36,23.39-10.6,1.13-20.63,2.86-29.82,5.16-1.08-4.69-1.88-9.24-2.44-13.6-2.2-17.91.52-31.83,6.84-35.54,1.41-.84,3.23-1.22,5.39-1.22v-10.45c-3.94,0-7.5.84-10.6,2.63-13.17,7.59-16.13,31.27-9.33,60.99-29.16,9-48.15,23.39-48.15,38.58s19.08,29.68,48.33,38.63c-6.75,29.82-3.75,53.54,9.47,61.13,3.05,1.78,6.61,2.63,10.55,2.63,12.89,0,29.77-9.19,46.83-25.13,17.06,15.85,33.94,24.94,46.83,24.94,3.94,0,7.5-.84,10.6-2.63,13.17-7.59,16.13-31.27,9.33-60.99,29.07-8.95,48.05-23.39,48.05-38.58h0ZM203.96,118.75c-1.73,6.05-3.89,12.28-6.33,18.52-1.92-3.75-3.94-7.5-6.14-11.25-2.16-3.75-4.45-7.41-6.75-10.97,6.66.98,13.08,2.2,19.22,3.7h0ZM182.49,168.68c-3.66,6.33-7.41,12.33-11.3,17.91-6.99.61-14.06.94-21.19.94s-14.16-.33-21.1-.89c-3.89-5.58-7.69-11.53-11.35-17.81-3.56-6.14-6.8-12.38-9.75-18.66,2.91-6.28,6.19-12.56,9.7-18.71,3.66-6.33,7.41-12.33,11.3-17.91,6.99-.61,14.06-.94,21.19-.94s14.16.33,21.1.89c3.89,5.58,7.69,11.53,11.35,17.81,3.56,6.14,6.8,12.38,9.75,18.66-2.95,6.28-6.19,12.56-9.7,18.71h0ZM197.63,162.59c2.53,6.28,4.69,12.56,6.47,18.66-6.14,1.5-12.61,2.77-19.32,3.75,2.3-3.61,4.59-7.31,6.75-11.11,2.16-3.75,4.17-7.55,6.09-11.3h0ZM150.09,212.61c-4.36-4.5-8.72-9.52-13.03-15,4.22.19,8.53.33,12.89.33s8.77-.09,13.03-.33c-4.22,5.49-8.58,10.5-12.89,15ZM115.21,185c-6.66-.98-13.08-2.2-19.22-3.7,1.73-6.05,3.89-12.28,6.33-18.52,1.92,3.75,3.94,7.5,6.14,11.25s4.45,7.41,6.75,10.97ZM149.86,87.44c4.36,4.5,8.72,9.52,13.03,15-4.22-.19-8.53-.33-12.89-.33s-8.77.09-13.03.33c4.22-5.49,8.58-10.5,12.89-15ZM115.17,115.05c-2.3,3.61-4.59,7.31-6.75,11.11-2.16,3.75-4.17,7.5-6.09,11.25-2.53-6.28-4.69-12.56-6.47-18.66,6.14-1.45,12.61-2.72,19.32-3.7h0ZM72.74,173.75c-16.6-7.08-27.33-16.36-27.33-23.72s10.74-16.69,27.33-23.72c4.03-1.73,8.44-3.28,12.99-4.74,2.67,9.19,6.19,18.75,10.55,28.55-4.31,9.75-7.78,19.27-10.41,28.41-4.64-1.45-9.05-3.05-13.13-4.78h0ZM97.96,240.74c-6.38-3.66-9.14-17.58-6.99-35.49.52-4.41,1.36-9.05,2.39-13.78,9.19,2.25,19.22,3.98,29.77,5.11,6.33,8.67,12.89,16.55,19.5,23.44-15.28,14.21-29.63,21.99-39.38,21.99-2.11-.05-3.89-.47-5.3-1.27h0ZM209.16,205.02c2.2,17.91-.52,31.83-6.84,35.54-1.41.84-3.23,1.22-5.39,1.22-9.7,0-24.1-7.74-39.38-21.85,6.56-6.89,13.13-14.72,19.36-23.39,10.6-1.13,20.63-2.86,29.82-5.16,1.08,4.74,1.92,9.28,2.44,13.64ZM227.21,173.75c-4.03,1.73-8.44,3.28-12.99,4.74-2.67-9.19-6.19-18.75-10.55-28.55,4.31-9.75,7.78-19.27,10.41-28.41,4.64,1.45,9.05,3.05,13.17,4.78,16.6,7.08,27.33,16.36,27.33,23.72-.05,7.36-10.78,16.69-27.38,23.72h0Z" />
          <circle cx="149.95" cy="150.02" r="21.42" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M35,35v230h230V35H35ZM166.44,159.77h-29.9v85.1h-21.22v-85.1h-29.9v-9.37h0l.17.06v-9.43l40.25-.17c22.14,0,40.36.06,40.36.23.23.12.23,4.31.23,9.49v9.2ZM244.3,227.4c-3.68,9.6-12.65,16.1-25.47,18.23-4.02.69-13.23.58-17.54-.17-9.2-1.73-18-6.33-23.4-12.25-2.13-2.3-6.21-8.45-5.98-8.85l2.19-1.38,8.62-5,6.5-3.8,1.49,2.01c1.9,2.99,6.15,7.02,8.62,8.4,7.48,3.85,17.48,3.33,22.43-1.15,2.13-1.95,3.05-4.02,3.05-6.9,0-2.65-.4-3.85-1.73-5.87-1.84-2.53-5.52-4.6-15.87-9.2-11.9-5.06-16.96-8.28-21.68-13.23-2.7-2.99-5.18-7.65-6.33-11.5-.86-3.34-1.15-11.5-.35-14.78,2.47-11.5,11.16-19.55,23.58-21.85,4.02-.8,13.51-.46,17.48.57l-.11.11c5.86,1.38,10.35,4.02,14.37,8.22,2.13,2.3,5.29,6.32,5.52,7.36,0,.35-9.95,7.07-15.99,10.81-.23.17-1.15-.8-2.07-2.3-2.99-4.25-6.04-6.09-10.81-6.44-6.9-.46-11.5,3.16-11.5,9.2,0,1.84.35,2.88,1.03,4.37,1.55,3.16,4.43,5.06,13.34,8.97,16.45,7.07,23.57,11.73,27.89,18.4,4.89,7.47,5.98,19.2,2.7,28Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M236.2,39.84h-65.65l-20.76,36.1-21.21-36.1H17.53l132.36,228.31L282.24,39.84h-46.04ZM117.13,59.84l32.84,55.9,32.14-55.9h19.45l-51.72,89.65-52.15-89.65h19.44ZM52.24,59.84h22.32l75.36,129.55L224.66,59.84h22.87l-97.64,168.44L52.24,59.84Z" />
        </svg>
      </IconContainer>

      <IconContainer>
        <svg
          className="icon-body"
          id="Layer_1"
          data-name="Layer 1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
          <path d="M51.35,150c0,39.05,22.69,72.79,55.6,88.79L59.89,109.85c-5.64,12.63-8.55,26.31-8.54,40.15ZM216.59,145.02c0-12.19-4.38-20.63-8.14-27.21-5-8.13-9.69-15.01-9.69-23.13,0-9.07,6.88-17.51,16.57-17.51.44,0,.85.05,1.28.08-17.55-16.08-40.93-25.9-66.62-25.9-34.46,0-64.79,17.68-82.43,44.47,2.31.07,4.5.12,6.35.12,10.32,0,26.29-1.25,26.29-1.25,5.32-.31,5.95,7.5.63,8.13,0,0-5.34.63-11.29.94l35.93,106.86,21.59-64.75-15.37-42.11c-5.31-.31-10.34-.94-10.34-.94-5.32-.31-4.69-8.44.62-8.13,0,0,16.29,1.25,25.98,1.25,10.32,0,26.29-1.25,26.29-1.25,5.32-.31,5.95,7.5.63,8.13,0,0-5.36.63-11.29.94l35.65,106.05,9.84-32.88c4.26-13.64,7.51-23.45,7.51-31.89h0ZM151.73,158.63l-29.6,86.01c9.05,2.67,18.43,4.02,27.87,4.02,11.49,0,22.5-1.99,32.76-5.59-.27-.43-.51-.89-.7-1.36l-30.33-83.08h0ZM236.56,102.67c.42,3.14.66,6.52.66,10.14,0,10.01-1.87,21.26-7.5,35.33l-30.13,87.12c29.33-17.1,49.05-48.88,49.05-85.27,0-17.15-4.38-33.28-12.09-47.33h0ZM150,35c-63.41,0-115,51.59-115,114.99s51.59,115,115,115,115-51.58,115-115c0-63.41-51.6-114.99-115-114.99h0ZM150,259.73c-60.5,0-109.73-49.22-109.73-109.73s49.22-109.72,109.73-109.72,109.72,49.22,109.72,109.72-49.22,109.73-109.72,109.73Z" />
        </svg>
      </IconContainer>
    </Carousel>
  )
}