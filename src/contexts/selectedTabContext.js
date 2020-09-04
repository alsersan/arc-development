import React, { useState, useContext, useEffect } from "react";

const SelectedTabContext = React.createContext();

const SelectedTabProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);

  useEffect(() => {
    console.log(window.location.hash.substring(1));
    switch (window.location.hash.substring(1)) {
      case "/":
        setTabIndex(0);
        break;
      case "/services":
        setTabIndex(1);
        setMenuIndex(0);
        console.log("serVCIES");
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
        console.log("DEFAULT");
        break;
    }
  }, []);

  return (
    <SelectedTabContext.Provider
      value={{ tabIndex, setTabIndex, menuIndex, setMenuIndex }}
    >
      {children}
      {console.log(`tabIndexContext: ${tabIndex}`)}
      {console.log(`menuIndexContext: ${menuIndex}`)}
    </SelectedTabContext.Provider>
  );
};

const useTabContext = () => useContext(SelectedTabContext);

export { SelectedTabProvider, useTabContext };
