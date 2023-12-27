import './NewsElement.css';
import React from 'react';

// We are creating a component called NewsElement to display the title, descriptuion, url, image from news API
const NewsElement = ({urlToImage, title, description, url,source, date}) => {
    return (
        <div className="newsWebsite">
            <div className="newsElement">
            <img className='newsImage' src={urlToImage} alt={urlToImage}/>
            <h1 className='newsTitle'>{title}</h1>
            <p className='newsArticle'>{description}</p>
            <h3>Source:{source}</h3>
            <h3>Date: {date}</h3>
            <h3><a href={url}>Look Up for more Info!</a></h3>
            </div>   
        </div>
    )
}

export default NewsElement;
