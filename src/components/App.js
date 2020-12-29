import React from "react";
import Navbar from "./Navbar";
import HomeCoverSection from "./HomeCoverSection";
import "../styles/styles.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeCoverSection />
    </div>
  );
}

export default App;
