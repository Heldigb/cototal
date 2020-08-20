/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/globalStyles"
import Header from "./header"
import {ThemeProvider } from "styled-components"
import FooterBlock from "./footer/FooterSection"
// import "./layout.css"

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

  const styleVars = {
    background: "#ecebeb",
    bgDarkerGray: "#f2f2f2",
    text: "#1d1d1d",
    secondary: "#7c7c7c",
    darkGreyText: "#373434",
    accent: "#03306b",
    bg: "#e1e1e1",
  }


  return (
    <ThemeProvider theme={styleVars}>
      <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata.title} />


        <main>{children}</main>

      <FooterBlock/>

    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
