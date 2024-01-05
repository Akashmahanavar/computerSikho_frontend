import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./login.css";
import "./Card.css";
import { height } from "@mui/system";

function PaymentMaster() {
  const [paymentMaster, setPaymentMaster] = useState({});
  const [student, setStudent] = useState({});
  const { Id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/studentdetails/" + Id)
      .then(res => res.json())
      .then((result) => {
        setPaymentMaster(result);
      }
      );

    fetch("http://localhost:8080/students/" + Id)
      .then(res => res.json())
      .then((result) => {
        setStudent(result);
      }
      );
  }, []);

  const callLogOut=()=>{
    sessionStorage.removeItem("student-info");
    navigate('/Home');
  }
  return (
    <div className="enquiry">

      <Card style={{ width: '25rem' }} className="card">
        <Card.Body>
          <Card.Title>Student Details</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush" key={student.studentId}>
          <ListGroup.Item><b>Name</b> : {student.studentName}</ListGroup.Item>
          <ListGroup.Item><b>Address</b> : {student.studentAddress}</ListGroup.Item>
          <ListGroup.Item><b>DOB</b> : {student.studentDob}</ListGroup.Item>
          <ListGroup.Item><b>Age</b> : {student.studentAge}</ListGroup.Item>
          <ListGroup.Item><b>Mobile</b> : {student.studentMobile}</ListGroup.Item>
          <ListGroup.Item><b>Course</b> : {student.course}</ListGroup.Item>
          <ListGroup.Item><b>Batch</b> : {student.batch}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }} className="card">
        <Card.Body>
          <Card.Title>Payment Details</Card.Title>
          <Card.Text>
            Pay as soon as Possible
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" key={paymentMaster.paymentMasterId}>
          <ListGroup.Item> <b>Payment Id</b> : {paymentMaster.paymentMasterId}</ListGroup.Item>
          <ListGroup.Item><b>Course Id</b> : {paymentMaster.course}</ListGroup.Item>
          <ListGroup.Item><b>Student Id</b> : {paymentMaster.student}</ListGroup.Item>
          <ListGroup.Item><b>Pending fees</b> : {paymentMaster.courseFees}</ListGroup.Item>

        </ListGroup>
        <Card.Body>
          {/* <Card.Link href={"/Payment/"+Id}>Make Payment </Card.Link> */}
          <Button href="/StudentLogin" className='bt' onClick={callLogOut}>LogOut</Button>
          <Button href={"/Payment/" + Id} className='bt'>Make Payment</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default PaymentMaster;