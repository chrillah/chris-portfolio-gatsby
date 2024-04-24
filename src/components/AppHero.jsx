import React from "react"
import styled from "styled-components"
import { theme } from "../themes/theme"

export const HeroWrapper = styled.div`
  border: ${theme.appStrokeWidth} ${theme.appColor} solid;
  display: grid;
  min-height: 80vh;
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
`

export const AppHero = ({ title, topLeft, topRight }) => {
  return (
    <HeroWrapper>
      <TopContainer>
        <p>{topLeft}</p>
        <h3>{topRight}</h3>
      </TopContainer>
      <HeroTitle>{title}</HeroTitle>
    </HeroWrapper>
  )
}
