import React, {useState} from 'react';
import NewsCatalog from './module/NewsCatalog';
import './App.css';

//Function to design app
function PopUpButton({onClick, children}) {
    const [hover, setHover] = useState(false);
    let restColor = ' rgba(231, 225, 197, 0.993)';
    let hoverColor = 'rgb(255, 255, 255)';
    return (
        <button style={{backgroundColor: hover === true ? hoverColor : restColor}}
                onMouseOver={() => 
                    setHover(true)
                }
                onMouseLeave={() => 
                    setHover(false)
                }
                onClick={onClick}>{children}</button>
    );
}

function App() {
    const [showNews, setShowNews] = useState(false);
    const [topic, setTopic] = useState();

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
                    <PopUpButton onClick={handleClick}>Explore</PopUpButton>
                    <PopUpButton>Navigation</PopUpButton>
                    <PopUpButton>Language</PopUpButton>
                    <PopUpButton>Profile</PopUpButton>
                    <input type="text" placeholder="Search.." name="topic" onChange={handleTopic}/>
                </div>
                {showNews && <NewsCatalog topic ={topic} />}
            </div> 
        )
    }

    
/*As you see I used the useState hook to create a state variable called showNews and a function called setShowNews. 
The button 'Explore' is used to toggle the news. 
On clicking the button you can see the and hide the news.
*/
export default App;
