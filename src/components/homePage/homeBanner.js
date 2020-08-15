import React from "react"
import Grid from '@material-ui/core/Grid';
import { HomeBannerSection,HomeBannerWrap } from "./homeStyles"
import Background from '../../assets/img/inner-banner.jpg';

const HomeBanner = () => {


  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`,
  };

  return (
    <HomeBannerSection>
      <HomeBannerWrap style={sectionStyle}>
        <Grid container alignItems="center" className="bannerContentWrap paddingWrapper">
             <Grid item sm={8}>
            <h5> Provide You The Best</h5>
            <h2>Climate Solutions in Construction</h2>  </Grid>
        </Grid>
      </HomeBannerWrap>
</HomeBannerSection>

  )

}


export default HomeBanner
