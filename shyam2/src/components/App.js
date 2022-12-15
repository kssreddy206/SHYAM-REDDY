import React from 'react';
import AllProducts from './AllProducts';
import Nav from './Nav';

import {Routes , Route} from "react-router-dom";



export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path=":id" element={<AllProducts/>} />
      </Routes>
    </div>
  )
}
