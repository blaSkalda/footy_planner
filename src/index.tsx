import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);