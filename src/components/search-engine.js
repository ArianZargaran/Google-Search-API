import React, { Component } from 'react';
import SearchEngineForm from './search-engine-form';
import '../styles/search-engine.css';

export default class searchEngine extends Component {
  constructor(props) {
    super(props)

    this.state= {
    }
  }

  render(){

    const {
      onSchSubmit
    } = this.props;

    return (
    <div className='gse-search-engine-wrapper'>  
      <div className="gse-search-engine">  
          <SearchEngineForm onSearchSubmit={(term) => { onSchSubmit(term)}}/ >
      </div>
    </div>    
    );
  }
}
