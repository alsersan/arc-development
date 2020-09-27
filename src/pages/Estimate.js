import React, { useState } from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    padding: "3rem 1rem 4rem",
  },
  animation: {
    maxWidth: "50rem",
    marginTop: "4rem",
  },
  optionsContainer: {
    padding: "3rem 1rem 4rem",
    textAlign: "center",
  },
  optionsHeading: {
    margin: "4rem 0",
    fontWeight: 700,
  },
  optionContainer: {
    padding: " 0.5rem",
  },
  optionHeading: {
    maxWidth: "13rem",
    marginBottom: "1.5rem",
    fontWeight: 600,
  },
  image: {
    height: "10rem",
  },
}));

const Estimate = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        lg={5}
        className={classes.sectionContainer}
      >
        <Grid item>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item className={classes.animation}>
          <Lottie options={defaultOptions} isStopped={true} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={7}
        className={classes.optionsContainer}
      >
        <Grid item>
          <Typography variant="h4" className={classes.optionsHeading}>
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            className={classes.optionContainer}
          >
            <Grid item>
              <Typography variant="h6" className={classes.optionHeading}>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={customSoftwareIcon}
                alt="three floating screens"
                className={classes.image}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            className={classes.optionContainer}
          >
            <Grid item>
              <Typography variant="h6" className={classes.optionHeading}>
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={appDevelopmentIcon}
                alt="phones and tablet outline"
                className={classes.image}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            className={classes.optionContainer}
          >
            <Grid item>
              <Typography variant="h6" className={classes.optionHeading}>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={websiteIcon}
                alt="website outline"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
