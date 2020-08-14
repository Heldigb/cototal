import React from "react"
import { Link } from "gatsby"
import { NavigationBar, NavBarList,MobileMenu } from "./headerStyles"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import FormatPaintIcon from "@material-ui/icons/FormatPaint"
import InfoIcon from "@material-ui/icons/Info"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"

import ListItemIcon from '@material-ui/core/ListItemIcon';

const Nav = () => {


  const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1
    },

    button: {
      margin: theme.spacing(1),
      marginLeft: 0,

    },
    menuButton: {
      marginRight: 0
    },
    title: {
      flexGrow: 1
    }
  }))


  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <NavigationBar>

      <AppBar color="default" position="static">
        <Toolbar className="layoutGutter" disableGutters={true}>

          <NavBarList className={classes.title}>
            <Link  activeClassName="active" to="/"><Button color="primary" className={classes.button} startIcon={<HomeIcon/>}>Home</Button></Link>
            <Link  activeClassName="active" to="/service/"> <Button color="primary" className={classes.button} startIcon={<FormatPaintIcon/>}>Services</Button></Link>
            <Link  activeClassName="active" to="/about/"> <Button color="primary" className={classes.button} startIcon={<InfoIcon/>}>About</Button></Link>
            <Link  activeClassName="active" to="/contact/"> <Button color="primary" className={classes.button} startIcon={<ContactPhoneIcon/>}>Contact</Button></Link>
          </NavBarList>


          {auth && (
            <MobileMenu className="desktopHide">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon/>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                  <MenuItem  onClick={handleClose} >

                    <Link style={{color: "#7c7c7c"}} activeStyle={{ color: "#03306b" }} to="/">
                        <ListItemIcon>
                        <HomeIcon fontSize="small" />
                      </ListItemIcon>
                      <span>

                      Home
                      </span>
                    </Link>
                  </MenuItem>




                  <MenuItem onClick={handleClose}>

                    <Link style={{color: "#7c7c7c"}} activeStyle={{ color: "#03306b" }} to="/service">
                    <ListItemIcon>
                    <FormatPaintIcon fontSize="small" />
                  </ListItemIcon>
                      <span>
                        Services
                      </span>
                </Link>
                </MenuItem>

                <MenuItem color="primary" onClick={handleClose}>
                  <Link style={{color: "#7c7c7c"}} activeStyle={{ color: "#03306b" }} to="/about/">
                  <ListItemIcon>
                  <InfoIcon fontSize="small" />
                </ListItemIcon>
                    <span>
                      About
                    </span>
                  </Link>
                  </MenuItem>


                  <MenuItem onClick={handleClose}>
                    <Link style={{color: "#7c7c7c"}} activeStyle={{ color: "#03306b" }} to="/contact/">
                  <ListItemIcon>
                    <ContactPhoneIcon fontSize="small" />
                  </ListItemIcon>
                 <span>Contact</span>

                </Link>
                </MenuItem>

              </Menu>
            </MobileMenu>
          )}
        </Toolbar>
      </AppBar>
    </NavigationBar>
  )
}

export default Nav