import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, content, url, date, urlToImage} = this.props;
    return (
      <div>
        <div className="card" style={{height: "35rem"}}>
            <img src={urlToImage} className="card-img-top" alt="..." height={"200px"} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title.split(" ").splice(0, 10).join(' ')}</h5>
                <h5>Date : {date}</h5>
                <p className="card-text">{content}</p>
                <a href={url} rel="noopener noreferrer" target='_blank' className="mt-auto btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;

