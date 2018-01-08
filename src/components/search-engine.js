import React, { Component } from 'react';
import SearchEngineForm from './search-engine-form';
import SearchEngineMicro from './search-engine-micro';
import '../styles/search-engine.css';

export default class searchEngine extends Component {
  constructor(props) {
    super(props)

    this.state= {
      term: '',
    }
  }

  render(){
    return (
    <div className='gse-search-engine-wrapper'>  
      <div className="gse-search-engine">  
        <SearchEngineForm onSearchTermChange={(term)=> this.onTermChange(term)}/ >
        <SearchEngineMicro />
      </div>
    </div>    
    );
  }

  onTermChange(term){
    this.setState({
      term
    })
  }
}