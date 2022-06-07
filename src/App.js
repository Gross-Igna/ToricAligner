import React from 'react';
import './App.css';
import ToricAligner from './ToricAligner';
import AboutUs from './AboutUs';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<ToricAligner />}/>
            <Route path="/about" element={<AboutUs />}/>
        </Routes>
    </Router>
  )
}
