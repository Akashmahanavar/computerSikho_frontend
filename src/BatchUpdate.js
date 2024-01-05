import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function BatchUpdate() {
    const [batch, setBatchU] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        console.log("in batch update")
        fetchtry();
    },[] );

    let fetchtry =() => fetch("http://localhost:8080/Batches/" +Id)
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        setBatchU(result);
    }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBatchU(values => ({ ...values, [name]: value }))
    }

      const handleSubmit =  (event) => {
        let demo = JSON.stringify(batch);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/Batches/" + Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c=>console.log(c)).then(r=>console.log(r));

        navigate('/Staff');
        event.preventDefault();
    }
    return (
        <div  className="enquiry">
            <form onSubmit={handleSubmit}>
                <label><b>Batch Name:</b></label>
               <tr>
                <input
                    type="text"
                    name="batchName"
                    disabled
                    value={batch.batchName || ""}
                    onChange={handleChange}
                />
                </tr>
                  <label><b>Batch Start Time</b></label>
                  <tr>
                <input
                    type="date"
                    name="batchStartTime"
                    value={batch.batchStartTime || ""}
                    onChange={handleChange}
                />
                </tr>
                  <label><b>Batch End Time</b></label>
                  <tr>
                <input
                    type="date"
                    name="batchEndTime"
                    value={batch.batchEndTime || ""}
                    onChange={handleChange}
                />
                </tr>
                  <label><b>Batch IsActive</b></label>
                  <tr>
                  <select name="batchIsActive" onChange={handleChange}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </tr>
                  <label><b>Final Presentation Date</b></label>
                 <tr>
                <input
                    type="date"
                    name="finalPresentationDate"
                    value={batch.finalPresentationDate || ""}
                    onChange={handleChange}
                />
                </tr>
                <button type="button" onClick={handleSubmit} ><strong>Update</strong></button>
            </form>
        </div>
    )
}
export default BatchUpdate;