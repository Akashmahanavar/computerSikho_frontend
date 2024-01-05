import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"
import "./login.css";
import emailjs from "@emailjs/browser";

const PostStudent = () => {
    const [student, setStudent] = useState({});
    const [course, setCourse] = useState([]);


    const [studentName, setStudent_Name] = useState("");
    const [studentEmailId, setStudent_Email_Id] = useState("");
    const [studentUsername, setStudent_Username] = useState("");
    const [studentPassword, setStudent_Password] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        let urld = "http://localhost:8080/Courses";
        fetch(urld)
            .then(res => res.json())
            .then(
                (result) => { setCourse(result); }
            );
    }, [])

    let optioncourses;
    optioncourses = course.map((c) => (
        <option key={c.courseId} value={c.courseId}>
            {c.courseName}
        </option>
    ));

    const sendEmail = () => {
        let templateParams = {
            studentName,
            studentEmailId,
            studentUsername,
            studentPassword,
        }
        emailjs.send(
            "service_4ahu22q",
            "template_a9i33i9",
            templateParams,
            "QJWlWXC44S3S2O3og"
        )
    };


    const handleChange1 = (event) => {
        console.log(event.target.value);
        setStudent_Name(event.target.value);
    }
    const handleChange2 = (event) => {
        setStudent_Email_Id(event.target.value);
    }
    const handleChange3 = (event) => {
        setStudent_Username(event.target.value);
    }
    const handleChange4 = (event) => {
        setStudent_Password(event.target.value);
    }

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        setStudent(values => ({ ...values, [name]: value }))
    }

    const handleUpload = (event) => {

        const name = event.target.name;
        let value = event.target.value;

        console.log(value);
        console.log(typeof value);
        value = value.replace('C:\\fakepath\\', '../Upload/')
        console.log(value);
        setStudent(values => ({ ...values, [name]: value }))
    }

    const fnameRegExp = /^[A-Z \s a-z]{3,100}$/;
    const fname1RegExp = /^[A-Z  a-z]{3,100}$/;
    const mobileRegExp = /(0|91)?[7-9][0-9]{9}/;
    //  const phoneRegExp = /0[0-9]{10,10}/;
    const ageRegExp = /^[0-9]{1,2}$/;
    const passRegExp = /^[A-Z  a-z]{3,100}$/;

    const validate = Yup.object({
        enquiry: Yup.string()
            .required('enquiry id is required'),
        studentName: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct Name')
            .max(20, 'Must be 20 characters or less')
            .required('Student Name is Mandatory'),
        studentAddress: Yup.string()
            .required('is required'),

        studentEmailId: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),

        studentAge: Yup.string().matches(ageRegExp, 'age is not in range').required('is required'),

        studentMobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),

        studentQualification: Yup.string()
            .max(50, 'Must be less than 50 letters')
            .required('Please let us know your qualification'),

        studentUsername: Yup.string()
            .matches(fname1RegExp, 'Please Enter correct  username')
            .max(20, 'Must be 20 characters or less')
            .required('username is Mandatory'),

        studentPassword: Yup.string().
            matches(passRegExp, 'Please Enter a password contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
            .required('is required'),

    })


    return (
        <Formik
            initialValues={{
                enquiry: '',
                studentName: '',
                studentAddress: '',
                studentGender: '',
                studentDob: '',
                studentAge: '',
                photoUrl: '',
                studentEmailId: '',
                studentQualification: '',
                studentMobile: '',
                studentUsername: '',
                studentPassword: '',
                batch: '',
                course: ''
            }}

            validationSchema={validate}
            onSubmit={values => {

                let demo = JSON.stringify(student);
                console.log(demo)
                fetch("http://localhost:8080/students", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then((res) => { const result = res.json(); return result }).then((res) => {
                    if (res) {
                        alert("you have successfully Enroll For Course check your details in Student Login")
                        sendEmail();
                    }
                    else {
                        alert("invalid information");
                    }
                })
                navigate('/Home');
            }}
        >
            {formik => (
                <div className="enquiry">
                    {/* <h1 className="my-4 font-weight-bold .display-4">Inquiry</h1> */}
                    <Form className="frm">
                        <TextField label="EnquiryId" name="enquiry" type="text" onInput={handleChange} />
                        <TextField label="Name" name="studentName" type="text" onInput={(e) => { handleChange(e); handleChange1(e); }} />
                        <TextField label="Address" name="studentAddress" type="text" onInput={handleChange} />
                        <select name="studentGender" onChange={handleChange} style={{ display: "block" }}>
                            <option value="1" label="Select Gender">{" "}</option>
                            <option value="Male" label="Male">{" "} Male </option>
                            <option value="Female" label="Female">Female</option>
                        </select>
                        <TextField label="DOB" name="studentDob" type="date" onInput={handleChange} />
                        <TextField label="Photo" name="photoUrl" type="file" onInput={handleUpload} />
                        <TextField label="Age" name="studentAge" type="number" onInput={handleChange} />
                        <TextField label="Email" name="studentEmailId" type="email" onInput={(e) => { handleChange(e); handleChange2(e); }} />
                        <TextField label="Mobile Number" name="studentMobile" type="number" onInput={handleChange} />
                        <TextField label="qualification" name="studentQualification" type="text" onInput={handleChange} />

                        {/* <TextField label="Course" name="course_id" type="text" onInput={handleChange} /> */}
                        <label className="">
                            Courses :
                            <select name='course' placeholder='select-course' onChange={handleChange}>
                                <option disabled selected>
                                    Select Course
                                </option>
                                {optioncourses}
                            </select>
                        </label>
                        <br />
                        <select name="batch" label="Batches" onChange={handleChange} style={{ display: "block" }}>
                            <option value="1" label="Select Batch">{" "}</option>
                            <option value="1" label="Morning 10AM to 1PM">{" "} </option>
                            <option value="2" label="Afternoon 2PM to 5PM"></option>
                        </select>
                        <TextField label="username" name="studentUsername" type="text" onInput={(e) => { handleChange(e); handleChange3(e) }} />
                        <TextField label="password" name="studentPassword" type="password" onInput={(e) => { handleChange(e); handleChange4(e); }} />
                        <button className="btn btn-dark mt-3" type="submit">Admission</button> &nbsp;&nbsp;
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default PostStudent;