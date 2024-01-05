import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"





export const PostEnquiry1 = () => {
    const [enquiry, setEnquiry] = useState({});
    const [course, setCourse] = useState([]);
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEnquiry(values => ({ ...values, [name]: value }))


    }
    useEffect(() => {
        let urld = "http://localhost:8080/Courses";
        fetch(urld)
            .then(res => res.json())
            .then(
                (result) => { setCourse(result); }
            );
    })

    const fnameRegExp = /^[A-Z \s a-z]{3,100}$/;
    const mobileRegExp = /(0|91)?[7-9][0-9]{9}/;
    const phoneRegExp = /0[0-9]{10,10}/;



    const validate = Yup.object({
        enquirerName: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct Name')
            .max(20, 'Must be 20 characters or less')
            .required('First Name is Mandatory'),
        enquirerAddress: Yup.string()
            .required('is required'),

        enquirerEmailId: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        enquirerMobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),
        enquirerAlternateMobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),
        enquirerQuery: Yup.string()
            .max(50, 'Must be less than 500 letters')
            .required('Please let us know your query'),
        studentName: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct First Name')
            .max(20, 'Must be 20 characters or less')
            .required('Name is Mandatory'),
    })
    // course dynamic
    let optioncourses;
    optioncourses = course.map((c) => (
        <option key={c.courseId} value={c.courseId}>
            {c.courseName}
        </option>
    ));


    return (
        <Formik
            initialValues={{
                enquirerName: '',
                enquirerAddress: '',
                enquirerEmailId: '',
                enquirerMobile: '',
                enquirerAlternateMobile: '',
                enquirerQuery: '',
                studentName: '',
                course: '',
            }}

            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(enquiry);
                fetch("http://localhost:8080/Enquiries", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                alert("you have successfully Register you Enquiry")
                navigate('/Home');
            }}
        >
            {formik => (
                <div className="enquiry">
                    {/* <h1 className="my-4 font-weight-bold .display-4">Inquiry</h1> */}
                    <Form className="frm">
                        <TextField label="Name" name="enquirerName" type="text" onInput={handleChange} />
                        <TextField label="Address" name="enquirerAddress" type="text" onInput={handleChange} />

                        <TextField label="Email" name="enquirerEmailId" type="email" onInput={handleChange} />
                        <TextField label="Mobile Number" name="enquirerMobile" type="number" onInput={handleChange} />
                        <TextField label="Alternate Mobile" name="enquirerAlternateMobile" type="number" onInput={handleChange} />
                        <TextField label="query" name="enquirerQuery" type="text" onInput={handleChange} />
                        <TextField label="Student Name" name="studentName" type="text" onInput={handleChange} />
                        {/* <TextField label="Course" name="course_id" type="text" onInput={handleChange} /> */}
                        {/* <select name="course_id" onChange={handleChange} style={{ display: "block" }}>
                            <option value="1" label="PGDAC">{" "} PGDAC </option>
                            <option value="2" label="PGDBDA">PGDBDA</option>

                            <option value="3" label="PGDMC"> PGDMC </option>
                        </select> */}
                        <label className="">
                            Courses :
                            <select name='course' placeholder='select-course' onChange={handleChange}>
                                <option disabled selected>
                                    Select Course
                                </option>
                                {optioncourses}

                            </select>
                        </label>

                        <button className="btn btn-dark mt-3" type="submit">Register</button> &nbsp;&nbsp;
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default PostEnquiry1;