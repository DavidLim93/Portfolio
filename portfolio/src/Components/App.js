import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Projects from './Projects';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className='header'>David Lim's Portfolio</h1>
     <Navbar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
     </Routes>
    </div>
  );
}

export default App;
