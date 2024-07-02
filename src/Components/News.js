import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {



    constructor() {
        super();
        // console.log("This is a Constructor from News Component!");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a80e2b1f6c7a457fafa947c444d097cc";
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(data);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewMonkey - Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((elements) => {
                        return <div className="col-md-3 my-2" key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 50) : "Title Not Available, Click on Read More To Check The News"} description={elements.description ? elements.description.slice(0, 58) : "No Description available, Click on Read More To Check The News"} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
