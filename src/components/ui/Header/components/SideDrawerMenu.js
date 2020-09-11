import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useTabContext } from "../../../../contexts/selectedTabContext";

const drawerOptions = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "The Revolution", link: "/revolution" },
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];

const useStyles = makeStyles((theme) => ({
  drawerIconButton: {
    margin: "0 0.75rem 0 auto",
    padding: 0,
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "2.5rem",
    width: "2.5rem",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    fontWeight: "600",
    color: "white",
    opacity: "0.7",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: "1",
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  drawerItemEstimateSelected: {
    backgroundColor: `${theme.palette.secondary.dark} !important`,
    "& .MuiListItemText-root": {
      opacity: "1",
    },
  },
}));

const SideDrawerMenu = ({ marginClassName }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const { tabIndex, setTabIndex } = useTabContext();

  return (
    <React.Fragment>
      <IconButton
        className={classes.drawerIconButton}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={openDrawer}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={marginClassName} />
        <List>
          {drawerOptions.map((option, index) => (
            <ListItem
              divider
              button
              disableRipple
              key={option.name}
              component={Link}
              to={option.link}
              onClick={() => {
                setOpenDrawer(false);
                setTabIndex(index);
              }}
              classes={{ selected: classes.drawerItemSelected }}
              selected={tabIndex === index}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {option.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            disableRipple
            component={Link}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              setTabIndex(5);
            }}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemEstimateSelected,
            }}
            selected={tabIndex === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideDrawerMenu;
