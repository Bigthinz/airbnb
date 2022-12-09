import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import {
  Rentals
} from './Components';

import Nav from './Components/Nav';
import Login from './Components/Login';
import SingleRental from './Components/SingleRental';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Rentals/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='rooms/:id' element={<SingleRental/>}/>
      {/* <div className="">
        <Nav/>
      <Rentals/>
    </div> */}
    </Routes>
   
  );
}

export default App;
