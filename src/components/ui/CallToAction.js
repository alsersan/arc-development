import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles/";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ButtonArrow from "../ui/ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

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
  learnButtonSmall: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 40,
    margin: "1rem 0",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 145,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
            <Button className={classes.learnButtonSmall} variant="outlined">
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
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
