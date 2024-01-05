import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function UpdateImage() {
    const [image, setImage] = useState({});
    const [album, setAlbum] = useState([]);
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        console.log("in album update")
        fetchtry();
        fetchtry1();
    },[] );

    let fetchtry =() => fetch("http://localhost:8080/yesImage/" +Id)
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setImage(result);
    }
    );

    let fetchtry1 =() => fetch("http://localhost:8080/albums")
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setAlbum(result);
    }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setImage(values => ({ ...values, [name]: value }))
    }

    // const handleChange1 = (event) => {
    //     const value = event.target.value;
    //     setFollowup(values => ({ ...values, [is_active]: value }))
    // }
    let optionalbum;
    optionalbum = album.map((c) => (
        <option key={c.albumId} value={c.albumId}>
            {c.albumName}
        </option>
    ));

      const handleSubmit =  (event) => {
        let demo = JSON.stringify(image);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/Images/" + Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c=>console.log(c)).then(r=>console.log(r));

        navigate('/GetImages');
        event.preventDefault();
    }

   
    return (
        <div  className="enquiry">
            <form onSubmit={handleSubmit}>
                {/* <label>Image Path:</label>
               <tr>
                <input
                    type="text"
                    name="image_path"
                    // disabled
                    value={image.image_pat || ""}
                    onChange={handleChange}
                />
                </tr> */}
                  <label><b>Image IsActive</b></label>
                  <tr>
                  <select name="imageIsActive" onChange={handleChange}>
                    <option value="true">Is Active</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </tr>
                <label><b>Is Album Cover</b></label>
                  <tr>
                  <select name="isAlbumCover" onChange={handleChange}>
                    <option value="false">Is Cover</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </tr>
                <label className="">
                           <b> Album :</b>
                            <select name= 'album' onChange={handleChange}>
                                {optionalbum}
                            </select>
                        </label>
                
               
                <button type="button" onClick={handleSubmit} >Update</button>
               
                
            </form>
        </div>
    )
}
export default UpdateImage;