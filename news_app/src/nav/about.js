import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";

function About() {
    return (
      <div className="about">
      <h1 style={{color:"#710019"}}>Our Story</h1>
      <p>Your go-to destination for unbiased news and current affairs can begin with us. Established in 2024 by Noyal Babu, <i>NEWS</i> is more than just a news curation site; it is a social app dedicated to providing the truth to the people without fear or bias.
      We believe in the power of honest journalism to empower individuals and foster informed decision-making. Our platform is designed to curate the latest news from around the world, covering a wide range of topics including politics, economics, technology, health, and more. 
      </p>
      <p>Each member can create their own account and login to this social app. Explore the current affairs happening among us and share your opinions in our platforms.</p>

      <h2 style={{color:"#710019"}}>Our Mission</h2>
      <p><b>Provide true facts to honest people without fear!</b></p>

      <div id="footer">
      <h3 style={{color:"#710019"}}>For more information and query!</h3>
        <MdOutlineEmail size={40} color= '#710019' style={{backgroundColor:'#C5E3F2'}}/>Email us : customerquery@news.ac.uk 
        <FcCustomerSupport size={40} style={{backgroundColor:'#C5E3F2'}}/> Customer Help Point: 07785693360</div>
      </div>
    );
  }

export default About;