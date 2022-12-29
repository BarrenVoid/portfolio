import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
