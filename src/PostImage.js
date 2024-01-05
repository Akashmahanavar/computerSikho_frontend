import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
// import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const PostImage = () => {
    const [image, setImage] = useState({});
    const [album, setAlbum] = useState([]);
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value)
        setImage(values => ({ ...values, [name]: value }))
    }
    useEffect(() => {
        console.log("in album update")
        fetchtry1();
    },[] );

    let fetchtry1 =() => fetch("http://localhost:8080/albums")
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setAlbum(result);
    }
    );
       
    const handleUpload = (event) => {

        const name = event.target.name;
        let value = event.target.value;

        console.log(value);
        console.log(typeof value);
        value =  value.replace('C:\\fakepath\\','../Images/')
               console.log(value);
        setImage(values => ({ ...values, [name]: value }))
    }

    let optionalbum;
    optionalbum = album.map((c) => (
        <option key={c.albumId} value={c.albumId}>
            {c.albumName}
        </option>
    ));
    return (
        <Formik
            initialValues={{
                imagePath: '',
                imageIsActive:'',
                isAlbumCover: '',
                album: '',
            }}
       //     validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                let demo = JSON.stringify(image);
                fetch("http://localhost:8080/Images", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                }).then(r => { r.json() });
                navigate('/GetImages');
            }}
        >
            {formik => (
                <div>
                    <h1 className="title">Add Image</h1>
                    <div className="enquiry">

                        <Form className="frm" style={{ marginTop: -200 }}>
                            <TextField label="Image" name="imagePath" type="file" onInput={handleUpload} />
                            <label>Album IsActive</label>
                            <tr>
                                <select name="imageIsActive" onChange={handleChange}>
                                    <option value="true">Is Active</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </tr>
                            <tr>
                                <select name="isAlbumCover" onChange={handleChange}>
                                    <option value="false">Is Album Cover</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </tr>
                            <label className="">
                            Albums :
                            <select name= 'album' onChange={handleChange}>
                                {optionalbum}
                            </select>
                        </label>
                            
                            <button className="btn btn-dark mt-3" type="submit">Add</button> &nbsp;&nbsp;
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}
export default PostImage;