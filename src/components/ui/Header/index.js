import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import SideDrawerMenu from "./components/SideDrawerMenu";
import HeaderTabs from "./components/HeaderTabs";
import CompanyLogo from "./components/CompanyLogo";
import { useTabContext } from "../../../contexts/selectedTabContext";
import { useDrawerContext } from "../../../contexts/openDrawerContext";

function ElevationScroll(props) {
  const { openDrawer } = useDrawerContext();

  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger && !openDrawer ? 4 : 0,
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
    textTransform: "none",
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

const Header = () => {
  const { tabIndex, setTabIndex } = useTabContext();

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      {console.log("renderHeader")}
      {console.log("tabIndex: " + tabIndex)}
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setTabIndex(0)}
            >
              <CompanyLogo className={classes.logo} />
            </Button>
            {matches ? (
              <SideDrawerMenu marginClassName={classes.toolbarMargin} />
            ) : (
              <HeaderTabs />
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
