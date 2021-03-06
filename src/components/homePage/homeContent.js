import React from "react"
import {Link} from "gatsby"
import Grid from "@material-ui/core/Grid"
import { Container, VideoContentSection, VideoWrap } from "./homeStyles"
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import HomeIcon from "@material-ui/icons/Home"
// import ReactWebMediaPlayer from 'react-web-media-player';
import {CustomDivider} from "../../styles/layoutStyles"
import ReactPlayer from 'react-player'

// Render a YouTube video player
import VideoItem from "../../assets/video/video5.mp4"
import VideoItemThumb from "../../assets/img/img2.jpg"
import VideoItemLogo from "../../assets/img/logo-co2tal-constructions.png"

const HomeContent = () => {
  return (
    <VideoContentSection  bgColorGray>
        <Grid container alignItems="center" className="bannerContentWrap paddingWrapper">
            <Grid item sm={6} md={7}  lg={8}>
              <VideoWrap>

                <ReactPlayer url={VideoItem}
                             width="100%"
                             height="100%"
                             controls={true} />


              </VideoWrap>
            </Grid>
            <Grid item sm={6} md={5}  lg={4} className="content--cta">
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro?</h4>
              <CustomDivider/>
                <p>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Architecto earum labore magni,
                  modi praesentium vel.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Architecto earum labore magni,
                  modi praesentium vel.</p>

           <Link to="/about">   <Button size="small" variant="text" endIcon={<ArrowRightAltIcon/>}>Read More</Button></Link>
            </Grid>
        </Grid>
      </VideoContentSection>
  )

}


export default HomeContent
