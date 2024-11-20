import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import ProfessionalExperience from "./components/ProfessionalExperience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

// This will ensure the footer stays at the bottom
function App() {
  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Wrapper to allow footer to stay at bottom */}
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-me" element={<ProfessionalExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Footer will always stay at the bottom */}
      </div>
    </Router>
  );
}

export default App;
