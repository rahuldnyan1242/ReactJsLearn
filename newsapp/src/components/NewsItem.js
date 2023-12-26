import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, content, url, urlToImage} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={urlToImage} className="card-img-top" alt="..." height={"200px"} />
            <div className="card-body">
                <h5 className="card-title">{title.split(' ').splice(0, 10).join(' ')}...</h5>
                <p className="card-text">{content.split(' ').splice(0, 40).join(' ')}...</p>
                <a href={url} rel='noopener' target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;

