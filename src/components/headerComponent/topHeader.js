import React from "react"
import { Link } from "gatsby"

import Typography from "@material-ui/core/Typography"

import LogoImage from "../../assets/img/logo-co2tal-constructions.png"
import { Logo, TopHeaderBlock, HeaderInfo } from "./headerStyles"
import LocalPhoneSharpIcon from "@material-ui/icons/LocalPhoneSharp"

const TopHeader = ({ siteName }) => {


  return (
    <TopHeaderBlock>
      <Logo>
        <Link to="/">
          <img src={LogoImage} alt=""/>
          {/*{siteName}*/}
        </Link>
      </Logo>
      <HeaderInfo>
        <span>
          <LocalPhoneSharpIcon className="header--icon"/>
          Contact Us
        </span>
        <a href="tel:+4552794567">
          <h3> +4552794567</h3>
        </a>
      </HeaderInfo>


      {/*<Typography variant="title">{siteName}</Typography>*/}


    </TopHeaderBlock>
  )
}

export default TopHeader