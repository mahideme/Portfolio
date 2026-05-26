import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/About';
import Work from './components/Work';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
