import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";

import Header from "./ui/Header";
import Home from "./pages/Home";
import Footer from "./ui/Footer";

const App = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <Header
            routeIndex={routeIndex}
            setRouteIndex={setRouteIndex}
            menuIndex={menuIndex}
            setMenuIndex={setMenuIndex}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => <div>Custom Software</div>}
            />
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
            <Route exact path="/contact" component={() => <div>Contact</div>} />
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            />
          </Switch>
          <Footer setRouteIndex={setRouteIndex} setMenuIndex={setMenuIndex} />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;