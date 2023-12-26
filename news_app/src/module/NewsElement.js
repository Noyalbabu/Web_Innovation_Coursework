import './NewsElement.css';
import React from 'react';

// We are creating a component called NewsElement to display the title, descriptuion, url, image from news API
const NewsElement = (props) => ({title, description, url, urlToImage}) => {
    return (
        <div className="newsWebsite">
            <div className="newsElement">
            <img className='newsImage' src={urlToImage} alt={urlToImage}/>
            <h1 className='newsTitle'>{title}</h1>
            <p className='newsArticle'>{description}</p>
            <h3><a href={url}>Look Up for more Info!</a></h3>
            </div>   
        </div>
    )
}

export default NewsElement;
