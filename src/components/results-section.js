import React from 'react';
import SearchResult from './search-result';

import '../styles/results-section.css';

const ResultsSection = ({result}) => {
    return (
      <section className="gse-results-section">
        <ol>
          {{result}.result.result.map((res, idx) => (<SearchResult key={idx}>{res}</ SearchResult>))}
        </ol>
      </section>
  );
}

export default ResultsSection;
