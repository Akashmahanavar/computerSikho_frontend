
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./home.css";
import "./login.css";

function Printing() {
    const [payment, setPayment] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/studentspay/" + Id)
            .then(res => res.json())
            .then((result) => {
                setPayment(result);
            }
            );
    }, []);
    
    const callLogOut=()=>{
      sessionStorage.removeItem("student-info");
      navigate('/Home');
    }
    const printReceipt=()=>{
             window.print();
    }   
    return (
        <div  className="enquiry">
    <Card style={{ width: '70rem' }} className="card">
      <Card.Body>
        <Card.Title>Transaction Details</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item ><strong>Transaction Id :-</strong>{payment.paymentId}</ListGroup.Item>
        <ListGroup.Item ><strong>Student Id :-</strong>{payment.student}</ListGroup.Item>
        <ListGroup.Item><strong>Course :-</strong> {payment.course}</ListGroup.Item>
        <ListGroup.Item><strong>Amount :-</strong> {payment.amount}</ListGroup.Item>
        <ListGroup.Item><strong>Payment:-</strong>  {payment.paymentDate}</ListGroup.Item>
        <ListGroup.Item><strong>Payment Status:-</strong>Done</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href={"/Payment/"+Id}>Make Payment </Card.Link> */}
        {/* <Button href="/Home" className='bt hide-on-print'>Home</Button> */}
        <Button href="/Home" className='bt hide-on-print' onClick={callLogOut}>LogOut</Button>
        <Button className="hide-on-print" onClick={printReceipt}>Print</Button>
      </Card.Body>
    </Card>
        </div>
    )
}
export default Printing;