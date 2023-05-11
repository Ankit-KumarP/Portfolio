import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Projects';
import MyWork from './routes/MyWork';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
