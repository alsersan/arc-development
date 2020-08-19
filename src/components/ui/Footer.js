import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import FooterAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  adornment: {
    width: "25rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  griditem: {
    margin: "4rem",
  },
  link: {
    color: "white",
    fontFamily: "arial",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  iconContainer: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    [theme.breakpoints.down("md")]: {
      bottom: "0.5rem",
      right: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      bottom: 0,
    },
  },
  icon: {
    color: "white",
    height: "3rem",
    [theme.breakpoints.down("md")]: {
      width: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "2rem",
    },
  },
}));

const Footer = ({ setRouteIndex, setMenuIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.griditem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => setRouteIndex(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  setRouteIndex(1);
                  setMenuIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.link}
                onClick={() => {
                  setRouteIndex(1);
                  setMenuIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                className={classes.link}
                onClick={() => {
                  setRouteIndex(1);
                  setMenuIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.link}
                onClick={() => {
                  setRouteIndex(1);
                  setMenuIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setRouteIndex(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setRouteIndex(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setRouteIndex(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setRouteIndex(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setRouteIndex(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setRouteIndex(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setRouteIndex(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => setRouteIndex(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justify="flex-end"
        spacing={1}
        className={classes.iconContainer}
      >
        <Grid item component={"a"} href="https://facebook.com">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://twitter.com">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://instagram.com">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
      <img
        alt="Black decorative slash"
        src={FooterAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
