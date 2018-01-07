import React, {Component} from 'react';
import '../styles/search-engine-micro.css';

export default class SearchEngineMicro extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <a href="##" className="gse-search-engine-micro">
        <div className="gse-search-engine-micro-msg">
          <div className="gse-search-engine-micro-arrow"></div>
          <p className="gse-search-engine-micro-txt">Search <br/>by voice</p>
        </div>
      </a>
    );
  }
}