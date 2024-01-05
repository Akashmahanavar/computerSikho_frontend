import React from "react";
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Enquiry extends React.Component {
  constructor() {
    super();
    this.state = {
      enquirys: []
    };
  }
  componentDidMount() {
    let urld = "http://localhost:8080/Enquiries";
    fetch(urld)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            enquirys: result
          });
        }
      );
  }

  render() {
    return (<div>
      <div>
        <h2 style={{
          display: 'inline',
          // alignItems: 'center',
          // justifyContent: 'center',
          // width:'100vw',

        }}>    Enquirys Data </h2>    <Button href="/PostEnquiry" style={{marginLeft:1150,marginRight:0}} >New Enquiry</Button>
      </div>
      <table className="table">
        <thead>
          <tr className="table-active">
            <th>id</th>
            <th>name</th>
            <th>address</th>
            <th>mobile</th>
            <th>alternate_mobile</th>
            <th>email_id</th>
            <th>enquiry_date</th>
            <th>enquirer_query</th>
            <th>enquirer_status</th>
            {/* <th>closure_reasonID</th>
                        <th>closure_reason</th> */}
            {/* <th>flag</th> */}
            <th>course_name</th>
            {/* <th>staff_id</th> */}
            <th>Student_Name</th>
            <th>enquiry_counter</th>
            <th>Follow_up</th>
          </tr>
        </thead>
        <tbody>

          {this.state.enquirys.map(enq => (

            <tr key={enq.enquiryId}>
              <td>{enq.enquiryId}</td>
              <td>{enq.enquirerName}</td>
              <td>{enq.enquirerAddress}</td>
              <td>{enq.enquirerMobile}</td>
              <td>{enq.enquirerAlternateMobile}</td>
              <td>{enq.enquirerEmailId}</td>
              <td>{enq.enquiryDate}</td>
              <td>{enq.enquirerQuery}</td>
              <td>{enq.enquiryProcessedFlag.toString()}</td>
              {/* <td>{enq.closure_reasonID}</td>
                            <td>{enq.closure_reason}</td> */}
              <td>{enq.course}</td>
              {/* <td>{enq.staff_id}</td> */}
              <td>{enq.studentName}</td>
              <td>{enq.enquiryCounter}</td>
              <td>{enq.followUp}</td>
              <Button href="/PostStudent" className='bt' variant="secondary">Admission</Button>
              {/* <td> <a href={'/Createenq/'}>Create</a></td>
                            <td><a href={'/enqloyee/' + enq.Id}>Details</a></td>
                            <td> <a href={'/enqloyeeUp/' + enq.Id}>Edit</a></td>
                            <td> <a href={'/enqloyeeDel/' + enq.Id}>delete</a></td>
     */}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    );
  }
}
export default Enquiry;