import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
    const [userdata,setUserdata]=useState([]);
    const {id}=useParams();       
    useEffect(()=>{

        axios.get(`http://localhost:8080/employee/${id}`)
                    .then(function (response) {
                    // handle success
                    
                    setUserdata(response.data);
                    console.log({userdata});
                    })
                    .catch(function (error) {
                    // handle error
                    console.log(error);
                    })                   

    },[])

    return (
      <div className="user_details">
        <img className="user_image" src={userdata.image} alt=""/>
        <h4 className="user_name">{userdata.employee_name}</h4>
        <span className="user_salary">${userdata.salary}</span>
        <span className="tasks">
            
              <li className="task">{userdata.tasks}</li>
           
          
        </span>
        Status: <b className="status">{userdata.status}</b>
        Title: <b className="title">{userdata.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        
        <button className="promote">promote</button>
      </div>
    );
  };