import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import './home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const GetBatches = () => {
    const [batch, setBatches] = useState([]);
   
    const { Id } = useParams();
   

    useEffect(() => {
        console.log("in get batches")
        fetch("http://localhost:8080/CourseBatch/" + Id)
            .then(res => res.json())
            .then((result) => {
                setBatches(result);
            }
            );
    }, []);

    return (
          <div>
            <table className="table">
                
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
                            {/* <Button variant='secondary' href="/CoursePost">Update</Button> */}
                            {/* <Button href={"/BatchUpdate/"+batch.batch_id} className='bt' >Update</Button> */}
                            <Button variant="info"  href={"/BatchUpdate/"+batch.batchId} >Update</Button>{' '}
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
          
    )
}

export default GetBatches;