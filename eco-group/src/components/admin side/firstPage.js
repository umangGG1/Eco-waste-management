import React from "react";
import "./firstPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const FirstPage=()=>{
    const navigate = useNavigate();

    const handleSelection =(event)=>{
        const selectedRole = event.target.value;
        if(selectedRole ==='admin'){
            navigate('/admin');
        } else if (selectedRole === 'user') {
            navigate('/scanner');
        }
    };
    return(
        <>
        <div id="firstpage">
            <h1>Login As</h1>
            <select onChange={handleSelection}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        </div>
        
        </>
    )
}

export default FirstPage;