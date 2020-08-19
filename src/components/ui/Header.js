import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import logo from "../../assets/logo.svg";
import SideDrawerMenu from "./SideDrawerMenu";
import HeaderTabs from "./HeaderTabs";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    height: "5.5rem",
    [theme.breakpoints.down("md")]: {
      height: "4.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
    },
  },
  logo: {
    height: "5.5rem",
    [theme.breakpoints.down("md")]: {
      height: "4.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Header = ({ routeIndex, setRouteIndex, menuIndex, setMenuIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setRouteIndex(0);
        break;
      case "/services":
        setRouteIndex(1);
        setMenuIndex(0);
        break;
      case "/customsoftware":
        setRouteIndex(1);
        setMenuIndex(1);
        break;
      case "/mobileapps":
        setRouteIndex(1);
        setMenuIndex(2);
        break;
      case "/websites":
        setRouteIndex(1);
        setMenuIndex(3);
        break;
      case "/revolution":
        setRouteIndex(2);
        break;
      case "/about":
        setRouteIndex(3);
        break;
      case "/contact":
        setRouteIndex(4);
        break;
      case "/estimate":
        setRouteIndex(null);
        break;
      default:
        break;
    }
  }, []);

  return (
    <React.Fragment>
      {console.log("renderHeader")}
      {console.log("routeIndex: " + routeIndex)}
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setRouteIndex(0)}
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? (
              <SideDrawerMenu
                routeIndex={routeIndex}
                setRouteIndex={setRouteIndex}
                marginClassName={classes.toolbarMargin}
              />
            ) : (
              <HeaderTabs
                routeIndex={routeIndex}
                setRouteIndex={setRouteIndex}
                menuIndex={menuIndex}
                setMenuIndex={setMenuIndex}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {console.log(matches)}
    </React.Fragment>
  );
};

export default Header;
