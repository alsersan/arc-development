import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
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

const defaultQuestions = [
  {
    id: 0,
    type: "default",
    title: "Which service are you interested in?",
    multiSelection: false,
    active: true,
    options: [
      {
        id: 0,
        type: "software",
        title: "Custom Software Development",
        icon: customSoftwareIcon,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 1,
        type: "software",
        title: "iOS/Android App Development",
        icon: appDevelopmentIcon,
        iconAlt: "phones and tablets outline",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        type: "website",
        title: "Website Development",
        icon: websiteIcon,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  {
    ...defaultQuestions[0],
    active: false,
  },
  {
    id: 1,
    type: "software",
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: true,
    options: [
      {
        id: 0,
        title: "Web Application",
        subtitle: null,
        icon: websiteIcon,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 2,
    type: "software",
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 3,
    type: "software",
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
  },
  {
    id: 4,
    type: "software",
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 2,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 5,
    type: "software",
    title: "How many users do you expect?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 1,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 2,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
  },
];

const websiteQuestions = [
  {
    ...defaultQuestions[0],
    active: false,
  },
  {
    id: 1,
    type: "website",
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 2,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
  },
];

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
    marginBottom: "1rem",
    fontWeight: 600,
  },
  image: {
    height: "9rem",
  },
  imageButton: {
    borderRadius: 10,
  },
  activeImageButton: {
    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [questions, setQuestions] = useState(softwareQuestions);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onImageClick = (questionIndex, optionIndex) => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions[questionIndex];

    if (activeQuestion.multiSelection) {
      const selectedOption = activeQuestion.options[optionIndex];
      selectedOption.selected = !selectedOption.selected;
      setQuestions(newQuestions);
    } else {
      activeQuestion.options = activeQuestion.options.map((option) => ({
        ...option,
        selected: false,
      }));
      activeQuestion.options[optionIndex].selected = true;
      setQuestions(newQuestions);
    }
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(
      (question) => question.active
    )[0];
    const activeIndex = activeQuestion.id;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.filter(
      (question) => question.active
    )[0];
    const activeIndex = activeQuestion.id;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const disableNavigationPrevious = () => {
    const activeQuestion = questions.filter((question) => question.active)[0];

    if (activeQuestion.id === 0) {
      return true;
    } else {
      return false;
    }
  };

  const disableNavigationNext = () => {
    const activeQuestion = questions.filter((question) => question.active)[0];

    if (activeQuestion.id === questions.length - 1) {
      return true;
    } else {
      return false;
    }
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
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography variant="h4" className={classes.optionsHeading}>
                  {question.title}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid key={index} item md className={classes.optionContainer}>
                    <IconButton
                      disableRipple
                      className={
                        option.selected
                          ? classes.activeImageButton
                          : classes.imageButton
                      }
                      onClick={() => onImageClick(question.id, option.id)}
                    >
                      <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography
                            variant="h6"
                            className={classes.optionHeading}
                          >
                            {option.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            src={option.icon}
                            alt={option.iconAlt}
                            className={classes.image}
                          />
                        </Grid>
                      </Grid>
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          alignItems="center"
          justify="space-evenly"
          style={{ marginTop: "4rem" }}
        >
          <Grid item>
            <IconButton
              onClick={previousQuestion}
              disabled={disableNavigationPrevious()}
            >
              <img
                src={
                  disableNavigationPrevious() ? backArrowDisabled : backArrow
                }
                alt="previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Button className={classes.estimateButton} variant="contained">
              Get Estimate
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={disableNavigationNext()}
            >
              <img
                src={
                  disableNavigationNext() ? forwardArrowDisabled : forwardArrow
                }
                alt="next question"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
