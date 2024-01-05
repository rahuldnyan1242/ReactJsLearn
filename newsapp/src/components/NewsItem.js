import React from 'react'

const NewsItem = (props) => {
    let {title, content, url, date, urlToImage, author, source} = props;
    return (
      <div>
        <div className="card" style={{height: "35rem"}}>
        <span className="position-absolute translate-middle badge rounded-pill bg-info" style={{zindex:'1', left: "50%", top: "2%"}}>{source}</span>
            <img src={urlToImage} className="card-img-top" alt="..." height={"200px"} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title.split(" ").splice(0, 10).join(' ')}</h5>
                <p className="card-text">{content}</p>
                <small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
                <a href={url} rel="noopener noreferrer" target='_blank' className="mt-auto btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;

