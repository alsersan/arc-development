import React, { useState, useContext } from "react";

const OpenDrawerContext = React.createContext();

const OpenDrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <OpenDrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </OpenDrawerContext.Provider>
  );
};

const useDrawerContext = () => useContext(OpenDrawerContext);

export { OpenDrawerProvider, useDrawerContext };
