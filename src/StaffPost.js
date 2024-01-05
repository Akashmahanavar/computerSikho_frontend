import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import "./login.css";

export const StaffPost = () => {
    const [staff, setStaff] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStaff(values => ({ ...values, [name]: value }))
    }
    const handleUpload = (event) => {

        const name = event.target.name;
        let value = event.target.value;

        console.log(value);
        console.log(typeof value);
        value =  value.replace('C:\\fakepath\\','../Upload/')
               console.log(value);
        setStaff(values => ({ ...values, [name]: value }))
    }

    const fnameRegExp = /^[A-Z \s a-z]{3,100}$/;
    const mobileRegExp = /(0|91)?[7-9][0-9]{9}/;
    const userRegExp = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    // const passRegExp = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
    const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const validate = Yup.object({
        staffName: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct Name')
            .max(20, 'Must be 20 characters or less')
            .required('First Name is Mandatory'),
            staffMobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),
            staffEmail: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
            staffUsername: Yup.string()
            .matches(userRegExp, 'Please Enter correct username')
            .required('Please Enter your username'),
            staffPassword: Yup.string()
            .matches(passRegExp, 'Please Enter correct password')
            .required('Please Enter your password'),
    })
    return (
        <Formik
            initialValues={{
                staffName: '',
                photoUrl: '',
                staffMobile: '',
                staffEmail: '',
                staffUsername: '',
                staffPassword: '',

            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(staff);
                fetch("http://localhost:8080/staffs", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                navigate('/StaffGet');
            }}
        >
            {formik => (
                <div>
                    <h1 className="title">Add Staff</h1>

                    <div className='enquiry'>

                        <Form className='frm' style={{ marginTop: -300 }}>
                            <TextField label="Name" name="staffName" type="text" onInput={handleChange} />
                            <TextField label="Mobile Number" name="staffMobile" type="number" onInput={handleChange} />
                            <TextField label="Photo" name="photoUrl" type="file" onInput={handleUpload} />
                            <TextField label="Email" name="staffEmail" type="text" onInput={handleChange} />
                            <TextField label="Username" name="staffUsername" type="text" onInput={handleChange} />
                            <TextField label="Password" name="staffPassword" type="text" onInput={handleChange} />
                            <button className="btn btn-dark mt-3" type="submit">Register</button> &nbsp;&nbsp;
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}
export default StaffPost;