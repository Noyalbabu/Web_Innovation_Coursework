import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import profileValidate from "./profileValidation";
import { Tooltip } from 'react-tooltip';
import axios from 'axios';

function ProfilePage() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    age: ""
  });
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    setErrors(profileValidate(values));
    // HERE WE MAKE SURE THERE IS NO ERROR IN THE FORM
    if(errors.name === "" && errors.username === "" && errors.email === "" && errors.password === "" && errors.age === ""){
      axios.post('http://localhost:8081/news_app', values).then(res => {
        if(res.data === "Some already used this details"){
          alert("Username, email or password entered already exists! Please try again!")
          navigate('/profilePage');
        }
        else{
          alert("Profile created successfully!")
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
   }
  }

  return (
    <div className ="profile">
        <h3>My Profile</h3>
      <div className="profileForm">
        <form action= '' onSubmit={handleSubmit} >
          <label htmlFor="name">Name:</label><br />
          <input type="text" name="name" onChange={handleInput}/><br />
          {errors.name && <span>{errors.name}</span>}<br />
          <label htmlFor="username">Username:</label><br />
          <input type="text" name="username" onChange={handleInput}/><br />
          {errors.username && <span>{errors.username}</span>}<br />
          <label htmlFor="email">Email:</label><br />
          <input type="text" name="email" onChange={handleInput}/><br />  
          {errors.email && <span>{errors.email}</span>}<br />
          <label htmlFor="password">Password:</label><br />
          <input type="password" name="password" id = 'password' onChange={handleInput} /><br />
          {errors.password && <span>{errors.password}</span>}<br />
          <label htmlFor="age">Age:</label><br />
          <input type="number" name="age" onChange={handleInput}/><br />
          {errors.age && <span>{errors.age}</span>}<br />
          <button type="submit" value="Submit">Create</button>
          <p>Already created a profile? Login In!</p>
          <a href="/login" >
            <button type="button">Login</button></a>
        </form>
      <Tooltip anchorSelect="#password" place="left" >
        <p>Password Rules</p>
          <ul>
            <li>Atleast one digit in the word</li>
            <li>Atleast one UPPERCASE letter</li>
            <li>Atleast one lowercase letter</li>
            <li>Minimum length of the word is 8!</li>
          </ul>
      </Tooltip>
      </div>
  </div>
  );
}

export default ProfilePage;
