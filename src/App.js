import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About"; // Import your pages
import Events from "./components/pages/Events";
import Faq from "./components/pages/Faq";
import Member from "./components/pages/Member";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/members" element={<Member />} /> {/* Corrected path */}
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
