import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../themes/theme"
import React from "react"

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
    transform: scaleY(1.05);
  }

  &:active {
    transform: scaleY(0.95);
  }
`
export const LinkButton = styled(Link)`
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
    transform: scaleY(1.05);
  }

  &:active {
    transform: scaleY(0.95);
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
      <LinkButton onClick={onClick} to={url} tabIndex={0}>
        {title}
      </LinkButton>
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
      <LinkButton onClick={onClick} to={url} tabIndex={0}>
        {title}
      </LinkButton>
    )
  }
}
