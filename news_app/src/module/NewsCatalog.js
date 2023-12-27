import React, {useState, useEffect} from "react";
import NewsElement from "./NewsElement";
import axios from "axios";

//Declaring const for the news catalog
const NewsCatalog = () => {
    const [newsArticle, setnewsArticle] = useState([]);

    useEffect(() => {
        const fetchnewsArticle = async () => {
            try{
            console.log("Fetching news data");
            const response = await axios.get("https://newsapi.org/v2/everything?q=Apple&from=2023-12-24&sortBy=politics&apiKey=43d13539acbd4ba4814f3e166a9130d7");
            setnewsArticle(response.data.articles);
            //print the data 
            console.log(response);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
    };
        fetchnewsArticle();
 }, [] );

    return (
        <div>
            <h1 className="main">NEWS</h1>
            <h4 className="main">New every where world source</h4>
            <section>
                {newsArticle.map(article =>{
                    return (
                        <NewsElement
                            key ={article.title}
                            title ={article.title}
                            description ={article.description}
                            url ={article.url}
                            urlToImage ={article.urlToImage} />
                    )
                } )}
            </section>
        </div>
    );
};

export default NewsCatalog;