import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./login.css";
//import { ReactSession } from 'react-client-session';

function Login() {
  const [staffUsername, setUsername] = useState("");
  const [staffPassword, setPassword] = useState("");
  const navigate = useNavigate();
 
  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
      navigate("/Staff");
    }
  }, []);
  async function loginHandler() {
    let item = { staffUsername, staffPassword };
    console.log(item);
    let result = await fetch(
      "http://localhost:8080/staffs/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    ).then(console.log("sourabh"));
    result = await result.json();

    if (result) {
      sessionStorage.setItem("user-info", JSON.stringify(result));
      navigate("/Staff");
    } else {
      alert("INVALID CREDENTIALS PLEASE TRY AGAIN......");
    }
  }

  return (
    <div >
      <div className="login3"> <h1>Admin Login</h1></div>
     
      <div className="col-sm-6 offset-sm-3 login1">
        <input
          type="text"
          name="staffUsername"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="password"
          name="staffPassword"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={loginHandler}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
export default Login;