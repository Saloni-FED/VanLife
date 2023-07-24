import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
