import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../styles/layoutStyles"
import ContactPageContent from "../components/subpageComponent/contactPageContent"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Container>
      <Link to="/">Go back to the homepage</Link>
      <ContactPageContent/>
    </Container>
  </Layout>
)

export default ContactPage
