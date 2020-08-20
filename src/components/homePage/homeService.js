import React from "react"
import { Container, ServiceWrap } from "./homeStyles"
import SectionTitle from "./sectionTitle"
import SingleLineGridList from "../sliderComponent/MaterialSlider"

const HomeService = ({ props }) => {

  const SectionName = "Service"
  return (


    <Container heightFull gap>

      <SectionTitle SectionName={SectionName}/>
          <ServiceWrap>
                <SingleLineGridList/>
          </ServiceWrap>
    </Container>
  )

}


export default HomeService
