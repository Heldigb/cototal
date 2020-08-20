import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Container } from "../homePage/homeStyles"

// MATERIAL UI
import { makeStyles,useTheme } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

// MEDIA QUERY
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"



import LogoImage from "../../assets/img/logo-co2tal-constructions.png"

import { LogoFooter, FooterInfo } from "./footerStyles"
//ICONS
import Avatar from '@material-ui/core/Avatar';
import RoomIcon from '@material-ui/icons/Room'
import EmailIcon from '@material-ui/icons/Email'
import LocalPhoneSharpIcon from "@material-ui/icons/LocalPhoneSharp"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import HomeIcon from "@material-ui/icons/Home"
import FormatPaintIcon from "@material-ui/icons/FormatPaint"
import InfoIcon from "@material-ui/icons/Info"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import Divider from '@material-ui/core/Divider';
import FolderIcon from "@material-ui/icons/Folder"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    // maxWidth: 752,
  },
  title: {
    color: "#7c7c7c"
  },
  green: {
    color: '#fff',
  },
  gap:{
    marginBottom: "30px"
  }
}))

const FooterBlock = () => {

  const classes = useStyles()
  const [dense, setDense] = React.useState(true)
  const [secondary, setSecondary] = React.useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQueryFooter {
      site {
        siteMetadata {
          title,phone,email,
        }
      }
    }
  `)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isMobileXs = useMediaQuery(theme.breakpoints.down("xs"))
  // const matches = useMediaQuery('(sm)');

  // console.log(" CHECK QUERIES",isMobile)
  // console.log(" CHECK QUERIES XS",isMobileXs)
  return (
    <footer>
      <Container gap bgColorGray>

        <Grid container spacing={2}>
          <Grid item sm={12} md={3}>

            <LogoFooter>
              <Link  to="/">
                <img src={LogoImage} alt={data.site.siteMetadata.title}/>
              </Link>
            </LogoFooter>
            {/*siteTitle={data.site.siteMetadata.title}*/}
            <strong> Provide You The Best<br/></strong>
            Climate Solutions in Construction
            <br/>
            <small>
              © {new Date().getFullYear()}, {data.site.siteMetadata.title}
              {` `}
            </small>
          </Grid>

          {/*/!*   Information   *!/*/}
          <Grid item xs={12} sm={12}  md={4} lg={3}>
            {/*{isMobileXs ? ( <Divider light className={classes.gap} />)  : '' }*/}
            {isMobile ? ( <Divider light className={classes.gap} />)  : '' }
            <Typography variant="h6" className={classes.title}>
              Information
            </Typography>
            <div>
              <List dense={dense}>

                <ListItem>
                  <ListItemIcon>
                    <RoomIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Vejle, 3944"
                    secondary="Stationvej 39-a"
                  />
                </ListItem>


                <ListItem>
                  <ListItemIcon>
                    <AccountBalanceIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="CPR:"
                    secondary="544458778"
                  />
                </ListItem>


                {/*<ListItem>*/}
                {/*  <ListItemIcon>*/}
                {/*    <FolderIcon/>*/}
                {/*  </ListItemIcon>*/}
                {/*  <ListItemText*/}
                {/*    primary="Single-line item"*/}
                {/*    secondary={secondary ? "Secondary text" : null}*/}
                {/*  />*/}
                {/*</ListItem>*/}

              </List>
            </div>
          </Grid>
          {/* MENU*/}
          <Grid item xs={12} sm={6} md={3} >
            {isMobileXs ? ( <Divider light className={classes.gap} />)  : '' }
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
            <div>
              <List dense={dense}>

                <ListItem>
                  <Link className="link--color flex-row" to="/">
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                  />
                  </Link>
                </ListItem>


                <ListItem>
                  <Link className="link--color flex-row" to="/service">
                  <ListItemIcon>
                    <FormatPaintIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Services"
                  />
                  </Link>
                </ListItem>


                <ListItem>
                  <Link className="link--color flex-row" to="/about">
                  <ListItemIcon>
                    <InfoIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="About"
                  />
                </Link>
                </ListItem>
                <ListItem>
                  <Link className="link--color flex-row" to="/contact">
                    <ListItemIcon>

                      <ContactPhoneIcon/>

                    </ListItemIcon>
                    <ListItemText
                      primary="Contact"
                    />
                  </Link>
                </ListItem>

              </List>
            </div>
          </Grid>
          {/*   SERVICES   */}

          <Grid item xs={12} sm={6} md={3} >
            {isMobileXs ? ( <Divider light className={classes.gap} />)  : '' }
            <Typography variant="h6" className={classes.title}>
              Services
            </Typography>
            <div >
              <List dense={dense}>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"

                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
              </List>
            </div>
          </Grid>



          <Grid item xs={12}>

            <Divider light className={classes.gap}/>
            <FooterInfo>
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                <Avatar><LocalPhoneSharpIcon/></Avatar>
                <span> {data.site.siteMetadata.phone}</span>
              </a>
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                <Avatar><EmailIcon/></Avatar>
                <span>{data.site.siteMetadata.email}</span>
              </a>
            </FooterInfo>
          </Grid>

        </Grid>


      </Container>
    </footer>
  )

}
export default FooterBlock
