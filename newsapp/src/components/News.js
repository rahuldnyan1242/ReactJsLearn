import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component { 
  
    articles = [
      {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "South Africa Tests Perfect Opportunity For Skipper Rohit Sharma To Heal World Cup Pain - NDTV Sports",
        "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
        "url": "https://www.bbc.com/news/world-us-canada-39324587",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
        "publishedAt": "2023-12-25T06:23:56Z",
        "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Shruti Tomar",
        "title": "Madhya Pradesh: CM Mohan Yadav to expand Cabinet, induct 28 ministers today - Hindustan Times",
        "description": "A BJP leader, speaking on condition of anonymity, said Yadav’s Cabinet will have new faces and senior leaders, including members of Parliament, who successfully contested the assembly elections | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/madhya-pradesh-cm-mohan-yadav-to-expand-cabinet-induct-28-ministers-today-101703482598314.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/25/1600x900/Madhya-Pradesh-chief-minister-Mohan-Yadav---PTI-_1703482592554.jpg",
        "publishedAt": "2023-12-25T05:36:37Z",
        "content": "As many as 28 ministers were likely to be sworn in as part of the first expansion of Madhya Pradesh chief minister Mohan Yadavs council of ministers on Monday, days after the Bharatiya Janata Party (… [+1722 chars]"
    },
    {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "13-Year-Old Palestinian Boy Killed In Israeli Strike Had A YouTube Dream - NDTV",
      "description": "After his death, people have helped to achieve his dream of reaching 1 million subscribers on YouTube.",
      "url": "https://www.ndtv.com/world-news/awni-eldous-13-year-old-palestinian-boy-found-his-youtube-fame-after-death-4738077",
      "urlToImage": "https://c.ndtvimg.com/2023-12/og14u2eg_awni-eldous_625x300_25_December_23.jpeg?ver-20231203.06",
      "publishedAt": "2023-12-25T05:24:12Z",
      "content": "Awni's family home was hit in an Israeli strike on October 7.\r\n13-year-old Awni Eldous was trying to build a following on his YouTube channel before he was killed in an Israeli air attack in Gaza. Af… [+2555 chars]"
    },
    {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "ET CIO",
      "title": "Sam Altman's Humane to ship ChatGPT-powered Ai Pin starting March 2024 - ETCIO",
      "description": "With Ai Pin, the user will be able to communicate with an AI chatbot through voice and laser ink technology, unlike conventional consumer tech products.",
      "url": "https://cio.economictimes.indiatimes.com/news/artificial-intelligence/sam-altmans-humane-to-ship-chatgpt-powered-ai-pin-starting-march-2024/106261925",
      "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-106261925,imgsize-91684,width-1200,height=765,overlay-etcio/artificial-intelligence/sam-altmans-humane-to-ship-chatgpt-powered-ai-pin-starting-march-2024.jpg",
      "publishedAt": "2023-12-25T05:21:16Z",
      "content": "Sam Altman-backed startup Humane has announced that its ChatGPT-powered Ai Pin will start shipping in March 2024. We are thrilled to announce that Ai Pin will start shipping in March 2024. All of us… [+1051 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Timesofindia.com"
        },
        "author": "Kritika Pushkarna",
        "title": "10 reasons why pecans should be a part of your daily diet - Recipes",
        "description": "With a buttery taste and crunchy texture, pecans aren't just a delightful addition to your favourite recipes, but also offer a lot of health benefits that make them a compelling choice for daily consumption. Here’s why you must have them daily.",
        "url": "https://recipes.timesofindia.com/web-stories/10-reasons-why-pecans-should-be-a-part-of-your-daily-diet/photostory/106261037.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-106261060,imgsize-47024,width-900,height-1200,resizemode-6/106261060.jpg",
        "publishedAt": "2023-12-25T05:30:00Z",
        "content": "Pecans are a nutrient powerhouse, containing essential vitamins and minerals such as vitamin E, potassium, magnesium, and zinc, contributing to overall health and vitality."
    }
  ]

  constructor(){
    super();
    this.state = {
      articles : this.articles
    }
  }
  render() {

    return (
      <div>
        <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
              {this.state.articles.map((article) => {
                return <div className="col-md-4 mb-3" key={article.url}>
                          <NewsItem title={article.title} content={article.content} url={article.url} urlToImage={article.urlToImage} />
                        </div>
              })}
               
            </div>
        </div>
      </div>
    )
  }
}

export default News
