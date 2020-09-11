import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles/";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LearnMoreButton from "../ui/LearnMoreButton";
import FreeEstimateButton from "../ui/FreeEstimateButton";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { useTabContext } from "../../contexts/selectedTabContext";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 4rem",
    height: "40rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      padding: "0 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1rem",
    },
  },
  estimateButton: {
    width: 145,
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setTabIndex } = useTabContext();

  return (
    <Grid
      container
      alignItems="center"
      direction={matchesSM ? "column" : "row"}
      justify={matchesSM ? "space-evenly" : "space-between"}
      className={classes.container}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of the 21st century.
            </Typography>
          </Grid>
          <Grid item>
            <LearnMoreButton
              color={theme.palette.primary.main}
              type="small"
              route="services"
              onClick={() => setTabIndex(1)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FreeEstimateButton className={classes.estimateButton} />
      </Grid>
    </Grid>
  );
};

export default CallToAction;
