import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function UpdateAlbum() {
    const [album, setAlbum] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        console.log("in album update")
        fetchtry();
    },[] );

    let fetchtry =() => fetch("http://localhost:8080/albums/" +Id)
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setAlbum(result);
    }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAlbum(values => ({ ...values, [name]: value }))
    }

    // const handleChange1 = (event) => {
    //     const value = event.target.value;
    //     setFollowup(values => ({ ...values, [is_active]: value }))
    // }

      const handleSubmit =  (event) => {
        let demo = JSON.stringify(album);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/albums/" + Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c=>console.log(c)).then(r=>console.log(r));

        navigate('/GetAlbums');
        event.preventDefault();
    }

   
    return (
        <div  className="enquiry">
            <form onSubmit={handleSubmit}>
                <label>Album Name:</label>
               <tr>
                <input
                    type="text"
                    name="albumName"
                    // disabled
                    value={album.albumName || ""}
                    onChange={(e)=>handleChange(e)}
                />
                </tr>

                <label>Album Description:</label>
                <tr>
                <input
                    type="text"
                    name="albumDescription"
                    // disabled
                    value={album.albumDescription || ""}
                    onChange={handleChange}
                />
                </tr>

                  <label>Album Start Date</label>
                  <tr>
                <input
                    type="date"
                    name="startDate"
                    value={album.startDate || ""}
                    onChange={handleChange}
                />
                </tr>
                  <label>Album EndTime</label>
                  <tr>
                <input
                    type="date"
                    name="endDate"
                    value={album.endDate || ""}
                    onChange={handleChange}
                />
                </tr>
                  <label>Album IsActive</label>
                  <tr>
                  <select name="albumIsActive" onChange={handleChange}>
                  <option value="true">Album is Active</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                    
                </select>
                </tr>
                
               
                <button type="button" onClick={handleSubmit} >Update</button>
               
                
            </form>
        </div>
    )
}
export default UpdateAlbum;