/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Main = styled.div`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery query={`${data}`} />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

export const data = graphql`
  query site {
    site {
      siteMetadata {
        title
        description
        author
      }
      children {
        id
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
