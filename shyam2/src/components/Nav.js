import React from 'react';
import {Link} from "react-router-dom";

export default function Nav() {
    const sam = ["mobile" , "laptop"];
  return (
    <div>
        {
            sam.map((ele) =>{
                return(
                    <Link to={`${ele}`}> {ele} </Link>
                )
            })
        }
    </div>
  )
}
