import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import { useTabContext } from "../contexts/selectedTabContext";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "../components/ui/CallToAction";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "4rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
    },
  },
  heading: {
    maxWidth: "40rem",
    margin: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  sectionContainer: {
    margin: "3rem 0",

    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  textContainer: {
    maxWidth: "20rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
  animation: {
    maxWidth: "12rem",
  },

  iconContainer: {
    textAlign: "center",
    margin: "4rem 0",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  iconWrapper: {
    margin: "0 4rem",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
  },
  icon: {
    maxWidth: "10rem",
  },
  icon2: {
    maxWidth: "20rem",
  },
}));

const MobileApp = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setMenuIndex } = useTabContext();

  const integrationOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item container direction="column" className={classes.mainContainer}>
        {/*--Heading--*/}
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Hidden mdDown>
            <Grid item>
              <IconButton
                component={Link}
                to="/customsoftware"
                onClick={() => setMenuIndex(1)}
              >
                <img src={backArrow} alt="to Custom Software Development" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item className={classes.heading}>
            <Typography variant="h2" paragraph>
              iOS/Android App Development
            </Typography>
            <Typography variant="body1" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant="body1" paragraph>
              Wether you want an app for you customers, employees, or yourself,
              we can build cross-platform native solutions for any part of you
              business process. This opens you up to a whole new world of
              possibilities by taking advantage of phone features like the
              camera, GPS, push notifications and more.
            </Typography>
            <Typography variant="body1" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <IconButton
                component={Link}
                to="/websites"
                onClick={() => setMenuIndex(3)}
              >
                <img src={forwardArrow} alt="to Website Development" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/*--Animation Row--*/}
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              Integration
            </Typography>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactins and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
          <Grid item className={classes.animation}>
            <Lottie options={integrationOptions} />
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              Simultaneous Platform Support
            </Typography>
            <Typography variant="body1" paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android and tablests - all at the same time.
            </Typography>
            <Typography variant="body1" paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        {/*--Icons--*/}
        <Grid
          item
          container
          justify="center"
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          className={classes.iconContainer}
        >
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Extend Functionality
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={swiss}
                  alt="swiss army knife"
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.iconWrapper}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Extend Access
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: matchesMD ? 0 : "3rem" }}>
                <img
                  src={access}
                  alt="tear-one-off sign"
                  className={classes.icon2}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Increase Engagement
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={engagement}
                  alt="app with notification"
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default MobileApp;
