import React from "react";

function About() {
  const pass = localStorage.getItem("token");
  //check if pass is not empty
  if(pass === null){
      return (
        alert("You have to log in to see this page")
        );
    }
    else{
    return (
      <div className="App">
      <h1>Hello</h1></div>
    );
  }
}

export default About;