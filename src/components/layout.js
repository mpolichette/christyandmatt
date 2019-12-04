/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import backgroundImage from "../images/Background.jpg"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1800px;

  padding-bottom: 330px;
  background-image: url(${backgroundImage}), linear-gradient(#d6d5d1, #f1ede7);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
