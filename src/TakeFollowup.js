import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function TakeFollowup() {
    const [followup, setFollowup] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/followups/" + Id)
            .then(res => res.json())
            .then((result) => {
                setFollowup(result);
            }
            );
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFollowup(values => ({ ...values, [name]: value }))
    }

      const handleSubmit =  (event) => {
        let demo = JSON.stringify(followup);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/followups/" + Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c=>console.log(c)).then(r=>console.log(r));

        fetch("http://localhost:8080/Enquiries/Counter/" + followup.enquiry)
        .then(res =>{console.log(res)})
        .then((result) => {console.log(result)});
        
        navigate('/Followup');
        event.preventDefault();
    }

    return (
        <div  className="enquiry">
            <form onSubmit={handleSubmit}>
                <label><strong>Followup Message:</strong></label>
                <input
                    type="text"
                    name="followupMsg"
                    value={followup.followupMsg || ""}
                    onChange={handleChange}
                />
                <label><strong>Is Active:</strong></label>
                <select name="isActive" onChange={handleChange}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>

                <label><strong>Closure Reason:</strong></label>
                <select name="closure_reasonID">
                    <option value="">Select Reason </option>
                    <option value="1">High Fees</option>
                    <option value="2">Batch Timings not suitable</option>
                    <option value="3">Found better options</option>
                    <option value="4">Other</option>
                </select>

                <input type="submit" value="Done" />
            </form>
        </div>
    )
}
export default TakeFollowup;