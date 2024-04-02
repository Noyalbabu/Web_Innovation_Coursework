import './NewsElement.css';
import React, {useState} from 'react';

// We are creating a component called NewsElement to display the title, descriptuion, url, image from news API
const NewsElement = ({urlToImage, title, description, url,source, date}) => {
    const pass = sessionStorage.getItem("token");
    //GET HOLD OF THE COMMENT. 
    //credict: https://www.youtube.com/watch?v=fJzxTYZLsy4&ab_channel=DeveloperGeorge
    const [comment, setComment] = useState(''); 
    const getComment = (event) => {
        setComment(event.target.value);
    }

    //DISPLAY ALL THE COMMENTS USERS HAD MADE
    const [displayComment, setDisplayComment] = useState([]);
    const ondisplayComment = () => {
        if (!comment.trim()) {
            alert('Please enter a comment');
        } else {
            setDisplayComment([...displayComment, comment]);
            setComment('');
        }
    };
    return (
        <div className="newsWebsite">
            <div className="newsElement">
                <img className='newsImage' src={urlToImage} alt={urlToImage}/>
                <h1 className='newsTitle'>{title}</h1>
                <p className='newsArticle'>{description}</p>
                <h4 style={{backgroundColor: 'rgba(231, 225, 197, 0.993)', fontStyle:'italic' , fontWeight:'500'}}>Source: {source}</h4>
                <h4 style={{backgroundColor: 'rgba(231, 225, 197, 0.993)', fontStyle:'italic' , fontWeight:'500'}}>Date: {date}</h4>
                <h4 style={{backgroundColor: 'rgba(231, 225, 197, 0.993)'}} ><a href={url} style={{backgroundColor: 'rgba(231, 225, 197, 0.993)'}}>Look Up for more Info!</a></h4>
                <div className="commentSection">
                <h3 id='comment-title'>Comment</h3>
                    {displayComment.map((comment, index) => {
                        return (
                            <div key={index} id='comment-display'> {comment} <p>{pass}</p>
                            </div>
                        );
                    })}
                    <textarea id='comment-input'
                    value={comment}
                    onChange={getComment} placeholder = {pass}/>
                    <button onClick={ondisplayComment} id='comment-sub'>Submit</button>
                </div>
            </div>   
        </div>
    )
}

export default NewsElement;
