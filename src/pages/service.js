import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../styles/layoutStyles"
import ServicePageContent from "../components/subpageComponent/servicePageContent"

const ServicePage = () => (
  <Layout>
    <SEO title="Service Page" />




    <Container>
      <Link to="/">Go back to the homepage</Link>
      <ServicePageContent/>
    </Container>

  </Layout>
)

export default ServicePage
