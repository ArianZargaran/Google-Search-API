import React from 'react';
import SearchResult from './search-result';

import '../styles/results-section.css';

const ResultsSection = ({result}) => {
    return (
      <section className="gse-results-section">
        <ul>
          {{result}.result.result.map((res, idx) => (<SearchResult key={idx}>{res}</ SearchResult>))}
        </ul>
      </section>
  );
}

export default ResultsSection;
