import React, { Component } from 'react';
import SearchEngineField from './search-engine-field';
import SearchEngineMicro from './search-engine-micro';
import '../styles/search-engine.css';

export default class searchEngine extends Component {
  constructor(props) {
    super(props)

    this.state= {}
  }

  render(){
    return (
    <div className='gse-search-engine-wrapper'>  
      <div className="gse-search-engine">  
        <SearchEngineField onSearchTermChange={(term)=> {console.log(term)}}/ >
        <SearchEngineMicro />
        <input className="gse-search-engine-submit" type='submit' value=' '/>
      </div>
    </div>    
    );
  }
}