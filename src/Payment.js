import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./login.css";

export const Payment = () => {
    const [payment, setPayment] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    const handleChange = (event) => {
      
        const name = event.target.name;
        const value = event.target.value;
        setPayment(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
       // setPayment(Id);
        let demo = JSON.stringify(payment);
        console.log();
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/payments", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c => c.json()).then(r => console.log(r));
        alert("your payment has been successfully done!")
        navigate('/Printing/'+Id);
        event.preventDefault();
    }
    return (
        <div>
            <div className='enquiry'>

                <form onSubmit={handleSubmit}>
                <label><b>Student Id:</b></label>
                    <input
                        type="number"
                        name="student"
                        value={payment.student || Id}
                        onChange={handleChange}
                    /><br></br>
                    <label><b>Amount:</b></label>
                    <input
                        type="number"
                        name="amount"
                        value={payment.amount}
                        onChange={handleChange}
                    /><br></br>
                    <label><b>Payment type:</b></label>
                    <select name="paymentTypeMaster" onChange={handleChange}>
                        <option value="-1">Select Payment Type</option>
                        <option value="1">UPI</option>
                        <option value="2">NETBANKING</option>
                        <option value="3">DEBITCARD</option>
                    </select>
                    <input type="submit" value="Done" />
                </form>
            </div>
        </div>
    )



}
export default Payment;

