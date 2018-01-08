import React from 'react';

import '../styles/search-result.css';

const searchResult = ({children}) => {

  return (
    <li className='search-result'>
      <h1 className='search-result-title'>{children.title}</h1>
      <a className='search-result-url'>{children.url}</a>
      <p className='search-result-description'>{children.description}</p>
      <p className='search-result-emotion'>{children.emotion}</p>
    </li>
  );
}

export default searchResult;
