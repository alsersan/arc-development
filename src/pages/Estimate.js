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

// const defaultQuestions = [
//   {
//     id: 1,
//     title: "Which service are you interested in?",
//     active: true,
//     options: [
//       {
//         id: 1,
//         title: "Custom Software Development",
//         icon: customSoftwareIcon,
//         iconAlt: "three floating screens",
//         selected: false,
//         cost: 0,
//       },
//       {
//         id: 2,
//         title: "iOS/Android App Development",
//         icon: appDevelopmentIcon,
//         iconAlt: "phones and tablets outline",
//         selected: false,
//         cost: 0,
//       },
//       {
//         id: 3,
//         title: "Website Development",
//         icon: websiteIcon,
//         iconAlt: "computer outline",
//         selected: false,
//         cost: 0,
//       },
//     ],
//   },
// ];

// const softwareQuestions = [
//   { ...defaultQuestions[0], active: false },
//   {
//     id: 2,
//     title: "Which platforms do you need supported?",
//     subtitle: "Select all that apply.",
//     options: [
//       {
//         id: 1,
//         title: "Web Application",
//         subtitle: null,
//         icon: websiteIcon,
//         iconAlt: "computer outline",
//         selected: false,
//         cost: 100,
//       },
//       {
//         id: 2,
//         title: "iOS Application",
//         subtitle: null,
//         icon: iphone,
//         iconAlt: "outline of iphone",
//         selected: false,
//         cost: 100,
//       },
//       {
//         id: 3,
//         title: "Android Application",
//         subtitle: null,
//         icon: android,
//         iconAlt: "outlines of android phone",
//         selected: false,
//         cost: 100,
//       },
//     ],
//     active: true,
//   },
//   {
//     id: 3,
//     title: "Which features do you expect to use?",
//     subtitle: "Select all that apply.",
//     options: [
//       {
//         id: 1,
//         title: "Photo/Video",
//         subtitle: null,
//         icon: camera,
//         iconAlt: "camera outline",
//         selected: false,
//         cost: 25,
//       },
//       {
//         id: 2,
//         title: "GPS",
//         subtitle: null,
//         icon: gps,
//         iconAlt: "gps pin",
//         selected: false,
//         cost: 25,
//       },
//       {
//         id: 3,
//         title: "File Transfer",
//         subtitle: null,
//         icon: upload,
//         iconAlt: "outline of cloud with arrow pointing up",
//         selected: false,
//         cost: 25,
//       },
//     ],
//     active: false,
//   },
//   {
//     id: 4,
//     title: "Which features do you expect to use?",
//     subtitle: "Select all that apply.",
//     options: [
//       {
//         id: 1,
//         title: "Users/Authentication",
//         subtitle: null,
//         icon: users,
//         iconAlt: "outline of a person with a plus sign",
//         selected: false,
//         cost: 25,
//       },
//       {
//         id: 2,
//         title: "Biometrics",
//         subtitle: null,
//         icon: biometrics,
//         iconAlt: "fingerprint",
//         selected: false,
//         cost: 25,
//       },
//       {
//         id: 3,
//         title: "Push Notifications",
//         subtitle: null,
//         icon: bell,
//         iconAlt: "outline of a bell",
//         selected: false,
//         cost: 25,
//       },
//     ],
//     active: false,
//   },
//   {
//     id: 5,
//     title: "What type of custom features do you expect to need?",
//     subtitle: "Select one.",
//     options: [
//       {
//         id: 1,
//         title: "Low Complexity",
//         subtitle: "(Informational)",
//         icon: info,
//         iconAlt: "'i' inside a circle",
//         selected: false,
//         cost: 25,
//       },
//       {
//         id: 2,
//         title: "Medium Complexity",
//         subtitle: "(Interactive, Customizable, Realtime)",
//         icon: customized,
//         iconAlt: "two toggle switches",
//         selected: false,
//         cost: 50,
//       },
//       {
//         id: 3,
//         title: "High Complexity",
//         subtitle: "(Data Modeling and Computation)",
//         icon: data,
//         iconAlt: "outline of line graph",
//         selected: false,
//         cost: 100,
//       },
//     ],
//     active: false,
//   },
//   {
//     id: 6,
//     title: "How many users do you expect?",
//     subtitle: "Select one.",
//     options: [
//       {
//         id: 1,
//         title: "0-10",
//         subtitle: null,
//         icon: person,
//         iconAlt: "person outline",
//         selected: false,
//         cost: 1,
//       },
//       {
//         id: 2,
//         title: "10-100",
//         subtitle: null,
//         icon: persons,
//         iconAlt: "outline of two people",
//         selected: false,
//         cost: 1.25,
//       },
//       {
//         id: 3,
//         title: "100+",
//         subtitle: null,
//         icon: people,
//         iconAlt: "outline of three people",
//         selected: false,
//         cost: 1.5,
//       },
//     ],
//     active: false,
//   },
// ];

// const websiteQuestions = [
//   { ...defaultQuestions[0], active: false },
//   {
//     id: 2,
//     title: "Which type of website are you wanting?",
//     subtitle: "Select one.",
//     options: [
//       {
//         id: 1,
//         title: "Basic",
//         subtitle: "(Informational)",
//         icon: info,
//         iconAlt: "person outline",
//         selected: false,
//         cost: 100,
//       },
//       {
//         id: 2,
//         title: "Interactive",
//         subtitle: "(Users, API's, Messaging)",
//         icon: customized,
//         iconAlt: "outline of two people",
//         selected: false,
//         cost: 200,
//       },
//       {
//         id: 3,
//         title: "E-Commerce",
//         subtitle: "(Sales)",
//         icon: globe,
//         iconAlt: "outline of three people",
//         selected: false,
//         cost: 250,
//       },
//     ],
//     active: true,
//   },
// ];

const questionList = [
  {
    id: 0,
    type: "default",
    title: "Which service are you interested in?",
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
  {
    id: 1,
    type: "software",
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    active: false,
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
  {
    id: 6,
    type: "website",
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
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

  const [activeQuestion, setActiveQuestion] = useState(questionList[0]);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const activeIndex = activeQuestion.id;
    setActiveQuestion(questionList[activeIndex + 1]);
  };

  const previousQuestion = () => {
    const activeIndex = activeQuestion.id;
    if (activeIndex !== 0) setActiveQuestion(questionList[activeIndex - 1]);
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
            {activeQuestion.title}
          </Typography>
        </Grid>
        <Grid item container>
          {activeQuestion.options.map((option, index) => (
            <Grid
              key={index}
              item
              container
              direction="column"
              md
              alignItems="center"
              className={classes.optionContainer}
            >
              <Grid item>
                <Typography variant="h6" className={classes.optionHeading}>
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
          ))}
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="space-evenly"
          style={{ marginTop: "4rem" }}
        >
          <Grid item>
            <IconButton onClick={previousQuestion}>
              <img src={backArrow} alt="previous question" />
            </IconButton>
          </Grid>
          <Grid item>
            <Button className={classes.estimateButton} variant="contained">
              Get Estimate
            </Button>
          </Grid>
          <Grid item>
            <IconButton onClick={nextQuestion}>
              <img src={forwardArrow} alt="next question" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
