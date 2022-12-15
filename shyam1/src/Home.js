import React,{useEffect , useState} from "react";
import  {Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {



const [Data , setDate] = useState (null);

useEffect( ()=>{getData()} , []);


  const getData = () =>{
    fetch('https://api.github.com/users')
    .then( (obj) =>obj.json() )
    .then( (result) =>{ setDate(result)} )
  }



  if(Data == null){
    return(<p>Loading...</p>)
  }
  return (
    <div>


 <Row xs={1} md={4} className="g-4">
{
  Data.map(
    (ele,ind) =>{ return (   
      <Col>
      <Card style={{ width: '21rem' , margin:'23px' }}>
      <Card.Img variant="top" src={ele.avatar_url} />
      <Card.Body>
        <Card.Title>{ele.login}</Card.Title>
        <Card.Text>
          Some card's content.
        </Card.Text>
        <Link to={`/Profile/${ele.login}`}><Button variant="primary"> More </Button></Link> 
      </Card.Body>
    </Card>
    </Col>

    )}
  )
}
</Row>

    </div>
  );
}
