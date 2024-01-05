import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./login.css";

function StudentLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [is_log, setIs_log] = useState({});
    let navigate = useNavigate();

    const handleChange1 = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // setUsername(values => ({ ...values, [name]: value }))
        // setUsername(values => ({ ...values, [username]: value }))
        setUsername(value);
    }
    const handleChange2 = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // setPassword(values => ({ ...values, [password]: value }))
        setPassword(value);
    }


    const  handleSubmit =  (event) => {
         var url="http://localhost:8080/students/Login/" + username + "/" + password
         console.log(username);
         
         console.log(url);
          event.preventDefault();
        fetch(url).
            then(r => {const res=r.json(); return res;}).then(result => {   
                if (result!=0)
                {
                        sessionStorage.setItem("student-info", JSON.stringify(result));
                        navigate('/PaymentMaster/'+result);
                }
            else
                navigate('/Home'); })
       
    }
    return (
        <div >
             <div className="login3"> <h1>Student Login</h1></div>
           
            {/* <form onSubmit={handleSubmit}>

                <br />            <label>username:</label>
                <input
                    type="text"
                    name="username"
                    // value={username.username}
                    onChange={handleChange1}
                />
                <br />            <label>password:</label>
                <input
                    type="text"
                    name="password"
                    // value={password.password}
                    onChange={handleChange2}

                />

                <input type="submit" value="Login" />
            </form> */}
            <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" name="username"  onChange={handleChange1}/>
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange2}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    )

}

export default StudentLogin;