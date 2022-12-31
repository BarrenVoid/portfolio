import React from 'react';
import './App.css';
import { NavBar, Footer, About, Home } from './components';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <About/>
      <Footer/>
    </main>
  );
}

export default App;
