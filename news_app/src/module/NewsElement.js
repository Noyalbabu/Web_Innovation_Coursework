import { ThemeConsumer } from 'styled-components';
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
        var commentBox = document.getElementById('comment-input');
        if (commentBox.value === '') {
            alert('Please enter a comment');
        }
        else{
        setDisplayComment((displayComment) => [...displayComment, comment]);
        //remove the text from the comment box after the user submit the comment
        commentBox.value = '';
    } }
    return (
        <div className="newsWebsite">
            <div className="newsElement">
            <img className='newsImage' src={urlToImage} alt={urlToImage}/>
            <h1 className='newsTitle'>{title}</h1>
            <p className='newsArticle'>{description}</p>
            <h3>Source:{source}</h3>
            <h3>Date: {date}</h3>
            <h3><a href={url}>Look Up for more Info!</a></h3>
    
            <div className="commentSection">
            {displayComment.map((text) =>(
                <div id='comment-display'>{text}</div>
         ) )}
            <h3 id='comment-title'>Comment</h3>
            <textArea id='comment-input'
            value={comment}
            onChange={getComment} placeholder = {pass}/>
            <button onClick={ondisplayComment} id='comment-sub'>Submit</button></div>
            </div>   
        </div>
    )
}

export default NewsElement;
