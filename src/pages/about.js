import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutPageContent from "../components/subpageComponent/aboutPageContent"

//style

import {Container} from "../styles/layoutStyles"

const AboutPage = () => (
  <Layout>

    <SEO title="About Page" />


    <Container>
        <Link to="/">Go back to the homepage</Link>
        <AboutPageContent/>
    </Container>


  </Layout>
)

export default AboutPage
