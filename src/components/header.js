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
  h4 {
    font-family: 'Epilogue', sans-serif;
    font-weight: 200;
    margin: 18px 10px;
  }
`

const Header = () => (
    <HeaderWrapper>
        <h1>Potted</h1>
        <h4>...just plants in really nice pots</h4>
    </HeaderWrapper>
)

export default Header