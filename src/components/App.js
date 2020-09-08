import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";

import Header from "./ui/Header";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Footer from "./ui/Footer";
import CustomSoftware from "../pages/CustomSoftware";
import { SelectedTabProvider } from "../contexts/selectedTabContext";

const App = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <SelectedTabProvider>
            <Header
              routeIndex={routeIndex}
              setRouteIndex={setRouteIndex}
              menuIndex={menuIndex}
              setMenuIndex={setMenuIndex}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/customsoftware" component={CustomSoftware} />
              <Route
                exact
                path="/mobileapps"
                component={() => <div>Mobile App</div>}
              />
              <Route
                exact
                path="/websites"
                component={() => <div>Websites</div>}
              />
              <Route
                exact
                path="/revolution"
                component={() => <div>Revolution</div>}
              />
              <Route exact path="/about" component={() => <div>About</div>} />
              <Route
                exact
                path="/contact"
                component={() => <div>Contact</div>}
              />
              <Route
                exact
                path="/estimate"
                component={() => <div>Estimate</div>}
              />
            </Switch>
            <Footer />
          </SelectedTabProvider>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
