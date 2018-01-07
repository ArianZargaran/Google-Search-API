import React, {Component} from 'react';


export default class searchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render(){
  const {
    term,
  } = this.state;


    return (
      <input
        type="text" 
        value={term} 
        className="gse-search-engine_field"
        onChange={event => this.onInputChange(event.target.value)} 
        placeholder="Search..." 
        autoFocus
      />
  );}

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}