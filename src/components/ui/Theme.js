import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#444";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      color: "white",
      fontFamily: "Raleway",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem",
      letterSpacing: ".1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "#5c5c5c",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1.75rem",
      color: arcBlue,
    },
    h6: {
      fontFamily: "Raleway",
      fontWeight: "500",
      color: arcBlue,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: "300",
    },
    subtitle1: {
      color: arcGrey,
      fontSize: "1.25rem",
      fontWeight: "300",
    },
    body1: {
      color: arcGrey,
      fontWeight: "300",
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.8rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottomColor: arcBlue,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottomColor: arcBlue,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderWidth: "2px",
          borderColor: arcBlue,
        },
        "&$error $notchedOutline": {
          borderWidth: "2px",
        },
      },
      notchedOutline: {
        borderColor: arcBlue,
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
});
