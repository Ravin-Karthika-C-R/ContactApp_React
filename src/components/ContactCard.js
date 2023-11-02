import React from "react";

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
function ContactCard({item}) {
  return (
    <div>
    <Link to={`/view/${item.name}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.profile} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">View Details</Button>

          </Card.Body>
    </Card>
    </Link>
   
    </div>
  )
}
export default ContactCard