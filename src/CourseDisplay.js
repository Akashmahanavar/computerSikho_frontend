import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./login.css";
import Table from 'react-bootstrap/Table';

function CourseDisplay() {
  const [course, setCourse] = useState({});
  const [batch, setBatches] = useState([]);
  const [videos, setVideos] = useState([]);
  const { Id } = useParams();
  let navigate = useNavigate();



  useEffect(() => {
   // fetch("https://localhost:44354/api/Courses/" + Id)
    fetch("http://localhost:8080/Courses/" + Id)
      .then(res => res.json())
      .then((result) => {
        setCourse(result);
      }
      );

      //fetch("https://localhost:44354/api/Batches/Bcourse/" + Id)
      fetch("http://localhost:8080/CourseBatch/" + Id)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
          setBatches(result);
      }
      );

     //fetch("https://localhost:44354/api/Videos/" + Id)
      fetch("http://localhost:8080/CourseVideo/" + Id)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
          setVideos(result);
      }
      );
  }, [Id]);

  return (
    <div >
      
      <div className="coursedisp">
      <Card style={{ width: '70rem' }} className="card1">
        <Card.Body>
          <Card.Title>Course Details</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item ><strong>Name :-</strong>{course.courseName}</ListGroup.Item>
          <ListGroup.Item><strong>Duration :-</strong> {course.courseDuration} months</ListGroup.Item>
          <ListGroup.Item><strong>Fees :-</strong>  {course.courseFees}</ListGroup.Item>
          <ListGroup.Item><strong>Age :-</strong> {course.ageGrpType}</ListGroup.Item>

          <Table className="table">
                
                <thead>
                    <tr className="table-active">
                        <th>Batch-Id</th>
                        <th>Batch-Name</th>
                        <th>Batch StartTime</th>
                        <th>Batch Endtime</th>
                        <th>Batch FinalPresentation</th>
                      
                    </tr>
                </thead>
                <tbody>
    
                    {batch.map(batch =>(
                        
                      <tr key={batch.batchId}>
                            <td>{batch.batchId}</td>
                            <td>{batch.batchName}</td>
                            <td>{batch.batchStartTime}</td>
                            <td>{batch.batchEndTime}</td>
                            <td>{batch.finalPresentationDate}</td>
          
                        </tr>
                    ))}
                </tbody>
            </Table>

          <ListGroup.Item><strong>Syllabus :-</strong>  {course.courseSyllabus}</ListGroup.Item>
          <ListGroup.Item><strong>Description :-</strong> {course.courseDescription}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button href="/CO" className='bt'>Courses</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="vidcenter">
        {
                videos.map((videos) => (
                  <iframe className="iframecenter" width="400" title="Course videos" height="300" src={videos.videoUrl} ></iframe> 
                ))
            }
     </div>
    </div>
  )
}
export default CourseDisplay;