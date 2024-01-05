import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './album.css';

export const AlbumDisp = () => {
    const [album, setAlbum] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        console.log("in get batches")
        fetch("http://localhost:8080/albums/AlbumDisp")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setAlbum(result);
            }
            );
    }, []);

    return (
        <div className='album'>
            {/* {album.map(album => (
             <a href={"/Images/"+album.album_id} >
            <Container key={album.album_id}>
                <Row className='one'>
                    <Row className="albumOne">{album.album_name}</Row> <Row className='albumTwo'>{album.album_description}</Row>
                </Row>
            </Container>
            </a>
            ))
            } */}
            {album.map(album => (
                //<img src='album.image_path' alt='invalid'/>
                    <a href={"/Images/" + album.albumId} >
                        <Container key={album.albumId}>
                            <Row className='one'>
                                <Row className="albumOne">{album.albumName}</Row> <Row className='albumTwo'>{album.albumDescription}</Row>
                            </Row>
                        </Container>
                    </a>
                
            ))
            }
        </div>
    )
}

export default AlbumDisp;