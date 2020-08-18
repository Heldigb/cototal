import React from "react"
import { Container,ServiceWrap } from "./homeStyles"
import MyCarousel from "../sliderComponent/SliderCarousel"
import SectionTitle from "./sectionTitle"
import SingleLineGridList from "../sliderComponent/MaterialSlider"

const HomeService = ({ props }) => {

  const SectionName = "Service"
  return (


    <Container heightFull gap bgColorGray>

      <SectionTitle SectionName={SectionName}/>
<ServiceWrap>
      {/*<MyCarousel/>*/}
      <SingleLineGridList/>
</ServiceWrap>
    </Container>
  )

}


export default HomeService
