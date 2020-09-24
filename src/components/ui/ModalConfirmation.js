import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
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
  outlinedButton: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontWeight: "bold",
    width: "8rem",
  },
  modalHeader: {
    padding: "1rem 1.5rem",
    textAlign: "center",
  },
  modalSectionContainer: {
    marginBottom: "1rem",
  },
  modalSection: {
    width: "6rem",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  modalData: {
    minWidth: "14rem",
    maxWidth: "20rem",
  },
  modalDataMessage: {
    minWidth: "14rem",
    maxWidth: "20rem",
    maxHeight: "8rem",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      maxHeight: "15rem",
    },
  },
  modalButtonContainer: {
    margin: "1rem 0",
  },
}));

const ModalConfirmation = ({
  open,
  setOpen,
  name,
  email,
  phone,
  message,
  onClick,
  loading,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      fullScreen={matchesXS}
      open={open}
      onClose={() => setOpen(false)}
      disableBackdropClick
      disableEscapeKeyDown
      //in order to overlay the header and prevent accidental navigation
      style={{ zIndex: "2000" }}
    >
      <Grid container direction="column">
        <Grid item className={classes.modalHeader}>
          <Typography variant="h4">Confirm Data</Typography>
        </Grid>

        <Grid item container direction="column">
          <DialogContent dividers>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant="body1" className={classes.modalSection}>
                  Name:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant="body1">{name}</Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant="body1" className={classes.modalSection}>
                  Email:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant="body1">{email}</Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.modalSectionContainer}>
              <Grid item>
                <Typography variant="body1" className={classes.modalSection}>
                  Phone:
                </Typography>
              </Grid>
              <Grid item className={classes.modalData}>
                <Typography variant="body1">{phone}</Typography>
              </Grid>
            </Grid>
            <Grid item container direction={matchesXS ? "column" : "row"}>
              <Grid item>
                <Typography variant="body1" className={classes.modalSection}>
                  Message:
                </Typography>
              </Grid>
              <Grid item className={classes.modalDataMessage}>
                <Typography variant="body1">{message}</Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <Grid
            item
            container
            justify="space-evenly"
            className={classes.modalButtonContainer}
          >
            {loading ? (
              <CircularProgress size={36} />
            ) : (
              <React.Fragment>
                <Button
                  variant="outlined"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                  className={classes.outlinedButton}
                >
                  cancel
                </Button>

                <Button
                  variant="contained"
                  onClick={onClick}
                  disabled={loading}
                  className={classes.containedButton}
                >
                  confirm
                </Button>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalConfirmation;
