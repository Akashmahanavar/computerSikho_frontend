import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./login.css";

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import './Recruiters.css';

function Recruiters() {

    const [image, setImage] = useState([]);
    const { Id } = useParams();


    let navigate = useNavigate();


    useEffect(() => {
        console.log("in get Images")
        fetch("http://localhost:8080/GalleryImages/2")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                // getSpaceUntilMaxLength(result);
                setImage(result);
            }
            );
    }, []);

    return (
        <div >
            
            <h1  className="title"><u><b> Major Recruiters</b></u></h1>
            <hr></hr>
            {/* <Container className="title">
                <Row md={4}>
                    <Col><img src="./Images/Amazon.png" width="300px"/></Col> *

                    <Col className='recruitimage'>
                        {
                            image.map((image) => (
                                <span className='recruitimage'>
                                    <img src={image.image_path} alt="" width="200px" height="200px"  />
                                </span>

                            ))
                        }
                    </Col>



                    {/* <Col xs={6}> <img src="./Images/63moons.png" width="300px"/></Col>
                    <Col><img src="./Images/altair.png" width="300px"/></Col>
                    <Col><img src="./Images/ASUS.png" width="300px"/></Col> *
                </Row>
            </Container> */}


            <div className='albumpic1'>


            {/* <h1>WelCome To the Final Presentation</h1> */}
            {
                image.map((image) => (
                    <span className='imagespan'>
                        <img src={image.imagePath} alt="" width="300px" height="200px" className='recruitimage'/>
                    </span>
                    
                ))
            }

           

        </div>



            
            {/* <Container className="title">
                <Row md={4}>
                    <Col><img src="./Images/atos.png" width="300px"/></Col>
                    <Col xs={6}> <img src="./Images/morning_star.png" width="300px"/></Col>
                    <Col><img src="./Images/bnp.png" width="300px"/></Col>
                    <Col><img src="./Images/Samsung.png" width="300px"/></Col>
                </Row>
            </Container>
            <Container className="title">
                <Row md={4}>
                    <Col><img src="./Images/C-DAC.png" width="300px"/></Col>
                    <Col xs={6}> <img src="./Images/capg.png" width="300px"/></Col>
                    <Col><img src="./Images/carewale.png" width="300px"/></Col>
                    <Col><img src="./Images/ccavenue.png" width="300px"/></Col>
                </Row>
            </Container>
            <Container className="title">
                <Row md={4}>
                    <Col><img src="./Images/concerto.png" width="300px"/></Col>
                    <Col xs={6}> <img src="./Images/financialtech.png" width="300px"/></Col>
                    <Col><img src="./Images/Fiv5eEducation.png" width="300px"/></Col>
                    <Col><img src="./Images/Hp.png" width="300px"/></Col>
                </Row>
            </Container> */}

            {/* ../Images/Library1.jpg
            ../Images/Library2.jpeg 
            ../Images/Library3.jpeg 
            ../Images/Library4.jpeg 
            ../Images/Library5.jpeg 
            ../Images/Library6.jpeg 
            ../Images/Library7.jpeg 
            ../Images/Library8.jpeg 
            ../Images/Library9.jpeg 
            ../Images/Library10.jpeg 

            */}


        </div>
    )
}

export default Recruiters;