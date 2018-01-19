import React, { Component } from 'react';
import SearchEngineForm from '../containers/search-engine_form';
import '../styles/search-engine.css';

export default class searchEngine extends Component {
  render(){
    return (
    <div className='gse-search-engine_wrapper'>  
      <div className="gse-search-engine">  
        <SearchEngineForm/>
      </div>
    </div>    
    );
  }
}
