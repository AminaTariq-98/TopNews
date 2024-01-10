import React, { Component } from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  constructor(props) {
    super(props);
    console.log("This is my constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.Capitalize(this.props.category)}- NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let pasedData = await data.json()
    this.props.setProgress(60);
    this.setState({
      articles: pasedData.articles,
      totalResults: pasedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    console.log("cdm")
    this.updateNews();
   
  }
 /* handleNexClick = async () => {
    console.log("next")
    this.setState({page: this.state.page + 1})
     this.updateNews();
  }

  handlePreClick = async () => {
    console.log("prev")
    this.setState({page: this.state.page - 1})
     this.updateNews();
  }*/

  fetchMoreData = async() => {
     this.setState({page: this.state.page +1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     let data = await fetch(url);
     let pasedData = await data.json()
     this.setState({
       articles: this.state.articles.concat(pasedData.articles),
       totalResults: pasedData.totalResults
     })
  };


  render() {
    return (
       <>
        <h1 className='text-center' style={{ margin: "35px 0px", marginTop: "90px" }}>NewsMonkey - Top {this.Capitalize(this.props.category)} HeadLines </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ <Spinner />}
          >

          <div className='container'> 
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newitems title={element.title ? element.title : ' '} descripation={element.description ? element.description : ' '} imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      </>
    )
  }
}
