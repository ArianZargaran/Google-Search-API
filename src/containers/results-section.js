import React, { Component } from "react";
import { connect } from "react-redux";


import SearchResult from "../components/search-result";

import "../styles/results-section.css";

class ResultsSection extends Component {
  renderList() {
    const { results = {} } = this.props;

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
