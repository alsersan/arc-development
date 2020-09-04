import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import FreeEstimateButton from "../../FreeEstimateButton";
import { useTabContext } from "../../../../contexts/selectedTabContext";

const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software Development", link: "/customsoftware" },
  { name: "iOS/Android App Development", link: "/mobileapps" },
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
    transitionDuration: 200,
    transitionTimingFunction: "ease",
  },

  estimateButton: {
    margin: "1.15rem 20px",
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

const HeaderTabs = () => {
  const { tabIndex, setTabIndex, menuIndex, setMenuIndex } = useTabContext();

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
    setTabIndex(1);
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
        value={tabIndex}
        onChange={(e, newIndex) => setTabIndex(newIndex)}
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

        <FreeEstimateButton className={classes.estimateButton} />
      </Tabs>

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
            selected={index === menuIndex && tabIndex === 1}
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
