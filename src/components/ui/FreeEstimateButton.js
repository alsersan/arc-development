import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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

const FreeEstimateButton = ({ style, className }) => {
  const classes = useStyles();

  return (
    <Button
      className={`${className} ${classes.estimateButton}`}
      style={style}
      variant="contained"
      component={Link}
      to="/estimate"
    >
      Free Estimate
    </Button>
  );
};

export default FreeEstimateButton;
