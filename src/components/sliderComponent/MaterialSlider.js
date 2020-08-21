import React from "react"

import {Link} from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import StarBorderIcon from "@material-ui/icons/StarBorder"
// import tileData from './tileData';

import imageOne from "../../assets/img/img1.jpg"
import imageTwo from "../../assets/img/img2.jpg"
import imageThree from "../../assets/img/img3.jpg"
import imageFour from "../../assets/img/img4.jpg"
import imageFive from "../../assets/img/img5.png"


import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Carousel from "react-elastic-carousel"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,

  },
  tile:{
    width: "100%",
    height: 350,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "#fff"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },

}))

const tileData = [
  {
    img: imageOne,
    title: "image",
    author: "author"
  },
  {
    img: imageTwo,
    title: "imageTwo",
    author: "author1"
  },
  {
    img: imageThree,
    title: "Image2",
    author: "author2"
  },
  {
    img: imageFour,
    title: "Image2",
    author: "author2"
  },
  {
    img: imageFive,
    title: "Image2",
    author: "author2"
  },
  {
    img: imageOne,
    title: "Image2",
    author: "author2"
  },
]

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile,index) => (
          <GridListTile style={{height: 350}}  key={tile.img+index}>



            <img src={tile.img} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title}/>
                </IconButton>
              }
            />



          </GridListTile>
        ))}


        <GridListTile key="5">
        <Card>
          <CardActionArea>
            <Link to="/about">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              image={imageOne}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography  variant="h6" component="p">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            </Link>
          </CardActionArea>
          {/*<CardActions>*/}
          {/*  <Button size="small" color="primary">*/}
          {/*    Share*/}
          {/*  </Button>*/}
          {/*  <Button size="small" color="primary">*/}
          {/*    Learn More*/}
          {/*  </Button>*/}
          {/*</CardActions>*/}
        </Card>


      </GridListTile>
      </GridList>
    </div>
  )
}