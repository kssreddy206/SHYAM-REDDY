import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
            
  <div classname="container-fluid">
    


    <div id="nav">
        <p id="nav1"><Link to="/Page1">Page1</Link></p>
        <p id="nav2"><Link to="/Page2">Page2</Link></p>
        <p id="nav3"><Link to="/Page3">Page3</Link></p>
    </div>



  </div>
</nav>
        </div>
    )
}
export default Navbar;