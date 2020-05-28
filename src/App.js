import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Teams from "./components/Teams";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimony from "./components/Testimony";
import Launch from "./components/Launch";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div style={{ marginTop: "-20px" }}>
      <NavBar />
      <MainPage />
      <Teams />
      <About />
      <Portfolio />
      <Testimony />
      <Launch />
      <Footer />
    </div>
  );
}

export default App;
