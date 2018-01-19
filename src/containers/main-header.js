import React, {Component} from 'react';
import { connect } from 'react-redux';

import '../styles/main-header.css';

class Header extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = { 
  //     color: ["#4688F1", "#E7453C", "#F9BB2D", "#4688F1", "#3AA757", "#E7453C"],
  //     current: 0,
  //     }
  // }

  render() {
    const {
      children = "This goes a header",
    } = this.props;

    return (
      <h1 className="gse-main-header" onMouseOver={(event) => this.changeHeaderColor(event)}>{children}</h1>
    );
  }

  changeHeaderColor(ev){
    let newArr = this.props.color.color;
    let currentNum = this.props.color.current;    
    currentNum === newArr.length - 1 ? currentNum = 0 : currentNum++;

    const element = ev.target;
    
    element.style.color = newArr[currentNum];
    this.props.color.current = currentNum;
    // this.setState({
    //   current: currentNum,
    // })
  }
}

function mapStateToProps(state) {
  return {
    color: state.color
  };
}

export default connect(mapStateToProps)(Header);
