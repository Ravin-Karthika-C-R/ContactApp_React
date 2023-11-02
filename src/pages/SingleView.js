import axios from "axios";
import React, { useEffect, useState } from "react"
import { Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"


function SingleView() {

    const [AllData,SetDta]=useState([])

    const {name}=useParams()
    console.log(name);

    const fetchAllDatas=async()=>{
        const result=await axios.get('/contacts.json')
        SetDta(result.data.contacts);
    
    }
    useEffect(()=>{
        fetchAllDatas();
    },[])
    // console.log(AllData);
    const contact = AllData.find((contact) => contact.name === name);

    
  return (
    <div>
<ListGroup>
    
</ListGroup>
{contact ? (
        <div className='me-5'>
            <Row className='p-5'>
            <Col>
            {/* <p>{singleData.name}</p> */}
            <img style={{height:'600px',width:'100%'}} src={contact.profile} alt={contact.name} ></img>

            {/* <img src={singleData.photograph} /> */}
            </Col>
            <Col className='p-4 ms-3'>
                <h1 className='text-danger'>{contact.name}</h1>
                <ListGroup className='fs-5 pt-5 mt-3 w-100'>
                    <ListGroup.Item className='mt-3'> <span style={{color:'#F94C10'}}> Email </span>  : {contact.email}</ListGroup.Item>
                    <ListGroup.Item className='mt-3'><span style={{color:'#F94C10'}}> Mobile </span> : {contact.mobile}</ListGroup.Item>
                    <ListGroup.Item className='mt-3'><span style={{color:'#F94C10'}}> Location </span> : {contact.location}</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>

        </div>
      ) : (
        <p>Contact not found</p>
      )}
    </div>
  )
}
export default SingleView