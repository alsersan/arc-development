import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import CallToAction from "../components/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    padding: "3rem 4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 1rem",
    },
  },
  headingText: {
    maxWidth: "60rem",
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: 600,
    fontStyle: "italic",
  },
  historyText: {
    maxWidth: "35rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "55rem",
    },
  },
  historyImage: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15rem",
    },
  },
  textAlignCenter: {
    textAlign: "center",
  },
  avatar: {
    width: "20rem",
    height: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      height: "15rem",
    },
  },
  teamLastRow: {
    margin: "3rem 0",
  },
  teamText: {
    margin: "0 1rem",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  teamImage: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15rem",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const teamText = (
    <Grid item lg className={classes.teamText}>
      <Typography variant="body1" paragraph>
        I taught myself basic coding from a library book in third grade, and
        ever since then my passion has solely been set on learning – learning
        about computers, learning mathematics and philosophy, studying design,
        always just learning.
      </Typography>
      <Typography variant="body1">
        Now I'm ready to apply everything I've learned, and to help others with
        the intuition I have developed.
      </Typography>
    </Grid>
  );

  return (
    <Grid container direction="column">
      <Grid item className={classes.sectionContainer}>
        <Typography variant="h2">About us</Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.sectionContainer}
      >
        <Typography variant="h4" className={classes.headingText}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify="space-around"
        direction={matchesMD ? "column" : "row"}
        className={classes.sectionContainer}
      >
        <Grid item className={classes.historyText}>
          <Typography variant="h4" paragraph>
            History
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: 500, fontStyle: "italic" }}
            paragraph
          >
            We’re the new kid on the block.
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2019, we’re ready to get our hands on the world’s
            business problems.
          </Typography>
          <Typography variant="body1" paragraph>
            It all started with one question: Why aren’t all businesses using
            available technology? There are many different answers to that
            question: economic barriers, social barriers, educational barriers,
            and sometimes institutional barriers.
          </Typography>
          <Typography variant="body1" paragraph>
            We aim to be a powerful force in overcoming these obstacles. Recent
            developments in software engineering and computing power, compounded
            by the proliferation of smart phones, has opened up infinite worlds
            of possibility. Things that have always been done by hand can now be
            done digitally and automatically, and completely new methods of
            interaction are created daily. Taking full advantage of these
            advancements is the name of the game.
          </Typography>
          <Typography variant="body1" paragraph>
            All this change can be a lot to keep up with, and that’s where we
            come in.
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={history}
            alt="quill pen sitting on top of book"
            className={classes.historyImage}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.sectionContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.textAlignCenter}>
            <Typography variant="h4" paragraph>
              Team
            </Typography>
            <Typography variant="body1" paragraph>
              Zachary Reece, Founder
            </Typography>
            <Typography variant="body1" paragraph>
              I started coding when I was 9 years old
            </Typography>
          </Grid>
          <Grid item>
            <Avatar src={founder} alt="founder" className={classes.avatar} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          className={classes.teamLastRow}
        >
          {matchesMD ? teamText : null}
          <Grid item lg style={{ margin: matchesMD ? "2rem 0" : undefined }}>
            <Grid
              container
              alignItems={matchesMD ? "center" : undefined}
              direction="column"
            >
              <Grid item>
                <img
                  src={yearbook}
                  alt="yearbook page about founder"
                  className={classes.teamImage}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  A picture of my Sohphomore yearbook
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {matchesMD ? null : teamText}

          <Grid item lg>
            <Grid
              container
              direction="column"
              alignItems={matchesMD ? "center" : "flex-end"}
            >
              <Grid item>
                <img
                  src={puppy}
                  alt="grey spotted puppy"
                  className={classes.teamImage}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  My miniature dapple dachshund, Sterling
                </Typography>
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

export default About;
