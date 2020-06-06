import React from 'react';
import './App.css';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import MasterHeader from "./components/MasterHeader";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <MasterHeader />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
