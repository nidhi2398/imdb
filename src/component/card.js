import React from "react";
import {Card} from "react-bootstrap";

let EachCard=({data})=>{
return (<Card style={{ width: '20rem',padding:"30px 30px",backgroundColor:"black"}}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data.poster}`}/>
  <Card.Body style={{color:"white",textAlign:"centre"}}>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
      {data.rating}/10 {data.year[0]}
    </Card.Text>
  </Card.Body>
</Card>)
}
export default EachCard;