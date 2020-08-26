import React from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";

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
  },
  learnButtonServices: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 40,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.secondary.main,
  },
  icon: {
    marginLeft: "2rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

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
      <Grid
        item
        container
        direction="column"
        className={classes.servicesContainer}
      >
        <Grid item container justify="flex-start">
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
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
              src={CustomSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
