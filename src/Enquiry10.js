import React from "react";
import { useState, useEffect } from 'react';

function Enquiry10() {
    const [enquiry, setEnquiry] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:8080/Enquiries")
            .then(res => res.json())
            .then((result) => {setEnquiry({result}); }
            );
    }, []);

    return (<div>

        <h2>Enquirys Data...</h2>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>mobile</th>
                    <th>alternate_mobile</th>
                    <th>email_id</th>
                    <th>enquiry_date</th>
                    <th>enquirer_query</th>
                    <th>closure_reasonID</th>
                    <th>closure_reason</th>
                    <th>processed_flag</th>
                    <th>course_id</th>
                    <th>Student_Name</th>
                    <th>enquiry_counter</th>
                    <th>Follow_up</th>
                </tr>
            </thead>
            <tbody>

                {enquiry.map(enq => {
                    
                  return(  <tr key={enq.enquiryId}>
                        <td>{enq.enquiryId}</td>
                        <td>{enq.enquirerName}</td>
                        <td>{enq.enquirerAddress}</td>
                        <td>{enq.enquirerMobile}</td>
                        <td>{enq.enquirerAlternateMobile}</td>
                        <td>{enq.enquirerEmailId}</td>
                        <td>{enq.enquiryDate}</td>
                        <td>{enq.enquirerQuery}</td>
                        <td>{enq.closure_reasonID}</td>
                        <td>{enq.closure_reason}</td>
                        <td>{enq.enquiryProcessedFlag}</td>
                        <td>{enq.course}</td>
                        <td>{enq.studentName}</td>
                        <td>{enq.enquiryCounter}</td>
                        <td>{enq.followUp}</td>
                        <td> <a href={'/Createenq/'}>Create</a></td>
                        <td><a href={'/enqloyee/' + enq.Id}>Details</a></td>
                        <td> <a href={'/enqloyeeUp/' + enq.Id}>Edit</a></td>
                        <td> <a href={'/enqloyeeDel/' + enq.Id}>delete</a></td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>

    );
}
export default Enquiry10;