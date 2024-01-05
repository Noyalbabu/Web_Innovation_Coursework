import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './nav/profilePage'; 
import Navigation from './nav/paths';
import Login from './nav/login';
import About from './nav/about';
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
                    </Routes>
                </BrowserRouter>
            </div> 
        );
    }

    
/*As you see I used the useState hook to create a state variable called showNews and a function called setShowNews. 
The button 'Explore' is used to toggle the news. 
On clicking the button you can see the and hide the news.
*/
export default App;