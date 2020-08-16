import React from "react"

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from "../../assets/img/inner-banner.jpg"



const SliderViewBlock = ({props}) => {
  return (


      <Carousel
        plugins={[
          'clickToChange',
          'centered',
          {
            // resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5
            }
          },
        ]}
      >
        <img src={imageOne} />
        <img src={imageOne} />
        <img src={imageOne} />
      </Carousel>


  )

}


export default SliderViewBlock
