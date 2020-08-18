import React from "react"
import SectionTitle from "./sectionTitle"
import { Container} from "./homeStyles"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import imageOne from "../../assets/img/inner-banner.jpg"
const SectionName = "Offers"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

});

const HomeOffers = () => {


  const classes = useStyles();
  return (
    <div>
      <Container  gap>
        <SectionTitle SectionName={SectionName}/>
        <Grid container alignItems="center" className="bannerContentWrap " >

          <Grid item sm={6}>
            <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageOne}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
              </Card>
             </Grid>



          <Grid item sm={6}>

            <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageOne}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
           </Grid>


          </Grid>
      </Container>
    </div>
  )

}


export default HomeOffers

