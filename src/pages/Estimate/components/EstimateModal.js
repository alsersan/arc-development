import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    padding: "1rem 1.5rem",
    textAlign: "center",
  },
  sectionContainer: {
    margin: "1.5rem 0",
  },
}));

const EstimateModal = ({ open, onClose }) => {
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
          <Grid item container direction="column">
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
                We can create this custom digital solution for an estimated
              </Typography>
              <Typography variant="body1">
                Fill out your name, number and email, place your request and
                we'll get back to you with details moving forward and a final
                price.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateModal;
