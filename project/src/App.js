import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Order from './pages/Order';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse/>} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
