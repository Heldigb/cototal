import React from "react"
import Grid from "@material-ui/core/Grid"
import {VideoContentSection,VideoWrap} from "./homeStyles"
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import HomeIcon from "@material-ui/icons/Home"
const HomeContent = () => {
  return (
    <VideoContentSection>
        <Grid container alignItems="center" className="bannerContentWrap paddingWrapper">
            <Grid item sm={8}>
              <VideoWrap>
              <video
                height='100%'
                width='100%'
                loop
                autoPlay
                src={require("../../assets/video/video5.mp4")}
              />
              </VideoWrap>
            </Grid>
            <Grid item sm={4} className="content--cta">
                <h4> Provide You The Best Provide You The Best</h4>
                <p>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Architecto earum labore magni,
                  modi praesentium vel.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Architecto earum labore magni,
                  modi praesentium vel.</p>

              <Button size="small" variant="text" endIcon={<ArrowRightAltIcon/>}>Read More</Button>
            </Grid>
        </Grid>
      </VideoContentSection>
  )

}


export default HomeContent
