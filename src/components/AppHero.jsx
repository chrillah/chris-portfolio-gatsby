import React from "react"
import styled from "styled-components"
import { theme } from "../themes/theme"

export const HeroWrapper = styled.div`
  padding-top: ${theme.appPad};
  padding-bottom: ${theme.appPad};
`

export const HeroContainer = styled.div`
  border: ${theme.appStrokeWidth} ${theme.appColor} solid;
  display: grid;
  height: 80vh;
  max-height: 600px;
  padding: ${theme.appPad};
`

export const HeroTitle = styled.h1`
  margin-top: auto;
  padding-bottom: calc(${theme.appPad} * 2);
  font-size: 3rem;
  line-height: 3.5rem;
  word-wrap: break-word;

  @media (min-width: 512px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
    line-height: 6.5rem;
  }

  @media (min-width: 1210px) {
    font-size: 8rem;
    line-height: 6.5rem;
  }
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-align: right;
  }
`

export const AppHero = ({ title, topLeft, topRight }) => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <TopContainer>
          <h3>{topLeft}</h3>
          <p>{topRight}</p>
        </TopContainer>
        <HeroTitle>{title}</HeroTitle>
      </HeroContainer>
    </HeroWrapper>
  )
}
