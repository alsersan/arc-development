import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LearnMoreButton from "../components/ui/LearnMoreButton";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "4rem 4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1.5rem",
    },
  },
  servicesContainer: {
    marginTop: "5rem",

    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
    },
  },
  servicesItemContainer: {
    marginBottom: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "4rem",
    },
  },
  serviceHeader: {
    marginBottom: "1rem",
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
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: "10rem",
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item>
        <Typography align={matchesSM ? "center" : undefined} variant="h2">
          Services
        </Typography>
      </Grid>

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
            <LearnMoreButton
              color={theme.palette.primary.main}
              type="small"
              route="/customsoftware"
            />
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
              Integrate your Web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <LearnMoreButton
              color={theme.palette.primary.main}
              type="small"
              route="/mobileapps"
            />
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
              Optimized for search engines, built for speed.
            </Typography>
            <LearnMoreButton
              color={theme.palette.primary.main}
              type="small"
              route="websites"
            />
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

export default Services;
