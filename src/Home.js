import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Card.css";
import "./home.css";
import Recruiters from './Recruiters';
import Marquee from "react-fast-marquee";

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Images from './Images';

export default function Home() {

   // const [image, setImage] = useState([]);
   // const { Id } = useParams();


   // let navigate = useNavigate();


    // useEffect(() => {
    //     console.log("in get Images")
    //     fetch("https://localhost:44357/api/Images/1004")
    //         .then(res => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             // getSpaceUntilMaxLength(result);
    //             setImage(result);
    //         }
    //         );
    // }, []);



    return (
        <div>




            

            <Carousel className="carousel">
                <Carousel.Item interval={1000}>
                    <img
                        height={500}
                        className="d-block w-100"
                        src="fourth.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Vita</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        height={500}
                        className="d-block w-100"
                        src="second.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Vita</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100"
                        src="fifth.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Vita</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='home' >

                <Button href="/PostEnquiry1" className='bt' variant="secondary">Enquiry</Button>

                {/* <Button href="/PostStudent" className='bt' variant="secondary">Admission</Button> */}
                <Button href="/StudentLogin" className='bt' variant="secondary">StudentLogin</Button>
                {/* <Button href="/Login" variant="secondary">Admin LOGIN</Button> */}
            </div>
            <Marquee className="marquee" pauseOnHover="false" speed="200">
                **100% Placement for all previous batches..**
            </Marquee>
            <br></br>
            <div>
                <Recruiters />

            </div>
        </div >
    );
}