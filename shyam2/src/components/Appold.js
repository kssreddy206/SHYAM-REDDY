import React, { useEffect, useState } from 'react';
import Mobile from './components/Mobile';
import Laptop from './components/Laptop';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    JSONDATA();
  }, []);

  const JSONDATA = () => {
    fetch(' http://localhost:3000/Categories')
      .then((obj) => obj.json())
      .then((jsonip) => {
        setData(jsonip);
      });
  };

  const [Data, setData] = useState(null);

  if (Data == null) {
    return <p>Loading...</p>;
  }

 

  var allmobiles = Data.filter( (mob) =>{  if(mob.caregory === "mobile" ) return( mob)  }    )

  console.log(allmobiles);
  return (
    <div>
    <BrowserRouter>
        <Link to="/Mobile">Mobile</Link>
        <Link to="/Laptop">Laptop</Link>
        <Routes>
          <Route path="/Mobile" element={<Mobile mobile={allmobiles}/>} />
          <Route path="/Laptop" element={<Laptop />} />
        </Routes>
  </BrowserRouter>
        
      {Data.map((e, i) => {
        return <li>{e.title}</li>;
      })}
    </div>
  );
}

export default Home;
