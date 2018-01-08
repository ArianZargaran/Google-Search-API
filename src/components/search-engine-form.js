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

  const {
      onSearchSumbmit = () => { },
    } = this.props;

    return (
    <form>  
      <input
        type="text" 
        value={term} 
        className="gse-search-engine_field"
        onChange={event => this.onInputChange(event.target.value)} 
        placeholder="Search..." 
        autoFocus
      />
      <input onSubmit={(event) => { onSearchSumbmit(this.state.term) }} className="gse-search-engine-submit" type='submit' value=' ' />
    </form>
  );}

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}