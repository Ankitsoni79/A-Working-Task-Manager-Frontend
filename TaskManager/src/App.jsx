import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

const App = () => {
  const [section, setSection] = useState("Home");

  return (
    <div className="container mt-3">
      <Navbar setSection={setSection} />

      {section === "Home" && <Home />}
      {section === "About" && <About />}
      {section === "Project" && <Project />}

      <Footer />
    </div>
  );
};

export default App;
