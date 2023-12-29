import React, {useState, useEffect} from 'react';
import NewsCatalog from './module/NewsCatalog';
import './App.css';

function App() {
    const [showNews, setShowNews] = useState(false);
    const [topic, setTopic] = useState();
    const [hover, setHover] = useState(false);

    let restColor = 'rgb(234, 243, 236)';
    let hoverColor = 'rgb(255, 255, 255)';

    const handleClick = () => {
        setShowNews(!showNews);
    };

    const handleTopic = (event) => {
        var topic = event.target.value;
        setTopic(topic);
        console.log(topic);
    };
    useEffect(() => {},[hover]);
        return (
            <div className="news_app">
                <div className='header'>
                    <h1 >NEWS</h1>
                    <h2 >Newer Efficient Way of Source</h2>
                </div>
                <div className='tool_bar'>
                    <button style={{backgroundColor: hover === true ? hoverColor : restColor}}
                            onMouseOver={(event) => {
                                event.preventDefault();
                                setHover(true);
                            }}
                            onMouseLeave={(event) => {
                                event.preventDefault();
                                setHover(false);
                            }}
                            onClick={handleClick}>Explore</button>
                            
                    <button style={{backgroundColor: hover === true ? hoverColor : restColor}}
                            onMouseOver={(event) => {
                                event.preventDefault();
                                setHover(true);
                            }}
                            onMouseLeave={(event) => {
                                event.preventDefault();
                                setHover(false);
                            }}>Navigation</button>
                            
                    <button style={{backgroundColor: hover === true ? hoverColor : restColor}}
                            onMouseOver={(event) => {
                                event.preventDefault();
                                setHover(true);
                            }}
                            onMouseLeave={(event) => {
                                event.preventDefault();
                                setHover(false);
                            }}>Language</button>
                            
                    <button style={{backgroundColor: hover === true ? hoverColor : restColor}}
                            onMouseOver={(event) => {
                                event.preventDefault();
                                setHover(true);
                            }}
                            onMouseLeave={(event) => {
                                event.preventDefault();
                                setHover(false);
                            }}>Profile</button>

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
