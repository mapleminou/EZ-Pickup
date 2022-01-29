import React from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){

  return(
    <div>      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      <div><h1>hi</h1></div>
    </div>
  );
}

export default App;