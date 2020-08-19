import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software Development", link: "/customsoftware" },
  { name: "Mobile App Development", link: "/mobileapps" },
  { name: "Website Development", link: "/websites" },
];

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    padding: "0 20px",
    height: "5.5rem",
  },
  indicator: {
    height: 4,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
    margin: "0 20px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    "&:not(:hover)": {
      opacity: "0.7",
    },
  },
}));

const HeaderTabs = ({ routeIndex, setRouteIndex, menuIndex, setMenuIndex }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuitemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setMenuIndex(index);
    setRouteIndex(1);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const routes = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHashpopup: anchorEl ? "true" : undefined,
      onMouseOver: handleMenuOpen,
    },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        classes={{ indicator: classes.indicator }}
        value={routeIndex}
        onChange={(e, newIndex) => setRouteIndex(newIndex)}
      >
        {routes.map((tab) => (
          <Tab
            key={tab.name}
            disableRipple
            className={classes.tab}
            component={Link}
            to={tab.link}
            label={tab.name}
            aria-owns={tab.ariaOwns}
            aria-haspopup={tab.ariaHashpopup}
            onMouseOver={tab.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => setRouteIndex(null)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: classes.menu }}
        // one unit more than the toolbar
        style={{ zIndex: "1302" }}
        elevation={4}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            onClick={(e) => handleMenuitemClick(e, index)}
            component={Link}
            to={option.link}
            selected={index === menuIndex && routeIndex === 1}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderTabs;
