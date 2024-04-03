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
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';


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
    //setting randome image for the header
    const bgImages = [image1, image2, image3, image4];
    const choosenBg = bgImages[Math.floor(Math.random() * bgImages.length)];
   

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
                <div className='header' style={{ backgroundImage: `url(${choosenBg})`}}>
                    <h2 >Newer Efficient Way of Source</h2>
                    <h1 >NEWS</h1>
                </div>
                <div className ='tool_bar'>
                    {pass === null ? (
                        <>
                        
                            <Test><a href='/about' >About US</a></Test>
                            <Test> <a href="/profilePage">Profile</a></Test>
                            <Test><a href="/login">Login</a></Test>
                            <p style={{backgroundColor:'transparent'}}>{showMsg}</p>
                        </>
        
                    ) : (
                        <>
                            <Test onClick={handleClick}>Explore</Test>
                           
                            <Test><a href='/about'>About US</a></Test>
                            <Test><a href="/account">My Account</a></Test>
                           <Test> <a href="/logout">LogOut</a></Test>
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
                    <a href="/"><BsHouseDoorFill size={40} color="rgba(231, 225, 197, 0.993)"  style={{backgroundColor:'#3B0404'}}/></a>
                </div>
                {showNews && <NewsCatalog topic ={topic} lang= {lang}/>}
            </div> 
        );
    }

export default Navigation;