import VansDetail from "./Pages/VansDetail";
import "./App.css";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Vans from "./Pages/Vans";
import "../src/server";
import DashBoard from "./Pages/Host/DashBoard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./Pages/Host/HostLayout";
import HostVans from "./Pages/Host/HostVans";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/host" element={<HostLayout />}>
                <Route index element={<DashBoard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vansDetail" element={<HostVans />} />
              </Route>
             
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VansDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
