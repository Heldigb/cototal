import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"


import Nav from "./headerComponent/Nav"

const Header = ({ siteTitle }) => {

// const Header = () => {


  return (

    <header>
      <Nav siteName={siteTitle}></Nav>
    </header>
  )


}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
