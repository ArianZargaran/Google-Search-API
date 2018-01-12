import React, {Component} from 'react';
import SearchEngineMicro from './search-engine_micro';

import '../styles/search-engine_form.css';

export default class searchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render(){
  const {
    term,
  } = this.state;

  const {
      onSearchSubmit = () => { },
    } = this.props;

    return (
      <form action="#" className="gse-search-engine_form">  
      <input
        type="text" 
        value={term}
        onChange={(event) => {this.onInputChange(event.target.value)}}
        className="gse-search-engine_field"
        placeholder="Search..." 
        autoFocus
      />
      <SearchEngineMicro />
      <input onClick={() => {onSearchSubmit(term)}} className="gse-search-engine_submit" type='submit' value=' ' />
    </form>
  );}

  onInputChange(query) {
    this.setState({
      term: query});
  }
}