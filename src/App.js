 import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

 export default class App extends Component {
  pageSize = 12;
  apiKey= process.env.REACT_APP_NEWS_API

  state={
    progress: 0
  }

  setProgress = (progress)=>{
     this.setState({progress: progress})
  }

   render() {
     return (
     <>
     <Router>
       <Navbar />
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
      />
 
       <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key='us' pageSize= {this.pageSize} country='us' /> </Route>
          <Route exact path="/Home"><News setProgress={this.setProgress} apiKey={this.apiKey} key='general'  pageSize= {this.pageSize} country='us' category= 'general' /> </Route> 
          <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey} key= 'business'  pageSize= {this.pageSize} country='us' category= 'business' /></Route> 
          <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment'  pageSize= {this.pageSize} country='us' category= 'entertainment' /></Route> 
          <Route exact path="/General"> <News setProgress={this.setProgress} apiKey={this.apiKey} key='general'  pageSize= {this.pageSize} country='us' category= 'general' /></Route>
          <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey} key='health'  pageSize= {this.pageSize} country='us' category= 'health' /></Route> 
          <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize= {this.pageSize} country='us' category= 'science' /> </Route>
          <Route exact path="/sport"><News setProgress={this.setProgress} apiKey={this.apiKey} key='sport'  pageSize= {this.pageSize} country='us' category= 'sport' /></Route>  
          <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize= {this.pageSize} country='us' category= 'technology' /></Route>  
        </Switch>
       </Router>
       </>
     )
   }
 }
 