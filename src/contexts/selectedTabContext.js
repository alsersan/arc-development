import React, { useState, useContext, useEffect } from "react";

const SelectedTabContext = React.createContext();

const SelectedTabProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const [route, setRoute] = useState(window.location.hash.substring(1));

  const updateRoute = () => {
    setRoute(window.location.hash.substring(1));
  };

  useEffect(() => {
    window.addEventListener("hashchange", updateRoute);

    switch (route) {
      case "/":
        setTabIndex(0);
        break;
      case "/services":
        setTabIndex(1);
        setMenuIndex(0);
        break;
      case "/customsoftware":
        setTabIndex(1);
        setMenuIndex(1);
        break;
      case "/mobileapps":
        setTabIndex(1);
        setMenuIndex(2);
        break;
      case "/websites":
        setTabIndex(1);
        setMenuIndex(3);
        break;
      case "/revolution":
        setTabIndex(2);
        break;
      case "/about":
        setTabIndex(3);
        break;
      case "/contact":
        setTabIndex(4);
        break;
      case "/estimate":
        setTabIndex(5);
        break;
      default:
        break;
    }
    return () => window.removeEventListener("hashchange", updateRoute);
  }, [route]);

  return (
    <SelectedTabContext.Provider
      value={{ tabIndex, setTabIndex, menuIndex, setMenuIndex }}
    >
      {children}
    </SelectedTabContext.Provider>
  );
};

const useTabContext = () => useContext(SelectedTabContext);

export { SelectedTabProvider, useTabContext };
