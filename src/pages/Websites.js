import React from "react";
import { Link } from "react-router-dom";

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
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "4rem 4rem 8rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 2rem 6rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem 4rem",
    },
  },
  headingContainer: {
    marginBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
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
    margin: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0",
    },
  },
  textContainer: {
    maxWidth: "25rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
  textSpan: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  image: {
    width: "12rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "0.5rem",
    },
  },
}));

const Websites = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setMenuIndex } = useTabContext();

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
          className={classes.headingContainer}
        >
          <Hidden mdDown>
            <Grid item>
              <IconButton
                component={Link}
                to="/mobileapps"
                onClick={() => setMenuIndex(2)}
              >
                <img src={backArrow} alt="to iOS/Android App Development" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item className={classes.heading}>
            <Typography variant="h2" paragraph>
              Website Development
            </Typography>
            <Typography variant="body1" paragraph>
              Having a website is a necessity in today's world. They give you
              one central, public location to let people know who you are, what
              you do and why you're the best at it.
            </Typography>
            <Typography variant="body1" paragraph>
              From simply having you hours posted to having a full-fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <IconButton
                component={Link}
                to="/customsoftware"
                onClick={() => setMenuIndex(1)}
              >
                <img src={forwardArrow} alt="to Custom Software Development" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/*--Text row 1--*/}
        <Grid
          item
          container
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              Analytics
            </Typography>
            <Typography variant="body1" paragraph>
              Knowledge is power, and data is 21st century gold.
            </Typography>
            <Typography variant="body1" paragraph>
              Analyzing data can reveal hidden patterns and trends in your
              business, empowering you to make smarter decisions with measurable
              effects.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={analytics}
              alt="graph with magnifying glass revealing 1's and 0's"
            />
          </Grid>
        </Grid>

        {/*--Text row 2--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "flex-end"}
          alignItems="center"
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              E-Commerce
            </Typography>
            <Typography variant="body1" paragraph>
              It's no secret that people like to shop online.
            </Typography>
            <Typography variant="body1" paragraph>
              In 2017, over{" "}
              <span className={classes.textSpan}>$2.3 trillion</span> were spent
              on e-commerce stores, and it's time for your slice of that pie.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={ecommerce}
              alt="world outline made of dollar signs"
            />
          </Grid>
        </Grid>

        {/*--Text row 3--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              Outreach
            </Typography>
            <Typography variant="body1" paragraph>
              Draw people in with a dazzling website.
            </Typography>
            <Typography variant="body1" paragraph>
              Showing off your products online is a great way to help customers
              decide what's right for them before visiting in person.
            </Typography>
          </Grid>
          <Grid item>
            <img className={classes.image} src={outreach} alt="megaphone" />
          </Grid>
        </Grid>

        {/*--Text row 4--*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "flex-end"}
          alignItems="center"
          className={classes.sectionContainer}
        >
          <Grid item className={classes.textContainer}>
            <Typography variant="h4" paragraph>
              Search Engine Optimization
            </Typography>
            <Typography variant="body1" paragraph>
              How often have you been to the second page of Google results?
            </Typography>
            <Typography variant="body1" paragraph>
              If you are like us, probably never.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.image}
              src={seo}
              alt="website standing on winner's podium"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default Websites;
