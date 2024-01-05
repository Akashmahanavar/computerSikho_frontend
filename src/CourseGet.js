import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const CourseGet = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        console.log("in get batches")
        fetch("http://localhost:8080/Courses")
            .then(res => res.json())
            .then((result) => {
                setCourse(result);
            }
            );
    }, []);

    return (
             <div>
            <h2>Courses<Button href="/CoursePost">New Course</Button></h2>
            <table className="table">
                <thead>
                    <tr className="table-active">
                        <th>Course-Id</th>
                        <th>Course-Name</th>
                        <th>Course-Description</th>
                        <th>Course-duration</th>
                        <th>Course-fees</th>
                        <th>Course-syllabus</th>
                        <th>Age-grp-type</th>
                        <th>Course-is-active</th>
                        <th>Cover-photo</th>
                        <th>video</th>
                    </tr>
                </thead>
                <tbody>
    
                    {course.map(course =>(
                        
                      <tr key={course.courseId}>
                            <td>{course.courseId}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseDescription}</td>
                            <td>{course.courseDuration}</td>
                            <td>{course.courseFees}</td>
                            <td>{course.courseSyllabus}</td>
                            <td>{course.ageGrpType}</td>
                            <td>{course.courseIsActive.toString()}</td>
                            <td>{course.coverPhoto}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
        );
}

export default CourseGet;