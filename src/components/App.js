import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "../styles/styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/about-me">About me</Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="*">404 Page</Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
