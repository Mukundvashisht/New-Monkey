import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 10,
      totalResults: 0,
    };
    document.title = `NewsMonkey - ${this.props.category}`;
  }

  async componentDidMount() {
    await this.fetchNews();
  }
  fetchNews = async () => {
    const { page } = this.state;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec470444da37416f8968572080a7aa90&page=${page}&pageSize=${this.state.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      // articles: parsedData.articles,
      articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  // handlePreviousPage = async () => {
  //     await this.setState(prevState => ({
  //         page: prevState.page - 1
  //     }));
  //     await this.fetchNews();
  // }

  // handleNextPage = async () => {
  //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

  //     }
  //     else {
  //         await this.setState(prevState => ({
  //             page: prevState.page + 1
  //         }));
  //         await this.fetchNews();
  //     }
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const { page } = this.state;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      // articles: this.state.articles.concat(parsedData.articles),
      articles: this.state.articles.concat(Array.isArray(parsedData.articles) ? parsedData.articles : []),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <InfiniteScroll dataLength={(this.state.articles || []).length} next={this.fetchMoreData} hasMore={(this.state.articles || []).length !== this.state.totalResults} loader={<Spinner />}>
          <div className="container">
            <h2 className="my-3">NewMonkey Top Headlines - {this.props.category}</h2>
            <div className="row my-3">
              {this.state.articles.map((elements, i) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-3 my-2" key={elements.url}>
                    <NewsItem
                      title={elements.title ? elements.title.slice(0, 47) : "Title Not Available, Click on Read More To Check The News"}
                      description={elements.description ? elements.description.slice(0, 58) : "No Description available, Click on Read More To Check The News"}
                      imageUrl={elements.urlToImage}
                      newsUrl={elements.url}
                      author={elements.author}
                      date={elements.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='pb-2 d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="btn btn-dark">← Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleNextPage} className="btn btn-dark">Next →</button>
                </div> */}
        {/* </div > */}
      </>
    );
  }
}
