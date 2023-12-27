import React, {useState} from 'react';
import NewsCatalog from './module/NewsCatalog';
import './App.css';

function App() {
    const [showNews, setShowNews] = useState(false);
    const handleClick = () => {
        setShowNews(!showNews);
    };
    return (
        <div className="news_app">
            <div className='header'>
                <h1 >NEWS</h1>
                <h2 >Newer Efficient Way of Source</h2>
            </div>
            <div className='tool_bar'>
                <button onClick={handleClick}><b>Explore</b></button> 
                <button>Navigation</button>
                <button>Search</button>
                <button>Language</button>
                <button>Profile</button>
            </div>
            {showNews && <NewsCatalog />}

        </div>
    )
}
/*As you see I used the useState hook to create a state variable called showNews and a function called setShowNews. 
The button 'Explore' is used to toggle the news. 
On clicking the button you can see the and hide the news.
*/
export default App;
