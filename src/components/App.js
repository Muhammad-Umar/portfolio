import React from "react";
import "../styles/styles.css"
import Navbar from "./Navbar";
import HomeCoverSection from "./HomeCoverSection";
import HomeExperience from "./HomeExperience";
import ToolsAndTechnologies from "./ToolsAndTechnologies"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeCoverSection />
      <ToolsAndTechnologies />
      <HomeExperience />
    </div>
  );
}

export default App;
