import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import appDevelopmentIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";
import iphone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnimation from "../../animations/estimateAnimation/data.json";
import EstimateModal from "./components/EstimateModal";

const defaultQuestions = [
  {
    id: 0,
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
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: true,
    options: [
      {
        id: 0,
        title: "Web Application",
        type: "platforms",
        subtitle: null,
        icon: websiteIcon,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "iOS Application",
        type: "platforms",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        type: "platforms",
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
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Photo/Video",
        type: "features",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "GPS",
        type: "features",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "File Transfer",
        type: "features",
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
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    multiSelection: true,
    active: false,
    options: [
      {
        id: 0,
        title: "Users/Authentication",
        type: "features",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Biometrics",
        type: "features",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Push Notifications",
        type: "features",
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
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        title: "Low Complexity",
        type: "customFeatures",
        subtitle: "Informational",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 1,
        title: "Medium Complexity",
        type: "customFeatures",
        subtitle: "Interactive, Customizable, Realtime",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 2,
        title: "High Complexity",
        type: "customFeatures",
        subtitle: "Data Modeling and Computation",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
  },
  {
    id: 5,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    multiSelection: false,
    active: false,
    options: [
      {
        id: 0,
        type: "users",
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 1,
        type: "users",
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 2,
        type: "users",
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
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    multiSelection: false,
    active: true,
    options: [
      {
        id: 0,
        title: "Basic",
        type: "category",
        subtitle: "Informational",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 1,
        title: "Interactive",
        type: "category",
        subtitle: "Users, API's, Messaging",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 2,
        title: "E-Commerce",
        type: "category",
        subtitle: "Sales",
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
    padding: "3rem 1rem 6rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0.5rem 0",
    },
  },
  animation: {
    maxWidth: "50rem",
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "40rem",
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
      marginTop: 0,
    },
  },
  optionsContainer: {
    padding: "3rem 1rem 6rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 1rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0.5rem 5rem",
    },
  },
  optionsHeading: {
    margin: "4rem 0 3rem",
    // minHeight so that it has space to rearrange at smaller screen sizes
    minHeight: "5rem",
    [theme.breakpoints.down("md")]: {
      margin: "0 0 2rem",
    },
  },
  optionContainer: {
    padding: " 0.1rem",
  },
  optionWrapper: {
    height: "15.5rem",
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
    },
  },
  optionHeading: {
    maxWidth: "13rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
  image: {
    height: "9rem",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
    },
  },
  imageButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    width: "14.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  activeImageButton: {
    width: "14.5rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  buttonContainer: {
    marginTop: "4rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
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
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [openEstimate, setOpenEstimate] = useState(false);

  const [totalCost, setTotalCost] = useState(0);

  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onImageClick = (questionIndex, optionIndex) => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions[questionIndex];
    const selectedOption = activeQuestion.options[optionIndex];
    const previouslySelected = activeQuestion.options.filter(
      (option) => option.selected
    );

    // check if multiple options can be selected at the same time
    if (activeQuestion.multiSelection) {
      selectedOption.selected = !selectedOption.selected;
    } else {
      if (previouslySelected[0]) {
        previouslySelected[0].selected = false;
      }
      selectedOption.selected = true;
    }

    // redirect to the right question set when one of the defaultQuestions is selected
    switch (selectedOption.type) {
      case "software":
        setQuestions(softwareQuestions);
        setService(selectedOption.title);
        break;
      case "website":
        setQuestions(websiteQuestions);
        setService(selectedOption.title);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const saveSelectedOptions = () => {
    // array with all selected options. Eliminated any empty arrays resulting from non-selected options
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    let selectedPlatforms = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "platforms")
        .map((question) => selectedPlatforms.push(question.title))
    );

    let selectedFeatures = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "features")
        .map((question) => selectedFeatures.push(question.title))
    );

    let selectedCustomFeatures = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "customFeatures")
        .map((question) => selectedCustomFeatures.push(question.title))
    );

    let selectedCategory = [];
    selections.map((selection) =>
      selection
        .filter((selection) => selection.type === "category")
        .map((question) => selectedCategory.push(question.title))
    );

    setPlatforms(selectedPlatforms);
    setFeatures(selectedFeatures);
    setCustomFeatures(selectedCustomFeatures);
    setCategory(selectedCategory);
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

  const disableEstimateButton = () => {
    let disabled = false;

    // emptySelections will always consist of at least 1 item in the array, because of the first services question
    const selections = questions.map((question) =>
      question.options
        .filter((option) => option.selected)
        .map((option) => option.type)
    );

    const emptySelections = selections.filter(
      (selection) => selection.length === 0
    );

    const features = selections
      .map((selection) =>
        selection.filter((selection) => selection === "features")
      )
      .filter((selection) => selection.length > 0);

    if (questions.length === 1) {
      // Default  questions
      disabled = true;
    } else if (questions.length === 2) {
      // Website questions
      if (emptySelections.length === 2) disabled = true;
    } else {
      // software questions
      if (features.length === 0) {
        disabled = true;
      } else if (emptySelections.length > 2 && features.length === 1) {
        disabled = true;
      } else if (emptySelections.length > 1 && features.length === 2) {
        disabled = true;
      }
    }
    return disabled;
  };

  const calculateCost = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((selection) =>
      selection.map((option) => (cost += option.cost))
    );

    // Only runs if the current questions are the websiteQuestions
    if (questions.length > 2) {
      const multiplier = questions[5].options.filter(
        (option) => option.selected
      )[0];

      // The multiplier was added to the cost previously. Now it has to be substracted and multiplied
      cost -= multiplier.cost;
      cost *= multiplier.cost;

      // get the number of users to show it in the EstimateModal
      setUsers(multiplier.title);
    }
    setTotalCost(cost);
  };

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMD ? "center" : undefined}
        lg={5}
        className={classes.sectionContainer}
      >
        <Grid item container>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item className={classes.animation}>
          <Lottie options={defaultOptions} />
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
            <Grid item container direction="column" key={index}>
              <Grid item className={classes.optionsHeading}>
                <Typography variant="h4" gutterBottom>
                  {question.title}
                </Typography>
                <Typography variant="h6">{question.subtitle}</Typography>
              </Grid>
              <Grid item container direction={matchesSM ? "column" : "row"}>
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
                        direction={matchesSM ? "row-reverse" : "column"}
                        justify={matchesSM ? "space-evenly" : undefined}
                        alignItems="center"
                        className={classes.optionWrapper}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          xs={10}
                          md="auto"
                          justify="center"
                          className={classes.optionHeading}
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              style={{ fontWeight: 600 }}
                            >
                              {option.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">
                              {option.subtitle}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item container xs={2} md="auto" justify="center">
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
            </Grid>
          ))}

        <Grid
          item
          container
          alignItems="center"
          justify="space-evenly"
          className={classes.buttonContainer}
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
            <Button
              className={classes.estimateButton}
              variant="contained"
              disabled={disableEstimateButton()}
              onClick={() => {
                setOpenEstimate(true);
                calculateCost();
                saveSelectedOptions();
              }}
            >
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

      {/*--Estimate Modal--*/}
      <EstimateModal
        open={openEstimate}
        onClose={() => setOpenEstimate(false)}
        totalCost={totalCost}
        service={service}
        platforms={platforms}
        features={features}
        customFeatures={customFeatures}
        users={users}
        category={category}
        resetValues={() => setQuestions(defaultQuestions)}
      />
    </Grid>
  );
};

export default Estimate;
