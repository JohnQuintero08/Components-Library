import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Accordions from "./components/Accordions"
import Banners from "./components/Banners"
import Buttons from "./components/Buttons";
import Cards from "./components/Cards"
import Carousels from "./components/Carousels"
import Footers from "./components/Footer"
import Ratings from "./components/Ratings";

export default function App(){
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='accordions' element={<Accordions />}/>
              <Route path='banners' element={<Banners />}/>
              <Route path='buttons' element={<Buttons />}/>
              <Route path='cards' element={<Cards />}/>
              <Route path='carousels' element={<Carousels />}/>
              <Route path='footers' element={<Footers />}/>
              <Route path='ratings' element={<Ratings />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
