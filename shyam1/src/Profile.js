import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";

export default function Profile() {



const [Data , setDate] = useState ([]);
useEffect( ()=>{getData()} , []);



const {id}=useParams();



const getData = () =>{
  fetch(`https://api.github.com/users/${id}`)
  .then( (obj) =>obj.json() )
  .then( (result) =>{ setDate(result)} )
}



// if(Data == null){
//   return(<p>Loading...</p>)
// }
console.log(id);
  return (
    <div>
{
  <center>
    <h1>Name : {Data.name}</h1>
    <img src={Data.avatar_url} alt={Data.name} />
    <h3>Followers : {Data.followers}</h3>
    <h3>Following : {Data.following}</h3>
  </center>
}

    </div>
  )
}
