import styled from "styled-components"
import { LogoItem } from "./LogoItem"
import React from "react"

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
`

export const LogoContainer = () => {
  return (
    <>
      <LogoItem url={"src/images/logo-icon-alt.png"} />
    </>
  )
}
