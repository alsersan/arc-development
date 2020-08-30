import React from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import animationData from "../../animations/landinganimation/data";
import ButtonArrow from "../ui/ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";

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
  learnButtonBig: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  servicesContainer: {
    margin: "10rem 0",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      margin: "8rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
      margin: "6rem 0",
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
  learnButtonSmall: {
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
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: "10rem",
    },
  },
  revolutionContainer: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "50rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40rem",
    },
    width: "100%",
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "8rem 10rem",
    [theme.breakpoints.down("md")]: {
      padding: "6rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem 0.5rem",
    },
  },
  informationContainer: {
    padding: "0 4rem",
    height: "50rem",
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "40rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30rem",
      padding: "0 2rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
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
              <Button variant="outlined" className={classes.learnButtonBig}>
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
            <Button className={classes.learnButtonSmall} variant="outlined">
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
              Integrate your Web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button className={classes.learnButtonSmall} variant="outlined">
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
              Optimized for search engines, built for speed.
            </Typography>
            <Button className={classes.learnButtonSmall} variant="outlined">
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

      {/*----Revolution Block----*/}
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        className={classes.revolutionContainer}
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  style={{ marginTop: "2rem" }}
                  className={classes.learnButtonBig}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    height={20}
                    width={20}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/*----Information Block----*/}
      <Grid
        item
        container
        className={classes.informationContainer}
        direction={matchesXS ? "column" : "row"}
        alignItems="center"
        justify={matchesXS ? "space-evenly" : "space-between"}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">Let's get personal</Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.learnButtonSmall}
                variant="outlined"
                style={{ borderColor: "white", color: "white" }}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow height={20} width={20} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">Say Hello! </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.learnButtonSmall}
                variant="outlined"
                style={{ borderColor: "white", color: "white" }}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow height={20} width={20} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;