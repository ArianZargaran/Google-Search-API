import React, { Component } from 'react';

import Header from './main-header';
import SearcEngine from './search-engine';
import ResultsSection from '../containers/results-section';

import '../styles/Reset.css';
import '../styles/App.css';


export default class App extends Component {
  render(){
    return (
      <div>
        <Header>Gemma SerchEnyín</Header>
        <SearcEngine onSchSubmit={(query) => this.eventSubmit(query)}/>
        <ResultsSection result={this.state}/>
      </div>
  );}

  eventSubmit(query) {
    console.log(query);
  }
}