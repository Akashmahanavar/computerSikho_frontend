import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./header.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate, useParams } from "react-router-dom"

function Header() {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let urld = "http://localhost:8080/Courses";
    fetch(urld)
      .then(res => res.json())
      .then(
        (result) => { setCourse(result); }
      );
  },[])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //setCourse(values => ({ ...values, [name]: value }))
    navigate('/CourseDisplay/'+value)
  }
  const callLogOut=()=>{
    sessionStorage.removeItem("user-info");
    
    navigate('/Home');
  }

  let optioncourses;
  optioncourses = course.map((c) => (
      <option key={c.courseId} value={c.courseId}>
          {c.courseName}
      </option>
  )); 

  let navdown;
  navdown = course.map((c) => (
    <NavDropdown.Item key={c.courseId} value={c.courseId}>
      {c.courseName}
    </NavDropdown.Item>
  ));

  return (
    <div className='abs'>
      <div className='hedback'>
        <img className="hedimg" src="../Images/vita_logo.png" alt=''/>
        <img className="hedimg" src="../Images/smv3.png" alt=''/>
        <img className="hedimg" src="../Images/cdac_logo.png" alt=''/>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">SMVITA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto hedbut">
              <Nav.Link className="hedbut" href="/Home">HOME</Nav.Link>
              <Nav.Link className="hedbut" href="/AboutUs">ABOUT</Nav.Link>
              <Nav.Link className="hedbut" href="/AlbumDisp">GALLERY</Nav.Link>
              {/* <Nav.Link href="/CO">Courses</Nav.Link> */}
              {/* <NavDropdown title="Courses" id="basic-nav-dropdown" name='course_id' onInput={handleChange}>
                {navdown}
              </NavDropdown> */}

                    <label className="awesome hedbut" >
                        
                        <select name= 'courseId' placeholder='select-course' onChange={handleChange} className='awesome2'>
                            <option disabled selected >
                              COURSES 
                            </option>
                            {optioncourses}

                        </select>
                    </label>
                    {(sessionStorage.getItem("user-info")) ?
                    <>
                    <Nav.Link className="headbutton" onClick={callLogOut} >LogOut</Nav.Link>
                    </>
                    :
                    <>
                    <Nav.Link className="headbutton" href="/Login" >Admin LOGIN</Nav.Link>
                    </>
                     }
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;