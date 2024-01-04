import React, {useState}from "react";
import NewsCatalog from '../module/NewsCatalog';
import '../App.css';
import styled from "styled-components";


const Test = styled.button`
    background-color: rgba(231, 225, 197, 0.993);
    box-shadow: 0px 2px 2px rgba(231, 225, 197, 0.993);
    font-weight: bold;
    margin: 10px 10px;
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: 0;
    transition: ease  background-color 250ms;
    &:hover {
        background-color: white;
    }
`

function Navigation() {
    const [showNews, setShowNews] = useState(false);
    const [topic, setTopic] = useState();
       // Use the useContext hook to get the value of the loggedIn context
    const handleClick = () => {
        setShowNews(!showNews);
    };

    const handleTopic = (event) => {
        var topic = event.target.value;
        setTopic(topic);
        console.log(topic);
    };
        return (
            <div className="news_app">
                <div className='header'>
                    <h1 >NEWS</h1>
                    <h2 >Newer Efficient Way of Source</h2>
                </div>
                <div className='tool_bar'>
                        <a href="/login" >
                           <Test>Login</Test> 
                        </a>
                   
                    <Test onClick={handleClick}>Explore</Test>
                    <a href="/profilePage" >
                        <Test>Profile</Test>
                    </a>
                    <a href ='/'>
                        <Test>Main Page</Test>
                    </a>
                    <Test>Language</Test>
                    <input type="text" placeholder="Search.." name="topic" onChange={handleTopic}/> 
                </div>
                {showNews && <NewsCatalog topic ={topic} />}
            </div> 
        );
    }

export default Navigation;