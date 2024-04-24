import styled from "styled-components"
import React from "react"
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
`

export const Img = styled.img`
  width: 300px;
  height: 300px;
`
export const LogoItem = ({ url }) => {
  console.log(url)
  return (
    <ItemContainer>
      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
        <g>
          <path
            className="icon-body"
            d="M239.3,195.1l15.5-123.4L144.9,34.3l-107,38.1h0l16.4,141.6l90.6,50.3v0l0,0l0,0l5.6-3.1l86.4-47.8L239.3,195.1z
		 M116.7,175.6L103.3,209l-24.9,0.4l66.7-148.3L215,209.9l-23.8-0.4l-14.7-33.9H116.7z"
          />
          <polygon
            className="icon-body"
            points="145.2,108.6 125.4,155.7 167.8,155.7 145.2,108.6 	"
          />
        </g>
      </svg>
    </ItemContainer>
  )
}
