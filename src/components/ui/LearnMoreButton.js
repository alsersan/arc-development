import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import ButtonArrow from "./ButtonArrow";

const useStyles = makeStyles((theme) => ({
  small: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    margin: "1rem 0",
  },
  big: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    borderWidth: 2,
    height: 45,
    width: 145,
  },
}));

const LearnMoreButton = ({ type, color, style, route }) => {
  const classes = useStyles();
  const className = type === "small" ? classes.small : classes.big;

  return (
    <Button
      className={className}
      style={{ ...style, color: color, borderColor: color }}
      variant="outlined"
      component={Link}
      to={route}
    >
      <span style={{ marginRight: 5 }}>Learn More</span>
      <ButtonArrow height={20} width={20} fill={color} />
    </Button>
  );
};

export default LearnMoreButton;
