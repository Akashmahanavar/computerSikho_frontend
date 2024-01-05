import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const PostAlbum = () => {
    const [Album, setAlbum] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAlbum(values => ({ ...values, [name]: value }))
    }
    return (
        <Formik
            initialValues={{
                album_name: '',
                album_description: '',
                album_is_active:'',
                start_date: '',
                end_date: '',
            }}
       //     validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(Album);
                fetch("http://localhost:8080/albums", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                navigate('/GetAlbums');
            }}
        >
            {formik => (
                <div>
                    <h1 className="title">Add Album</h1>
                    <div className="enquiry">

                        <Form className="frm" style={{ marginTop: -200 }}>
                            <TextField label="Album" name="albumName" type="text" onInput={handleChange} />
                            <TextField label="Album-Description" name="albumDescription" type="text" onInput={handleChange} />
                            <label>Album IsActive</label>
                            <tr>
                                <select name="albumIsActive" onChange={handleChange}>
                                    <option value="true">Is Active</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </tr>
                            <TextField label="Start Date" name="startDate" type="date" onInput={handleChange} />
                            <TextField label="End Date" name="endDate" type="date" onInput={handleChange} />
                            <button className="btn btn-dark mt-3" type="submit">Add</button> &nbsp;&nbsp;
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}
export default PostAlbum;