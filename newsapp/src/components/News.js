import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component { 
  disabledNext= false;

  constructor(){
    super();
    this.state = {
      page: 1,
      articles : [],
      loading: false
    }
  }

  createURL = () => {
    // api_key = process.env.NEWS_API_KEY;
    // console.log("API KEY :: ", process.env.NEWS_API_KEY);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d4605d48d53442e8e5a15152db5cbb6&page=1&pageSize=${this.props.pageSize}`;
    return url;
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6d4605d48d53442e8e5a15152db5cbb6&page=1&pageSize=${this.props.pageSize}`;
    const newsurl = `${this.createURL()}`;
    // console.log("Create URL ::: ", newsurl);
    this.setState({loading: true});
    let data = await fetch(newsurl);
    let formatedData = await data.json();
    this.setState({
      articles: formatedData.articles,
      totalResults: formatedData.totalResults,
      loading: false
    });
  }

  
  handlePrevPage = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6d4605d48d53442e8e5a15152db5cbb6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    const newsurl = `${this.createURL()}`;
    this.setState({loading: true});
    let data = await fetch(newsurl);
    let formatedData = await data.json();
    // console.log("Previuos Page :: ",formatedData);
    this.setState({
      page: this.state.page - 1,
      articles: formatedData.articles,
      loading: false
    });
    this.disabledNext = false;
  }

  handleNextPage = async () => {
      // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6d4605d48d53442e8e5a15152db5cbb6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      const newsurl = `${this.createURL()}`;
      this.setState({loading: true});
      let data = await fetch(newsurl);
      let formatedData = await data.json();
      // console.log("Next Page :: ",formatedData);
      this.setState({
        page: this.state.page + 1,
        articles: formatedData.articles,
        loading: false
      });
  }

  render() {

    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-5">NewsMonkey - Top Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row">
              {!this.state.loading && this.state.articles.map((article) => {
                if(article.content !== "[Removed]"){
                  return <div className="col-md-4 mb-3" key={article.url}>
                          <NewsItem 
                            title={article.title?article.title:""} 
                            content={article.content?article.content:""} 
                            url={article.url?article.url:""}
                            date={article.publishedAt.split("T")[0]} 
                            urlToImage={!article.urlToImage?"news_profile.jpg":article.urlToImage} />
                        </div>
                }            
              })}
               
            </div>
        </div>
        <div className="container d-flex justify-content-between mb-15">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News
