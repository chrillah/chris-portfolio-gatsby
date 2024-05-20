import { Link } from "gatsby"
import { theme } from "../../themes/theme"
import React from "react"
import styled from "styled-components"

export const Button = styled.div``

export const BigButton = styled.button`
  border: ${theme.appStrokeWidth} ${theme.appColor} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in-out 150ms;
  border-radius: 100px;
  background-color: ${theme.appBg};
  max-height: 150px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scaleY(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
    transform: scaleY(0.95);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0px,
      rgba(10, 37, 64, 0.35) 0px 0px 0px 0px inset;
  }
`
export const LinkButton1 = styled(Link)`
  border: ${theme.appStrokeWidth} ${theme.appColor} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in-out 150ms;
  border-radius: 100px;
  background-color: ${theme.appBg};

  &:hover {
    transform: scaleY(1.05);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  &:active {
    transform: scaleY(0.95);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0px,
      rgba(10, 37, 64, 0.35) 0px 0px 0px 0px inset;
  }
`
export const LinkButton2 = styled(Link)`
  border: ${theme.appStrokeWidth} ${theme.appColor} solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in-out 150ms;
  border-radius: 100px;

  height: 80px;

  margin-inline: ${theme.appGap};

  @media (min-width: 425px) {
    height: 120px;
  }

  &:hover {
    transform: scaleY(1.05);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  &:active {
    transform: scaleY(0.95);
    background: rgba(255, 255, 255, 0.3);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0px,
      rgba(10, 37, 64, 0.35) 0px 0px 0px 0px inset;
  }
`

export const BackButton = styled.button`
  position: relative;
  display: grid;
  grid-template-columns: 30px auto;
  gap: ${theme.appGap};
  height: 30px;
  transition: transform ease-in-out 150ms;
  cursor: pointer;

  padding-top: calc(${theme.appPad} * 2);
  max-width: 100px;

  p {
    padding-top: 2px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const AppButton = ({
  url,
  title,
  onClick,
  onKeyDown,
  nav,
  link,
  backLink,
  backButton,
  search,
}) => {
  if (nav) {
    return (
      <LinkButton1 onClick={onClick} to={url} tabIndex={0}>
        {title}
      </LinkButton1>
    )
  }
  if (link) {
    return <></>
  }

  if (backLink) {
    return <></>
  }

  if (search) {
    return (
      <BigButton onClick={onClick} onKeyDown={onKeyDown}>
        <svg
          className="search-icon"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <line
            className="search-icon-detail"
            x1="29.04"
            y1="29.32"
            x2="19.68"
            y2="19.96"
          />
          <circle
            className="search-icon-detail"
            cx="11.43"
            cy="11.43"
            r="10.43"
          />
          <path
            className="search-icon-detail"
            d="M11.43,19.48c4.45,0,8.05-3.6,8.05-8.05S15.88,3.38,11.43,3.38"
          />
        </svg>
      </BigButton>
    )
  }

  if (backButton) {
    return (
      <BackButton onClick={onClick} onKeyDown={onKeyDown} tabIndex={0}>
        <svg
          className="arrow rev"
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
        <p>{title}</p>
      </BackButton>
    )
  } else {
    return (
      <LinkButton2 onClick={onClick} to={url} tabIndex={0}>
        {title}
      </LinkButton2>
    )
  }
}
