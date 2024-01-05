import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // disabledNext = false;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async () =>  {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);    
    let data = await fetch(url);
    props.setProgress(30);
    let formatedData = await data.json();
    props.setProgress(70);
    setArticles(formatedData.articles);
    setTotalResults(formatedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  },[])

  // const componentDidMount = () => {
  //   updateNews();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d4605d48d53442e8e5a15152db5cbb6&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let formatedData = await data.json();
    setArticles(articles.concat(formatedData.articles));
    setTotalResults(formatedData.totalResults);
    // setLoading(false);
  };

    return (
      <>
        <h1 className="text-center" style={{margin: "5rem 0 2rem 0"}}>{capitalizeFirstLetter(props.category)} Top Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {articles.map((article) => {
                // if (article.content !== "[Removed]") {
                  return <div className="col-md-4 mb-3" key={article.url}>
                    <NewsItem
                      title={article.title ? article.title : ""}
                      content={article.content ? article.content : ""}
                      url={article.url ? article.url : ""}
                      date={article.publishedAt.split("T")[0]}
                      urlToImage={!article.urlToImage ? "news_profile.jpg" : article.urlToImage}
                      author={article.author}
                      source={article.source.name} />
                  </div>
                // }
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between mb-15">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevPage}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextPage}>Next &rarr;</button>
        </div> */}
      </>
    )
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News
