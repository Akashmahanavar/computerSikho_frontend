import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom"

export const PostEnquiry = () => {
    const [enquiry, setEnquiry] = useState({});
    const [course, setCourse] = useState([]);
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEnquiry(values => ({ ...values, [name]: value }))
    }

    useEffect(()=>{
        let urld = "https://localhost:44354/api/Courses";
        fetch(urld)
          .then(res => res.json())
          .then(
            (result) => {setCourse(result);}
          );
      })  

    const fnameRegExp = /^[A-Z \s a-z]{3,100}$/;
    const mobileRegExp = /(0|91)?[7-9][0-9]{9}/;
    const phoneRegExp = /0[0-9]{10,10}/;

    const validate = Yup.object({
        enquirer_name: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct Name')
            .max(20, 'Must be 20 characters or less')
            .required('First Name is Mandatory'),
        enquirer_address: Yup.string()
            .required('is required'),

        enquirer_email_id: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        enquirer_mobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),
        enquirer_alternate_mobile: Yup.string()
            .matches(mobileRegExp, 'Mobile Number is not valid')
            .required('Mobile Number is required'),
        enquirer_query: Yup.string()
            .max(50, 'Must be less than 500 letters')
            .required('Please let us know your query'),
        Student_Name: Yup.string()
            .matches(fnameRegExp, 'Please Enter correct First Name')
            .max(20, 'Must be 20 characters or less')
            .required('Name is Mandatory'),
    })
    // course dynamic
    let optioncourses;
    optioncourses = course.map((c) => (
        <option key={c.course_id} value={c.course_id}>
            {c.course_name}
        </option>
    ));


    return (
        <Formik
            initialValues={{
                enquirer_name: '',
                enquirer_address: '',
                enquirer_email_id: '',
                enquirer_mobile: '',
                enquirer_alternate_mobile: '',
                enquirer_query: '',
                Student_Name: '',
                course_id: '',
            }}



            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(enquiry);
                fetch("https://localhost:44357/api/Enquiries", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                navigate('/Staff');
            }}
        >
            {formik => (
                <div className="enquiry">
                    {/* <h1 className="my-4 font-weight-bold .display-4">Inquiry</h1> */}
                    <Form className="frm">
                      
                        <label className="">
                            Courses :
                            <select name= 'course_id' placeholder='select-course' onChange={handleChange}>
                                <option disabled selected>
                                    Select Course
                                </option>
                                {optioncourses}

                            </select>
                        </label>

                        <button className="btn btn-dark mt-3" type="submit">Done</button>;
                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default PostEnquiry;