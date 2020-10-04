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
import Websites from "../pages/Websites";
import Revolution from "../pages/Revolution";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Estimate from "../pages/Estimate";
import ScrollToTop from "./ScrollToTop";
import { SelectedTabProvider } from "../contexts/selectedTabContext";
import { OpenDrawerProvider } from "../contexts/openDrawerContext";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <ScrollToTop />
          <SelectedTabProvider>
            <OpenDrawerProvider>
              <Header />
            </OpenDrawerProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/customsoftware" component={CustomSoftware} />
              <Route exact path="/mobileapps" component={MobileApp} />
              <Route exact path="/websites" component={Websites} />
              <Route exact path="/revolution" component={Revolution} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/estimate" component={Estimate} />
            </Switch>
            <Footer />
          </SelectedTabProvider>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
