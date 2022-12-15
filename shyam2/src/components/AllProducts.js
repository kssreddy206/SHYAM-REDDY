import React,{useEffect, useState} from 'react';
import Design from './Design';
import {useParams} from "react-router-dom";


export default function AllProducts() {
    const {id} = useParams();

    useEffect( ()=>{shyam()} , [id]);
// console.log(id);
    const shyam = () =>{
        fetch(`http://localhost:3000/products/?catagory=${id}`)
        .then( (obj)=> obj.json() )
        .then( (d)=> setData(d) )
    }

const [Data , setData] = useState([]);

console.log(Data);
  return (
    <div>
        {
            Data.map((ele)=>{return(<Design items = {ele}> </Design>)})
        }
    </div>
  )
}
