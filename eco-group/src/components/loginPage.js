import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './loginPage.css';

const LoginPage =() =>{
    const[data, setData] = useState({email:"", password: ""});
    const [error, setError] = useState("");

    const handleChange = ({currentTarget: input})=>{
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = "https://eco-waste-management-server.vercel.app/api/auth";
            const{data: res} = await axios.post(url,data);
            localStorage.setItem("token" , res.data);
            window.location="/admin";
        } catch (error) {
            if(
                error.response &&
                error.response.status >=400 &&
                error.response.status<=500
            ){
                setError(error.response.data.message);
            }
        }
    }
    return(
        <>
        <div id="loginForm">
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email ID *" name="email" onChange={handleChange}value={data.email} required ></input>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}value={data.password} required></input>
            {error && <div id="error.message">{error}</div>}
            <input type="submit" value="LOG IN" style={{backgroundColor:"black", color:"white", height: "40px", width:"342px", marginTop:"30px", borderRadius:"4px", fontSize: "14px", border:"0px"}}></input>
            <Link to="/signup">
            <button style={{backgroundColor:"black", color:"white", height: "40px", width:"342px", marginTop:"10px", borderRadius:"4px", fontSize: "14px", border:"0px"}} > SIGN UP  
            </button>
            </Link>

        </form>
        </div>
        </>
    )
}

export default LoginPage;