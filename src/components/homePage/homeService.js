import React from "react"


import SliderViewBlock from "../sliderComponent/SliderView"
import {Container} from "./homeStyles"


// import Slider from "../sliderComponent/SliderView"
const HomeService = ({props}) => {
  return (


    <Container gap bgColorGray>
     {/*Top Header */}

     <h2>Services</h2>
      <SliderViewBlock/>

    </Container>
  )

}


export default HomeService
