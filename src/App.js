import React from 'react';
import './App.css';
import { NavBar, Home, About, Stack, Contact, Footer } from './components';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <About/>
      <Stack/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
