import React, { useState } from "react";
import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";

import CallToAction from "../components/ui/CallToAction";
import ModalConfirmation from "../components/ui/ModalConfirmation";
import SnackbarMessage from "../components/ui/SnackbarMessage";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "0 4rem 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 4rem 3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 2rem 3rem",
    },
  },
  sectionContainer: {
    margin: "1.5rem 0",
  },
  icon: {
    verticalAlign: "bottom",
    marginRight: "0.5rem",
    color: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "underline",
    },
    [theme.breakpoints.down("md")]: {
      textDecoration: "underline",
    },
  },
  containedButton: {
    width: "8rem",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const Contact = () => {
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

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "",
    message: "",
  });

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

    if (
      name &&
      email &&
      phone &&
      message &&
      !nameHelper &&
      !emailHelper &&
      !phoneHelper &&
      !messageHelper
    ) {
      setOpen(true);
    }
  };

  const onConfirmClick = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-arc-development-b994f.cloudfunctions.net/sendMail",
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        setOpen(false);
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSnackbar({
          open: true,
          type: "success",
          message: "message sent successfully",
        });
        console.log(res);
      })
      .catch((err) => {
        setOpen(false);
        setLoading(false);
        setSnackbar({
          open: true,
          type: "error",
          message: "Something went wrong. Please try again",
        });
        console.log(err);
      });
  };

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      {console.log(`Name is: ${name}`)}
      <Grid
        item
        container
        direction="column"
        lg={4}
        className={classes.mainContainer}
      >
        <Grid item className={classes.sectionContainer}>
          <Typography variant="h2">Contact Us</Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.sectionContainer}
        >
          <Grid item>
            <PhoneIcon className={classes.icon} />
            <Typography variant="body1" display="inline" color="primary">
              <a href="tel:3165728340" className={classes.link}>
                (316) 572-8340
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <EmailIcon className={classes.icon} />
            <Typography variant="body1" display="inline" color="primary">
              <a href="mailto: zach@gmail.com" className={classes.link}>
                zach@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>
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
            placeholder="Hello! We have an idea that we'd just love to share."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              checkMessage(e.target.value);
            }}
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.sectionContainer}
        >
          <Button
            variant="contained"
            className={classes.containedButton}
            style={{ width: "100%" }}
            onClick={onSubmitClick}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>

      {/*--Snackbar message--*/}
      {snackbar.open && (
        <SnackbarMessage
          open={snackbar.open}
          onClose={setSnackbar}
          message={snackbar.message}
          type={snackbar.type}
        />
      )}

      {/*--Dialog (modal)--*/}
      <ModalConfirmation
        name={name}
        email={email}
        phone={phone}
        message={message}
        loading={loading}
        open={open}
        onClose={() => setOpen(false)}
        onClick={onConfirmClick}
      />

      {/*--CallToActopn--*/}
      <Grid item lg={8}>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default Contact;
