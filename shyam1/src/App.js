import React from "react";
import {Routes , Route , Link} from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

export default function App() {

  return (
    <div>
<Link to="/Home" >Home</Link>
wdwas
<Routes>
  <Route path="/Profile/:id" element={<Profile/>}  />
  <Route path="/Home" element={<Home/>}  />
</Routes>
FFFF
    </div>
  );
}
