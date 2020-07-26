import React from "react"
import styled from "styled-components"
import { H0 } from "@bigcommerce/big-design"

const HeaderWrapper = styled.header`
  background-color: #313440;
  color: white;
  margin: 0 auto;
  padding: 1% 0.5%;
  display: flex;
  justify-content: left;
`

const Header = () => (
  <HeaderWrapper>
    <H0 color="white"> Plants-R-Us </H0>
  </HeaderWrapper>
)

export default Header
