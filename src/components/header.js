import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: #313440;
  color: white;
  margin: 0 auto;
  padding: 1% 0.5% ;
  display: flex;
  justify-content: left;

  h1{
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }
`

const Header = () => (
    <HeaderWrapper>
        <h1>Plants-R-Us</h1>
    </HeaderWrapper>
)

export default Header