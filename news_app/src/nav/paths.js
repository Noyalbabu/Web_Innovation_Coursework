import React, {useState}from "react";
import NewsCatalog from '../module/NewsCatalog';
import '../App.css';
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl } from "@material-ui/core";
import {FormLabel} from "@material-ui/core";
import {FormGroup} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import { BsHouseDoorFill } from "react-icons/bs";

const pass = sessionStorage.getItem("token");
const Test = styled.button`
    background-color: rgba(231, 225, 197, 0.993);
    box-shadow: 0px 2px 2px rgba(231, 225, 197, 0.993);
    font-size: 14px;
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

    const [showNews, setShowNews] = useState();
    const showMsg  = useState('You have to login to explore this site!');
    const [topic, setTopic] = useState();
    const [lang, setLang] = useState({
        en: false,
        fr: false,
        ar: false,
        zh: false
    });
    //language checkbox
    const handleLang = (event) => {
        setLang({ ...lang, [event.target.name]: event.target.checked });
        console.log(lang);
    }
        // Use the useContext hook to get the value of the loggedIn context
    const handleClick = () => {
        setShowNews(!showNews);
    };

    const handleLangClick = () => {
        var y = document.getElementsByClassName("dropdown-content");
        if (y[0].style.display === "none") {
            y[0].style.display = "block";
          
        } else {
            y[0].style.display = "none";
            
        }
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
                    {pass === null ? (
                        <>
                            <a href='/about'>
                                <Test>About US</Test>
                            </a>
                            <a href="/profilePage">
                            <Test>Profile</Test>
                            </a>
                            <a href="/login"><Test>Login</Test></a>
                            <p>{showMsg}</p>
                        </>
                    ) : (
                        <>
                            <Test onClick={handleClick}>Explore</Test>
                            <a href='/about'>
                                <Test>About US</Test>
                            </a>
                            <a href="/account">
                            <Test>My Account</Test></a>
                            <a href="/logout"><Test>LogOut</Test></a>
                            <FormControl component="fieldset">
                                <FormLabel component="legend" id="langTitle" onClick={handleLangClick}>Language</FormLabel>
                                <FormGroup className="dropdown-content">
                                    <FormControlLabel
                                        control={<Checkbox checked={lang.en} onChange={handleLang} name="en" />}
                                        label="English"
                                    />
                                <FormControlLabel
                                        control={<Checkbox checked={lang.fr} onChange={handleLang} name="fr" />}
                                        label="French" />
                                <FormControlLabel
                                        control={<Checkbox checked={lang.ar} onChange={handleLang} name="ar" />}
                                        label="Arabic" />
                                <FormControlLabel   
                                        control={<Checkbox checked={lang.zh} onChange={handleLang} name="zh" />}
                                        label="Chinese" />
                                </FormGroup>
                            </FormControl>
                            <input type="text" placeholder="Search.." name="topic" onChange={handleTopic} />
                        </>
                    )}
                <a href="/"><BsHouseDoorFill size={40} color="rgba(231, 225, 197, 0.993)"/></a>
                </div>
                {showNews && <NewsCatalog topic ={topic} lang= {lang}/>}
            </div> 
        );
    }

export default Navigation;