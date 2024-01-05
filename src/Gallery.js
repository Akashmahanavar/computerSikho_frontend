import React from 'react';
import './gallerystyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Marquee from "react-fast-marquee";

export default class Gallery extends React.Component {

    render() {

        return (


            //     <table>

            //         <tr><td><iframe width="400" height="300" src="https://www.youtube.com/embed/w7ejDZ8SWv8">
            //         </iframe></td>

            //     </table>

            // </div>

            <div className="trial">
                <Marquee className="marquee" pauseOnHover="false" speed="200" >


                    <img src="img1.jpg" alt="Cinque Terre" width="600" height="400" />


                    <img src="img2.jpg" alt="Forest" width="600" height="400" />


                    <img src="img3.jpg" alt="Northern Lights" width="600" height="400" />




                    <img src="img4.jpg" alt="Mountains" width="600" height="400" />



                    <img src="img5.jpg" alt="Cinque Terre" width="600" height="400" />


                    <img src="img6.jpg" alt="Forest" width="600" height="400" />


                    <img src="img7.jpg" alt="Northern Lights" width="600" height="400" />

                    <img src="img8.jpg" alt="Mountains" width="600" height="400" />

                    <img src="img9.jpg" alt="Cinque Terre" width="600" height="400" />
                    <img src="img12.jpg" alt="Forest" width="600" height="400" />
                    <img src="img2.jpg" alt="Northern Lights" width="600" height="400" />
                    <img src="img13.jpg" alt="Mountains" width="600" height="400" />



                </Marquee>
            </div>



        )
    }
}