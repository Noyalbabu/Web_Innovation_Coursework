import React, {useState, useEffect} from "react";
import NewsElement from "./NewsElement";
import axios from "axios";



//Declaring const for the news catalog
const NewsCatalog = ({topic}) => {
    const [articles, setnewsArticle] = useState([]);
        useEffect(() => {
            const fetchnewsArticle = async () => {
                try{
                console.log("Fetching news data:", topic);
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&from=2023-12-27&to=2023-12-27&sortBy=popularity&apiKey=43d13539acbd4ba4814f3e166a9130d7`);
                setnewsArticle(response.data.articles);
                //print the data 
                console.log(response);
                } catch (error) {
                    console.error("Error fetching news:", error);
                }
        };
            fetchnewsArticle();
     }, [topic] );

    return (
        <div className="display">
            <section>
                {articles.map(article =>{
                    return (
                        <NewsElement
                            key ={article.source.id}
                            title ={article.title}
                            description ={article.description}
                            url ={article.url}
                            urlToImage ={article.urlToImage} 
                            source ={article.source.name}
                            date= {article.publishedAt}   />
                    )
                } )}
            </section>
        </div>
    );
};

export default NewsCatalog;