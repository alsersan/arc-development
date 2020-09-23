import React from "react";

import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  success: {
    backgroundColor: "#54b050",
  },
  error: {
    backgroundColor: "#ee4c34",
  },
}));

const SnackbarMessage = ({ message, type, open, onClose }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose({ open: false, type: "", message: "" });
  };

  return (
    <Snackbar
      open={open}
      message={message}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      ContentProps={{
        className: type === "success" ? classes.success : classes.error,
      }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackbarMessage;
