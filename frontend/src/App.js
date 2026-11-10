import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import Footer from "./components/Footer";
import "./styles/App.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";

function App() {
  const[role,setRole]=useState("user");
  return (
    <BrowserRouter>
      <Navbar role={role} setRole={setRole}/>
      <Routes>
        <Route path="/" element={<HotelList role={role}/>} />
        <Route path="/hotel/:id" element={<HotelDetails role={role}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;