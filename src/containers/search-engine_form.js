import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQuery } from '../actions/index';
import { bindActionCreators } from 'redux';


import SearchEngineMicro from '../components/search-engine_micro';

import '../styles/search-engine_form.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render(){
  const {
    term,
  } = this.state;

    return (
      <form action="#" className="gse-search-engine_form">  
        <input
          type="text" 
          value={term}
          onChange={ (event) => this.onInputChange(event.target.value) } 
          className="gse-search-engine_field"
          placeholder="Search..." 
          autoFocus
        />
        <SearchEngineMicro />
        <input 
          onClick={() => this.props.searchQuery(this.state.term) } 
          className="gse-search-engine_submit" 
          type='submit' 
          value=' ' 
        />
      </form>
  );}

  onInputChange(term) {
    this.setState({
      term: term
    });
  }
}

function mapStateToProps(state){
  return {
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchQuery: searchQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);