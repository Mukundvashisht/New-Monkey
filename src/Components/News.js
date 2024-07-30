import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';

export default class News extends Component {



    constructor() {
        super();
        // console.log("This is a Constructor from News Component!");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 12
        }
    }

    async componentDidMount() {
        await this.fetchNews();
    }
    fetchNews = async () => {

        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a80e2b1f6c7a457fafa947c444d097cc&page=${page}&pageSize=${this.state.pageSize}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    handlePreviousPage = async () => {
        await this.setState(prevState => ({
            page: prevState.page - 1
        }));
        await this.fetchNews();
    }

    handleNextPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

        }
        else {
            await this.setState(prevState => ({
                page: prevState.page + 1
            }));
            await this.fetchNews();
        }
    }


    render() {
        return (
            <div className='container my-3 d-flex justify-content-between' style={{ flexDirection: "column", height: "100vh" }}>
                <h2>NewMonkey - Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((elements) => {
                        return <div className="col-md-6 col-lg-4 col-xl-3 my-2" key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 47) : "Title Not Available, Click on Read More To Check The News"} description={elements.description ? elements.description.slice(0, 58) : "No Description available, Click on Read More To Check The News"} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                        </div>
                    })}
                </div>
                <div className='pb-2 d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-dark">← Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleNextPage} className="btn btn-dark">Next →</button>
                </div>
            </div>
        )
    }
}
