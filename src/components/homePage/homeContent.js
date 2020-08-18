import React from "react"
import Grid from "@material-ui/core/Grid"
import {VideoContentSection,VideoWrap} from "./homeStyles"
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import HomeIcon from "@material-ui/icons/Home"
// import ReactWebMediaPlayer from 'react-web-media-player';

import ReactPlayer from 'react-player'

// Render a YouTube video player
import VideoItem from "../../assets/video/video5.mp4"
import VideoItemThumb from "../../assets/img/img2.jpg"
import VideoItemLogo from "../../assets/img/logo-co2tal-constructions.png"

const HomeContent = () => {
  return (
    <VideoContentSection>
        <Grid container alignItems="center" className="bannerContentWrap paddingWrapper">
            <Grid item sm={6} md={7}  lg={8}>
              <VideoWrap>

                <ReactPlayer url={VideoItem}
                             width="100%"
                             height="100%"
                             controls={true} />
                {/*<ReactWebMediaPlayer*/}
                {/*  title="My own video player"*/}
                {/*  video={VideoItem}*/}
                {/*  thumbnail={VideoItemThumb}*/}
                {/*  logo={{ img: { VideoItemLogo }, href:'https://the-redirection-link.com'}}*/}
                {/*/>*/}

              </VideoWrap>
            </Grid>
            <Grid item sm={6} md={5}  lg={4} className="content--cta">
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro?</h4>
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
