import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Error404,
  Services,
  CompanyHistory,
} from "./pages";

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}>
      <Route path="services" element={<Services />} />  
      <Route path="history" element={<CompanyHistory />} />  
    </Route>
    <Route path="/events" element={<Events />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Error404 />} />
    </Routes>
    </div>
    );
  }
  
  export default App;
