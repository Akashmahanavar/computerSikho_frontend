import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const CoursePost = () => {
    const [course, setCourse] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse(values => ({ ...values, [name]: value }))
    }
    return (
        <Formik
            initialValues={{
                courseName: '',
                courseDescription: '',
                courseDuration: '',
                courseFees: '',
                courseSyllabus: '',
                ageGrpType: '',
                coverPhoto: '',
            }}
            // validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(course);
                fetch("http://localhost:8080/Courses/addpro", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                navigate('/CourseGet');
            }}
        >
            {formik => (
                <div>
                 <h1 className="title">Add Course</h1>
                <div className="enquiry">
                   
                    <Form className="frm" style={{ marginTop: -200 }}>
                        <TextField label="course-Name" name="courseName" type="text" onInput={handleChange}  />
                        <TextField label="Course-Descriptio" name="courseDescription" type="text" onInput={handleChange}  />
                        <TextField label="Course-duration" name="courseDuration" type="number" onInput={handleChange}  />
                        <TextField label="Course-fees" name="courseFees" type="number"  onInput={handleChange} />
                        <TextField label="Course-syllabus" name="courseSyllabus" type="text" onInput={handleChange}  />
                        <TextField label="Age-grp-type" name="ageGrpType" type="text"  onInput={handleChange} />
                        {/* <TextField label="Cover-photo" name="cover_photo" type="text"  onInput={handleChange} /> */}
                        {/* <TextField label="video" name="video_id" type="number"  onInput={handleChange} /> */}
                        <button className="btn btn-dark mt-3" type="submit">Add</button> &nbsp;&nbsp;
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
                </div>
            )}
        </Formik>
    )
}
export default CoursePost;