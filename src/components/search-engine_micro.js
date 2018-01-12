import React, {Component} from 'react';
import '../styles/search-engine_micro.css';

export default class SearchEngineMicro extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <a href="##" className="gse-search-engine_micro">
        <div className="gse-search-engine_micro_msg">
          <div className="gse-search-engine_micro_arrow"></div>
          <p className="gse-search-engine_micro_txt">Search <br/>by voice</p>
        </div>
      </a>
    );
  }
}