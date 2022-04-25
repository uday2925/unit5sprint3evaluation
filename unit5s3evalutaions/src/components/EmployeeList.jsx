import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const EmployeeList = () => {
    const [userdata,setUserdata]=useState([]);   
    useEffect(()=>{

        axios.get('http://localhost:8080/employee')
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
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {userdata.map((e)=>{
            return <div className="employee_card">
                    <Link to={`/employees/${e.id}`}>
                            <img className="employee_image" src={e.image} alt="" />
                            <span className="employee_name">{e.employee_name}</span>
                            <span className="employee_title">{e.title}</span>                    
                    </Link>                        
                </div>

        }
        )}
        
      </div>
    );
  };