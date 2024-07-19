import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Count from './Components/Count/Count';
import RelojDigital from './Components/Reloj/Reloj';
import Timer from './Components/Timer/Timer';
import LoginForm from './Components/LoginForm/LoginForm';
import Enlaces from './Components/Enlaces/Enlaces';

const App = () => {
    
     return (
    <>     
      <Enlaces/>
      <Routes>
        <Route path='/' element={<Count/>}  />
        <Route path='RelojDigital' element={<RelojDigital/>}/>        
       <Route path='Timer' element={<Timer/>}/>
       <Route path='LoginForm' element={<LoginForm/>}/>
      </Routes>
    </>
  )
};

export default App;
