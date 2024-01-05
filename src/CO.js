import React from "react";
import { Container } from "reactstrap";
import Button from 'react-bootstrap/Button';
import "./CO.css";
function CO() {
    return (
        <Container>
            <div>
                <h1 align="middle"><em>COURSES OFFERED</em></h1>
                <table class="table table-bordered align-middle">
                    <tbody>
                        <tr>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                    <img src="java.jpg" alt='Image 1' className='card-img-top' />
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>PG-DAC</em></h4>
                                    <p className='card-text text-secondary'>Post Graduate Diploma in Advanced Computing (PG DAC)
                                        grooms engineers and IT professionals
                                        for a career in Software Development.
                                    </p>
                                    <Button href="/CourseDisplay/1" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                    <img src="python.png" alt='Image 1' className='card-img-top' />
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>PG-DBDA</em></h4>
                                    <p className='card-text text-secondary'>Post Graduate Diploma in
                                        Big Data Analytics (PG DBDA)
                                        enables students to explore the fundamental
                                        concepts of big data analytics.
                                    </p>
                                    <Button href="/CourseDisplay/2" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                    <img src="precat.png" alt='Image 1' className='card-img-top' />
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>Pre-Cat</em></h4>
                                    <p className='card-text text-secondary'>The admission to all PG Courses by
                                        C-DAC ACTS is through an All-India
                                        C-DAC Common Admission Test
                                        (C-CAT)
                                    </p>
                                    <Button href="/CourseDisplay/5" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>
                        </tr>

                        <tr>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                   <a href="" ><img src="DMC.png" alt='Image 1' className='card-img-top' /></a>
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>PG-DMC</em></h4>
                                    <p className='card-text text-secondary'>The Post-Graduate Diploma in Mobile Computing (PG-DMC) is one of the pioneering programs of ACTS. The main focus of this course is to enable the candidates fulfilling the eligibility criteria, to develop their skill set mainly in areas like Native and Hybrid Mobile Application Development

                                    </p>
                                    <Button href="/CourseDisplay/3" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                    <img src="DITISS.png" alt='Image 1' className='card-img-top' />
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>PG-DITISS</em></h4>
                                    <p className='card-text text-secondary'>To understand the Concepts of Data Centre Management, applications security implementation and use various techniques for Ethical Hacking and Cyber Forensics

                                    </p>
                                    <Button href="/CourseDisplay/4" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>

                            <td align="middle"><div className='card text-centre'>
                                <div className='overflow'>
                                    <img src="MSCIT.png" alt='Image 1' className='card-img-top' />
                                </div>
                                <div className='card-body text-dark'>
                                    <h4 className='card-title'><em>MS-CIT</em></h4>
                                    <p className='card-text text-secondary'>MS-CIT is an Information Technology (IT) literacy course started by MKCL in the year 2001. It is the most popular IT Literacy course in Maharashtra
                                    </p>
                                    <Button href="/CourseDisplay/6" variant="dark">Know More</Button>
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br><br></br><br></br>
            </div>
        </Container>

    );
}

export default CO;