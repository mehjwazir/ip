import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Mind from './pages/Mind/Mind';
import Body from './pages/Body/Body';
import Nature from './pages/Nature/Nature';
import Post1 from "./pages/Mind/post1/Post1";


function App() {
  return (
      <div className='page-container'>
       <div className='content-wrap'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mind" element={<Mind />} />
        <Route path="/body" element={<Body />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/post1" element={<Post1 />} />
        </Routes>
      </div>
        <Footer />
      </div>
  
      


  );
}

export default App;