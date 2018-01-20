import React, { Component } from "react";
import { connect } from "react-redux";


import SearchResult from "../components/search-result";

import "../styles/results-section.css";

class ResultsSection extends Component {
  renderList() {
    const { results = {} } = this.props;

    if (!results) { return (
      <h1 className='search-result'>
        <p className='search-result_title'>Start Searching!</p>
      </h1>
    )}

    return results.map((res, idx) => (
      <SearchResult key={idx}>{res}</SearchResult>
    ));
  }

  render() {
    return (
      <section className="gse-results-section">
        <ul>{this.renderList()}</ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  };
}



export default connect(mapStateToProps)(ResultsSection);
