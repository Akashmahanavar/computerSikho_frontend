import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function StudentGet() {
  const [students, setStudents] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    handlePagination(offset);
  }, [offset]);

 const handlePagination = (offset) => {
    let urld = "http://localhost:8080/students/page/" + offset;
    fetch(urld)
      .then((res) => {
        let result = res.json();
        return result;
      })
      .then((result) => {
        if (result.length > 0) {
          setStudents(result);
        }
      });
  };

  return (
    <div className="contain">
      <div>
        <h2 style={{ display: "inline" }}>Students Data </h2>
        {/* <Button href="/PostStudent" style={{marginLeft:1150,marginRight:0}} >All Student</Button> */}
      </div>
      <table className="table">
        <thead>
          <tr className="table-active">
            <th>Student id</th>
            <th>Student name</th>
            <th>Student Email</th>
            <th>Student Address</th>
            <th>Student gender</th>
            <th> Photo</th>
            <th>Date-of-Birth</th>
            <th>Student Age</th>
            <th>Qualification</th>
            <th>Mobile</th>
            {/* <th>Password</th>
            <th>Username</th> */}
            {/* <th>Pending Fees</th> */}
            <th>Batch Id</th>
            <th>Course Id</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.studentEmailId}</td>
              <td>{student.studentAddress}</td>
              <td>{student.studentGender}</td>
              <td>
                <img src={student.photoUrl} width={60} />
              </td>
              <td>{student.studentDob}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentQualification}</td>
              <td>{student.studentMobile}</td>
              {/* <td>{student.student_password}</td>
              <td>{student.student_username}</td> */}
              {/* <td>{student.paymentmasters[0].courseFees}</td> */}
              <td>{student.batch}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        onClick={() => {
          if (offset > 0) {
            setOffset(offset - 2);
          } else {
            setOffset(0);
          }
        }}
        disabled={offset == 0}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          setOffset(offset + 2);
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default StudentGet;