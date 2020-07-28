import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: #313440;
  padding-bottom: -15px;
  margin-bottom: -15px;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    margin: 15px 3px;
    padding-left: 20px;
    font-family: "Epilogue", sans-serif;
    font-size: 2em;
    font-weight: 400;
    a {
      text-decoration: none;
      color: white;
    }
  }

  div {
    font-family: "Epilogue", sans-serif;
    font-size: 1em;
    font-weight: 800;
    display: grid;
    grid-template-columns: 1fr;
    text-align: right;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      list-style-type: none;
      li {
        padding-top: 20px;
        padding-right: 30px;
        a {
          text-decoration: none;
          color: white;

          &:hover {
            color: #3c64f4;
          }
        }
      }
    }
  }
`

const Header = (data) => (
  <HeaderWrapper>
    <h1 color="white">
      <Link to={`/`}>Plants-R-Us</Link>
    </h1>
    <div>
      <ul>
        <li>
          <Link to={`/`}>Products</Link>
        </li>
        <li>
          <a href={`https://rachaels-store.mybigcommerce.com/cart.php`}>Cart</a>
        </li>
      </ul>
    </div>
  </HeaderWrapper>
)

export default Header
