import React from "react";
import "../styles/styles.css"
import Navbar from "./Navbar";

import Home from "./home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
