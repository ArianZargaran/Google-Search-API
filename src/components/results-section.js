import React, {Component} from 'react';
import SearchResult from './search-result';

import '../styles/results-section.css';

export default class ResultsSection extends Component {
  constructor(props) {
    super(props);

    this.state = props.result
  }
  render(){
    return (
      <section className="gse-results-section">
        <ol>
          {this.state.result.map((result, idx) => (<SearchResult key={idx}>{result}</ SearchResult>))}
        </ol>
      </section>
  );}
}