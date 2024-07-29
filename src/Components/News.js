import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {



    constructor() {
        super();
        // console.log("This is a Constructor from News Component!");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a80e2b1f6c7a457fafa947c444d097cc&${this.state.page}`
        // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a80e2b1f6c7a457fafa947c444d097cc&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handlePreviousPage = async () => {
        console.log("Previous Page");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a80e2b1f6c7a457fafa947c444d097cc&${this.state.page - 1}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextPage = async () => {
        console.log("Next Page");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a80e2b1f6c7a457fafa947c444d097cc&${this.state.page + 1}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className='container my-3 d-flex justify-content-between' style={{ flexDirection: "column", height: "100vh" }}>
                <h2>NewMonkey - Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((elements) => {
                        return <div className="col-md-3 my-2" key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 50) : "Title Not Available, Click on Read More To Check The News"} description={elements.description ? elements.description.slice(0, 58) : "No Description available, Click on Read More To Check The News"} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                        </div>
                    })}
                </div>
                <div className='pb-2 d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-primary">← Previous</button>
                    <button onClick={this.handleNextPage} className="btn btn-primary">Next →</button>
                </div>
            </div>
        )
    }
}
