import React from "react";

function About() {
  const pass = sessionStorage.getItem("token");
  //check if pass is not empty
  if(pass === null){
      return (
        alert("You have to log in to see this page")
        );
    }
    else{
    return (
      <div className="App">
      <h1>Hello</h1>
      <p>Users are adviced to create a profile and sign in to eplore this site.</p>
      </div>
    );
  }
}

export default About;