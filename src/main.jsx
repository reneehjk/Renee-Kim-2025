import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AppLayout from "./Layout";

import Plotd from "./pages/projects/Plotd.jsx";
import Kimchi from "./pages/projects/Kimchi.jsx";
import Qux from "./pages/projects/Qux.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      
        <NavBar />
        <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
            <Route path="/projects/plotd" element={<Plotd />} />
            <Route path="/projects/kimchi-studios" element={<Kimchi />} />
            <Route path="/projects/qux" element={<Qux />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </AppLayout>
        <Footer />
      
    </BrowserRouter>
  </StrictMode>
);
