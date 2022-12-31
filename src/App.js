import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, Footer, About } from './components';
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <About/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
