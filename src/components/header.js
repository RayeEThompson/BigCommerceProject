import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: #313440;
  color: white;
  margin: 0 auto;
  padding: 0.5% 0.5%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    margin: 1.5% 1%;
    font-family: "Epilogue", sans-serif;
    font-size: 275%;
    font-weight: 400;
    a {
      text-decoration: none;
      color: white;
    }
  }

  div {
    font-family: "Epilogue", sans-serif;
    font-size: 150%;
    font-weight: 800;
    ul {
      margin: 3% auto;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: right;
      text-align: center;
      li {
        padding: 0% 2%;
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
        <a href={`https://rayeethompsonblog.netlify.app/`}>Blog</a>
        </li>
        <li>
          <a href={`https://rachaels-store.mybigcommerce.com/cart.php`}>Cart</a>
        </li>
      </ul>
    </div>
  </HeaderWrapper>
)

export default Header
