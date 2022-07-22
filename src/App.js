import React from 'react';
import './App.css';
import Root from './Root';
import StandardAligner from './StandardAligner';
import PiggybackAligner from './PiggybackAligner';
import AboutUs from './AboutUs';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {
  return (
    <Router>
      
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM">
        </script>

        <Routes>
            <Route path="/" element={<Root/>}/>
            <Route path="/standard" element={<StandardAligner/>}/>
            <Route path="/piggyback" element={<PiggybackAligner/>}/>
            <Route path="/about" element={<AboutUs/>}/>
        </Routes>
    </Router>
  )
}
