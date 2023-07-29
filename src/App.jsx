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
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route  element={<HostLayout/>}>
              <Route path='/host' element={<DashBoard/>}/>
                <Route path='/host/income' element={<Income/>}/>
                <Route path='/host/reviews' element={<Reviews/>}/>
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VansDetail />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
