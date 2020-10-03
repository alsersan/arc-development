import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import check from "../../../assets/check.svg";

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    padding: "1rem 1.5rem",
    textAlign: "center",
  },
  sectionContainer: {
    margin: "1.5rem 0",
  },
  cost: {
    color: theme.palette.secondary.main,
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
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
  sendIcon: {
    color: "#5c5c5c",
    marginLeft: "0.5em",
    fontSize: "1.2rem",
  },
}));

const EstimateModal = ({
  open,
  onClose,
  cost,
  service,
  platforms,
  features,
  customFeatures,
  users,
  category,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [messageHelper, setMessageHelper] = useState("");

  const checkName = (input) => {
    if (input === "") {
      setNameHelper("This field is required");
    } else {
      setNameHelper("");
    }
  };

  const checkEmail = (input) => {
    const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input);
    if (input === "") {
      setEmailHelper("This field is required");
    } else if (!valid) {
      setEmailHelper("Invalid email");
    } else {
      setEmailHelper("");
    }
  };

  const checkPhone = (input) => {
    const valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      input
    );
    if (input === "") {
      setPhoneHelper("This field is required");
    } else if (!valid) {
      setPhoneHelper("Invalid phone number");
    } else {
      setPhoneHelper("");
    }
  };

  const checkMessage = (input) => {
    if (input === "") {
      setMessageHelper("This field is required");
    } else {
      setMessageHelper("");
    }
  };

  const onSubmitClick = () => {
    checkName(name);
    checkEmail(email);
    checkPhone(phone);
    checkMessage(message);

    // if (
    //   name &&
    //   email &&
    //   phone &&
    //   message &&
    //   !nameHelper &&
    //   !emailHelper &&
    //   !phoneHelper &&
    //   !messageHelper
    // ) {
    //   setOpen(true);
    // }
  };

  const platformsMessage = () => {
    return `You want ${service} for ${
      //if only web application is selected...
      platforms.indexOf("Web Application") > -1 && platforms.length === 1
        ? //then finish sentence here
          "a Web Application."
        : //otherwise, if web application and another platform is selected...
        platforms.indexOf("Web Application") > -1 && platforms.length === 2
        ? //then finish the sentence here
          `a Web Application and an ${platforms[1]}.`
        : //otherwise, if only one platform is selected which isn't web application...
        platforms.length === 1
        ? //then finish the sentence here
          `an ${platforms[0]}`
        : //otherwise, if other two options are selected...
        platforms.length === 2
        ? //then finish the sentence here
          "an iOS Application and an Android Application."
        : //otherwise if all three are selected...
        platforms.length === 3
        ? //then finish the sentence here
          "a Web Application, an iOS Application, and an Android Application."
        : null
    }`;
  };

  const featuresMessage = () => {
    return (
      <React.Fragment>
        {"with "}
        {/* if we have features... */}
        {features.length > 0
          ? //...and there's only 1...
            features.length === 1
            ? //then end the sentence here
              `${features[0]}.`
            : //otherwise, if there are two features...
            features.length === 2
            ? //...then end the sentence here
              `${features[0]} and ${features[1]}.`
            : //otherwise, if there are three or more features...
              features
                //filter out the very last feature...
                .filter((feature, index) => index !== features.length - 1)
                //and for those features return their name...
                .map((feature, index) => (
                  <span key={index}>{`${feature}, `}</span>
                ))
          : null}
        {features.length > 0 && features.length !== 1 && features.length !== 2
          ? //...and then finally add the last feature with 'and' in front of it
            ` and ${features[features.length - 1]}.`
          : null}
      </React.Fragment>
    );
  };

  const restMessage = () => {
    return `The custom features will be of ${customFeatures}, and the project will be used by ${users} users`;
  };

  const websiteMessage = () => {
    return `You want ${
      category[0] === "Basic" ? "a Basic Website" : `an ${category} Website`
    }`;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <Typography variant="h4" className={classes.modalHeader}>
        Estimate
      </Typography>
      <DialogContent>
        <Grid container>
          <Grid item container md direction="column">
            <Grid item className={classes.sectionContainer}>
              <TextField
                label="Name"
                id="name"
                placeholder="John Doe"
                fullWidth
                error={nameHelper !== ""}
                helperText={nameHelper}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  checkName(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ margin: "1rem 0" }}
                label="Email"
                id="email"
                placeholder="johndoe@example.com"
                error={emailHelper !== ""}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  checkEmail(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Phone"
                id="phone"
                placeholder="(555) 555-5555"
                error={phoneHelper !== ""}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  checkPhone(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="message"
                variant="outlined"
                multiline
                rows={matchesMD ? 8 : 5}
                error={messageHelper !== ""}
                helperText={messageHelper}
                fullWidth
                placeholder="Hello! Here's some more details about our project."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  checkMessage(e.target.value);
                }}
              />
            </Grid>
            <Grid item className={classes.sectionContainer}>
              <Typography variant="body1" paragraph>
                We can create this custom digital solution for an estimated{" "}
                <span className={classes.cost}>${cost.toFixed(2)}</span>
              </Typography>
              <Typography variant="body1">
                Fill out your name, number and email, place your request and
                we'll get back to you with details moving forward and a final
                price.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md direction="column">
            {service === "Website Development" ? (
              <Grid item container alignItems="center">
                <Grid item>
                  <img src={check} alt="chekmark" />
                </Grid>
                <Grid item>
                  <Typography variant="body1">{websiteMessage()}</Typography>
                </Grid>
              </Grid>
            ) : (
              [platformsMessage(), featuresMessage(), restMessage()].map(
                (message, index) => (
                  <Grid item container alignItems="center" key={index}>
                    <Grid item>
                      <img src={check} alt="chekmark" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">{message}</Typography>
                    </Grid>
                  </Grid>
                )
              )
            )}

            <Grid item>
              <Button variant="contained" className={classes.estimateButton}>
                Place request
                <SendIcon className={classes.sendIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateModal;
