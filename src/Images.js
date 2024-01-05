import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './album.css';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import './images.css';

export const Images = () => {
    const [image, setImage] = useState([]);
    const { Id } = useParams();


    let navigate = useNavigate();


    useEffect(() => {
        console.log("in get Images")
        fetch("http://localhost:8080/GalleryImages/" + Id)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                // getSpaceUntilMaxLength(result);
                setImage(result);
            }
            );
    }, []);

    return (
        <div className='albumpic'>
            {
                image.map((image) => (
                    <span className='imagespan'>
                        <img src={image.imagePath} alt="" width="450px" height="300px" className='imagesingle'/>
                    </span>
                    
                ))
            }
        </div>
    )
}

export default Images;