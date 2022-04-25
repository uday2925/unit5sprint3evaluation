import { useState } from "react";
import axios from "axios";

export const Login = () => {
    //  use reqres to log user in.
    const [form,setForm]=useState({email:"",password:""});
    const handlechange=(e)=>{
        setForm({...form,[e.target.id]:e.target.value})
    }
    const handlesubmit=()=>{
        axios.post('http://localhost:8080/employee', form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  
    return (
      <form className="loginform" onSubmit={handlesubmit}>
        <input onChange={()=>{handlechange()}}
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
          id="email"
        />
        <input onChange={()=>{handlechange()}}
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
          id="password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };
  