import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import { Container } from "../../styles/layoutStyles"
import {SubPageWrap} from "./subpageStyles"


const ContactPageContent = () => {

  return (
<SubPageWrap>


    <Grid container alignItems="top" className="bannerContentWrap">
      <Grid item sm={12} md={7}>
        <h1>Hi from the Contact page</h1>
        <h4>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Porro?</h4>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.</p>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.</p>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Architecto earum labore magni,
          modi praesentium vel.</p>
      </Grid>
      {/*<Grid item sm={6} md={5}>*/}
      {/*  <p>Lorem ipsum dolor sit amet,*/}
      {/*    consectetur adipisicing elit.*/}
      {/*    Architecto earum labore magni,*/}
      {/*    modi praesentium vel.Lorem ipsum dolor sit amet,*/}
      {/*    consectetur adipisicing elit.*/}
      {/*    Architecto earum labore magni,*/}
      {/*    modi praesentium vel.</p>*/}
      {/*</Grid>*/}
    </Grid>
  </SubPageWrap>
  )
}

export default ContactPageContent