import React, { useEffect, useState } from "react"
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ContactCard from "../components/ContactCard";

function Home() {
    const [contacts, seContacts] = useState([])
  const fetchData = async () => {
    const result = await axios.get('/contacts.json')
    // console.log(result.data.contacts);
    //to update code is below
    seContacts(result.data.contacts);
  }

  useEffect(() => {
    fetchData();
  }, [])
//   console.log(db);
  return (
    <div className="me-5 mt-5">
        <Row className="ms-5">
        <h1>Get to know the individuals</h1>
        <Col>
        
        
        </Col>
        
      </Row>
     <Row className="ms-2">
        {
          contacts.map(i => (
            <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
            <ContactCard item={i}></ContactCard>

            </Col>  ))
        }
      </Row>  
    </div>
  )
}
export default Home