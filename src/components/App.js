import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "../pages/Home";
import Services from "../pages/Services";
import CustomSoftware from "../pages/CustomSoftware";
import MobileApp from "../pages/MobileApp";
import { SelectedTabProvider } from "../contexts/selectedTabContext";
import { OpenDrawerProvider } from "../contexts/openDrawerContext";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <SelectedTabProvider>
            <OpenDrawerProvider>
              <Header />
            </OpenDrawerProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/customsoftware" component={CustomSoftware} />
              <Route exact path="/mobileapps" component={MobileApp} />
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
