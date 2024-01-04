import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import validateLogin from "./loginValidate";
import axios from "axios";
import { BsPersonCheck } from "react-icons/bs";



function Login(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
      });
    
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const [errors, setErrors] = useState({
    })

    const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateLogin(values));
    // HERE WE MAKE SURE THERE IS NO ERROR IN THE FORM
    if(errors.username === "" && errors.password === ""){
        axios.post('http://localhost:8081/profile', values)
        .then(res => {
            if(res.data === "Success"){
                alert("Login successful!")
                navigate('/main');  
            }else{
                alert("No account exist in the given username or password")
            }
        })
        .catch(err =>{ 
            console.log(err);
        });
    }}

    return(
        <div className="profile">
            <BsPersonCheck size={100}/>
            <div className="profileForm" >
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" name="username"  placeholder="Enter username" onChange={handleInput}/><br />
                    {errors.username && <span>{errors.username}</span>}<br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" name="password" onChange={handleInput} /><br />
                    {errors.password && <span>{errors.password}</span>}<br />
                    <button type="submit">Login</button>
                    <p>Do not have an account? Setup a Profile!</p>
                    <a href="/profilePage" >
                        <button type="button">Profile</button></a>
                </form>
            </div>
        </div>
    );
}

export default Login;