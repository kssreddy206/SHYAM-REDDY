import React from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import Navbar from './Navbar';
import {Route,Routes} from "react-router-dom";

function App (){
  
  return(
    <div>
      <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/Page1' element={<Page1/>}/>
      <Route path='/Page2' element={<Page2/>}/>
      <Route path='/Page3' element={<Page3/>}/>
      </Routes>
    <Navbar />
    </div>
  );
}

export default App;

