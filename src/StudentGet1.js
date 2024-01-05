import React from "react";
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class StudentGet extends React.Component {
  constructor() {
    super();
    this.state = {
      Students: [],
      offset: 0
    };
  }
  componentDidMount() {
    // let urld = "https://localhost:44354/api/students";
    // fetch(urld)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         Students: result
    //       });
    //     }
    //   );
    this.handlePagination(0);

  }
  handlePagination = (offset) => {
    let urld = "https://localhost:44354/api/students/pagination/" + offset;
    fetch(urld)
      .then(res =>{let result= res.json(); return result;})
      .then(
        (result) => {
          if(result.length>0)
          {
          this.setState({
            Students: result
          
          });
        }
        }
      );

  }

  render() {
    return (<div className="contain">
      <div>
        <h2 style={{ display: 'inline', }}>Students Data </h2>
        {/* <Button href="/PostStudent" style={{marginLeft:1150,marginRight:0}} >All Student</Button> */}
      </div>
      <table className="table">
        <thead>
          <tr className="table-active">
            <th>Student id</th>
            <th>Student name</th>
            <th>Student address</th>
            <th>Student gender</th>
            <th> Photo</th>
            <th>Date-of-Birth</th>
            <th>Student Age</th>
            <th>Qualification</th>
            <th>Mobile</th>
            {/* <th>Password</th>
            <th>Username</th> */}
            <th>Pending Fees</th>
            <th>Batch Name</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>

          {this.state.Students.map(student => (

            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.student_name}</td>
              <td>{student.student_address}</td>
              <td>{student.student_gender}</td>
              <td><img src={student.photo_url} width={30} /></td>
              <td>{student.student_dob}</td>
              <td>{student.student_age}</td>
              <td>{student.student_qualification}</td>
              <td>{student.student_mobile}</td>
              {/* <td>{student.student_password}</td>
              <td>{student.student_username}</td> */}
              <td>{student.course_fees}</td>
              <td>{student.batch_name}</td>
              <td>{student.course_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={() => { if (this.state.offset > 0) { this.setState({ offset: this.state.offset - 2 }, this.handlePagination(this.state.offset)) }else{this.setState({ offset:0 }, this.handlePagination(this.state.offset))} }} disabled={this.state.offset==0}>Previous</Button>
      <Button onClick={() => { this.setState({ offset: this.state.offset + 2 },this.handlePagination(this.state.offset)) }}>Next</Button>
    </div>
    );
  }
}
export default StudentGet;