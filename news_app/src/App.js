import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './module/profilePage'; 
import Navigation from './components/Navigation';
//Function to design and effects to button in the first page
function App(){
        return (
            <div className="news_app">
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path="/module/profilePage" element={<ProfilePage/>}/>
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
