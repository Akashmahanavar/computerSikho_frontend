import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./home.css";
import { Form } from "formik";
import NavDropdown from 'react-bootstrap/NavDropdown';

 function Staff(){

  const [course, setCourse] = useState([]);
    const navigate = useNavigate();
  const  callEnquiry=()=>{
        navigate('/Enquiry');
    }
    const callFollowups=()=>{
        navigate('/Followup')
    }

    const callStaff =()=>{
        navigate('/StaffGet')
    }
    const callCourses =()=>{
        navigate('/CourseGet')
    }
    // const callLogOut=()=>{
    //   sessionStorage.removeItem("user-info");
      
    //   navigate('/Home');
    // }
    const getStudent=()=>{
      navigate('/StudentGet');
    }

    const getAlbums=()=>{
      navigate('/GetAlbums');
    }

    const getImages=()=>{
      navigate('/GetImages');
    }

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setCourse(values => ({ ...values, [name]: value }))
      navigate('/GetBatches/'+value)

  }
    useEffect(()=>{
      let urld = "http://localhost:8080/Courses";
      fetch(urld)
        .then(res => res.json())
        .then(
          (result) => {setCourse(result);}
        );
    })  

     
    let navdown;
  navdown = course.map((c) => (
    <NavDropdown.Item key={c.courseId} value={c.courseId}>
      {c.courseName}
    </NavDropdown.Item>
  ));

    let optioncourses;
    optioncourses = course.map((c) => (
        <option key={c.courseId} value={c.courseId}>
            {c.courseName}
        </option>
    )); 

    return(
    <div >
        
        {/* <img src="comp.jpg" alt="BigCo Inc. logo" height={500}/> */}
      
        <Carousel slide={false}>
      <Carousel.Item>
        <img alt=""
          className="d-block w-100"
          src="Staff.jpg"
          height={500}
          
        />
        <Carousel.Caption className="btn">
        {/* <button type="button" onClick={callEnquiry}>Enquiries</button> */}
      
        <Button   onClick={callEnquiry}>Enquiries</Button>
        <Button   onClick={callFollowups}>Followup</Button>
        <Button  onClick={callStaff}>Staff</Button>
        <Button  onClick={callCourses}>Course</Button>
        <Button  onClick={getStudent}>Student list</Button>
        <Button  onClick={getAlbums}>Albums</Button>
        <Button  onClick={getImages}>Images</Button>
        {/* <Button  onClick={updateBatch}>updateBatch</Button> */}
        {/* <Button  onClick={callLogOut}>LogOut</Button> */}
        

        <label  >
                        
                          <select className="upbatch" name= 'course_id' placeholder='select-course' onChange={handleChange}>
                              <option disabled selected >
                                Update Batches 
                              </option>
                              {optioncourses}

                          </select>
                      </label>

             
              {/* <NavDropdown title="Courses" id="basic-nav-dropdown" name='course_id' onInput={handleChange}>

                {navdown}

              </NavDropdown>          */}
  

                     
        
        {/* <button type="button" onClick={callFollowups}>Followups</button> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Form className="frm"> */}
                      
                    
                      
                  {/* </Form> */}
      
    </Carousel>
    </div>

    );
 }
 export default Staff;