import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'

// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  constructor(){
    super();
    this.state ={
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  // static defaultproptype = {
  //        country: 'in',
  //        pagesize: 5,
  //        category: 'general'
  // }
  // static propType = {
  //        country: PropTypes.string,
  //        pagesize: PropTypes.number,
  //        category: PropTypes.string
  // }
  async updateNews(){
    this.props.setprogress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70b1607c16e84ebea978baa76761495e&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    this.props.setprogress(30)
    let parsedata = await data.json();
    this.setState({articles: parsedata.articles,loading: false})
    this.props.setprogress(100)
  }

  async componentDidMount(){
    this.updateNews();
    
  }
  // handleNext = async ()=>{  
  //   this.setState({page: this.state.page+1})
  // this.updateNews();
  //   }
  
  // handleprev = async ()=>{
    
  //   this.setState({page: this.state.page-1}
  //   )
  //   this.updateNews();
  // }

   fetchMoreData = async() =>{
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70b1607c16e84ebea978baa76761495e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
     this.setState({page: this.state.page+1})
    let data = await fetch(url)
    let parsedata = await data.json();
    this.setState({articles: this.state.articles.concat(parsedata.articles),
    totalResults: parsedata.totalResults,
  loading: false})
  }

  render() {
    return (
      <>
      
        <h2 className='container text-centre my-4'>News monkey top headlines</h2>    
        <Spinner/>    
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="container my-2">
        <div className="row">
          {this.state.articles.map((element) => {
            return(
              <div className="col-md-4" key={element.url}>   
              <Newsitem title = {element.title} description = {element.description} imageurl = {element.urlToImage?element.urlToImage: "https://images.frandroid.com/wp-content/uploads/2022/10/samsung-logo.jpg"} url ={element.url} author ={element.author} publishedAt = {element.publishedAt} name = {element.source.name} />
              
              </div>
            )
          })}
          </div>
          </div>
          </InfiniteScroll>
          
       
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr;previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>next&rarr;</button>
        {/* disabled="this.state.page+1>Math.ceil(this.state.totalResults/20)"  */}
        {/* </div> */} 
        
          </>
         
    )
  }
}
