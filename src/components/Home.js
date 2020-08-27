import React from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2rem",
  },
  animation: {
    marginLeft: "5%",
    marginTop: "2rem",
    maxWidth: "50rem",
    minWidth: "22rem",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  heroTextContainer: {
    minWidth: "22rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 0.5rem",
    },
  },
  buttonContainer: {
    marginTop: "2rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: "3rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "1.5rem",
    },
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  servicesContainer: {
    marginTop: "10rem",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
      marginTop: "4rem",
    },
  },
  servicesItemContainer: {
    marginBottom: "6rem",
  },
  serviceHeader: {
    marginBottom: "1rem",
  },
  learnButtonServices: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 40,
    margin: "1rem 0",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.secondary.main,
  },
  servicesSubtitle: {
    marginBottom: "0.5rem",
  },
  icon: {
    marginLeft: "2rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*---Hero Block----*/}
      <Grid
        item
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item sm className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing West Coast Technology
            <br /> to the Midwest
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button variant="contained" className={classes.estimateButton}>
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" className={classes.learnButtonHero}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  height={20}
                  width={20}
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.animation}>
          <Lottie options={defaultOptions} />
        </Grid>
      </Grid>

      {/*----Services Block----*/}

      {/*--Custom Software Development--*/}
      <Grid
        item
        container
        direction="column"
        className={classes.servicesContainer}
      >
        <Grid
          item
          container
          className={classes.servicesItemContainer}
          justify={matchesSM ? "center" : "flex-start"}
        >
          <Grid item style={{ textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4" className={classes.serviceHeader}>
              Custom Software Development
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button className={classes.learnButtonServices} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                height={20}
                width={20}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>

        {/*--iOS/Android Development--*/}
        <Grid
          item
          container
          className={classes.servicesItemContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid item style={{ textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4" className={classes.serviceHeader}>
              iOS/Android App Development
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Extend Functionality. Extend Acccess. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your Web experiennce or create a standalome app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button className={classes.learnButtonServices} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                height={20}
                width={20}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={appDevelopmentIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>

        {/*--Website Development--*/}
        <Grid item container justify={matchesSM ? "center" : "flex-start"}>
          <Grid item style={{ textAlign: matchesSM ? "center" : null }}>
            <Typography variant="h4" className={classes.serviceHeader}>
              Website Development
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.servicesSubtitle}
            >
              Reach more. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for search Engines, built for speed.
            </Typography>
            <Button className={classes.learnButtonServices} variant="outlined">
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                height={20}
                width={20}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={websiteIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
