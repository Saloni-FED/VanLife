import VansDetail from "./Pages/VansDetail";
import "./App.css";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Vans from "./Pages/Vans"
import '../src/server'


function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path = '/vans' element={<Vans/>} />
            <Route path='/vans/id' element = {<VansDetail/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
