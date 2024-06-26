import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './nav/profilePage'; 
import Navigation from './nav/paths';
import Login from './nav/login';
import About from './nav/about';
import LogOut from './nav/logout';
import MyAccount from './nav/account';
//Function to design and effects to button in the first page
function App(){
        return (
            <div className="news_app">
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path="/profilePage" element={<ProfilePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path= "/logout" element = {<LogOut/>}/>
                        <Route path= "/account" element = {<MyAccount/>}/>
                    </Routes>
                </BrowserRouter>
            </div> 
        );
    }
export default App;