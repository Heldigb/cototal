import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomeBanner from "../components/homePage/homeBanner"
import HomeContent from "../components/homePage/homeContent"
import HomeService from "../components/homePage/homeService"
import HomeOffers from "../components/homePage/homeOffers"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>

    <HomeBanner/>
    <HomeContent/>
    <HomeService/>
    <HomeOffers/>

    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}

  </Layout>
)

export default IndexPage
